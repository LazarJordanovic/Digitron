function Saberi(){
    var br1 = document.mojaforma.X.value-0;
    var br2 = document.mojaforma.Y.value-0;

    var ukupno= br1+br2;

    document.mojaforma.zbir.value=ukupno;
}
function Oduzmi(){
    
    var br1 = document.mojaforma.X.value-0;
    var br2 = document.mojaforma.Y.value-0;

    var ukupno1= br1-br2;

    document.mojaforma.zbir.value=ukupno1;

}
function Pomnozi(){
    
    var br1 = document.mojaforma.X.value-0;
    var br2 = document.mojaforma.Y.value-0;

    var ukupno2= br1*br2;

    document.mojaforma.zbir.value=ukupno2;

}

function Podeli(){
    
    var br1 = document.mojaforma.X.value-0;
    var br2 = document.mojaforma.Y.value-0;

    var ukupno3= br1/br2;

    document.mojaforma.zbir.value=ukupno3;

}