$(function () {
  const config = {
    apiKey: "AIzaSyCxN9WkUXTzmYmobSEa8KHHp2vhB91tESY",
    authDomain: "yasser-c336f.firebaseapp.com",
    databaseURL: "https://yasser-c336f.firebaseio.com",
    projectId: "yasser-c336f",
    storageBucket: "yasser-c336f.appspot.com",
    messagingSenderId: "746279433249"
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
