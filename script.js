 let activeQuestions = [];
 let levelQuestions = [];
 let score = 0;
 let answered = false;
 let currentSectionIndex = 0;

 const question = document.getElementById("question");

const buttons = document.querySelectorAll(".option-btn");

const nextBtn = document.getElementById("next-btn");

// const skipBtn = document.getElementById("skip-btn");

let currentQuestion = 0;



function loadQuestion(){

    answered = false;

    question.innerText = activeQuestions[currentQuestion].question;

    buttons.forEach((button, index) => {

        button.innerText = activeQuestions[currentQuestion].options[index];

         button.style.background = "linear-gradient(135deg, #575759, #9b9da1)";
         button.style.color = "white";
        button.disabled = false; 
    });
}

// loadQuestion();

buttons.forEach(button => {

    button.addEventListener("click", () => {

        if(answered){return;}

        answered = true;

        const correctAnswer = activeQuestions[currentQuestion].answer;
         buttons.forEach(btn => {
            btn.disabled = true;
        });
 
        if(button.innerText === correctAnswer){

    score++;

    button.style.background = "green";
}
     else{

            button.style.background = "red";

            buttons.forEach(btn => {

                if(btn.innerText === correctAnswer){

                    btn.style.background = "green";

                }

            });

        }

    });

});

nextBtn.addEventListener("click", () => {

    if (!answered) {

        showPopup(
            "Flashquizz says",
            "Please select an answer before moving next."
        );

        return;
    }

    currentQuestion++;

    if (currentQuestion < activeQuestions.length) {

        loadQuestion();

    } else {

        showPopup(
            "Section Completed",
            `Your Score: ${score}/${activeQuestions.length}`
        );
        sectionButtons[currentSectionIndex].classList.add("completed");

        document.querySelector(".quiz-container")
        .style.display = "none";

        document.querySelector(".section-container")
        .style.display = "block";
    }

});



function showPopup(title, message) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-message").innerText = message;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

const landingPage =
document.querySelector(".landing-page");


const levelsScreen =
document.querySelector(".levels-screen");
const playBtn =
document.querySelector(".play-btn");

playBtn.addEventListener("click", () => {

    landingPage.style.display = "none";

    levelsScreen.style.display = "flex";

});

const levelButtons =
document.querySelectorAll(".level-btn");

const sectionButtons =
document.querySelectorAll(".section-btn");

levelButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const start = index * 100;

        const end = start + 100;

       levelQuestions =
questions.slice(start, end);
         if(levelQuestions.length === 0){
            showPopup("No Questions", "This level is empty.");
            return;
        }

        currentQuestion = 0;

      levelsScreen.style.display = "none";

document.querySelector(".section-container")
.style.display = "block";

document.querySelector(".section-selection")
.style.display = "flex";

    });

});
sectionButtons.forEach((button, index) => {

    button.addEventListener("click", () => {
        currentSectionIndex = index;

        const start = index * 10;

        const end = start + 10;

        activeQuestions =
        levelQuestions.slice(start, end);

        if(activeQuestions.length === 0){
            showPopup("No Questions", "This section is empty.");
            return;
        }

        currentQuestion = 0;
        score = 0;

        document.querySelector(".section-container")
        .style.display = "none";

        document.querySelector(".quiz-container")
        .style.display = "block";

        loadQuestion();

    });

});



 const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", () => {

    document.querySelector(".quiz-container")
    .style.display = "none";

    document.querySelector(".section-container")
    .style.display = "block";

    document.querySelector(".section-selection")
    .style.display = "flex";

    resetQuiz();

});
  const sectionBackBtn =document.getElementById("section-back-btn");
  sectionBackBtn.addEventListener("click", () => {

    document.querySelector(".section-container")
    .style.display = "none";

    levelsScreen.style.display = "flex";

});

function resetQuiz() {
    currentQuestion = 0;
    answered = false;

    closePopup();

    // reset buttons fully
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.style.background = "linear-gradient(135deg, #575759, #9b9da1)";
        btn.style.color = "white";
    });

    // reload first question
    loadQuestion();
}
const levelsHomeBtn =
document.getElementById("levels-home-btn");

levelsHomeBtn.addEventListener("click", () => {

    levelsScreen.style.display = "none";

    landingPage.style.display = "flex";

});
const previousBtn =
document.getElementById("previous-btn");

previousBtn.addEventListener("click", () => {

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();
    }

});

