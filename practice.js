
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ6dYbsQbIvWZHAJ_sbnL8uMR_kzsj448",
    authDomain: "kiwtter-4fc53.firebaseapp.com",
    projectId: "kiwtter-4fc53",
    storageBucket: "kiwtter-4fc53.appspot.com",
    messagingSenderId: "412495957510",
    appId: "1:412495957510:web:7d6223be61a1da53eafd87"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  function adduser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding_user"
      })
  }