import fs from 'fs'
import imagekit from '../Configs/imageKit.js';
import Blog from '../Models/Blog.js';

export const addBlog = async(req,res)=>{
    try{
       const {title,subTitle,description,category,isPublished} = JSON.parse(req.body.blog);
       const imageFile = req.file ;

       if(!title || !description || !subTitle || !category || !isPublished){
        return res.json({success:false,message:"Missing required fields"})
       };
     
      const fileBuffer = fs.readFileSync(imageFile.path);
      const response = await imagekit.upload({
        file : fileBuffer ,
        fileName : imageFile.originalname,
        folder:"/blogs"
      });

      const optimisedImageUrl = imagekit.url({
        path: response.filePath,
        transformation : [
            {quality:"auto"},
            {format:"webp"},
            {width:"1280"}
        ]
      });

      const image = optimisedImageUrl ;

      await Blog.create({title,subTitle,description,category,image,isPublished});

      res.json({success:true,message:"Blog added successfully"})

    }catch(err){
        res.json({success:false,message:err.message})
    }
}