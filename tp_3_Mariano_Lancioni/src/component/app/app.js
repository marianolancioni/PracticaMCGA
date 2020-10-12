import React from 'react';
import Sidebar from '../sidebar/sidebar';
import List from '../list/list';
import css from './app.module.css';
import { BrowserRouter,
Switch,
Route,
Link
} from 'react-router-dom';


class App extends React.Component {
  state = {
    counters: [{
     create: new Date().toLocaleString(),
     update: new Date().toLocaleString(),
     value: 0,
    }]
  }

  addCounter = () => {
    const newCounters = this.state.counters
    newCounters.push({
      create: new Date().toLocaleString(),
      update: new Date().toLocaleString(),
      value: 0,
    })
    this.setState({
      counters: newCounters,
    })
  }

  increase = (counterIndex) => {
    const counters = this.state.counters.map((counter, index) => {
      if (counterIndex === index) {
        return {
          create: counter.create,
          update: new Date().toLocaleString(),
          value: counter.value + 1
        }
      }
      return true
    })
    this.setState({counters})
  }

  decrease = (counterIndex) => {
    const counters = this.state.counters.map((counter, index) => {
      if (counterIndex === index) {
        return {
          create: counter.create,
          update: new Date().toLocaleString(),
          value: counter.value - 1
        }
      }
      return true
    })
    this.setState({counters})
  }

  removeCounter = (counterIndex) => {
    const counters = this.state.counters.filter((counter, index) => {
      if (counterIndex === index) {
        return false
      }
      return true
    })
    this.setState({counters})
  }
  render = () =>{
   return (
     <div className={css.container}>
      <BrowserRouter>
       <Switch>
        <Route path="/contadores">
          <List 
          counters={this.state.counters} 
          removeCounter={this.removeCounter} 
          increase={this.increase} 
          decrease={this.decrease}
          />
        </Route>  
        <Route path="/">
          <Sidebar 
          addCounter={this.addCounter} 
          />
        </Route>
       </Switch>
      </BrowserRouter>
     </div>
   );
  }
}
export default App;
