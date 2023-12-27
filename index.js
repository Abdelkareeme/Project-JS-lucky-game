var tweet= prompt ( "Hello there !, In which month you were born ?") ;


var randomNumber1 = Math.random() ;

randomNumber1= randomNumber1 *6 ;

randomNumber1= Math.floor(randomNumber1) +1;

var rondomImage= "images/dice" + randomNumber1 +".png" ;

var kimo = document.querySelectorAll("img") [0] ;

kimo.setAttribute("src",rondomImage) ;


var randomnumber2 = Math.random () ;

randomnumber2 = randomnumber2 *6 ;

randomnumber2 =Math.floor(randomnumber2) +1 ;

var randomImage1 = "images/dice" + randomnumber2 + ".png" ;

var lolo =document.querySelectorAll("img")[1] ;

lolo.setAttribute("src",randomImage1) ;

if (randomNumber1>randomnumber2) {

document.querySelector("h1").innerHTML=("you are born in the month of " + "" + tweet +" & your dice has higher number than unlucky devil dice , it seems your look is to the moon today 🚀") ;

} else if (randomNumber1<randomnumber2) {

    document.querySelector("h1").innerHTML=("you are born in the the month of" +"" + tweet +" & your dice has lower number than unluck dice,tomorrow will be better sir 🗿");

     if (randomNumber1==randomnumber2) {
        document.querySelector("h1").innerHTML=("you are born in the the month of" +"" + tweet +" & your dice has equal number than unlucky devil dice,you are on the edge sir 🗼");




    }





}

