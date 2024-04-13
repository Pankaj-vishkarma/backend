const express=require('express')
require('dotenv').config()
const cors=require('cors')

const app=express()


app.use(cors())
app.use('/api/movie',(req,res)=>{
    const movie=[
        {
            id:1,
            name:"karan arjun",
            year:"1999"
        },
        {
            id:2,
            name:"ghatak",
            year:"2000"
        },
        {
            id:3,
            name:"shaan",
            year:"2004"
        },
        {
            id:4,
            name:"don",
            year:"1998"
        }
    ]

    res.send(movie)
})

module.exports=app