//el arreglo que tiene la posiciones de las opciones para
//que en el verificarorden se contemplen
const arreglo=[9,8,7,6,5,4,3,2,1];
var errores=0;
//audios
var arreglo_aleatorio=[1,2,3,4,5,6,7,8,9];
const aud1=new Audio("assent/audios/1.mp3");
const aud2=new Audio("assent/audios/2.mp3");
const aud3=new Audio("assent/audios/3.mp3");
const aud4=new Audio("assent/audios/4.mp3");
const aud5=new Audio("assent/audios/5.mp3");
const aud6=new Audio("assent/audios/6.mp3");
const aud7=new Audio("assent/audios/7.mp3");
const aud8=new Audio("assent/audios/8.mp3");
const aud9=new Audio("assent/audios/9.mp3");
const audm1=new Audio("assent/audios/m1.mp3");
const audm2=new Audio("assent/audios/m2.mp3");
const audamb=new Audio("assent/audios/ambiente.mp3");

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}


function cargarImagenes(){
    //carga las imagenes de manera aleatoria 
    shuffleArray(arreglo_aleatorio);
    console.log(arreglo_aleatorio);
    var contenedor=document.getElementById("contenedor_imagenes");
    var html="";
    for(var i=1; i<=9;i++){
        if(i==1){
        html+='<li><div  ' +'id='+'"img'+arreglo_aleatorio[arreglo_aleatorio.length-1]+'"'+'class='+'"'+'div-img'+'"'+'><img class='+'"'+'d-block img'+'"'+'src='+'"'+'assent/images/'+arreglo_aleatorio[arreglo_aleatorio.length-1]+'.png'+'"'+'name='+'"img'+arreglo_aleatorio[arreglo_aleatorio.length-1]+'"></div></li>';
    }else{
        html+='<li><div  '+'id='+'"img'+arreglo_aleatorio[arreglo_aleatorio.length-1]+'"'+'class='+'"'+'div-img '+'"'+'><img class='+'"'+'d-block img'+'"'+'src='+'"'+'assent/images/'+arreglo_aleatorio[arreglo_aleatorio.length-1]+'.png'+'"'+ 'name='+'"img'+arreglo_aleatorio[arreglo_aleatorio.length-1]+'"></div></li>';
       
    }
    arreglo_aleatorio.pop();}
    contenedor.innerHTML=html;
}

function verificarOpcion(){
    //definicion de las variables para modificar en el html
    var img1=document.getElementById("img1");
    var img2=document.getElementById("img2");
    var img3=document.getElementById("img3");
    var img4=document.getElementById("img4");
    var img5=document.getElementById("img5");
    var img6=document.getElementById("img6");
    var img7=document.getElementById("img7");
    var img8=document.getElementById("img8");
    var img9=document.getElementById("img9");
    var t1=document.getElementById("t1");
    var t2=document.getElementById("t2");
    var t3=document.getElementById("t3");
    var t4=document.getElementById("t4");
    var t5=document.getElementById("t5");
    var t6=document.getElementById("t6");
    var t7=document.getElementById("t7");
    var t8=document.getElementById("t8");
    var t9=document.getElementById("t9");
    var modal=document.getElementById("modal");
    var imgmodal=document.getElementById("imgporfallas");
    var fallas=document.getElementById("fallas");
    //Empieza a escuchar los clicks, si verificarOrden es true 
    //elimina la capa que cubre a la parte de la primera opcion
    //y deja el espacio vacio. idem para todos
    img1.addEventListener("click",function(event) {
        if(verificarOrden(9)){
            aud1.play();
            t1.style.display="none";
            img1.style.display="none";

        }else{
            
        }
        
        event.preventDefault();
    });

    img2.addEventListener("click",function(event) {
        if(verificarOrden(8)){
            aud2.play();
            t2.style.display="none";
            img2.style.display="none";
        }
        event.preventDefault();
    });

    img3.addEventListener("click",function(event) {
        if(verificarOrden(7)){
            aud3.play();
            t3.style.display="none";
            img3.style.display="none";
        }
        
        event.preventDefault();
    });

    img4.addEventListener("click",function(event) {
        if(verificarOrden(6)){
            aud4.play();
            t4.style.display="none";
            img4.style.display="none";
        }
        
        event.preventDefault();
    });

    img5.addEventListener("click",function(event) {
        if(verificarOrden(5)){
            aud5.play();
            t5.style.display="none";
            img5.style.display="none";
        }
        
        event.preventDefault();
    });

    img6.addEventListener("click",function(event) {
        if(verificarOrden(4)){
            aud6.play();
            t6.style.display="none";
            img6.style.display="none";
        }
        
        event.preventDefault();
    });

    img7.addEventListener("click",function(event) {
        if(verificarOrden(3)){
            aud7.play();
            t7.style.display="none";
            img7.style.display="none";
        }
        
        event.preventDefault();
    });

    img8.addEventListener("click",function(event) {
        if(verificarOrden(2)){
            aud8.play();
            t8.style.display="none";
            img8.style.display="none";
        }
        
        event.preventDefault();
    });
    //como es el ultimo, activa el modal y el sonido de finalizar
    //errores es un contador de las veces que falla
    img9.addEventListener("click",function(event) {
        if(verificarOrden(1)){
            aud9.play();
            t9.style.display="none";
            img9.style.display="none";
            modal.style.display="block";
            if(errores<=5){
                console.log("entre")
                fallas.innerHTML="Has fallado un total de: " + errores + " nada mal :D";
                imgmodal.innerHTML='<img src='+'"assent/images/feliz.jpg"'+'class='+'"imgmodal"'+'>';
            }else{
                fallas.innerHTML="Has fallado un total de: " + errores + " yo volveria a intentarlo :s";
                imgmodal.innerHTML='<img src='+'"assent/images/enojado.jpg"'+'class='+'"imgmodal"'+'>';
            }
        }
        
        event.preventDefault();
    });
}

function verificarOrden(opcion){
    //al final no use el los valor dentro del arreglo
    //si no que con la misma longitud del mismo puedo
    //ir verificando si se da en opcion en la posicion 
    //correcta
    //si la condicion es true quita un elemento del arreglo
    //asi que si toco la imagen 9, elimina un elemento del arreglo
    //por lo cual arreglo.lenght=8, asi que para que la condición sea
    //verdadera se debera tocar la imagen 8 e idem para el resto
    if(opcion==arreglo.length){
        arreglo.pop();
        return true;
    }else{
        //cuenta los errores si toco la imagen equivocada
        console.log("falle");
        errores++;
        if(errores<5){
            audm1.play();
        }else{
            audm2.play();
        }
       
        return false;
    }
}
