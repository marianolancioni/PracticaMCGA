import React from 'react';
import css from './app.module.css';
import Counter from './counter/counter';
import Error from './error/error';
import Loading from './loading/loading';
import Sidebar from './sidebar/sidebar';


class App extends React.Component {
  state = {
    contadores: [],
    loading: false,
    error: undefined,
  }

  componentWillMount = async () => {
    try {      
      this.setState({
        loading: true,
        error: undefined,
      })

      this.setState({
        loading: false
      }) 
    } catch(error) {
      this.setState({
        loading: false,
        error: error.toString(),    
      })
    }
  }

  render() {

    return (
      <div className={css.app}>
        <header className={css.header}>
            Trabajo Práctico Nº 2
        </header>
        <div className={css.container}>
          <section className={css.addSection}>  
            <span className={css.tituloAlumno}>Alumno:</span>
            
            <Sidebar />
            <button className={css.buttonAdd} onClick={this.addCounter}>Agregar Contador</button>
          </section>
          <section className={css.listSection}>    
          <span className={css.listTitle}>Lista de Contadores:</span>
          
          {this.state.error && <Error message={this.state.error}/>}
            {this.state.loading
              ? <Loading />
              :this.state.contadores.map((counter) => {
              return counter
            })}
          </section>
        </div>
      </div>
    );
  }

  deleteCounter = (contador_id) => {
    const list = this.state.contadores.filter((counter) => {
        return counter.props.id !== contador_id;
    })
    this.setState({
      contadores: list
    })
  }

  addCounter = () => {
    let list = this.state.contadores;
    const id = Date.now();
    list.push(<Counter key={id} id={id} deleteCounter={this.deleteCounter}/>);
    this.setState({
      contadores: list
    })
  }
}

export default App;