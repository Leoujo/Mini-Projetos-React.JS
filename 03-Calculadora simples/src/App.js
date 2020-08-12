import React from 'react';
import Botao from './Componentes/Botao';
import BotaoApagar from'./Componentes/BotaoApagar';
import Input from './Componentes/Input';
import Operadores from './Componentes/Operadores';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      inputado:''
    } 
  }
  
  pegaNum=(evento)=>{  
    var numAnterior=this.setState({inputado:this.state.inputado+evento.target.value}) 
  }

  finalizaConta=(evento)=>{
    var numAtual=this.state.inputado
    var todosOsDigitos=numAtual.split('')
    for (var i in todosOsDigitos){
      var elemento=todosOsDigitos[i]
      //Sei a posição do símbolo, através do seu "i"
      switch(elemento){
        //Se encontrarem algum símbolo, vão pegar a parte uma parte do array até antes do mesmo, e colocar em uma váriável e depois
        //colocar a outra metade em outra váriavel. Por fim, transformo ambas novamente em string (juntando), depois em número e faço
        //a respectiva conta final.
        case '/':
          var valorAnterior=todosOsDigitos.slice(0,i)
          var valorPosterior=(todosOsDigitos.slice(i,todosOsDigitos.length).slice(1))

          var valorAnteriorNum=parseInt(valorAnterior.join(''),10)
          var valorPosteriorNum=parseInt(valorPosterior.join(''),10)

          this.setState({inputado:valorAnteriorNum/valorPosteriorNum})
          break;

        case '*':
          var valorAnterior=todosOsDigitos.slice(0,i)
          var valorPosterior=(todosOsDigitos.slice(i,todosOsDigitos.length).slice(1))

          var valorAnteriorNum=parseInt(valorAnterior.join(''),10)
          var valorPosteriorNum=parseInt(valorPosterior.join(''),10)
          
          this.setState({inputado:valorAnteriorNum*valorPosteriorNum})
          break;

        case '+':
          var valorAnterior=todosOsDigitos.slice(0,i)
          var valorPosterior=(todosOsDigitos.slice(i,todosOsDigitos.length).slice(1))

          var valorAnteriorNum=parseInt(valorAnterior.join(''),10)
          var valorPosteriorNum=parseInt(valorPosterior.join(''),10)
          
          this.setState({inputado:valorAnteriorNum+valorPosteriorNum})
          break;

        case '-':
          var valorAnterior=todosOsDigitos.slice(0,i)
          var valorPosterior=(todosOsDigitos.slice(i,todosOsDigitos.length).slice(1))

          var valorAnteriorNum=parseInt(valorAnterior.join(''),10)
          var valorPosteriorNum=parseInt(valorPosterior.join(''),10)
          
          this.setState({inputado:valorAnteriorNum-valorPosteriorNum})
           break;
      }
    }
    console.log(this.state.inputado)
  } 

  apagaTudo=(evento)=>{
    this.setState({inputado:''})
  }

  apagaUltimo=(evento)=>{
    var numRecebido=this.state.inputado
    //Pego o estado do "inputado" e se for uma string, divido-o em um array, tiro seu último dígito e o junto de novo.
    //Caso seja um number, o transformo em string antes de fazer tudo isso.
    if(typeof numRecebido =='string'){
      var estadoAtualArray=numRecebido.split('').slice(0,-1)
      var estadoAtualString=estadoAtualArray.join('')
      this.setState({inputado:estadoAtualString})  
    }
    else{
      var numRecebidoString=numRecebido.toString() 
      var arraySemUltimo=numRecebidoString.split('').slice(0,-1)
      var estadoFinal=arraySemUltimo.join('')
      this.setState({inputado:estadoFinal})
    }  
  }

  render(){ 
    return(  
      <div >
        <Input text={this.state.inputado} /> 
        <Botao  text='1' value="1" onClick={this.pegaNum}/>
        <Botao  text='2' value="2" onClick={this.pegaNum}/>
        <Botao text="3" value="3" onClick={this.pegaNum}/>
        <Operadores text="/" value="/" onClick={this.pegaNum}/>
        <br/>
        <Botao text="4" value="4"onClick={this.pegaNum}/>
        <Botao text="5" value="5"onClick={this.pegaNum}/>
        <Botao text="6" value="6"onClick={this.pegaNum}/>
        <Operadores text="x" value="*" onClick={this.pegaNum}/>
        <br/>
        <Botao text="7" value="7"onClick={this.pegaNum}/>
        <Botao text="8" value="8"onClick={this.pegaNum}/>
        <Botao text="9" value="9"onClick={this.pegaNum}/>
        <Operadores text="+" value="+" onClick={this.pegaNum}/>
        <br/>
        <Botao text="Apagar" onClick={this.apagaUltimo} />
        <Botao text="0" value="0" onClick={this.pegaNum}/>
        <Botao text="=" value="=" onClick={this.finalizaConta}/>
        <Operadores text="-" value="-" onClick={this.pegaNum}/>
        <br/>
        <BotaoApagar text="Apagar tudo" onClick={this.apagaTudo}/>
      </div>
    )    
  }
}

export default App;
