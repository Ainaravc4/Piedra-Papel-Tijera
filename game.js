
class Jugador{
 
  ganador(){
    document.getElementById("solu").textContent="GANASTES";
    document.body.style.backgroundColor="#CBFFC1"
  }
  perdedor(){
    document.getElementById("solu").textContent="PERDISTES";
    document.body.style.backgroundColor="#FFC1C1"
  }
  empate(){
    document.getElementById("solu").textContent="EMPATE";
    document.body.style.backgroundColor="#FFF2C5"
  }

  
}


class roshambo{
  constructor(u,m){
    this.usuario=u;
    this.maquina=m;
    this.resultUs='';
    this.resultMa='';
  }

  tiradaUsuario(n){
    switch(n){
      case 1: this.resultUs='Piedra';break;
      case 2: this.resultUs='Papel';break;
      case 3: this.resultUs='Tijera';
  }
    return  this.resultUs;
  }

  tiradaMaquina(){
    var sacar = Math.floor( Math.random() * 3);
    switch(sacar){
      case 0: this.resultMa='Piedra';break;
      case 1: this.resultMa='Papel';break;
      case 2: this.resultMa='Tijera';
  }
    return this.resultMa;

  }

  validar(){

    let turnoUsuario= this.resultUs;
    let turnoMaquina=this.resultMa;

    if(turnoUsuario == 'Piedra')
    {
      if(turnoMaquina =='Piedra'){this.usuario.empate();}

        else if(turnoMaquina == 'Tijera'){this.usuario.ganador();}

          else if(turnoMaquina == 'Papel'){this.usuario.perdedor();}

    }

    else if(turnoUsuario == 'Papel')
    {
    if(turnoMaquina =='Piedra'){this.usuario.ganador();}

    else if(turnoMaquina == 'Papel'){this.usuario.empate();}

    else if(turnoMaquina == 'Tijera') {this.usuario.perdedor();}
   }

    else if(turnoUsuario == 'Tijera')
    {
    if(turnoMaquina == 'Piedra'){this.usuario.perdedor();}
      
    else if(turnoMaquina == 'Papel'){this.usuario.ganador();}

    else if(turnoMaquina == 'Tijera'){ this.usuario.empate();}
    }

  }
}

var tu= new Jugador();
var el= new Jugador();
var juego= new roshambo(tu,el);

//var tiradaMaquina=juego.tiradaMaquina();

window.onload=function(){
  var piedra= document.getElementById("piedra");
  var papel= document.getElementById("papel");
  var tijera= document.getElementById("tijera");

  var zonaUser=document.getElementById("tusu");


  zonaUser.childNodes[1].width = 300;

  piedra.addEventListener("click",()=>{
    
    juego.tiradaUsuario(1);
    juego.tiradaMaquina();
    juego.validar();
    zonaUser.childNodes[1].src="./piedra.png";

    let tiradaMaquina=juego.resultMa;
    var zonaMaq=document.getElementById("tmaq");
    zonaMaq.childNodes[1].width = 300;
    if(tiradaMaquina=="Piedra"){
      zonaMaq.childNodes[1].src="./piedra.png";
    }
    if(tiradaMaquina=="Papel"){
      zonaMaq.childNodes[1].src="./papel.png";
    }
    if(tiradaMaquina=="Tijera"){
      zonaMaq.childNodes[1].src="./tijera.png";
    }
    
  })

  papel.addEventListener("click",()=>{
    zonaUser.childNodes[1].src="./papel.png";
    juego.tiradaUsuario(2);
    juego.tiradaMaquina();
    juego.validar();

    let tiradaMaquina=juego.resultMa;
    var zonaMaq=document.getElementById("tmaq");
    zonaMaq.childNodes[1].width = 300;
    if(tiradaMaquina=="Piedra"){
      zonaMaq.childNodes[1].src="./piedra.png";
    }
    if(tiradaMaquina=="Papel"){
      zonaMaq.childNodes[1].src="./papel.png";
    }
    if(tiradaMaquina=="Tijera"){
      zonaMaq.childNodes[1].src="./tijera.png";
    }
  })

  tijera.addEventListener("click",()=>{
    zonaUser.childNodes[1].src="./tijera.png";
    juego.tiradaUsuario(3);
    juego.tiradaMaquina();
    juego.validar();

    let tiradaMaquina=juego.resultMa;
    var zonaMaq=document.getElementById("tmaq");
    zonaMaq.childNodes[1].width = 300;
    if(tiradaMaquina=="Piedra"){
      zonaMaq.childNodes[1].src="./piedra.png";
    }
    if(tiradaMaquina=="Papel"){
      zonaMaq.childNodes[1].src="./papel.png";
    }
    if(tiradaMaquina=="Tijera"){
      zonaMaq.childNodes[1].src="./tijera.png";
    }
    
  })
} 




