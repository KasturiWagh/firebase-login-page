const firebaseConfig = {
    apiKey: "<your-api-key>",
    authDomain: "<your-auth-domain>",
    projectId: "<your-project-Id>",
    storageBucket: "<your-storage-bucket>",
    messagingSenderId: "<your-messaging-sender-Id>",
    appId: "<your-app-Id>"
    };



    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
