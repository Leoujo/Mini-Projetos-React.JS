import React from 'react';
import './BotaoApagar.css';

class BotaoApagar extends React.Component{
    render(){
      return(
        <button className={'botao-apagar'} onClick={this.props.onClick}>
            <p >{this.props.text}</p>

        </button>

      )
    }
}

export default BotaoApagar;
