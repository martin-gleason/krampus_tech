//JS to rotate the image of Krampus.

const submit = document.querySelector('#ask-krampus');

submit.addEventListener("click", askKrampus);



function askKrampus(event){
    event.preventDefault();
    console.log("Asking the great Krampus");

    spinKrampus();

    const question = takeQuestion();
    const questionAsked = sanitizeQuesiton(question);

    const answer = document.getElementById("answer");
    answer.textContent = questionAsked
    resetImage();
};

function spinKrampus(){
    const img = document.getElementById("joe-and-krampus");
    img.classList.add('spinning');
}

function takeQuestion(){
    const questionField = document.getElementById("question-id");
    const question = questionField.value;
    return(question)
}

function sanitizeQuesiton(question){
    const defaultMessage = "No question was asked of the great Krampus!"
    return question?.trim() ? question : defaultMessage;
}

function postAnswer(questionAsked){
    
}

function resetImage(){
    const img = document.getElementById("joe-and-krampus");
    setTimeout(() =>{
        img.classList.remove('spinning');
        img.classList.add('return');
    }, 5000);
    
}