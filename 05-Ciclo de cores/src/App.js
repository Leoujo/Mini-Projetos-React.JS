import React from 'react';
import'./App.css';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      valorDigitado1:"",
      valorDigitado2:"",
      valorDigitado3:"",
      pegaAtraso1:"",
      pegaAtraso2:"",
      pegaAtraso3:"",
      clique:0
    }
  }
  
  pegaCodigo1=(evento)=>{
    this.setState({valorDigitado1:evento.target.value})
  }
  pegaCodigo2=(evento)=>{
    this.setState({valorDigitado2:evento.target.value})
  }
  pegaCodigo3=(evento)=>{
    this.setState({valorDigitado3:evento.target.value})
  }

  pegaAtraso1=(evento)=>{
    this.setState({pegaAtraso1:evento.target.value})
  }
  pegaAtraso2=(evento)=>{
    this.setState({pegaAtraso2:evento.target.value})
  }
  pegaAtraso3=(evento)=>{
    this.setState({pegaAtraso3:evento.target.value})
  }

  //-----------------------------------------------------------------------------------------------------------------
  confirmaEterminaCodigo=()=>{
    //Testando se são apenas números mesmo
    var tudoQueFoiDigitado=this.state.pegaAtraso1+this.state.pegaAtraso2+this.state.pegaAtraso3+this.state.valorDigitado1+this.state.valorDigitado2+this.state.valorDigitado3
    tudoQueFoiDigitado.split('')
    for(var i in tudoQueFoiDigitado){
      var cadaElemento=tudoQueFoiDigitado[i]
      if(cadaElemento!=='0' && cadaElemento!=='1' && cadaElemento!=='2' && cadaElemento!=='3' && cadaElemento!=='4' && cadaElemento!=='5' && cadaElemento!=='6' && cadaElemento!=='7' && cadaElemento!=='8' && cadaElemento!=='9'){
        //Alertando, se tiver algum dígito que não é um número
        window.alert("Insira apenas números!")
        break;
      }
      else{
        //Pegando os valores digitados e transformando em números
        var atraso1=parseInt(this.state.pegaAtraso1,10)
        var atraso2=parseInt(this.state.pegaAtraso2,10)
        var atraso3=parseInt(this.state.pegaAtraso3,10)

        var valor1=parseInt(this.state.valorDigitado1,10)
        var valor2=parseInt(this.state.valorDigitado2,10)
        var valor3=parseInt(this.state.valorDigitado3,10)

      }
    }
    //Fazendo uma variável auxiliadora, que me faz diferenciar o primeiro clique (valor 1) do segundo
    //clique (valor2)
    if(this.state.clique===0){
      this.setState({clique:1})
    }
    if(this.state.clique===1){
      this.setState({clique:0})
    }
    console.log(this.state.clique)
    
    //Aqui, se o valor for 1, fica no loop. Se for 2, ele para.
    var teste=setInterval( ()=>{
      if(this.state.clique===1){
        document.getElementById('figura').style.background='rgb('+valor1+','+valor2+','+valor3+')'
        valor1+=atraso1
        valor2+=atraso2
        valor3+=atraso3
        console.log('primeiro')
      }
      if(this.state.clique===0){
        clearInterval(teste)
        console.log('segundo')
      }
    } ,250)
  } 
   
  render(){
    return(
      <div>
        <p id="figura"></p>
        <p className="letra">Valor em rgb</p>
        <input className="janelaDeInput" onChange={this.pegaCodigo1}maxLength="2"></input>
        <input className="janelaDeInput" onChange={this.pegaCodigo2}maxLength="2"></input>
        <input className="janelaDeInput" onChange={this.pegaCodigo3}maxLength="2"></input>
        <br/>
        <p className="letra">Valor de atraso</p>
        <input className="janelaDeInput" onChange={this.pegaAtraso1} maxLength="2"></input>
        <input className="janelaDeInput" onChange={this.pegaAtraso2} maxLength="2"></input>
        <input className="janelaDeInput" onChange={this.pegaAtraso3} maxLength="2"></input>
        <p><button className="botaoConfirmar" onClick={this.confirmaEterminaCodigo}>Aplicar</button></p>
      </div>
    )
  }
}

export default App;
