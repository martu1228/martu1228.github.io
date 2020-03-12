import APIDataModel from "./APIModel.js";

class Blog extends APIDataModel {
    constructor(
        id,
        title,
        author,
        time,
        image,
        content) {
        super();
        this.id = id;
        this.title = title;
        this.author = author;
        this.time = time;
        this.image = image;
        this.content = content;
    }

    updateData(data) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.time = time;
        this.image = image;
        this.content = content;

        return this;
    }
}

export default Blog;