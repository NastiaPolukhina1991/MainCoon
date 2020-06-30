var question = document.querySelectorAll(".questions-faq");

if (question) {
  for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
      this.classList.toggle("active-btn");
      this.nextElementSibling.classList.toggle("questions-answer-show");
    })
  }
};