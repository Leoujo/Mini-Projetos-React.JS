import React, { Children } from 'react';
import './Botao.css';

class Botao extends React.Component{
    constructor(){
        super()
    }
    
    render(){
      return(
       < button onClick={this.props.onClick}  className={'botao-numeros'}  value={this.props.value}>
           {this.props.text}    
       </button>        
      )
    }
}

export default Botao;

