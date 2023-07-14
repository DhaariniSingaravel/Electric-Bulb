function change(){

    var imag=document.getElementById("bulb");
    if(imag.src.match("bulbon.jpg"))
    {
        imag.src="./bulboff.jpg";
    }
    else{
        imag.src="./bulbon.jpg";
    }
}