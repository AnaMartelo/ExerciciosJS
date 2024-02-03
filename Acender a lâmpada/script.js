function ligarDesligar(){

    var imagem = document.getElementById('lampada').src;
    var imagemLigada = 'Images/pic_bulbon.gif';
    var imagemDesligada = 'Images/pic_bulboff.gif';
    
    if(imagem == imagemLigada){
    	document.getElementById('lampada').src = imagemDesligada;
    }else{
    	document.getElementById('lampada').src = imagemLigada;
    }
}
document.getElementById("lampada").addEventListener("click", ligarDesligar);

