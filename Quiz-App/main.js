const quizData = [{
    question: 'Is this my first project?',
    a: 'Yes',
    b: 'No',
    c: 'I dont know',
    d: 'I want some tacos',
    correct: 'a'
}, {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'a'

}, {
    question: 'Who is the President os US? ',
    a: 'Florida Pop',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Kinai Andrei',
    correct: 'b'

}, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Languague',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorbots Lamborginis',
    correct: 'a'

}, {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b'
}];

const answerElements = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselect();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerElements.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselect() {
    answerElements.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submit.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            //Show Results
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}
           questions. </h2> <button onClick="location.reload()">Reload</button>`
        }
    }
});