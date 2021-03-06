const questions = [
    {
        question: "What is Athena's favorite animal?",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    },
    {
        question: "What is 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "20"
    }
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            if (option.textContent== questions[question_number].answer)
            {
                correct++;
            }
            document.querySelector("#correct").innerHTML =`${correct} of ${question_number + 1}` ;
            question_number++;
            
            if (question_number < questions.length){
            load_question();}
            else { 
                document.querySelector("#question").innerHTML = "Quiz Complete";
                document.querySelector("#options").innerHTML = "";
                
            }
        }
    });

}