import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import PostTable from "components/PostTable.js";
import { HashRouter, Route } from "react-router-dom";
import PostEdit from "components/PostEdit.js";
import PostStore from "stores/PostStore.js";
import { observer } from "mobx-react";
import { observable } from "mobx";

var postStore = new PostStore();

@observer
export default class PostTab extends React.Component{
		
	render() {
		return (
			<HashRouter>
				<Route exact path="/" render={<PostTable postStore={postStore}/>}/>
				<Route path="/post/:number" render={(props) => <PostEdit {...props} postStore={postStore}/>} />
			</HashRouter>
		);
	}
}