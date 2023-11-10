// Define the questions and answers
const quizQuestions = [
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correctAnswer: "Jupiter",
      funnyResponse: "Correct! You've earned a star sticker 🌟",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Mercury", "Earth"],
      correctAnswer: "Mars",
      funnyResponse: "You've got it! You're out of this world! 🚀",
    },
    {
      question: "What is a group of stars forming a recognizable pattern called?",
      options: ["Asterism", "Constellation", "Galaxy", "Cluster"],
      correctAnswer: "Constellation",
      funnyResponse: "Bingo! You're a starry-eyed expert! ✨",
    },
    {
      question: "Which planet has the most moons in our solar system?",
      options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
      correctAnswer: "Jupiter",
      funnyResponse: "Spot on! You're a moon master! 🌕",
    }
];


// Function to start the quiz
function startQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";


  // Display each question
  quizQuestions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
      <h3>Question ${index + 1}:</h3>
      <p>${question.question}</p>
      <ul>
        ${question.options.map(
          (option) =>
            `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`
        ).join('')}
      </ul>
    `;
    quizContainer.appendChild(questionElement);
  });


  // Add submit button
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit Answers";
  submitButton.addEventListener("click", submitQuiz);
  quizContainer.appendChild(submitButton);
}



// Function to submit the quiz and display results
function submitQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  const selectedOptions = quizQuestions.map((question, index) => {
    const selectedOption = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    return selectedOption ? selectedOption.value : null;
  });


  let score = 0;


  // Clear previous responses
  document.querySelectorAll(".response").forEach((response) => {
    response.remove();
  });


  // Display funny responses
  selectedOptions.forEach((selectedOption, index) => {
    const question = quizQuestions[index];
    const responseElement = document.createElement("div");
    responseElement.classList.add("response");


    if (selectedOption === question.correctAnswer) {
      score++;
      responseElement.innerText = question.funnyResponse;
    } else {
      responseElement.innerText = "Oops! That's not quite right.";
    }


    quizContainer.children[index].appendChild(responseElement);
  });


  // Clear previous score
  const previousScore = document.querySelector(".score");
  if (previousScore) {
    previousScore.remove();
  }


  // Display final score
  const scoreElement = document.createElement("div");
  scoreElement.classList.add("score");
  scoreElement.innerText = `You got ${score} out of ${quizQuestions.length} questions right!`;
  quizContainer.appendChild(scoreElement);
}


// Start the quiz
startQuiz();
