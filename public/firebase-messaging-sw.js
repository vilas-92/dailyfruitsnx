importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js")
const firebaseConfig = {
  apiKey: "AIzaSyA1esZH2J8THYbQMARRAuYPme13qMwac_w",
  authDomain: "dailyfruits-55682.firebaseapp.com",
  projectId: "dailyfruits-55682",
  storageBucket: "dailyfruits-55682.appspot.com",
  messagingSenderId: "853343651135",
  appId: "1:853343651135:web:c644c2f65b9823d9923f8a",
}
firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
  //   const promiseChain = clients
  //        .matchAll({
  //             type: "window",
  //             includeUncontrolled: true,
  //        })
  //        .then((windowClients) => {
  //             for (let i = 0; i < windowClients.length; i++) {
  //                  const windowClient = windowClients[i];
  //                  windowClient.postMessage(payload);
  //             }
  //        })
  //        .then(() => {
  //             return registration.showNotification("my notification title");
  //        });
  //   return promiseChain;
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
  }
  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener("notificationclick", function (event) {
  console.log(event)
})
