## 
- https://console.firebase.google.com/
- Click Add Project
- Continue..
- Select an account
- Continue..
- Click on ```</>``` Web
- Next
app name: angularfirebase


### Copy config
```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvHLiIGkQWFN26dZl2-rYcpAAljFFb8Co",
  authDomain: "ngfirebase-ee485.firebaseapp.com",
  projectId: "ngfirebase-ee485",
  storageBucket: "ngfirebase-ee485.appspot.com",
  messagingSenderId: "1020830912308",
  appId: "1:1020830912308:web:41f426e2f5724d2ede5f61",
  measurementId: "G-9YK3HW076T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```











## npm install -g firebase-tools

- Select ```Firestore Database``` from sidebar
- Click on ```Create database```

- Database 
- https://console.firebase.google.com/project/```ngfirebase-ee485```/firestore/data/~2F






## Create Angualr App
- ```ng new ng-firebase```



## Installing and Adding Firebase 
```npm install --save firebase @angular/fire```