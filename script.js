const questions = [

    {
        question: "Which planet is known as the Red Planet?",

        options: [
            "Venus",
            "Jupiter",
            "Mars",
            "Saturn"
        ],

        answer: "Mars"
    },

    {
        question: "Which country has the longest coastline in the world?",

        options: [
            "Russia",
            "Canada",
            "Australia",
            "Indonesia"
        ],

        answer: "Canada"
    },
    
    {
        question: "Who wrote the book '1984'?",

        options: [
            "George Orwell",
            "William Shakespeare",
            "J. K. Rowling",
            "Ernest Hemingway"
        ],

        answer: "George Orwell"
    },
    {
        question: "Which Scientist proposed the Theory of Relativity?",

        options: [
            "Isaac Newton",
            "Nikola Tesla",
            "Albert Einstein",
            "Galileo Galilei"
        ],

        answer: "Albert Einstein"
    }

];
const question = document.getElementById("question");

const buttons = document.querySelectorAll(".option-btn");

const nextBtn = document.getElementById("next-btn");

const skipBtn = document.getElementById("skip-btn");

let currentQuestion = 0;

let answered = false;

function loadQuestion(){

    answered = false;

    question.innerText = questions[currentQuestion].question;

    buttons.forEach((button, index) => {

        button.innerText = questions[currentQuestion].options[index];

        button.style.backgroundColor = "#334155";

        button.disabled = false; 
    });
}

loadQuestion();

buttons.forEach(button => {

    button.addEventListener("click", () => {

        if(answered){
            return;
        }

        answered = true;

        const correctAnswer =
        questions[currentQuestion].answer;

        if(button.innerText === correctAnswer){

            button.style.backgroundColor = "green";

        }

        else{

            button.style.backgroundColor = "red";

            buttons.forEach(btn => {

                if(btn.innerText === correctAnswer){

                    btn.style.backgroundColor = "green";

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

    if (currentQuestion < questions.length) {
        loadQuestion();
    }
});

skipBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

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
