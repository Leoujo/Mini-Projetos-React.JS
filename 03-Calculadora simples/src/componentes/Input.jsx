import React from 'react';
import './Input.css'

class Input extends React.Component{
    render(){
        //var {tela-resultado}=this.props;
      return(
          <div className='tela-resultado' >
              {this.props.text}
          </div>
      
     
      )
    }
}

export default Input;