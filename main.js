import express from "express";
import cors from "cors";

const app = express()
app.use(cors());
app.use(express.json());
const port = 3001

let posts = [
  {id: "1023", title: "Example", body: "Example"},
  {id: "123", title: "Example title", body: "Example body"},
  {id: "1322", title: "Another example", body: "Another example"},
  {id: "5632", title: "Another example title", body: "Another example body"},
];

app.get('/', (req, res) => {
  res.json({message:'Hello World!'})
})

app.get('/posts', (req, res) => {
  res.json(posts);
})

app.get('/posts/:postid', (req, res) => {
  let post = posts.find((val) =>  val.id === req.params.postid);
  if(!post) {
    res.status(404).json({message:"Not found"});
    return;
  }
  res.json(post);
})

app.post('/posts', (req,res) => {
  if(!req.body) {
    res.status(400).json({message:"No request body found"});
    return;
  }
  if(!req.body.title) {
    res.status(400).json({message:"No post title found"});
    return;
  }
  if(!req.body.body) {
    res.status(400).json({message:"No post body found"});
    return;
  }
  let post = {
    id: Math.floor(Math.random() * 1000).toString(),
    title: req.body.title,
    body: req.body.body
  };
  posts.push(post)
  res.status(201).json(post);
})

app.put('/posts/:postid', (req, res) => {
  let postIndex = posts.findIndex(val => val.id === req.params.postid);
  if(postIndex === -1) {
    res.status(400).json({message:"Post not found"});
    return;
  }if(!req.body) {
    res.status(400).json({message:"No request body found"});
    return;
  }
  if(!req.body.title) {
    res.status(400).json({message:"No post title found"});
    return;
  }
  if(!req.body.body) {
    res.status(400).json({message:"No post body found"});
    return;
  }
  posts[postIndex].title = req.body.title;
  posts[postIndex].body = req.body.body;
  res.status(200).json(posts[postIndex]);
})

app.patch('/posts/:postid', (req, res) => {
  let postIndex = posts.findIndex((val) => val.id === req.params.postid);
  if(postIndex === -1) {
    res.status(400).json({message:"Post not found"});
    return;
  }
  if(!req.body) {
    res.status(400).json({message:"No request body found"});
    return;
  }
  if(req.body.title) {
    posts[postIndex].title = req.body.title;
  }
  if(req.body.body) {
    posts[postIndex].body = req.body.body;
  }
  res.status(200).json(posts[postIndex]);
})

app.delete('/posts/:postid', (req, res) => {
  let postIndex = posts.findIndex((val) => val.id === req.params.postid);
  if(postIndex === -1) {
    res.status(400).json({message:"Post not found"});
    return;
  }
  posts.splice(postIndex, 1);
  res.status(200).json({message:"Resource succesfully deleted"});
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})