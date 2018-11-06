export default function(state={},action){
    switch(action.type){
        case "QUOTELIST":
return {...state,wholeList:action.payload}
        case "RANDOMQUOTE":
        return {...state,randomquote:action.payload}
        default:
        return state
    }
    
}