var myFirebase = new myFirebase("https://rock-paper-scissor-by-mohak.firebaseio.com");
var usernameInput = document.querySelector("#username");
var textInput = document.querySelector("#text");
var postButton = document.querySelector("#post");

postButton.addEventListener("click", function(){
  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  myFirebase.set(msgUser + " says: " + msgText);
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

