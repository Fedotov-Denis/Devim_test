import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from "mobx-react";
import { observable } from "mobx";
import PostStore from "stores/PostStore.js";
import Post from "models/PostModel.js";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

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
		</table>
		);
	}
}

