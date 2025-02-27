const start = document.getElementById('start-screen');
const contgame = document.getElementById('game-container');
const startButton = document.getElementById('start-button');
const playerput = document.getElementById('player-name');
const displayName = document.getElementById('display-name');
const storyText = document.getElementById('story-text');
const storyImage = document.getElementById('story-image');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');
const tooltip = document.getElementById('tooltip'); 
//Variables that are used for the scenes and playerName
let currentScene = 'start';
let playerName = '';

//This is an array of all the choices in the game and the next scene when that choice is clicked
const choices = {
    start: [
        { text: "Math", nextScene: '1A' },
        { text: "English", nextScene: '1B' }
    ],
    '1A': [
        { text: "3", nextScene: '2AA' },
        { text: "7", nextScene: '2AB' }
    ],
    '1B': [
        { text: "Shakespheare", nextScene: '2BA' },
        { text: "Agatha Christe", nextScene: '2BB' }
    ],
    '2AA': [
        { text: "the inverse", nextScene: '3AAA' },
        { text: "it stays the same", nextScene: '3AAB' }
    ],
    '2AB': [
        { text: "tan(0)", nextScene: '3ABA' },
        { text: "csc(0)", nextScene: '3ABB' }
    ],
    '2BA': [
        { text: "I like to eat cake", nextScene: '3BAA' },
        { text: "her laces were untied", nextScene: '3BAB' }
    ],
    '2BB': [
        { text: "subject noun", nextScene: '3BBA' },
        { text: "subject verb", nextScene: '3BBB' }
    ],
};
//This was just a function I made to update the story scene which is used later in the for loop.
function updateStory(scene) {
    let currentChoices = choices[scene];

    if (scene === '3AAA' || scene === '3AAB' || scene === '3BBA') {
        storyText.textContent = `You survived and placed 1st place, ${playerName}!`;
        storyImage.src = "Cat1.jpg";
        choice1Button.style.display = 'none';
        choice2Button.style.display = 'none';
        return;
    } else if (scene === '3ABA' || scene === '3ABB' || scene === '3BBB') {
        storyText.textContent = `You got 2nd place, ${playerName}!`;
        storyImage.src = "Mona Cat.jpg";
        choice1Button.style.display = 'none';
        choice2Button.style.display = 'none';
        return;
    } else if (scene === '3BAA' || scene === '3BAB') {
        storyText.textContent = `you got last place and the intergalatic council desided to execute you, ${playerName} sorry!`;
        storyImage.src = "Cat2.jpg";
        choice1Button.style.display = 'none';
        choice2Button.style.display = 'none';
        return;
    }
//Updates the story text and image for that scene.
    switch(scene) {
        case 'start':
            storyText.textContent = `Do you like math or science, ${playerName}...`;
            break;
        case '1A':
            storyText.textContent = "what is 2x+6";
            
            break;
        case '1B':
            storyText.textContent = "What is the most sold author in history";
            break;
        case '2AA':
            storyText.textContent = "When talking about a rational function. what is the (ax) value";
            break;
        case '2AB':
            storyText.textContent = "what is sin/cos"
            break;
        case '2BA':
            storyText.textContent = "what is a complete sentence";
            break;
        case '2BB':
            storyText.textContent = "How is a sentence structured";
            break;
    }
    //This is the for loop that runs the game and executes the functions.
    for (let i = 0; i < currentChoices.length; i++) {
        const button = i === 0 ? choice1Button : choice2Button;
        button.textContent = currentChoices[i].text;
        button.onclick = function() {
            currentScene = currentChoices[i].nextScene;
            updateStory(currentScene);
        };
    }
}
//This displays the tooltip at that current scene
function showTooltip() {
    tooltip.textContent = sceneTooltips[currentScene];
    tooltip.style.display = 'block';
}

function hideTooltip() {
    tooltip.style.display = 'none';
}
//This is just a function to start the game and call the functions 
function startGame() {
    playerName = playerput.value.trim();
    if (playerName !== '') {
        displayName.textContent = `Player: ${playerName}`;
        start.style.display = 'none';
        contgame
    .style.display = 'block';
        contgame
    .classList.add('show');
        updateStory(currentScene);
    } else {
        alert("Please enter a name!");
    }
}
//Calls the function ''startGame'' to run the game after the user clicks start game
startButton.addEventListener('click', startGame);
storyImage.addEventListener('mouseover', showTooltip);
storyImage.addEventListener('mouseout', hideTooltip);
