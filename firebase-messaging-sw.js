// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAEqHaDc6d4llRXm3ys5UxHtDLj6Zjh96I",
  authDomain: "fluxstore-inspireui.firebaseapp.com",
  databaseURL: "https://fluxstore-inspireui.firebaseio.com",
  projectId: "fluxstore-inspireui",
  storageBucket: "fluxstore-inspireui.appspot.com",
  messagingSenderId: "412823237422",
  appId: "1:412823237422:web:4148f6c384e9a676fb40bf",
  measurementId: "G-KFEWTYBBBF"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});