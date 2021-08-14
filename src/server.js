const express = require('express')

const app = express()
app.get('/api/list',(req,res)=> {
  res.json({
    code: 200,
    msg: 'ok',
    data: [
      {uid:1,uname:'hsueh'},
      {uid:2,uname:'jerry'},
      {uid:3,uname:'king'},
    ]
  })
})

app.listen(3000,()=> {
  console.log('服务器启动');
});
