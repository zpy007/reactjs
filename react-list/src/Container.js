import React,{Component} from 'react'
import List from './List'

class Container extends Component{
    constructor(){
        super();
        this.users=[ 
            {username:'zpy',age:21,gender:'male'},
                {username:'toy',age:22,gender:'female'}
            ];
    }
    render(){
        return(
            <div>
                {this.users.map(
                    (user)=><List user={user}/>
                )}
            </div>
        );
    }
}

export default Container;