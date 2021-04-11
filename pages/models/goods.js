import axios from 'axios'
const getGoods = ()=>{
    return axios.get("/api/goods")
}

export default {
    namespaces:'goods',
    state:[],
    effects:{
        * getList(action,{put,call}){
            console.log("20")
            const res = yield call(getGoods)
            console.log(res)
            yield put({
                type:"init",
                payload:res.data.result
            })
        }
    },
    reducers:{
        init(state, action){
            return [...action.payload]
        },
        addGoods(state, action){
            return [...state, {title:action.payload.title}]
        }
    }
}
