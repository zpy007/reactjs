import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            comments:[]
        };
    }
    handleSubmitComment(comment){
        this.state.comments.push(comment);
        console.log(comment); 
        this.setState({comments:this.state.comments});
        }
    render(){
        return(
            <div>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp;