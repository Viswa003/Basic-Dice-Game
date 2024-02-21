var images = ["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg", "d5.jpg", "d6.jpg"];

function rollDice()
{
  var ran1=Math.floor(Math.random()*6);
  var ran2=Math.floor(Math.random()*6);
  var img1=document.getElementById("dice1");
  img1.src=images[ran1];
  var img2=document.getElementById("dice2");
  img2.src=images[ran2];
  won(ran1,ran2);
}

function won(ran1,ran2)
{
    if(images[ran1].slice(1,2)>images[ran2].slice(1,2))
    {
        document.getElementById("wonn").textContent="Player1-WON!";
    }
    else if(images[ran1].slice(1,2)<images[ran2].slice(1,2))
    {
        document.getElementById("wonn").textContent="Player2-WON!";
    }
    else
    {
        document.getElementById("wonn").textContent="Draw!";
    }
}