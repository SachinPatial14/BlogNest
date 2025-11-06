import express from 'express';
import 'dotenv/config' ;
import cors from 'cors' ;
import mongoose from 'mongoose'
import adminRouter from './Routes/adminRoutes.js';
import blogRouter from './Routes/blogRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000 ;

const mongo_url = 'mongodb://localhost:27017/BlogNest';

if(!mongo_url){
    console.error("server url is not defined or correct");
    process.exit(1)
}

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("The database has been connected successfully!!");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Something went wrong while connecting to database", error);
  });


  app.use('/api/admin',adminRouter);
  app.use('/api/blog',blogRouter);
  
export default app ;
