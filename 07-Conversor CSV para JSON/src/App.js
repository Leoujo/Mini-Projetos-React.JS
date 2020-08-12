import React from 'react';
import './App.css';
import {saveAs} from 'file-saver';

//Vou partir do princípio que só podem 2 tipos de arquivos (no caso, id e nome)
class App extends React.Component{
  constructor(){
    
    super()
    this.state={
      valorCSV:'',
      nome:'',
      texto:''
    }
  }

  //Pego o arquivo JCSV escrito pelo usuário
  pegaValor=(evento)=>{ 
    this.setState({valorCSV:evento.target.value})
  }

  //Vejo se o usuário escreveu mesmo. Se sim, pego os 2 tipos de dados e os outros valores
  converteValor=()=>{
    if(this.state.valorCSV===''){
      window.alert("Digite algo!")
    }else{
      var nomes=this.state.valorCSV
      var primeiroDado=nomes.split(',','1').toString('')
      var segundoDado=nomes.split('\n',1).toString('')
      var novoSegundoDado=segundoDado.replace(primeiroDado+',','')

      var todosOsDados=nomes.split('\n').slice(1)
      var todosOsValores=[]

      //Passo por cada linha dos dados, colocando o seu tipo. Junto tudo, formato e imprimo na janela2.
      for (var i in todosOsDados){
        var itemEmLista=todosOsDados[i].split('')
        itemEmLista.splice(0,0,primeiroDado+':')
        itemEmLista.splice(5,0,novoSegundoDado+':')

        var junto=itemEmLista.join('')
        todosOsValores.push('\n'+'['+'{'+junto+'}')

        document.getElementById('janela2').innerHTML=todosOsValores+']'
      }
    }
  } 
    
    //Faço o download do arquivo de texto
    salvando=()=>{
      var text = document.getElementById('janela2').value
      var filename = document.getElementById('local-do-nome').value
      var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
      saveAs(blob, filename+".txt");
    }

  render(){
    return(
      <div>
        <p>
          <input  id="local-do-nome" className="nome-do-arquivo" type="text" placeholder="Enter file name" 
          text={this.state.nome}></input>
        </p>
        <textarea id="janela1" className="janela" onChange={this.pegaValor}></textarea>
        <textarea id="janela2" className="janela"text={this.state.texto}></textarea>
        <p>
          <button className="botao1" onClick={this.converteValor}>Convert to JSON</button>
          <button id="btn-save" className="botao2" type="submit" onClick={this.salvando}>Save to file</button>
        </p>
          
      </div>
    )
  }
}

export default App;
