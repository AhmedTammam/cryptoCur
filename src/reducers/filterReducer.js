import { FILTER } from '../actions/filter'

export default function filterReducer(state= [], action) {

    switch (action.type) {
        case FILTER:
            return (
                [action.payload, ...state],
                console.log(action.payload)
                
            )
    
        default:
            return state;
    }
}