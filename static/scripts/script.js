document.addEventListener('DOMContentLoaded', function() {
    console.log('Script is running.')
    document.querySelector('.app').classList.add('fadeIn');
});

const questions = [
    {
        question: "დღევანდელი მონაცემებით რამდენი საქმის წარმოება დაიწყო გადახდისუუნარობის ახალი კანონით?",
        answers: [
            {text: "111", correct: false},
            {text: "485", correct: false},
            {text: "26", correct: true},
            {text: "არც ერთი, კანონი ჯერ ძალაში არ შესულა", correct: false}
        ],
        additional: "კანონი შევიდა ძალაში .... წელს და ა.შ."
    },
    {
        question: "საქართველოს ფარგლებს გარეთ, სად ყიდის ონლაინ ქართული კომპანიების ყველაზე დიდი ნაწილი?",
        answers: [
            {text: "ზიმბაბვე", correct: false},
            {text: "რუსეთი", correct: false},
            {text: "ევროკავშირი", correct: true},
            {text: "პერუ", correct: false}
        ],
        additional: "უკვე ამდენი წელია ევროკავშირში უფრო მეტი იყიდება ვიდრე სხვაგან"
    },
    {
        question: "Მოსახლეობის ინტერნეტთან წვდომა ქვეყანაში ელექტრონული კომერციის განვითარების მნიშვნელოვანი წინაპირობაა. Თქვენი აზრით, Რას უდრიდა საქართველოში ინტერნეტით უზრუნველყოფილი მოსახლეობის წილი 2021 წელს?",
        answers: [
            {text: "51%", correct: false},
            {text: "100%", correct: false},
            {text: "86%", correct: true},
            {text: "17%", correct: false}
        ],
        additional: "ინტერნეტის დინამიკის აღწერა ან რამე მსგავსი"
    },
    {
        question: "ელექტრონული კომერციის რეფორმა კომპლექსური პროცესია და რამდენიმე ცვლილებას აერთიანებს სხვადასხვა მიმართულებით. Ჩამოთვლილთაგან Რომელი კანონის  მიღებას/ცვლილებას მოიცავს ელექტრონული კომერციის რეფორმა?",
        answers: [
            {text: "Კანონი Პერსონალურ მონაცემთა დაცვის შესახებ", correct: false},
            {text: "Კანონი Საგადასახადო მომსახურების შესახებ", correct: false},
            {text: "Კანონი მომხმარებელთა უფლებების დაცვის შესახებ", correct: false},
            {text: "ყველა ზემოჩამოთვლილი", correct: true}
        ],
        additional: "როდის მიიღეს/შეცვალეს კანონები და რას მოიცავს"
    },
    {
        question: "ასოცირების შეთანხმების ფარგლებში აღებული ვალდებულებების გათვალისწინებით წამოწყებულ იქნა",
        answers: [
            {text: "წყლის რესურსების მართვის რეფორმა", correct: false},
            {text: "ელექტრონული კომერციის რეფორმა", correct: false},
            {text: "არცერთი", correct: false},
            {text: "ორივე", correct: true}
        ],
        additional: "როდის მიიღეს რას მოიცავს"
    },
    {
        question: "2021 წლის მონაცემებით, საქართველოს მოსახლეობის რა ნაწილი იყო მიერთებული წყალმომარაგების სისტემაზე?",
        answers: [
            {text: "100%", correct: false},
            {text: "71%", correct: true},
            {text: "52%", correct: false},
            {text: "27%", correct: false}
        ],
        additional: "წყალმომარაგების სისტემაში მიერთების დინამიკა"
    },
    {
        question: "Საჯარო შესყიდვების რეფორმის შედეგად ქართულ კომპანიებს შეეძლებათ ევროკავშირის ბაზარზე საჯარო შესყიდვებში მონაწილეობის მიღება როგორც საქონლის ისე მომსახურების მიწოდების ნაწილში",
        answers: [
            {text: "სწორია", correct: true},
            {text: "არასწორია", correct: false}
        ],
        additional: "აქ არ ვიცი რა უნდა დაიწეროს"  
    },
    {
        question: "დღეის მდგომარეობით, Საქართველოში აქტიური ბიზნესის დაახლოებით რა ნაწილი იღებს მონაწილეობას საჯარო შესყიდვებში?",
        answers: [
            {text: "95%", correct: false},
            {text: "25%", correct: true},
            {text: "1%", correct: false},
            {text: "5%", correct: false}
        ],
        additional: "ანაც დინამიკა ან სხვა არ ვიცი რა შეიძლება იყოს"
    },
    {
        question: "Რეფორმის თანახმად, იგეგმება საქართველოს მასშტაბით ექვსი სააუზო მართვის გეგმის შემუშავება. Ჩამოთვლილთაგან რომელი არ შედის ამ ექვს აუზში?",
        answers: [
            {text: "ალაზანი-იორი", correct: false},
            {text: "მტკვარი", correct: false},
            {text: "ენგურ-რიონი", correct: false},
            {text: "ძირულა-ყვირილა", correct: true}
        ],
        additional: "რა არის სააუზო გეგმა"
    },
    {
        question: "გადახდისუუნარობის საქმეების მაღალ ხანგრძლივობასთან დაკავშირებული გამოწვევების საპასუხოდ ახალმა კანონმა შექმნა ჩამკეტი მექანიზმი გადახდისუუნარობის საქმეების ვადებთან დაკავშირებით. თქვენი აზრით, რა მაქსიმალურ ვადას აწესებს ახალი კანონი კომპანიის რეაბილიტაციის მისაღწევად?",
        answers: [
            {text: "9 თვეს", correct: true},
            {text: "7 დღეს", correct: false},
            {text: "3 წელს", correct: false},
            {text: "5 წელს", correct: false}
        ],
        additional: "რატომაა ასე"
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const additionaInfo = document.getElementById('additional');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        }else {
            selectedBtn.classList.add("incorrect");
            
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct == 'true'){
                button.classList.add("correct");
                createDiv()
            }
            button.disabled = true;
        })
        nextButton.style.display = "block";
        
}
function createDiv(){
    var divElement = document.createElement("div");
    divElement.classList.add("additional")
    divElement.textContent = questions[currentQuestionIndex].additional
    document.querySelector('.correct').insertAdjacentElement('afterend', divElement);
    /*newDiv.offsetWidth;
    newDiv.style.opacity = '1';*/
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        hadleNextButton();
        }else{
            startQuiz();
        }
});

function hadleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        }else{
            showScore()
        }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `შენ სწორად უპასუხე ${score} შეკითხვას ${questions.length}-დან!<br>მეტი ინფორმაციისთვის ეწვიეთ რეფორმეტრს`;
    nextButton.innerHTML = "თავიდან"
    nextButton.style.display = "block"
}

function resetState() {
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


startQuiz();