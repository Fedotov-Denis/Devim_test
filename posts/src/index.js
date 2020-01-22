import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import PostTable from "components/PostTable.js";
import { HashRouter, Route } from "react-router-dom";
import PostEdit from "components/PostEdit.js";
import PostStore from "stores/PostStore.js";

var postStore = new PostStore();

ReactDOM.render((
	<HashRouter>
		<Route exact path="/" render={(props) => <PostTable {...props} postStore={postStore}/>}/>
		<Route path="/post/:number" render={(props) => <PostEdit {...props} postStore={postStore}/>} />
	</HashRouter>
	), document.getElementById("root")
);