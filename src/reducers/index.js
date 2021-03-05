import search from './search'
//combinatore di reducers
import {combineReducers} from 'redux';


// funzione speciale che ritorna esclusivamente un oggetto
const allReducers = combineReducers({
    search
})

export default allReducers;