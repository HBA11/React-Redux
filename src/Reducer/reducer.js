import { INCREMENT, DECREMENT, RESET } from '../Constants/constant'

export const Reducer=(state=0, action)=>{
switch(action.type){
    case INCREMENT:
        console.log('dispatching', action)
        return state+1
        case DECREMENT:
            console.log('dispatching', action)
            return (state>0?  state-1: 0)
            case RESET:
                console.log('dispatching', action)
                return state=0
            default: return state
}
}
