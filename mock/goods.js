let data= [{title:"java"}, {title: "js"}]

export default {
    "GET /api/goods":(req, res)=>{
        setTimeout(()=>{
            res.json({result:data})
        },1000)
    },
    'GET /api/users': { users: [1, 2] },
}
