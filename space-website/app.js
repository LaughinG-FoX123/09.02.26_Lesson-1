const express = require('express');
const app = express()


const engine = require('ejs-mate');
app.engine('ejs', engine)

app.set('view engine', 'ejs')

app.use(express.static('public'))

const posts = [
    {id: 1, title: "First post", content: "long description of the 1 post.", img: 'https://avatars.mds.yandex.net/i?id=09c313c16450f4b425fa765e6aadd71c118b9e26-3909691-images-thumbs&n=13'},
    {id: 2, title: "Second post", content: "long description of the 2 post.", img: 'https://avatars.mds.yandex.net/i?id=30b072e8fcf364d18d0d1f6c4ba2fc1f701d8d9c-5213492-images-thumbs&n=13'},
    {id: 3, title: "Third post", content: "long description of the 3 post.", img: 'https://avatars.mds.yandex.net/i?id=53e38548604a3272014e9f60362f1a3c3911b2d1-5878137-images-thumbs&n=13'}
]

app.get('/', (req, res) => {
    res.render('index', { posts: posts })
})

app.get('/view/:id', (req, res) => {
    const postId = req.params.id
    const post = posts.find(post => post.id == postId)

    res.render('view', { post })
})

app.get('/add-post', (req, res) => {
    res.render('form')
})

app.use(express.urlencoded())
app.post('/add-post', (req, res) => {
    const {title, content, img} = req.body
    let lastId = posts[posts.length-1].id
    posts.push({id: lastId+1, title, content, img})

    res.redirect('/')
})




app.listen(3000, () => {
    console.log("Srever has been activated. Port: 3000")
})