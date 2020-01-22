import { observable, computed, action } from "mobx";
import Post from "models/PostModel.js";

export default class PostStore {
	@observable postStore = [];
	
	constructor () {
		this.fetch();
	}
	
	@action
	addPost (post) {
		this.postStore.push(new Post(post.id, post.title, post.body, post.author));
	}
	
	@action
	fetch () {
		fetch('http://localhost:3001/users')
            .then((response) => response.json())
            .then(function(response){
                    this.putPosts(response);
            }.bind(this))
	}
	
	@action
	putPosts(posts) {
		for (var x = 1; x<=3; x++){
			this.addPost({id:posts[x].id, title:posts[x].title, body:posts[x].body, author:posts[x].author});
		}
	}
	
	@computed 
	get getPosts () {
		return this.postStore;
	}
}