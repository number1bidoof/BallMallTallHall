// varibles 
const TextBlock1 = document.getElementById("text1");
const TextBlock2 = document.getElementById("para");
const UsePut = document.getElementById("userInput");
const FirstButton = document.getElementById('button1');
const SecondButton = document.getElementById('button2');
const SecretButton = document.getElementById("secretButton");
const CurrentImg = document.getElementById("simage")

FirstButton.onclick = function introduction(){
    TextBlock1.innerHTML = `Hello ${UsePut}`
    TextBlock2.innerHTML = "Welcome to the Olympics"
    
}

introduction()