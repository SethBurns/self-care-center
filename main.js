// Data Model Arrays //
var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",  
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices.",];

var affirmationsReset = affirmations.slice()

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don’t let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "I am the sky, the rest is weather.",];

var mantrasReset = mantras.slice()


// QuerySelectors //

var receiveButton = document.querySelector("#receiveMessage")
var affirmationCheck = document.querySelector("#affirmation")
var mantraCheck = document.querySelector("#mantra")
var bell = document.querySelector(".svg")
var quoteBox = document.querySelector(".quotebox")

// Event Listeners //

receiveButton.onclick = deliverMessage;

function getRandomIndex(array) {
    return array[Math.floor(Math.random()*array.length)]
}

function deliverMessage() {
    event.preventDefault()
    quoteBox.style.color = "#000000"
    if (affirmationCheck.checked) {
        var message = getRandomIndex(affirmations)
        bell.classList.add("hidden")
        quoteBox.innerHTML = `${message}`
        removeMessage(message, affirmations)
    } else if (mantraCheck.checked) {
        var message = getRandomIndex(mantras)
        bell.classList.add("hidden")
        quoteBox.innerHTML = `${message}`
        removeMessage(message, mantras)
    }
}

function removeMessage(message, array) {
    if (!array.length) {
            quoteBox.style.color = "#a01212";
            // XXX I'm aware I'm making a sketchy identity comparison on line 75 & 78... but it works! XXX //    
            if (array === affirmations) {
                    quoteBox.innerHTML = `You've run out of unique affirmations, you'll start seeing repeats.`;
                    affirmations = affirmationsReset.slice()
                } else if (array === mantras) {
                    quoteBox.innerHTML = `You've run out of unique mantras, you'll start seeing repeats.`;
                    mantras = mantrasReset.slice()
                }
        } else {
    for (i = 0; i < array.length; i++) {
        if (message === array[i]) {
            array.splice(i, 1);
            }
        }
    }
}