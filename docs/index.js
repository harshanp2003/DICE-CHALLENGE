function afunction()
{
    alert("Welcome to the Dice game");
}

/*RDI=Random Dice Image 
  RDIS=Random dice number image source
*/
// image 1
const randomnumber1=Math.floor(Math.random()*6)+1;

var RDI1="dice"+randomnumber1+".png";
var RDIS1="images/"+RDI1;

// For image 1 changing attributes

var image1=document.querySelectorAll("img")[0];//Out of two images this is 1st image so index[0];
image1.setAttribute("src",RDIS1);



// Image 2
const randomnumber2=Math.floor(Math.random()*6)+1;
var RDI2="dice"+randomnumber2+".png";
var RDIS2="images/"+RDI2;


//Now for image 2 changing attributes
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",RDIS2);


if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!!";
}
else
{
    document.querySelector("h1").innerHTML="Draw ";
}