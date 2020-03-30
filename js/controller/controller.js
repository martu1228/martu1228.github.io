import BlogListModel from '/js/models/BlogListModel.js';
import BlogItemModel from '/js/models/BlogItemModel.js';

import BlogListView from '/js/views/BlogListView.js';


class Controller {
    constructor() {
        // this.blogItemModel = new BlogItemModel();
        this.blogListModel = new BlogListModel();
        this.blogListView = new BlogListView();
        this.blogObjects = [];
    }

    init() {
        console.log("fjeoieo");
        this.blogListModel.fetchAllBlog()
            .then((data) => {
                console.log(data);
                for (const obj of data) {

                }
                this.getAllBlogData(data);
                this.displayBlogList(data);
            }).then((data) => {
                console.log(data)
            })
        // this.blogListModel.fetchAllBlog()
        //     .then(data => this.getAllBlogData(data))
        //     .then(data => this.displayBlogList(data));
    }

    initForDetail() {
        console.log("Detail");
        this.blogListModel.fetchAllBlog()
            .then((data) => {
                this.getAllBlogData(data);
                this.displayBlogDetail(data);
            }).then((data)=>{

            });
    }


    displayBlogList(blogObjects) {
        const templates = [];
        for (let blogObj of Object.values(blogObjects)) {
            templates.push(this.blogListView.getItemTemplate(blogObj));
        }

        this.blogListView.render(templates);
    }

    displayBlogDetail(blogObjects) {
        const templates = [];
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        for (let blogObj of Object.values(blogObjects)) {
            console.log("items"+blogObj.title);
            // templates.push(this.blogListView.getItemTemplate(blogObj));
        }

        this.blogListView.render(templates);
    }


    getAllBlogData(data) {
        this.blogObjects = [];
        for (let blog of Object.values(data)) {
            const blogObj = new BlogItemModel(
                blog.id,
                blog.title,
                blog.author,
                blog.time,
                blog.image,
                blog.content
            )

            this.blogObjects.push(blogObj);

            return this.blogObjects;
        }
    }
}

export default Controller;