import React,{Component} from 'react'

class ReactState extends Component{
    constructor(){
        super();
        this.state={isLiked:false};
    }

    handleClickOnLikeButton(){
        this.setState((preState)=>{
            return{isLiked:!this.state.isLiked};
        });
    }

    render(){
        
        var {name}=this.state;
        var {isLiked,unLiked}=this.props;
        return (
            <div>
                <button onClick={this.handleClickOnLikeButton.bind(this)}>
                    {this.state.isLiked?isLiked:unLiked}👍
                    {name}
                </button>
            </div>
        )
    }
}

export default ReactState;