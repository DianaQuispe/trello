
import createStore from 'redux-zero'
const BOARDS =
 [
   { 
      each: {
          name:'tes board'

      }
    }
 ]

const initialState = {
    boards: BOARDS
}

const store = createStore (initialState)
export default store