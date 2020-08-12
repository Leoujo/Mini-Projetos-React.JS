import React from 'react';
import './App.css';
import Esfera from './componentes/Esfera'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      valorInseridoPeloUsuario:""
    }
  }

  comecar=()=>{
    //Ao ser clicado no botão "iniciar", faço todos os elementos receberem a animação de piscar!
    document.getElementById ('esfera1').style.animation='pisca-pisca 0.7s infinite'
    document.getElementById ('esfera2').style.animation='pisca-pisca 0.7s infinite 0.1s'
    document.getElementById ('esfera3').style.animation='pisca-pisca 0.7s infinite 0.2s'
    document.getElementById ('esfera4').style.animation='pisca-pisca 0.7s infinite 0.3s'
    document.getElementById ('esfera5').style.animation='pisca-pisca 0.7s infinite 0.4s'
    document.getElementById ('esfera6').style.animation='pisca-pisca 0.7s infinite 0.5s'
    document.getElementById ('esfera7').style.animation='pisca-pisca 0.7s infinite 0.6s'
    
  }

  terminar=()=>{
    //Ao ser clicado no botão "cancelar", todos os elementos não tem mais a animação
    document.getElementById ('esfera1').style.animation=''
    document.getElementById ('esfera2').style.animation=''
    document.getElementById ('esfera3').style.animation=''
    document.getElementById ('esfera4').style.animation=''
    document.getElementById ('esfera5').style.animation=''
    document.getElementById ('esfera6').style.animation=''
    document.getElementById ('esfera7').style.animation=''
    
  }

  pegaNum=(evento)=>{
    //Pego o valor final que o usuário digitou
    this.setState({valorInseridoPeloUsuario:evento.target})

  }

  mudaVelocidade=()=>{
    //O valor digitado pelo usuário passar a valer como intervalo da animação
    var valorInserido=this.state.valorInseridoPeloUsuario
    var valorInseridoNumber=parseInt(valorInserido.value,10) 

    var atraso1=(valorInseridoNumber*1)+'s'
    var atraso2=(valorInseridoNumber*2)+'s'
    var atraso3=(valorInseridoNumber*3)+'s'
    var atraso4=(valorInseridoNumber*4)+'s'
    var atraso5=(valorInseridoNumber*5)+'s'
    var atraso6=(valorInseridoNumber*6)+'s'
    var atraso7=(valorInseridoNumber*7)+'s'

    document.getElementById ('esfera1').style.animation='pisca-pisca '+atraso7+' infinite '+atraso1
    document.getElementById ('esfera2').style.animation='pisca-pisca '+atraso7+' infinite '+atraso2
    document.getElementById ('esfera3').style.animation='pisca-pisca '+atraso7+' infinite '+atraso3
    document.getElementById ('esfera4').style.animation='pisca-pisca '+atraso7+' infinite '+atraso4
    document.getElementById ('esfera5').style.animation='pisca-pisca '+atraso7+' infinite '+atraso5
    document.getElementById ('esfera6').style.animation='pisca-pisca '+atraso7+' infinite '+atraso6  
    document.getElementById ('esfera7').style.animation='pisca-pisca '+atraso7+' infinite '+atraso7
  }
  render(){
    return (
      <div>
        <Esfera/>
        <button onClick={this.comecar} className='botao'>Começar</button>
        <button onClick={this.terminar} className='botao'>Parar</button>
        <input onChange={this.pegaNum} type="number" className='espaco-enviar'></input>
        <button onClick={this.mudaVelocidade} className='botao-enviar'>Alterar ritmo</button>
      </div>
    )
  }
}

export default App;
