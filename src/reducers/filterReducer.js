import { FILTER } from '../actions/filter'

export default function filterReducer(state= [], action) {

    switch (action.type) {
        case FILTER:
            return (
                action.payload
                
            )
    
        default:
            return state;
    }
}