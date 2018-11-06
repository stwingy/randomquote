import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {quotelist_f,randomquote_f} from '../actions'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'


import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap/dist/js/bootstrap.bundle.min';
import Presentationalc from '../components/presentationalc'
//library.add(faStroopwafel)
class App extends Component{
   
   componentWillMount(){
this.props.quotelist_f()
this.props.randomquote_f()
   }
   clickHandler =(e)=>{
   
    this.props.randomquote_f()
   }
   tweetHandler =()=>{
       console.log(this.props.quotelist.randomquote.quote)
       window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.props.quotelist.randomquote.quote + '" ' + this.props.quotelist.randomquote.author));
   }
    render(){
        console.log(this.props)
        //this.props.quotelist_fprops()
        return(
            <div>
              
              <Presentationalc {...this.props} clickHandler ={this.clickHandler} tweetHandler ={this.tweetHandler}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        quotelist: state.quotelist
    
    }
}
const  mapDispatchToProps = (dispatch) => (
   bindActionCreators({quotelist_f,randomquote_f}, dispatch)
)
export default connect(mapStateToProps,mapDispatchToProps)(App)