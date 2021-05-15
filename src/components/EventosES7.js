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

/*function Boton (props){
    return(
        <button onClick={props.MyOnClick}>Boton hecho componente</button>
    )
}*/

const Boton = ({MyOnClick}) =>  (<button onClick={MyOnClick}>Boton hecho componente</button>)

export class MasSobreEventos extends Component{
    handleClick = (e,mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.taget);
        console.log(mensaje);
    } ;


    render(){
        return(
            <div>
                <h2>Mas sobre Eventos</h2>
                <button onClick={(e)=> this.handleClick(e,"Hola,pasando parámetro desde un evento")}>Saludar</button>
                <Boton MyOnClick={(e)=> this.handleClick(e,"Hola,pasando parámetro desde un evento")}/>
            </div>
        );
    }
}