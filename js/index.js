$(function () {
  const config = {
	apiKey: "AIzaSyDY7PK-uuiHwruY262B0W5C8SgtgqzSeV4",
    authDomain: "restaurant-5e056.firebaseapp.com",
    databaseURL: "https://restaurant-5e056.firebaseio.com",  
    storageBucket: "restaurant-5e056.appspot.com",
  };
  firebase.initializeApp(config);
  $('.js-firebase-form').on('submit', event => {
    event.preventDefault();
    const email = 'ceva@gmail.com';
    const password = 'cevaceva';
    const item = $('#firebase-input').val();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        const database = firebase.database();
        database.ref('list').push(item);
        $('#firebase-input').val('');
      })
      .catch(error => {
        console.log(error.message);
      });
  });
});