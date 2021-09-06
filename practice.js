const firebaseConfig = {
    apiKey: "AIzaSyCM8v9jZyRwN7aG98VWnvrptYT1yaHR9_A",
    authDomain: "classtest-77b93.firebaseapp.com",
    databaseURL: "https://classtest-77b93-default-rtdb.firebaseio.com",
    projectId: "classtest-77b93",
    storageBucket: "classtest-77b93.appspot.com",
    messagingSenderId: "884808284840",
    appId: "1:884808284840:web:1fff9dd780a552e37b609d",
    measurementId: "G-M9X6MQ8DFN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser()
  {
      user_name =document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });      
  }
