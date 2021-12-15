### How to run

First install all dependencies using

```
npm install
```

Then run it using

```
npm start
```

It will open a server at http://localhost:3001 use that as the url

### Available requests

- GET "/posts" - gets all available posts
- GET "/posts/:postid" - get the post matching the id
- POST "/posts" - create a new post (needs title and body)
- PUT "/posts/:postid" - update the post matching the postid (needs title and body)
- PATCH "/posts/:postid" - update the title of the post matching the postid (needs title)
- DELETE "/posts/:postid" - delete the post matching the postid
