var firebaseConfig = {
  apiKey: "AIzaSyAmUcJfQdZD0VKnYwiDp312a9ldRrqDh0E",
  authDomain: "rock-paper-scissor-by-mohak.firebaseapp.com",
  databaseURL: "https://rock-paper-scissor-by-mohak.firebaseio.com",
  projectId: "rock-paper-scissor-by-mohak",
  storageBucket: "rock-paper-scissor-by-mohak.appspot.com",
  messagingSenderId: "972738822273",
  appId: "1:972738822273:web:bbb7c7d7abfa5206a10d80"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var usernameInput = document.querySelector("#username");
var textInput = document.querySelector("#text");
var postButton = document.querySelector("#post");

postButton.addEventListener("click", function(){
  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  firebase.set(msgUser + " says: " + msgText);
  textInput.value = "";
});

function showFeedback(text) {
    const feedback = document.querySelector(".feedback");
    feedback.classList.add("showItem");
    feedback.innerHTML = `<p>${text}</p>`;
    setTimeout(() => {
      feedback.classList.remove("showItem");
    }, 3000);
  }

  $('#rock').click(function(){
    $(".img-fluid").attr('src',"assets/images/rock.jpg");
  });

  $('#paper').click(function(){
    $(".img-fluid").attr('src',"assets/images/paper.jpg");
  });

  $('#scissor').click(function(){
    $(".img-fluid").attr('src',"assets/images/scissor.jpg");
  });

  $('#reset').click(function(){
    $(".img-fluid").attr('src',"assets/images/question.png");
  });

