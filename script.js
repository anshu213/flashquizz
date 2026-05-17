const questions = [

    {
        question: "Q: Which planet is known as the Red Planet?",

        options: [
            "Venus",
            "Jupiter",
            "Mars",
            "Saturn"
        ],

        answer: "Mars"
    },

    {
        question: "Q: Which country has the longest coastline in the world?",

        options: [
            "Russia",
            "Canada",
            "Australia",
            "Indonesia"
        ],

        answer: "Canada"
    },
    
    {
        question: "Q: Who wrote the book '1984'?",

        options: [
            "George Orwell",
            "William Shakespeare",
            "J. K. Rowling",
            "Ernest Hemingway"
        ],

        answer: "George Orwell"
    },
    {
        question: "Q: Which Scientist proposed the Theory of Relativity?",

        options: [
            "Isaac Newton",
            "Nikola Tesla",
            "Albert Einstein",
            "Galileo Galilei"
        ],

        answer: "Albert Einstein"
    },
    {
        question: "Q: Which country is known as the Land of the Rising Sun? ",

        options: [
            "China",
            "Japan",
            "South Korea",
            "Thailand"
        ],

        answer: "Japan"
    },
    {
        question: "Q: Which is the smallest continent in the world? ",

        options: [
            "Europe", "Australia", "Antarctica", "South America"
        ],

        answer: "Australia"
    },{
        question: "Q: Who wrote the national anthem of India?",

        options: [
           "Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Subhash Chandra Bose"
        ],

        answer: "Rabindranath Tagore"
    },{
        question: "Q: Which is the hardest natural substance on Earth?",

        options: [
           "Gold", "Iron", "Diamond", "Platinum"],

        answer: "Diamond"
    },{
        question: "Q: What is the study of the universe called? ",

        options: [
            "Astrophysics",
            "Cosmology",
            "Astronomy",
            "Astrobiology"
        ],

        answer: "Cosmology"
    },{
        question: "Q: Who first proposed the idea of the Big Bang Theory",

        options: [
            "Edwin Hubble",
            "Isaac Newton",
            "Georges Lemaître",
            "Albert Einstein"
        ],

        answer: "Georges Lemaître"
    },{
        question: "Q: What is the approximate age of the Earth",

        options: [
            "4.6 million years",
            "4.6 billion years",
            "460 million years",
            "14 billion years"
        ],

        answer: "4.6 billion years"
    },{
        question: "Q: Which country adopted the first modern written constitution in 1787?",

        options: [
            "United Kingdom",
            "United States of America",
            "France",
            "Germany"
        ],

        answer: "United States of America"
    },{
        question: "Q: Who is known as the father of Macroeconomics?",

        options: [
            "Adam Smith",
            "John Maynard Keynes",
            "Alfred Marshall",
            "David Ricardo"
        ],

        answer: "John Maynard Keynes"
    },{
        question: "Q: When did the Delhi Sultanate rule in India?",

        options: [
            "750 AD – 1206 AD",
            "1206 AD – 1526 AD",
            "1526 AD – 1707 AD",
            "1707 AD – 1947 AD"
        ],

        answer: "1206 AD – 1526 AD"
    },{
        question: "Q: Who came first to India among the Europeans? ",

        options: [
            "Portuguese",
            "Dutch",
            "German",
            "French"
        ],

        answer: "Portuguese"
    },{
        question: "Q: What is motion?",

        options: [
            "Change in position of an object with respect to time and surrounding",
            "Total path length covered by an object",
            "Shortest distance between initial and final position",
            "Rate of change of speed of an object"
        ],

        answer: "Change in position of an object with respect to time and surrounding"
    },{
        question: "Q: What is a substance?",

        options: [
            "A form of matter that has a uniform and definite composition",
            "Anything that has mass and occupies space",
            "A mixture of different materials",
            "A state of matter like solid, liquid or gas"
        ],

        answer: "A form of matter that has a uniform and definite composition"
    },{
        question: "Q: What is the study of cells called?",

        options: [
            "Morphology",
            "Histology",
            "Physiology",
            "Cytology"
        ],

        answer: "Cytology"
    },{
        question: "Q: Who is known as the Father of Indian Ecology?",

        options: [
            "Salim Ali",
            "Ramdeo Misra",
            "M. S. Swaminathan",
            "Hargobind Khurana"
        ],

        answer: "Ramdeo Misra"
    },{
        question: "Q: Where is the headquarters of Sangeet Natak Akademi located?",

        options: [
            "Mumbai",
            "Chennai",
            "New Delhi",
            "Kolkata"
        ],

        answer: "New Delhi"
    },{
        question: "Q: Which is the oldest classical dance form of India?",

        options: [
            "Kathak",
            "Bharatanatyam",
            "Kathakali",
            "Odissi"
        ],

        answer: "Bharatanatyam"
    },

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

        button.style.background = "linear-gradient(135deg, #575759, #9b9da1)";
        button.style.color = "white";
        button.disabled = false; 
    });
}

loadQuestion();

buttons.forEach(button => {

    button.addEventListener("click", () => {

        if(answered){return;}

        answered = true;

        const correctAnswer =questions[currentQuestion].answer;
         buttons.forEach(btn => {
            btn.disabled = true;
        });
 
        if(button.innerText === correctAnswer){

            button.style.background = "green";

        } else{

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

    if (currentQuestion < questions.length) {
        loadQuestion();
    }else {
        showPopup("Quiz Finished", "Good job! You completed it.");
        currentQuestion = 0;
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
