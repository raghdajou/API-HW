//edit your code 
fetch('http://localhost:3000/user?name=raghdajouda&message=Hello',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
fetch('http://localhost:3000/user',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
            name: "raghdajouda",
            message: "Hello"
        }
    })

      
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})