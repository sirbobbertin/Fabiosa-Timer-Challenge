

let timeInterval;
let seconds = 0;
let likeTimes=0;
let newTextAmount = 0;
var listItem = document.createElement("li");

let counterDisplay= document.getElementById("counter");
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let heartButton = document.getElementById("heart");
let pauseLike = document.getElementById("pause");
let submitButton = document.getElementById("submit");
let timerVar = setInterval( startTimer,1000)


document.getElementById("submit").addEventListener("click", () => {

    event.preventDefault();

    let getText = document.getElementById("comment-input").value;
    let getChat = document.getElementById("list");
    let textNode = document.createTextNode(getText);
    let createDiv = document.createElement("div");
    createDiv.appendChild(textNode);

    getChat.appendChild(createDiv);
    
})
document.getElementById("plus").addEventListener("click", () => { document.getElementById("counter").innerHTML=seconds++;});
document.getElementById("minus").addEventListener("click", () => { document.getElementById("counter").innerHTML=seconds--;});
document.getElementById("heart").addEventListener("click", () => 

{ 
    let likeNumber = document.getElementById("counter").innerHTML;
    let currentNumber = likeNumber;
    likeTimes++;
    

   if(newTextAmount != 1)
        {
        newTextAmount++;
        let listItem = document.createElement("li"); 
        let textNode = document.createTextNode(currentNumber + " has been liked " + likeTimes);
       // textNode.nodeValue = currentNumber + " has been liked " + likeTimes;
        listItem.appendChild(textNode);
        var ulElement = document.getElementById("likes");
        ulElement.appendChild(listItem);
     }
     
});

document.getElementById("pause").addEventListener("click",() =>
{

    if(pauseLike.innerText==="pause")
    {    
        window.clearInterval(timerVar);
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
        submitButton.disabled = true;
        pauseLike.innerText = "resume";
    }
    else{
        timerVar = setInterval(startTimer,1000);

        pauseLike.innerText = "pause";
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
        submitButton.disabled = false;
    }



})



function startTimer(){
    seconds++;
    likeTimes=0;
    newTextAmount=0;
    //var listItem = document.createElement("li");
    //var textNode = document.createTextNode(currentNumber + " has been liked " + likeTimes++);
    document.getElementById("counter").innerHTML = seconds;
    
}















