import React, { Component } from 'react';

export  class EventosES7  extends Component{
  
        state ={
            contador:0,
        };
       
    
//Arrow function
    sumar=(e)=>{
        this.setState ({
            contador:this.state.contador+1,
        });
    }

    restar=(e)=>{
        this.setState ({
            contador:this.state.contador-1,
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}