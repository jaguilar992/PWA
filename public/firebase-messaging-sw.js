importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDTKvOn4pPEsNC5It9jpSbtBEO6SIiPPhM",
	authDomain: "hello-world-15ba2.firebaseapp.com ",
	databaseURL: "https://hello-world-15ba2.firebaseio.com",
	projectId: "hello-world-15ba2",
	storageBucket: "hello-world-15ba2.appspot.com",
	messagingSenderId: "430739082617"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});
