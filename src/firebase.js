import firebase from "firebase/app"
import "firebase/messaging"
var firebaseConfig = {
  apiKey: "AIzaSyA1esZH2J8THYbQMARRAuYPme13qMwac_w",
  authDomain: "dailyfruits-55682.firebaseapp.com",
  databaseURL: "https://dailyfruits-55682.firebaseio.com",
  projectId: "dailyfruits-55682",
  storageBucket: "dailyfruits-55682.appspot.com",
  messagingSenderId: "853343651135",
  appId: "1:853343651135:web:c644c2f65b9823d9923f8a",
  measurementId: "G-Z8SLGKBCGV",
}
firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
export const getToken = () =>
  new Promise((resolve, reject) => {
    try {
      messaging
        .getToken({
          vapidKey:
            "BBhIjIuDpX_myMPmgANsa-lT0USJCaSa2SQLuAYZfx2SPSK8oMjys56rWTOI9XXXYIfl9Z5uDyJ-PzqxK_AAxk0",
        })
        .then((currentToken) => {
          if (currentToken) {
            console.log("current token for client: ", currentToken)
            resolve(currentToken)
            return currentToken
          } else {
            alert("Please enable notificaiton permission")
            return undefined
            //console.log('No registration token available. Request permission to generate one.');
            // shows on the UI that permission is required
          }
        })
        .catch((err) => {
          alert("Please enable notificaiton permission")
          console.log("An error occurred while retrieving token. ", err)
          // catch error while creating client token
        })
    } catch (error) {
      reject(error)
    }
  })

export const onMessageListener = () =>
  new Promise((resolve) => {
    firebase.messaging().onMessage((payload) => {
      console.log({ payload })
      resolve(payload)
    })
  })
