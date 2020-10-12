import React from 'react';
import css from './sidebar.module.css';
import { BrowserRouter,
    Switch,
    Route,
    Link
    } from 'react-router-dom';

class Sidebar extends React.Component{
    state = {
        name: 'Mariano Lancioni',
        year: 2020,
        edit: false
    }

    onChangeName = (evt) => {
       this.setState({
           name: evt.target.value
       })
    }
    onChangeYear = (evt) => {
        this.setState({
            year: evt.target.value
        })
    }
    toggleEdit = () => {
       this.setState({
           edit: !this.state.edit
       })
    }
    render = () => {
        return (
            <div className={css.container}>
               <div className={css.title}>Alumno</div>
               {this.state.edit
                ? (
                   <>
                    <input 
                      type="text" 
                      name="name" 
                      value={this.state.name} 
                      className={css.input} 
                      onChange={this.onChangeName}
                    />
                    <input 
                      type="number" 
                      name="year" 
                      value={this.state.year} 
                      className={css.input} 
                      onChange={this.onChangeYear}
                    />
                   </>
                )
                : (
                   <>
                    <div className={css.value}>{this.state.name}</div>
                    <div className={css.value}>{this.state.year}</div>
                   </>
                )
               }
               
               <button className={css.button} onClick={this.toggleEdit}>
                   {this.state.edit 
                   ? 
                   "Guardar Informacion" 
                   : 
                   "Editar Informacion"}
               </button>
               <Link to="/contadores">
               <button className={css.addButton} onClick={this.props.addCounter}>Agregar Contador</button>
               </Link>
            </div>
        )
    }
}

export default Sidebar