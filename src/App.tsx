/* eslint-disable */
import React,{useEffect, useState} from "react"
import { observer } from "mobx-react"
import * as LibraryComponents from "@df/library/components"
import Contexts from "@df/library/stores"
import { Provider } from "react-redux"
import ReduxToastr from "react-redux-toastr"
import store from "./redux/store/index"
import Routes from "./routes/Routes"
import { getToken, onMessageListener } from "./firebase"
import {Toast} from 'react-bootstrap';

const App = observer(() => {
  const rootStore = React.useContext(Contexts.rootStore)
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: ''});
   const loader = async () => {
    await getToken().then((webPushTokenFcm)=>{
      rootStore.userStore.updateLoginInput({
        ...rootStore.userStore.loginInput,
        webPushTokenFcm
      })
     });
      onMessageListener().then(payload => {
        setShow(true);
        setNotification({title: payload.notification.title, body: payload.notification.body})
        console.log(payload);
        rootStore.orderStore.fetchOrderList()
      }).catch(err => console.log('failed: ', err));
  };
  
  useEffect(()=>{
    loader();
  },[])
  
 
  return (
    <>
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide animation style={{
          position: 'absolute',
          top: 100,
          right: 20,
          minWidth: 400,
          zIndex:1
        }}>
          <Toast.Header>
            <strong className="mr-auto">{notification.title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{notification.body}</Toast.Body>
        </Toast>
      <Provider store={store}>
        <Routes />
        <ReduxToastr
          timeOut={5000}
          newestOnTop={true}
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </Provider>
      <LibraryComponents.ToastsContainer
        position={LibraryComponents.ToastsContainerPosition.BOTTOM_RIGHT}
        store={LibraryComponents.ToastsStore}
        className="h-20"
      />
    </>
  )
})

export default App
