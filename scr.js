var fr = Math.floor(Math.random()*6)+1;
var sr = Math.floor(Math.random()*6)+1;
var image="images/dice"+fr+".png";
var imagee="images/dice"+sr+".png";
document.querySelectorAll("img")[0].setAttribute("src",image);
document.querySelectorAll("img")[1].setAttribute("src",imagee);
if(fr>sr)
{
    document.querySelector("h2").innerHTML="playe1win";
}
else{
    document.querySelector("h2").innerHTML="player2win";

}

