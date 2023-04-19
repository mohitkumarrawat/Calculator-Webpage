function add()
{var a=document.getElementById('number1').value;
var b=document.getElementById('number2').value;
var c=+a + +b;
document.getElementById("p").innerHTML=c;}

function sub()
{var a=document.getElementById('number1').value;
var b=document.getElementById('number2').value;
var c=+a - +b;
document.getElementById("p").innerHTML=c;}

function mul()
{var a=document.getElementById('number1').value;
var b=document.getElementById('number2').value;
var c=+a * +b;
document.getElementById("p").innerHTML=c;}

function div()
{var a=document.getElementById('number1').value;
var b=document.getElementById('number2').value;
var c=+a / +b;
document.getElementById("p").innerHTML=c;}