const question=[
    {
    question:"Which is largest animal in the world",
    answer: [
        {text:"Shark",correct:false},
        {text:"Blue whale",correct:true},
        {text:"Elephant",correct:false},
        {text:"Giraffe",correct:false},
    ]
    },
    {
        question:"Which is smallest countary in the world",
        answer: [
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri Lanka",correct:false},
        ]
        },
        {
            question:"Which is largest desert in the world",
            answer: [
                {text:"Kalahari",correct:false},
                {text:"Gobi",correct:false},
                {text:"Sahara",correct:false},
                {text:"Antarctica",correct:true},
            ]
            },
            {
                question:"Which is smallest continent in the world",
                answer: [
                    {text:"Asia",correct:false},
                    {text:"Australia",correct:true},
                    {text:"Arctic",correct:false},
                    {text:"Africa",correct:false},
                ]
                },
];
const questionElement=document.getElementById("question");
const answerbtn=document.getElementById("answer-btn");
const nextbtn=document.getElementById("next-btn");

let currentquestionindex=0;
let score=0;

function startQuiz(){
    currentquestionindex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=question[currentquestionindex];
    let questionNo=currentquestionindex+1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    })
}

function resetState(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function selectanswer(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextbtn.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${question.length}!`;
    nextbtn.innerHTML="Play Again";
    nextbtn.style.display="block";
}
function handlenextbtn(){
    currentquestionindex++;
    if(currentquestionindex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextbtn.addEventListener("click",()=>{
    if(currentquestionindex<question.length){
        handlenextbtn();
    }else{
        startQuiz();
    }
})

startQuiz();