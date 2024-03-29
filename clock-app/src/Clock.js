import React,{Component} from 'react';

class Clock extends Component{
    constructor(){
        super();
        this.state={
            date:new Date()
        }
    }

    componentWillMount(){
        this.timer=setInterval(()=>{
            this.setState({date:new Date()});
        },1000);
    }

    render(){
        return(
            <div>
                <h1>
                <p>现在时间是</p>
                {this.state.date.toLocaleTimeString()}
                </h1>
                
            </div>
        )
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
}

export default Clock;