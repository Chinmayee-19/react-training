const express=require('express')
const cors=require('cors')

const app=express();

app.get('/api/customer',cors(),(req,res)=>{
    const customers=[
        {id:101,firstName:'john',email:'john@mail.com'},
        {id:102,firstName:'brad',email:'brad@mail.com'},
        {id:103,firstName:'john',email:'john@mail.com'}
    ]
    res.json(customers)
})
app.listen(5000,()=>{
console.log('server is ready');
})
