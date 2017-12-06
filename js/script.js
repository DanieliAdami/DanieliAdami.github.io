var valor=50;
var modelo="gerberas";

document.getElementById("resumo").style.visibility="hidden";


function trocarFlor() {
    var gerberas=document.getElementById("gerberas");
    var orquideas=document.getElementById("orquideas");
    var rosas=document.getElementById("rosas");
    var lisianthus=document.getElementById("lisianthus");
    var lirios=document.getElementById("lirios");
    var astromelias=document.getElementById("astromelias");
    var copoDeLeite=document.getElementById("copoDeLeite");
    var girassois=document.getElementById("girassois");
    var jasmim=document.getElementById("jasmim");
    var cravos=document.getElementById("cravos");
    var crisantemos=document.getElementById("crisantemos");
    var calendula=document.getElementById("calendula");
    var lavanda=document.getElementById("lavanda");
    var margaridas=document.getElementById("margaridas");
    var cineraria=document.getElementById("cineraria");
    var foto= document.getElementById("foto");

if(gerberas.checked){
    foto.src="imagens/gerberas.jpg";
    valor=52;
    modelo="gerberas";
}else if(orquideas.checked){
    foto.src="imagens/orquideas.jpg";
    valor=60;
    modelo="orquideas";
}else if(rosas.checked){
    foto.src="imagens/rosas.jpg";
    valor=56;
    modelo="rosas";
}else if(lisianthus.checked){
    foto.src="imagens/lisianthus.jpg";
    valor=54;
    modelo="lisianthus";
}else if(lirios.checked){
    foto.src="imagens/lirios.jpg";
    valor=57;
    modelo="lirios";
}else if(astromelias.checked){
    foto.src="imagens/astromelias.jpg";
    valor=53;
    modelo="astromelias";
}else if(copoDeLeite.checked){
    foto.src="imagens/copoDeLeite.jpg";
    valor=31;
    modelo="copoDeLeite";
}else if(girassois.checked){
    foto.src="imagens/girassois.jpg";
    valor=50;
    modelo="girassois";
}else if(jasmim.checked){
    foto.src="imagens/jasmim.jpg";
    valor=69;
    modelo="jasmim";
}else if(cravos.checked){
    foto.src="imagens/cravos.jpg";
    valor=42;
    modelo="cravos";
}else if(crisantemos.checked){
    foto.src="imagens/crisantemos.jpg";
    valor=40;
    modelo="crisantemos";
}else if(calendula.checked){
    foto.src="imagens/calendula.jpg";
    valor=37;
    modelo="calendula";
}else if(lavanda.checked){
    foto.src="imagens/lavanda.jpg";
    valor=31;
    modelo="lavanda";
}else if(margaridas.checked){
    foto.src="imagens/margaridas.jpg";
    valor=25;
    modelo="margaridas";
}else{
    foto.src="imagens/cineraria.jpg";
    valor=29;
    modelo="cinerarias";
}
document.getElementById("preco").innerHTML=valor.toFixed(2);
document.getElementById("pacote").checked=false;
document.getElementById("laco").checked=false;
document.getElementById("cartao").checked=false;
}






function adicionarPacote(){
    var pacote=document.getElementById("pacote");
    if(pacote.checked){
        valor=valor+20;
    }else{
        valor=valor-20;
    }
    document.getElementById("preco").innerHTML=valor.toFixed(2);
}






function adicionarLaco(){
    var laco=document.getElementById("laco");
    if(laco.checked){
        valor=valor+10;
    }else{
        valor=valor-10;
    }
    document.getElementById("preco").innerHTML=valor.toFixed(2);
}







function adicionarCartao(){
    var cartao=document.getElementById("cartao");
    if(cartao.checked){
        valor=valor+10;
    }else{
        valor=valor-10;
    }
    document.getElementById("preco").innerHTML=valor.toFixed(2);
}







function calcularParcelas(){
    var entrada=Number(document.getElementById("entrada").value);
if( isNaN(entrada)||entrada==""){
    alert("Informe o valor da entrada");
    document.getElementById("entrada").focus();
    return;
}
 if(entrada<(valor/2)){
    alert("Entrada deve ser de no minimo,R$:"+(valor/2)).toFixed(2);
    document.getElementById("entrada").focus();
    return;
 }
var f2=document.getElementById("f2");
var f3=document.getElementById("f3");
var f4=document.getElementById("f4");

    var parcelas;


if(f2.checked){
    parcelas=2;
}else if(f3.checked){
    parcelas=3;
}else{
    parcelas=4;
}

var valorParcela=(valor-entrada)/parcelas;
document.getElementById("resumo").style.visibility="visible";

document.getElementById("liBuque").innerHTML = " Buquê de: " +modelo;
document.getElementById("liPreco").innerHTML = " Preço Total:R$ " +valor.toFixed(2);
document.getElementById("liEntrada").innerHTML = " Entrada de R$: " +entrada.toFixed(2);
document.getElementById("liParcelas").innerHTML = " + "+  parcelas +" x de R$:"+ valorParcela.toFixed(2);
}



$(document).ready(function(){


 $("#home").click(function() {
   $("#orcamentoMenu").show();
     $("#radio").hide();
       $("#foto").hide();
         $("#opcoes").hide();
           $("#opcoes2").hide();
             $("#valor").hide();
               $("#orcamento").hide();
                 $("#radio").hide();
                   $(".hr").hide();
                     $("#pagamento").hide();
                       $("#resumo").hide();
                         $("#valores").hide();
                           $("#contato").show();
                             $("#myDivValores").hide();
                           $("#myDivValores2").hide();
                         $(".container").hide(); 
                       $(".myDivSlide").hide();
                     $("#promocao").hide();
                   $(".none").hide();
                 $("#cartoes").hide();
               $(".container").hide();
             $(".containers").hide();
           $("#titulo").hide();
         $("#divContainer").attr('style', 'background-color: transparent');
      $("#divMomentos").hide();
   $("#txtMomentos").hide();
 $("#valores").show();

  } );



     $("#valores").click(function() {
       $("#orcamentoMenu").show();
         $("#radio").hide();
           $("#foto").hide();
             $("#opcoes").hide();
               $("#opcoes2").hide();
                 $("#valor").hide();
                   $("#orcamento").hide();
                     $("#radio").hide();
                       $(".hr").hide();
                         $("#pagamento").hide();
                           $("#resumo").hide();
                             $("#valores").show();
                               $("#contato").show();
                                 $("#myDivValores").hide();
                                   $("#myDivValores2").hide();
                                     $(".myDivSlide").show();
                                   $("#promocao").show();
                                 $(".none").show();
                               $("#cartoes").show();
                             $(".container").show();
                           $(".containers").show();
                         $("#titulo").hide();
                       $("#divContainer").attr('style', 'background-color: transparent');
                     $("#divMomentos").hide();
                  $("#txtMomentos").hide();

    } );



     $("#orcamentoMenu").click(function() {
       $("#myDivvalores").hide();
         $("#myDivValores2").hide();
           $("#orcamento").show();
             $("#radio").show();
               $("#foto").show();
                 $("#opcoes").show();
                   $("#opcoes2").show();
                     $("#valor").show();
                       $("#orcamento").show();
                         $("#radio").show();
                           $(".hr").show();
                             $("#pagamento").show();
                               $(".hr").show();
                                 $("#resumo").show();
                                   $(".container").show();
                                     $(".myDivSlide").hide();
                                   $("#promocao").hide();
                                 $(".none").hide();
                               $("#cartoes").show();
                             $(".containers").hide();
                           $("#divContainer").attr('style', 'background-color: #ffb1cde6');
                         $("#divMomentos").hide();
                       $("#txtMomentos").hide();
    } );





     $("#momentos").click(function() {
       $("#myDivValores").hide();
         $("#myDivValores2").hide();
           $("#orcamento").hide();
             $("#radio").hide();
               $("#foto").hide();
                 $("#opcoes").hide();
                   $("#opcoes2").hide();
                     $("#valor").hide();
                       $("#orcamento").hide();
                         $("#radio").hide();
                           $("#pagamento").hide();
                             $(".hr").hide();
                               $("#resumo").hide();
                                 $(".container").hide();
                                   $(".myDivSlide").hide();
                                 $("#promocao").hide();
                               $(".none").hide();
                             $("#cartoes").hide();
                           $(".containers").hide();
                         $("#divContainer").hide();
                       $("#divMomentos").show();
                     $("#txtMomentos").show();
    } );



 $("#contato").click(function() {
   $("#orcamento").hide();
     $("#radio").hide();
       $("#foto").hide();
         $("#opcoes").hide();
           $("#opcoes2").hide();
             $("#valor").hide();
               $("#orcamento").hide();
                 $("#radio").hide();
                   $(".hr").hide();
                     $("#pagamento").hide();
                       $("#resumo").hide();
                     $("#valores").show();
                   $("#contato").show();
                 $("#myDivValores").show();
               $("#myDivValores2").show();
             $(".container").hide();
           $(".myDivSlide").hide();
         $("#promocao").hide();
       $(".none").hide();
     $("#cartoes").hide();
   $(".containers").hide();
   $("#divContainer").attr('style', 'background-color: transparent');
   $("#divMomentos").hide();
   $("#txtMomentos").hide();

   } );  
} );
