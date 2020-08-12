import React from 'react';
import './bordas.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      ciclos:''
    }
  }
  mudaBorda1=(evento)=>{
    this.setState({ciclos:evento.target.value})
    var numPassado=this.state.ciclos
    
    document.getElementById('div1').style.borderTopLeftRadius=numPassado+'px'
  }

  mudaBorda2=(evento)=>{
    this.setState({ciclos:evento.target.value})
    var numPassado=this.state.ciclos
    
    document.getElementById('div1').style.borderTopRightRadius=numPassado+'px'
  }

  mudaBorda3=(evento)=>{
    this.setState({ciclos:evento.target.value})
    var numPassado=this.state.ciclos
    
    document.getElementById('div1').style.borderBottomLeftRadius=numPassado+'px'
  }
  
  mudaBorda4=(evento)=>{
    this.setState({ciclos:evento.target.value})
    var numPassado=this.state.ciclos
    
    document.getElementById('div1').style.borderBottomRightRadius=numPassado+'px'

  }
  render(){  
    return(
      <div>
        <p id="div1"></p> 
        <p>Este muda o canto superior esquerdo:</p>   
        <input name="arrastar1" type="range" defaultValue={0} onChange={this.mudaBorda1} />
        <br/>
        <p>Este muda o canto superior direito:</p>   
        <input name="arrastar2" type="range" defaultValue={0} onChange={this.mudaBorda2} />
        <br/>
        <p>Este muda o canto inferior esquerdo:</p>   
        <input name="arrastar3" type="range" defaultValue={0} onChange={this.mudaBorda3} />
        <br/>
        <p>Este muda o canto inferior direiro:</p>   
        <input name="arrastar4" type="range" defaultValue={0} onChange={this.mudaBorda4} /> 
      </div>       
    )
  }
}

export default App;
