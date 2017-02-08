" use strict ";

var display = document.getElementById("display");

function oneToTen(){

    for(var i =1; i<11 ;i++){

        display.innerHTML += "<br>" + i ;
    }

}

function oddNumbers() {

    for(var i =1; i <= 20; i++){

        if((i%2) != 0){

            display.innerHTML += "<br>" + i ;
        }
    }
}


function squareNumbers() {

    for(var i =1; i < 12; i++){

        if((i*i) < 101){

            var j = i * i

            display.innerHTML += "<br>" + j ;
        }
    }
}

function randomNumbers() {

    for(var i =1; i < 5; i++){

        var j = Math.random() * (100 - 1) + 1;

        var result = Math.floor(j)

        display.innerHTML +=  "<br>" + result ;

    }
    
}

function evenNumbers(){

    var n = 20;

        for (var i = 1; i <= n; i++) {

            if ((i % 2) == 0) {

                display.innerHTML +=  "<br>" + i ;
            }

        }

}

function powersOFTwo() {

    var n = 8;

    for (var i = 1; i <= n; i++) {

        var answer = Math.pow(2, i);

        display.innerHTML += "<br>" + answer;

    }
}


function areWeThereYet() {

    var answer = "no";

    while(answer !== "yes"){

        answer = prompt("Are we there yet?");

        if(answer === "yes"){

            answer = "Good";

            display.innerHTML += "<br>" + answer;

            break;
        }
    }

    
}


function triangle() {

    var j = " ";

    for(var i=0; i < 5; i++){

        j = j + " *";

        display.innerHTML += "<br>" + j;
    }
    
}

function tableSquare() {

    for (i=1; i<5; i++)
    {
        for (j=1; j<=4; j++)
        {
            display.innerHTML += "  |  "+i*j;
        }
            display.innerHTML += "  |<br>";
    }

}


function tableSquares(n) {
    var n = 6;

    for (i=1; i<=n; i++)
    {
        for (j=1; j<=n; j++)
        {
            display.innerHTML += "  |  "+i*j;
        }
            display.innerHTML += "  |<br>";
    }

}



