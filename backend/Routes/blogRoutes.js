import express from 'express';
import { addBlog } from '../Controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.post("/add",addBlog);

