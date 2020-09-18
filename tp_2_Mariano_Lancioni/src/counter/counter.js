import React from 'react'
import css from './counter.module.css'



class Counter extends React.Component {
    
    state = {
        id: this.props.id,
        valor: 0,
        fecha: Date(),
        actual: "",
    }
        
    showMoreInfo = () => {
        this.setState({
            moreInfo: !this.state.moreInfo,
        })
    }
    
    render = () => {
        return (
            
            <div className={css.counter}>
                <div className={css.container}>
                    <span className={css.valor}>Creado:{this.state.fecha}</span>
                    <span className={css.valor}>Actualizado:{this.state.actual}</span>
                    <button className={css.buttonIncDec} onClick={this.decreaseCounter}>-</button>
                    <span className={css.valor}>{this.state.valor}</span>
                    <button className={css.buttonIncDec} onClick={this.increaseCounter}>+</button>
                    <button className={css.button} onClick={() => {
                        this.props.deleteCounter(this.props.id)
                    }}>Eliminar</button>
                </div>
            </div>
        )
    }

    increaseCounter = () => {

        this.setState({
            valor : this.state.valor + 1,
            actual: Date()
          }) 
    }
    decreaseCounter = () => {
        this.setState({
            valor : this.state.valor - 1,
            actual: Date()
          }) 
    }
}
export default Counter