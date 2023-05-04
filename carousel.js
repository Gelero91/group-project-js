const slide = ["https://newevolutiondesigns.com/images/freebies/4k-space-wallpaper-preview-1.jpg", "https://newevolutiondesigns.com/images/freebies/4k-gaming-wallpaper-preview-4.jpg", "https://images4.alphacoders.com/214/214928.jpg"];

let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
    {
        numero = slide.length - 1;
    }
    if (numero > slide.length - 1)
    {
        numero = 0;
    }
    document.getElementById("slide").src = slide[numero];
    console.log(numero);
    switch(numero){
        case 0:
            document.getElementById("dot1").style.backgroundColor = "black";
            document.getElementById("dot2").style.backgroundColor = "white";
            document.getElementById("dot3").style.backgroundColor = "white";
            break;
        case 1:
            document.getElementById("dot1").style.backgroundColor = "white";
            document.getElementById("dot2").style.backgroundColor = "black";
            document.getElementById("dot3").style.backgroundColor = "white";
            break;
        case 2:
            document.getElementById("dot1").style.backgroundColor = "white";
            document.getElementById("dot2").style.backgroundColor = "white";
            document.getElementById("dot3").style.backgroundColor = "black";
            break;
        default:
            document.getElementById("dot1").style.backgroundColor = "black";
            break;
    } 
}