import React from 'react'
import css from './sidebar.module.css'

class Sidebar extends React.Component {
    state = {
        showButton: false,
        nombre: ""
    }
        
    render = () => {
        return (
        <div className={css.sidebar}>
          {this.state.showButton ? <span className={css.nombre}>{this.state.nombre}</span> : <input type="text" id="alum"></input>}
          <button onClick={() => {
            
            this.setState({
                showButton: !this.state.showButton,
                nombre: this.valor
                })
            }} className="guardar">
            {this.state.showButton ? "Editar Informacion"  : "Guardar Informacion"}
          </button>
          <span className={css.nombre}>{this.state.nombre}</span>
          
        </div>
        )
    }
}

export default Sidebar