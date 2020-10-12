import React from 'react';
import css from './counter.module.css';

const Counter = (props) => {
    return (
        <div className={css.container}>
            <div className={css.info}>
                Creado: {props.item.create}
            </div>
            <div className={css.info}>
                Actualizado: {props.item.update}
            </div>
            <div className={css.counter}>
                <button className={css.button} onClick={() => {props.decrease(props.index)}}>-</button>
                <div className={css.value}>{props.item.value}</div>
                <button className={css.button} onClick={() => {props.increase(props.index)}}>+</button>
                <button className={css.button} onClick={() => {props.removeCounter(props.index)}}>Eliminar</button>
            </div>
        </div>
    )
}

export default Counter