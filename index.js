const dotenv=require('dotenv')
dotenv.config();

const express=require('express')
const app=express()

const port= process.env.PORT|| 3000;

app.get('/',(req,res)=>{
    res.send("Environment Variables Demo!");
})


app.get('/config',(req,res)=>{
    const dbHost=process.env.DB_HOST;
    const apiKey=process.env.API_KEY;
    const dbUser=process.env.DB_USER;

    res.json({
        dbHost, dbUser,apiKey
    });
});

app.use((req,res)=>{
    res.status(404).send("Not found");
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})