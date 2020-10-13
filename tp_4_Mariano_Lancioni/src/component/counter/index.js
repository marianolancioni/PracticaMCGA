import Counter from './counter'
import {connect} from 'react-redux'
import {increase, decrease, removeCounter} from '../redux/index'


const mapDispatchtoProps = (dispatch) => {
    return {
      increase: (index) => dispatch(increase(index)),
      decrease: (index) => dispatch(decrease(index)),
      removeCounter: (index) => dispatch(removeCounter(index))
    }
    
}

export default connect(undefined, mapDispatchtoProps)(Counter)