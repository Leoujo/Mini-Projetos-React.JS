import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      dataFutura:'',
      horaFutura:'',
      nomeDoTimer:''
    }
  }
  pegaData=(evento)=>{
    //Fica salvo como uma string
    this.setState({dataFutura:evento.target.value})
  }
  pegaHora=(evento)=>{
    //Fica salvo como uma string
    this.setState({horaFutura:evento.target.value})
  }
  pegaNome=(evento)=>{
    //Pega o nome do timer
    this.setState({nomeDoTimer:evento.target.value})
  }
  calculaTempo=()=>{
    //Pega cada dado de data, hora e minuto, e transforma para milisegundo
    //Comparo isso com os milisegundos da data atual
    if(this.state.dataFutura==''){
      window.alert('Por favor, insira uma data.')
    }else{
      var dataFutura=(this.state.dataFutura).split('-')
      var ano=dataFutura[0]
      var mes=dataFutura[1]
      var dia=dataFutura[2]

      var totalMaisEmMilisegundos=0

      if(this.state.horaFutura!=''){
        var horaFutura=(this.state.horaFutura).split(':')
        var horaInput=parseInt( horaFutura[0],10)
        var minutoInput=parseInt(horaFutura[1],10) 
        
        var horaInputEmMilisegundos=horaInput*(60*60*1000)
        var minutoInputEmMilisegundos=minutoInput*(60*1000)

        totalMaisEmMilisegundos=horaInputEmMilisegundos+minutoInputEmMilisegundos
      }

      //Não precisa testar se o dia, mês e ano é válido, pois o tipo do input foi definido!
      setInterval(()=>{
        var dataAtualFormatada=new Date()
        //Ele começa a conta a partir do 0, por isso subtrai 1 no mês
        var dataFuturaFormatada=new Date(ano,mes-1,dia)
      
        var dataFuturaEmMiliSegundos=dataFuturaFormatada.getTime()+totalMaisEmMilisegundos
        var dataAtualEmMiliSegundos=dataAtualFormatada.getTime()
  
        var diferencaEntreDatasEmMiliSegundos=dataFuturaEmMiliSegundos-dataAtualEmMiliSegundos
        
        var segundosDaDiferenca=diferencaEntreDatasEmMiliSegundos/1000
        var minutosDaDiferenca=0
        var horasDaDiferenca=0
        var diasDaDiferenca=0
        
        //Faz a conversão da diferença de milissegundos para dia, hora, minuto e segundo
        if (segundosDaDiferenca>=60){
          minutosDaDiferenca=segundosDaDiferenca/60
          segundosDaDiferenca=(segundosDaDiferenca%60)
          if (minutosDaDiferenca>=60){
            horasDaDiferenca=minutosDaDiferenca/60
            minutosDaDiferenca=minutosDaDiferenca%60
            if (horasDaDiferenca>=24){
              diasDaDiferenca=horasDaDiferenca/24
              horasDaDiferenca=horasDaDiferenca%24
            }
          }
        }
        //Trunquei os resultados
        var segundoTruncado=Math.trunc(segundosDaDiferenca)
        var minutoTruncado=Math.trunc(minutosDaDiferenca)
        var horaTruncada=Math.trunc(horasDaDiferenca)
        var diaTruncado=Math.trunc(diasDaDiferenca)
        
        document.getElementById('nome-do-timer').innerHTML=this.state.nomeDoTimer
        document.getElementById('resultado').innerHTML=diaTruncado+' dias  '+horaTruncada+' horas '
        +minutoTruncado+' minutos '+segundoTruncado+' segundos '

      },1000)
    } 
  }
  
  render(){
    return(
      <div>
        <input id="nome" type="text" placeholder="Nome do timer" onChange={this.pegaNome}></input>
        <input className="input" type="date" onChange={this.pegaData} placeholder="Data" placeholder="Data"></input>
        <input className="input" type="time" onChange={this.pegaHora} placeholder="Hora"></input>
        <br/>
        <button  id="botao" onClick={this.calculaTempo}>Aqui</button>
        <div id="nome-do-timer" className="resultado"></div>
        <div id="resultado" className="resultado"></div>
      </div>
    )
  }
}

export default App;
