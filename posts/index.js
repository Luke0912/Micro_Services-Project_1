const express = require('express');

const {randomBytes} = require('crypto')

const app = express()

app.use(express.json())

const posts = {}

app.get('/posts',(req,res)=>{
    console.log('req: ', req);
    res.send(posts)
}) 

app.post('/posts',(req,res)=>{
    const id = randomBytes(4).toString('hex')
    const {title} = req.body

    posts[id]={
        id,title
    }

    res.send(posts)

    // {
    //     "dcfbb8c0": {
    //         "id": "dcfbb8c0",
    //         "title": "My first Post"
    //     },
    //     "f4477b7e": {
    //         "id": "f4477b7e",
    //         "title": "My second Post"
    //     }
    // }

})

app.listen(4000,()=>{
    console.log("Listening to port 4000 ")
})