import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      valorJson:''
    }
  }
  pegaValor=(evento)=>{
    //Pego o arquivo Json escrito pelo usuário
    this.setState({valorJson:evento.target.value})
  }

  converteValor=()=>{
    //Joguei o state em uma variável e transformei em um objeto(array dentro de array)
    var listaDeNomes=this.state.valorJson
    var listaDeNomesObjeto=JSON.parse(listaDeNomes)
    console.log(listaDeNomesObjeto)
    //Percorro todos os ítens da lista, pegando separadamente o valor e o tipo
    var elementoConvertido=''
    for( var i in listaDeNomesObjeto){
      var elemento=listaDeNomesObjeto[i]
      var tipoDoElementoConvertido=Object.keys(elemento).toString()
      elementoConvertido=elementoConvertido+'\n'+ Object.values(elemento).toString()
    }
    //Jogo o valor e o tipo no texto da janela 2
    document.getElementById('janela2').innerHTML=tipoDoElementoConvertido+elementoConvertido
  } 
  
  render(){
    return(
      <div>
        <textarea id="janela1" className="janela" onChange={this.pegaValor}></textarea>
        <textarea id="janela2" className="janela"></textarea>
        <p>
          <button className="botao" onClick={this.converteValor}>Converter!</button>
        </p>
      </div>
    )
  }
}

export default App;
