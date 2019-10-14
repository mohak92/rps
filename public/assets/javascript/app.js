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
var usernameInput1 = document.querySelector("#username1");
var usernameInput2 = document.querySelector("#username2");
var textInput = document.querySelector("#text");
var postButton = document.querySelector("#post");
var player1Move;
var player1Move2;
var user1;
var user2;

postButton.addEventListener("click", function () {
  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  if (msgUser === "") {
    showChatFeedback("Enter your name to chat");
  } else if (msgText === "") {
    showChatFeedback("Message cannot be empty");
  } else {
    database.ref('chat').push(Chat = { username: msgUser, text: msgText });
    textInput.value = "";
  }
});

var beginListening = function () {
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

$('#clear-chat').click(function () {
  $("#results").empty();
  database.ref().child('chat').remove();
});

function showChatFeedback(text) {
  const feedback = document.querySelector(".feedback2");
  feedback.classList.add("showItem");
  feedback.innerHTML = `<p>${text}</p>`;
  setTimeout(() => {
    feedback.classList.remove("showItem");
  }, 3000);
}

function showGameFeedback(text) {
  const feedback = document.querySelector(".feedback");
  feedback.classList.add("showItem");
  feedback.innerHTML = `<p>${text}</p>`;
  setTimeout(() => {
    feedback.classList.remove("showItem");
  }, 3000);
}

$('#rock').click(function () {
  $("#player1").attr('src', "assets/images/rock.jpg");
  user1 = usernameInput1.value;
  if (user1 == "") {
    showGameFeedback("Player 1 enter your name");
  } else {
    database.ref('rps').set({ username: user1, move: "rock" });
    database.ref('rps').once("value", function (snapshot) {

      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().move);
      player1Move = snapshot.val().move;
      //console.log(snapshot.val().username);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
});

$('#paper').click(function () {
  $("#player1").attr('src', "assets/images/paper.jpg");
  user1 = usernameInput1.value;
  if (user1 == "") {
    showGameFeedback("Player 1 enter your name");
  } else {
    database.ref('rps').set({ username: user1, move: "paper" });
    database.ref('rps').once("value", function (snapshot) {

      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().move);
      player1Move = snapshot.val().move;
      //console.log(snapshot.val().username);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
});

$('#scissor').click(function () {
  $("#player1").attr('src', "assets/images/scissor.jpg");
  user1 = usernameInput1.value;
  if (user1 == "") {
    showGameFeedback("Player 1 enter your name");
  } else {
    database.ref('rps').set({ username: user1, move: "scissor" });
    database.ref('rps').once("value", function (snapshot) {

      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().move);
      player1Move = snapshot.val().move;
      //console.log(snapshot.val().username);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
});

$('#rock2').click(function () {
  $("#player2").attr('src', "assets/images/rock.jpg");
  user2 = usernameInput2.value;
  if (user2 == "") {
    showGameFeedback("Player 2 enter your name");
  } else {
    database.ref('rps2').set({ username: user2, move: "rock" });
    database.ref('rps2').once("value", function (snapshot) {

      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().move);
      player2Move = snapshot.val().move;
      //console.log(snapshot.val().username);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
});

$('#paper2').click(function () {
  $("#player2").attr('src', "assets/images/paper.jpg");
  user2 = usernameInput2.value;
  if (user2 == "") {
    showGameFeedback("Player 2 enter your name");
  } else {
    database.ref('rps2').set({ username: user2, move: "paper" });
    database.ref('rps2').once("value", function (snapshot) {

      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().move);
      player2Move = snapshot.val().move;
      //console.log(snapshot.val().username);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
});

$('#scissor2').click(function () {
  $("#player2").attr('src', "assets/images/scissor.jpg");
  user2 = usernameInput2.value;
  if (user2 == "") {
    showGameFeedback("Player 2 enter your name");
  } else {
    database.ref('rps2').set({ username: user2, move: "scissor" });
    database.ref('rps2').once("value", function (snapshot) {

      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().move);
      player2Move = snapshot.val().move;
      //console.log(snapshot.val().username);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
});

$('#reset').click(function () {
  database.ref().child('rps').remove();
  database.ref().child('rps2').remove();
});

$('#result').click(function () {
  database.ref('rps').on('value', async function(snapshot) {
    player1Move =  await snapshot.val().move;
    user1 = await snapshot.val().username;
    // ...
  });
  console.log("after click p1 " + player1Move);
  database.ref('rps2').on('value', async function(snapshot) {
    player2Move =  await snapshot.val().move;
    user2 = await snapshot.val().username;
    // ...
  });
  console.log("after click p2 " + player2Move);
  if (player1Move == undefined || user1 == undefined) {
    showGameFeedback("Player 1 did not make a move or click result again");
  } else if (player2Move == undefined || user1 == undefined) {
    showGameFeedback("Player 2 did not make a move or click result again");
  } else {
    console.log("Inside Result " + user1 + " " + player1Move);
    console.log("Inside Result " + user2 + " " + player2Move);
    if((player1Move == "rock" && player2Move == "scissor")
    || (player1Move == "paper" && player2Move == "rock")
    || (player1Move == "scissor" && player2Move == "paper")){
      showGameFeedback(user1 + " selected " + player1Move + " " + user2 + " selected " + player2Move + " " + user1 + " won the game");
    } else if ((player1Move == "scissor" && player2Move == "rock")
    || (player1Move == "rock" && player2Move == "paper")
    || (player1Move == "paper" && player2Move == "scissor")) {
      showGameFeedback(user1 + " selected " + player1Move + " " + user2 + " selected " + player2Move + " " + user2 + " won the game");
    }else if((player1Move == "scissor" && player2Move == "scissor")
    || (player1Move == "rock" && player2Move == "rock")
    || (player1Move == "paper" && player2Move == "paper")) {
      showGameFeedback(user1 + " selected " + player1Move + " " + user2 + " selected " + player2Move + " " + "It's a draw");
    }
  }
});
