import BlogListModel from '/js/models/BlogListModel.js';
import BlogItemModel from '/js/models/BlogItemModel.js';

import BlogDetailView from '/js/views/BlogDetailView.js';


class ControllerDetail {
    constructor() {
        this.blogItemModel = new BlogItemModel();
        this.blogListModel = new BlogListModel();
        this.blogDetailView = new BlogDetailView();
        this.blogObjects = [];
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


    // displayBlogList(blogObjects) {
    //     const templates = [];
    //     for (let blogObj of Object.values(blogObjects)) {
    //         templates.push(this.blogListView.getItemTemplate(blogObj));
    //     }

    //     this.blogListView.render(templates);
    // }

    displayBlogDetail(blogObjects) {
        const templates = [];
        var id = this.getQueryVariable("id");
        for (let blogObj of Object.values(blogObjects)) {
            if(blogObj.id == id){
                this.blogDetailView.render(blogObj);
            }
            // templates.push(this.blogListView.getItemTemplate(blogObj));
        }

        // this.blogListView.render(templates);
    }

    getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (pair[0] == variable) {
				return pair[1];
			}
		}
		return (false);
	}

	makeSplit(someText) {
		var temp = someText.replace(/%20/g, " ");
		
		return temp;
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

export default ControllerDetail;