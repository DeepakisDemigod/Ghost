const btn = document.querySelector('.ghost');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Intro
btn.addEventListener('click', () => {
    message = "i am just a ghost, ask me anything !"
    readOutLoud(message);
})


recognition.onstart = function() {
    console.log("VOice activated")
}

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    // content.textContent = transcript
    if (transcript == "who are you") {
        message = "i am your friend!"
        readOutLoud(message)
        recognition.start()
    } else if (transcript == "what do you think about me") {
        message="you're the best !"
        readOutLoud(message)
        recognition.start()
        if (transcript == "am i") {
            message="i believe you!"
            readOutLoud(message);
        } else {
            message = "i didn't get that; i don't care."
            readOutLoud(message);
        }
    } else {
         message = "i didn't get that; i don't care."
         readOutLoud(message);
    }
}


btn.addEventListener('click', () => {
    recognition.start();
})


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}





