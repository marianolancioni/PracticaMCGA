import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialStore = {
    counters: []
}

export const addCounter = () => {
    return {
        type: 'ADD_COUNTER',
    }
}

export const increase = (index) => {
    return {
        type: 'INCREASE',
        index: index,
    }
}

export const decrease = (index) => {
    return {
        type: 'DECREASE',
        index: index,
    }
}

export const removeCounter = (index) => {
    return {
        type: 'REMOVECOUNTER',
        index: index,
    }
}

const reducer = (store = initialStore, action) => {
  switch (action.type) {
      case 'ADD_COUNTER': {
          const newCounters = [...store.counters]
          newCounters.push({
              create: new Date().toLocaleString(),
              update: new Date().toLocaleString(),
              value: 0,
          })
          return {
              counters: newCounters
          };
      }
      case 'INCREASE': {
          const newCounters = store.counters.map((counter, index) => {
            if (action.index === index) {
              return {
                create: counter.create,
                update: new Date().toLocaleString(),
                value: counter.value + 1
              }
            }
            return counter
      })
      return {
          counters: newCounters,
      }
    }
    case 'DECREASE': {
        const newCounters = store.counters.map((counter, index) => {
          if (action.index === index) {
            return {
              create: counter.create,
              update: new Date().toLocaleString(),
              value: counter.value - 1
            }
          }
          return counter
    })
    return {
        counters: newCounters,
    }
    }
    case 'REMOVECOUNTER': {
        
            const newCounters = store.counters.filter((counter, index) => {
              if (action.index === index) {
                return false
              }
              return true
            })
            return {
                counters: newCounters
              }
            
    }
      default:
          return store;
    }
}

export const store = createStore(reducer, composeWithDevTools())
