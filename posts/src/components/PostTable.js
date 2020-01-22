import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from "mobx-react";
import { observable } from "mobx";
import PostStore from "stores/PostStore.js";
import Post from "models/PostModel.js"

@observer
export default class PostTable extends React.Component{
	
	onTrClick(event){
		window.location = "/#/post/" + event.target.parentElement.id;
	}
	
	render() {
		return (<table>
			<tbody>
				<tr>
					<th>Id</th>
					<th>Title</th>
					<th>Body</th>
					<th>Author</th>
				</tr>
				{this.props.postStore.getPosts.map( post => 
					<tr id={post.id} key={post.id} onClick={this.onTrClick.bind(this)}>
						<td>{post.id}</td>
						<td>{post.title}</td>
						<td>{post.body}</td>
						<td>{post.author}</td>
					</tr>
				)}
			</tbody>
		</table>);
	}
}

