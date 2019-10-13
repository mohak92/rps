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

var database = firebase.database();

var usernameInput = document.querySelector("#username");
var textInput = document.querySelector("#text");
var postButton = document.querySelector("#post");

postButton.addEventListener("click", function(){
  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  database.ref('chat').push(Chat = {username:msgUser, text:msgText});
  textInput.value = "";
});

var beginListening = function(){
  database.ref('chat').on('child_added', function (snapshot) {
    var msg = snapshot.val();
    var msgUsernameElement = document.createElement("b");
    msgUsernameElement.textContent = msg.username;
    var msgTextElement = document.createElement("p");
    msgTextElement.textContent = msg.text;
    var msgElement = document.createElement("div");
    msgElement.appendChild(msgUsernameElement);
    msgElement.appendChild(msgTextElement);
    msgElement.className = "msg";
    document.getElementById("results").appendChild(msgElement);
  });
}

beginListening();

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
    database.ref('rps').push({move:"rock"});
  });

  $('#paper').click(function(){
    $(".img-fluid").attr('src',"assets/images/paper.jpg");
    database.ref('rps').push({move:"paper"});
  });

  $('#scissor').click(function(){
    $(".img-fluid").attr('src',"assets/images/scissor.jpg");
    database.ref('rps').push({move:"scissor"});
  });

  $('#reset').click(function(){
    $(".img-fluid").attr('src',"assets/images/question.png");
    
  });

