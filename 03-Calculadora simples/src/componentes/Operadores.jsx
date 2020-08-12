import React from 'react';
import './Operadores.css'

class Operadores extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <button onClick={this.props.onClick} className={'botao-operadores'} value={this.props.value}>
          {this.props.text}
      </button>     
    )
  }
    

}

export default Operadores;