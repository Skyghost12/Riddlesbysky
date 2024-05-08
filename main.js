const questions = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
      },
      
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
      },
      
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Mark Twain"],
        answer: "Harper Lee"
      },
      
      {
             question: "What goes up and down abut doesn't move? ",
        options: ["Clowds", "The road", "Water", "The winds"],
        answer: "The road"
      },
      
      {
             question: " What occurs once in a minute, twice in a moment and never in a thousand years?",
        options: ["Getting rich", "Having a baby", "The letter M", "Life"],
        answer: "The letter M"
      },
      
      {
          question: "What language do people speak without saying a word out loud? ",
        options: ["Pointing fingers.", "Gesturing", "Making a face. ", "Jumping "],
        answer: "Gesturing"
      },
      
      {
          question: "I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I? ",
        options: ["Fire", "sweet", "arch", "Sun"],
        answer: "Fire"
      },
      
      {
          question: "What is easy to get into but hard to get out of?",
        options: ["Airplane", "convenant", "Trouble", "Dream land"],
        answer: "Trouble"
      },
      
      {
          question: "You cannot keep me until you have given me. What am I?",
        options: ["Love", "candy ", "money", "My word"],
        answer: "My word"
      },
      
      {
          question: "What do you answer even though it never asks you questions?",
        options: ["Phone call", "Exam questions", "Echo", "Door Bell"],
        answer: "Door Bell"
      },
      
      {
          question: "What is always in front of you but can’t be seen?",
        options: ["Future", "Shadow", "facts", "Mirror"],
        answer: "Future"
      },
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionElem = document.querySelector('.question');
    const optionsElem = document.querySelector('.options');
    const resultElem = document.querySelector('.result');
    const nextBtn = document.getElementById('next-btn');

    function displayQuestion() {
      const q = questions[currentQuestion];
      questionElem.textContent = q.question;
      optionsElem.innerHTML = '';
      q.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => checkAnswer(option));
        optionsElem.appendChild(li);
      });
    }

    function checkAnswer(selectedAnswer) {
      const q = questions[currentQuestion];
      if (selectedAnswer === q.answer) {
        score++;
        resultElem.textContent = "Correct!";
      } else {
        resultElem.textContent = "Incorrect!";
      }
      nextBtn.style.display = 'block';
    }

    nextBtn.addEventListener('click', () => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
        resultElem.textContent = '';
        nextBtn.style.display = 'none';
      } else {
        showScore();
      }
    });

    function showScore() {
      questionElem.textContent = `Your Score: ${score}/${questions.length}`;
      optionsElem.innerHTML = '';
      resultElem.textContent = '';
      nextBtn.style.display = 'none';
    }

    displayQuestion();