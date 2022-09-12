const quizData = [
    {
        question: "Which is the oldest programming language still in use?",
        a: "SQL",
        b: "Fortran",
        c:"C++",
        d:"JavaScript",
        correct:"b",
    },
    {
        question: "Which is not a front-end JavaScript Framework?",
        a: "Vue",
        b: "React",
        c: "Blazor",
        d: "Angular",
        correct: "c",
    },
    {
        question: "When was Python created?",
        a: "2003",
        b: "1991",
        c: "1976",
        d: "2000",
        correct: "b",
    },
    {
        question: "Who created JavaScript?",
        a: "Brendan Eich",
        b: "James Gosling",
        c: "Guido van Rossum",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
        return answer
}

submitBtn.addEventListener('click',() => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else{
        quiz.innerHTML = `
            <h2>You answered correctly at ${score}
            /${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})