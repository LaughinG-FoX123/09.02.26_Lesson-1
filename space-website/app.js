const express = require('express');
const app = express()


const engine = require('ejs-mate');
app.engine('ejs', engine)

app.set('view engine', 'ejs')

app.use(express.static('public'))

const posts = [
    {id: 1, title: "First post", content: "long description of the 1 post.", img: ''},
    {id: 2, title: "Second post", content: "long description of the 2 post.", img: ''},
    {id: 3, title: "Third post", content: "long description of the 3 post.", img: ''}
]

app.get('/', (req, res) => {
    res.render('index', { posts: posts })
})

app.listen(3000, () => {
    console.log("Srever has been activated. Port: 3000")
})