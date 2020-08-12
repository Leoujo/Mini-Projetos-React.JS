import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      numBin:"",
      numDec:""
    }
  }
  
  pegaValor=(evento)=>{
    this.setState({numBin:evento.target.value})   
  }
  converteValor=()=>{
    var valorTotalDigitado=document.getElementById('tese').value
    var vetorTotal=valorTotalDigitado.split('')
    
    for (var i in vetorTotal) {
      var vetorIndividual=vetorTotal[i]
      
      if(vetorIndividual!=='0' &&vetorIndividual!=='1' ){
        window.alert(`Atenção! Há números ou letras não binárias`)
        break;
        
      }else{
        this.setState({numBin:valorTotalDigitado})
        var convercao=parseInt(this.state.numBin,2)
        this.setState({numDec:convercao})     
      }
    }  
  }
  
  render(){  
    return(
      <div>
        <p>Digite até 8 caractéres</p>
        <input maxLength="8" id="tese" onChange={this.pegaValor} />
        <input type="button" value="Converter" onClick={this.converteValor}/>
      <p>O número digitado {this.state.numBin}</p>
      <p>se converte para {this.state.numDec}</p>
      </div>        
    )
  }
}
export default App;
