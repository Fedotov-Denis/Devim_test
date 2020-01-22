import { observable, computed, action } from "mobx";

class Post {
	id;
	@observable title;
	@observable body;
	author;
	
	constructor(id, title, body, author) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.author = author;
	}
}

export default Post;