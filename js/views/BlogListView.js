class BlogListView{
    constructor(controller){
        this.controller = controller;
        this.itemTemplate = document.getElementById("blog-info-template").innerHTML;
        this.sviewport = document.getElementById("sviewport");
    }


    // getItemTemplate(object){
    //     let templates = [];
    //     // console.log("getObjType"+ object.product_image_one)
    //     for(const productObj in Object(object)){
    //         console.log("getItemTemplate test"+productObj.product_image_one);
    //         const result = this.itemTemplate
    //             .replace("{{this.product_image_one}}", productObj.product_image_one)
    //             .replace("{{this.product_image_two}}", productObj.product_image_two)
    //             .replace("{{this.product_price}}", productObj.product_price)
    //             .replace("{{this.product_name}}", productObj.product_name);

    //             templates.push(result);

    //     }

    //     return templates;
    // }

    getItemTemplate(blogObj){
        const result = this.itemTemplate
                .replace("{{this.blog_id}}", blogObj.id)
                .replace("{{this.blog_title}}", blogObj.title)
                .replace("{{this.author_name}}", blogObj.author)
                .replace("{{this.blog_date}}", blogObj.time)
                .replace("{{this.blog_image}}", blogObj.image)
                .replace("{{this.blog_content}}", blogObj.content);
        return result;
    }


    render(templates){
        this.sviewport.innerHTML = "";
        for(let template of templates){
            console.log(template)
            this.sviewport.innerHTML += template;
        }
    }

}

export default BlogListView;