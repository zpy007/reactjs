import React,{Component} from 'react'
import ReactState from './ReactState'

class Container extends Component{
    render(){
        return(
            <div>
                <ReactState isLiked='已赞' unLiked='不赞'/>
            </div>
        );
    }
}
export default Container;