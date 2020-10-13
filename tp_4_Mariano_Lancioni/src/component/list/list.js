import React from 'react';
import Counter from '../counter/index';
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
                                     
                                     
                                    />)

                       })
                   }
                   
               </div>
            </div>
        )
    }
}

export default List