import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from "mobx-react";
import { observable } from "mobx";
import PostStore from "stores/PostStore.js";
import Post from "models/PostModel.js"

@observer
export default class PostEdit extends React.Component{
	
	
	constructor(props){
		super();
		this.props = props;
		this.state = {title: this.props.postStore.getPosts[this.props.match.params.number-1].title, 
						body: this.props.postStore.getPosts[this.props.match.params.number-1].body};
	}
	
	onSaveClick(){
		this.props.postStore.getPosts[this.props.match.params.number-1].title = this.state.title;
		this.props.postStore.getPosts[this.props.match.params.number-1].body = this.state.body;
	}
	
	onTitleChange(event){
		this.setState({title: event.target.value, body: this.state.body});
	}
	
	onBodyChange(event){
		this.setState({title: this.state.title, body: event.target.value});
	}
	
	onCancelClick(){
		window.history.back();
	}
	
	onDeleteClick(){
		delete this.props.postStore.getPosts[this.props.match.params.number-1];
		window.history.back();
	}
	
	render() {
		return (<div>
				<p>You are editing post number {this.props.match.params.number}</p>
				<label>Id: </label><input type="text" value={this.props.postStore.getPosts[this.props.match.params.number-1].id} disabled/>
				<br/>
				<label>Title: </label><input type="text" defaultValue={this.props.postStore.getPosts[this.props.match.params.number-1].title} onChange={this.onTitleChange.bind(this)}/>
				<br/>
				<label>Body: </label><input type="text" defaultValue={this.props.postStore.getPosts[this.props.match.params.number-1].body} onChange={this.onBodyChange.bind(this)}/>
				<br/>
				<label>Author: </label><input type="text" value={this.props.postStore.getPosts[this.props.match.params.number-1].author} disabled/>
				<br/>
				<button onClick={this.onSaveClick.bind(this)}>Save</button>
				<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				<button onClick={this.onDeleteClick.bind(this)}>Delete</button>
			</div>);
	}
}

 