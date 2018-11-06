import fakejson from '../fakejson'


export function quotelist_f(){
return{
    type:"QUOTELIST",
    payload:fakejson.data
}
}

export function randomquote_f(){
    let randomNum =Math.floor(Math.random()*fakejson.data.length)
    return{
        type:"RANDOMQUOTE",
        payload:fakejson.data[randomNum]
    }
    }