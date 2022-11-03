/*leemos las entradas para apostar*/
const opciones = document.getElementById("opciones");
/*leemos las entradas de las opciones*/
const caraOpcion = document.getElementById("cara");
const selloOpcion = document.getElementById("sello");
/*leemos la entrada de los botones*/
const boton = document.getElementById('apostar');
const terminar = document.getElementById('terminar');
/*leemos la entrada del resultado*/
const resultadoJuego = document.getElementById("resultado");
/*leemos la entrada del campo apostar*/
/**************************/
var cont = 0, total = 0;

//iniciamos el juego
boton.addEventListener('click', ()=>{
    opciones.classList.replace("opciones","opcionesAparecer");  
});

caraOpcion.addEventListener("click", () =>{
    iniciarJuego('cara');
    cont++
});

selloOpcion.addEventListener("click", () =>{
    iniciarJuego('sello');
    cont++
});

function iniciarJuego(opcion){
    var valor = document.getElementById('valorApostar').value;
    valor = parseFloat(valor);
    if(valor >= 5000)
    {
        //movimiento pc
        const movPC = movimientoPc();
        //movimiento usuario
        const movUsuario = opcion;
        //comparacion de movimiento
        const comp = compracion(movPC, movUsuario);
        //resultado
        if (comp == 1) {
            total = total + valor;
            resultadoJuego.innerHTML = "<br> <span class='ganador'>Usted a ganado, la moneda cayo en "+ movPC+"</span>";
        }
        else if (comp == 2) {
            total = total - valor;
            resultadoJuego.innerHTML = "<br> <span class='perdedor'>Usted a perdido, la moneda cayo en "+ movPC+"</span>";
            if(total <= -100000)
            {
                alert("Usted no puede jugar mas, llego a un limite de perdida en el juego");
                window.location.reload(true);
            }
        }
    }
    else if(valor < 5000)
    {
        alert("La apuesta debe ser mayor a $5000")
        window.location.reload(true);
    }
}

function movimientoPc(){
    const opciones = ['cara', 'sello'];
    const random = Math.floor(Math.random()*2);
    const mov = opciones[random];
    return (mov);
}

function compracion(pc, usuario){
    switch (usuario+pc){
        case 'caracara':
        case 'sellosello':
            return 1; //gana
        case 'carasello':
        case 'sellocara':
            return 2; //pierde
    }
}

terminar.addEventListener('click', ()=>{
    alert("Usted tiene un valor de "+total+" y las veces que jugo fueron "+cont);
    window.location.reload(true);
});
/*
const opciones = document.getElementById("opciones");

const caraOpcion = document.getElementById("cara");
const selloOpcion = document.getElementById("sello");

const resultadoJuego = document.getElementById("resultado");

const boton = document.getElementById('apostar');
var i = 0;

boton.addEventListener('click', ()=>{
      var valor = document.getElementById('valorApostar').value;
      if(valor > 1999){

        opciones.classList.replace("opciones","opcionesAparecer");  

            var confir = false;
            
                while(confir == true){ 

                    caraOpcion.addEventListener('click', ()=>{

                        confir = window.confirm("¿Desea Continuar?");  
                    })
                    
                }         
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
      function movimientoPc(){
        const opciones = ['cara', 'sello'];
        const random = Math.floor(Math.random()*2);
        const mov = opciones[random];
        return (mov);
    }
    function iniciarJuego(opcion){
    
        //movimiento pc
        const movPC = movimientoPc();
        //movimiento usuario
        const movUsuario = opcion;
        //comparacion de movimiento
        const comp = compracion(movPC, movUsuario);
        //resultado
        if (comp == 1) {
            resultadoJuego.innerHTML = "<br> <span class='ganador'>Usted a ganado, la moneda cayo en "+ movPC+ " </span>";
            var valorSuma = (apostar + valorSuma) * 2;
        }
        else if (comp == 2) {
            resultadoJuego.innerHTML = "<br> <span class='perdedor'>Usted a perdido, la moneda cayo en "+ movPC+ " </span>";
            var valorSuma = apostar - valorSuma;
        }
    }
    
    function compracion(pc, usuario){
        switch (usuario+pc){
            case 'caracara':
            case 'sellosello':
                return 1; //gana
            case 'carasello':
            case 'sellocara':
                return 2; //pierde
        }
    }    
})


const boton = document.getElementById('apostar');
var opcion = 0; 
var i = 0;

boton.addEventListener('click', ()=>{
    var valor = document.getElementById('valorApostar').value;
    var total= valor;
    var confir = true;
    if (valor >= 5000) 
    {
        while(confir == true)
        {
            i++
            var rando =  Math.random()*2;
            var moneda = rando.toPrecision(1);
            console.log(moneda);
            parseInt(opcion); 
            total = parseInt(total);
            valor = parseInt(valor);
            opcion = prompt(`Eliga: \n 1. Cara \n 2. Sello`);  
            if(moneda == opcion)
            {       
                total = total + valor;  
                window.alert(`¡¡Usted ha ganado!!`);
            }
            else
            {
                    total = total - valor 
                    window.alert(`¡¡Usted ha perdido!!`);
            }
            console.log(`${total}`);
            
            confir = window.confirm("¿Desea Continuar?");  

            if(total <= -100000)
            {
                confir = false;
                window.alert(`Haz tenido mala suerte perdiste ${total}$ pesos y haz jugado ${i}`);
                window.alert(`GRACIAS POR JUGAR!!`);
            }
        }     
        if(total > 0)
        {
            window.alert(`Usted jugo ${i} vece(s) y le quedo ${total}$ pesos`);
            window.alert(`GRACIAS POR JUGAR!!`);
        } 
    }
})*/
