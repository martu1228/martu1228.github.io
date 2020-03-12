import APIDataModel from "./APIModel.js";

class BlogListModel extends APIDataModel{

    getAllBlogUrl(){
        return this.rootURL + this.allBlogs;
    }

    fetchAllBlog(){
        return fetch(this.getAllBlogUrl())
        .then(function(response){
            
            return response.json();
        }).then(function(json){
            console.log(json);
            return Object.values(json);
        })
    }

    // fetchAllBooks(){
    //     return fetch(this.getAllBooksUrl())
    //     .then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         return data.results
    //     });
        
    // }
}

export default BlogListModel;