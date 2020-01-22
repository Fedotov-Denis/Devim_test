import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from "mobx-react";
import { observable } from "mobx";
import PostStore from "stores/PostStore.js";
import Post from "models/PostModel.js"

@observer
export default class HelloWorld extends React.Component{
	constructor(props){
		super();
		this.props = props;
		console.log(this.props.match.params.number-1)
		console.log(this.props.postStore.getPosts)
	}
	
	render() {
		return (<div>
				<p>You are editing post number {this.props.match.params.number}</p>
			</div>);
	}
}

 