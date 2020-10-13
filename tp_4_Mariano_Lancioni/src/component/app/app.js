import React from 'react';
import Sidebar from '../sidebar/index';
import List from '../list/index';
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
    },
    {
      create: new Date().toLocaleString(),
      update: new Date().toLocaleString(),
      value: 5,
    } 
  ]
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

  

  
  render = () =>{
   return (
     <div className={css.container}>
      <BrowserRouter>
       <Switch>
        <Route path="/contadores">
          <List 
          />
        </Route>  
        <Route path="/" component= {Sidebar}>
        </Route>
       </Switch>
      </BrowserRouter>
     </div>
   );
  }
}
export default App;
