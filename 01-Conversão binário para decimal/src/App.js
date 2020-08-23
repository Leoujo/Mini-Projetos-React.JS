import React, { useState } from 'react';
import './App.css'

const App=()=>{

  const[numBin,setNumBin]=useState("")
  const[numDec,setNumDec]=useState("")

  const converteValor=()=>{
    var allBinaryDigits=numBin.split('')
    
    for (var i in allBinaryDigits) {
      var singleBinaryDigit=allBinaryDigits[i]

      //Se o usuário digitar algo diferente de 1 ou 0
      if(singleBinaryDigit!=='0' && singleBinaryDigit!=='1' ){
        window.alert(`Atenção! Há números ou letras não binárias`)
        break;
      
      //Se for um número binário mesmo
      }else{
        setNumDec(parseInt(numBin,2))  
      }
    }  
  }
  
  return(
    <div>
      <h1>Digite até 8 caractéres</h1>
      <div className="input-box">
        <input className="input-binary" maxLength="8" onChange={(event)=>{setNumBin(event.target.value)}} />
        <input className="input-button" type="button" value="Converter" onClick={converteValor}/>
      </div>
      
    <h2 className="outputResult">Binário: {numBin}</h2>
    {numDec===""?null:<h2 className="outputResult">Decimal: {numDec}</h2>}
    
    </div>        
  )
}
export default App;
