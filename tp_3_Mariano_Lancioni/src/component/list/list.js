import React from 'react';
import Counter from '../counter/counter';
import css from './list.module.css';

class List extends React.Component{
    render = () => {
        return (
            <div className={css.container}>
               <h1>Lista de contadores</h1>
               <div className={css.list}>
                   {
                       this.props.counters.map((item, index) => {
                           return (<Counter 
                                     key={index} 
                                     index={index} 
                                     item={item} 
                                     increase={this.props.increase} 
                                     decrease={this.props.decrease} 
                                     removeCounter={this.props.removeCounter}
                                    />)

                       })
                   }
                   
               </div>
            </div>
        )
    }
}

export default List