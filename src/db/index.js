import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

import firebase from 'firebase/app';

firebase.initializeApp({
	apiKey: 'AIzaSyAsQZz3vAHs1u-MsxGwmm9-xD7A8tsf1AI',
	authDomain: 'pai-taskbook.firebaseapp.com',
	projectId: 'pai-taskbook',
	storageBucket: 'pai-taskbook.appspot.com',
	messagingSenderId: '45392321882',
	appId: '1:45392321882:web:318f30b44714b0b2e56763',
	measurementId: 'G-YNKELMT36C',
});

export default firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
