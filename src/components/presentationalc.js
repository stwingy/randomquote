import React from 'react';
import styles from '../styles.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Presentationalc =(props) =>{
    const clicker =(e) =>{
e.preventDefault()

    }
    if(props.quotelist.randomquote){
   console.log(props.quotelist.randomquote.quote)}

    return(
        <div className ="container"> 
              { props.quotelist.randomquote?
            <div className = "jumbotron text-center vertical-center"  id="quote-box">

            <p id="text" className ="lead">
            <span className ="fa fa-quote-left">.....</span>
            {props.quotelist.randomquote.quote}
            <span>.....</span>
            <span className ="fa fa-quote-right"></span>
            </p>
            <p  id="author" className ='auth'>
            {props.quotelist.randomquote.author}
            </p>
        
    <div className = "row">
    <div className=" col-3" >
    <a  className=" btn fa fa-twitter fa-2x btn-primary mr+5"  id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + props.quotelist.randomquote.quote + '" ' + props.quotelist.randomquote.author)} onMouseDown={(e)=>clicker(e)}></a>
   
    </div>
    <div className="col-6" >
    <button type="button" className ="btn-secondary btn mr-5" id="new-quote" onClick ={props.clickHandler} onMouseDown={(e)=>clicker(e)}>Press For New Quote</button>
    </div>

    
    </div>

            </div>
      
 
  
     
    
        :
      <div>444</div>
        }
      </div>
       
    )
}
export default Presentationalc