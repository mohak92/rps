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

  $(document).ready(function () {
    
  });