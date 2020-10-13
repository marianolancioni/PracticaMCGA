import List from './list'
import {connect} from 'react-redux';


const mapStatetoProps = (store) => {
    return {
        counters: store.counters,
    }
}
export default connect(mapStatetoProps)(List)