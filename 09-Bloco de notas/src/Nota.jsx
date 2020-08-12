import React from 'react';
import './App.css';

//Crio os states que serão usados para salvar o título e conteúdo da nota em questão, no App.
class Nota extends React.Component{
    constructor(){
        super()
        this.state={
            titulo:"Título",
            conteudo:"Conteúdo da nota"
        }
    }

    //Para o botões de cada componente, vou mandar seu index e seus states para as funções no App.
    apagaCada=()=>{
        this.props.apaga(this.props.index)
    }
    salvaCada=()=>{
        this.props.salva(this.props.index,this.state.titulo,this.state.conteudo)
    }
    
    //Pega o que está sendo escrito no título e conteúdo, e manda pros respectivos states.
    atualizaTitulo=(evento)=>{
        this.setState({titulo:evento.target.value})  
    }
    atualizaConteudo=(evento)=>{
        this.setState({conteudo:evento.target.value})
    }
   
    //Componente Nota com seus valores dafault passados pelas props e onChanges configurados.
    render(){
        return(
        <div id="testezin" className="nota-inteira" >
            <div className="area-dos-botoes">
                <button className="botao-salvar" onClick={this.salvaCada} >Salvar</button>
                <button className="botao-apagar"  onClick={this.apagaCada}>Apagar</button>
            </div>
            <textarea className="area-titulo" rows="1.5" cols="52" defaultValue={this.props.nota.titulo} 
            onChange={this.atualizaTitulo}></textarea>
            <textarea className="area-conteudo" rows="4" cols="81" defaultValue={this.props.nota.conteudo} 
            onChange={this.atualizaConteudo}></textarea>
        </div>
        )   
    }
}

export default Nota;