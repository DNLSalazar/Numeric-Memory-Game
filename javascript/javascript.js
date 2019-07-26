
var c1, c2 ;
c1 = c2 = undefined;
var tot = 0;
var container = document.getElementById("container");
var firstCard;
var cards;
window.addEventListener("load", function() {
    var n = parseInt(prompt("¿Cuántas parejas desea en el juego?"));
    cardsCreator(n*2);
    cards = document.getElementsByClassName("card");
    var totalCartas = cards.length;
    llenar(totalCartas);
    for(var i = 0; i < totalCartas; i++) {
        cards[i].addEventListener("click", evento);
    }
});

var evento = function  () {
    this.firstElementChild.style.transform = "scale(0,0)";
    if(this != firstCard || c1 == undefined){
    
        c1 == undefined? c1 = this.lastElementChild.innerHTML : c2 = this.lastElementChild.innerHTML;
        firstCard = this;
        if (c1 != undefined && c2 != undefined){
            container.lastElementChild.style.zIndex = "5";
            setTimeout(check, 750, c1, c2, cards);
        }
    }
}

function check (t1,t2) {
    if(t1 == t2) {
        c1 = c2 = undefined;
        tot+= 2;

        for(var i = 0 ; i<cards.length ; i++) {
            if (cards[i].lastElementChild.innerHTML == t1 || cards[i].lastElementChild.innerHTML == t2) {
                cards[i].removeEventListener("click", evento);
            }
        }
    } else {
        for(var i = 0 ; i<cards.length ; i++) {
            if (cards[i].lastElementChild.innerHTML == t1 || cards[i].lastElementChild.innerHTML == t2) {
                cards[i].firstElementChild.style.transform = "scale(1,1)";
            }
        }
        c1 = c2 = undefined;
    }
    container.lastElementChild.style.zIndex = "-1";
    console.log(tot + " " + cards.length);
    if(tot == cards.length)alert("You Won");
}



function llenar (nCartas) {
    let contentItems = nCartas / 2;
    let numbers = [];

    for (var i = 0; i < contentItems; i++) {
        numbers.push(i+1);
        numbers.push(i+1);
    }

    contentItems = numbers.length;

    for (var i = 0; i < nCartas; i++) {
        var randomNum = parseInt(getRandomArbitrary(0 , contentItems));
        cards[i].lastElementChild.innerHTML = numbers[randomNum];
        numbers.splice(randomNum, 1);
        contentItems--;
    }

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function cardsCreator (n) {

    let card, block, text;
    for(var i = 0; i < n; i++) {
        block = document.createElement("div");
        block.classList.add("block");
        card = document.createElement("div");
        card.classList.add("card");
        text = document.createElement("p");
    
        card.appendChild(block);
        card.appendChild(text);
    
        container.insertBefore(card, container.lastElementChild);
    }
}