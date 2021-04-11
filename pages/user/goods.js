import React, {useEffect} from 'react';
import styles from './goods.less';
import {connect} from 'dva';


export default connect(
    state=>({
        goodList: state.goods
    }),
    {
        addGoods: title => {
            return {
                type: "goods/addGoods",
                payload: {title}
            }
        },
        getList: () => {
            return {
                type: "goods/getList"
            }
        }
    }


)(function ({goodList, addGoods, getList}) {
    useEffect(()=>{
        getList()
        console.log(getList)
        addGoods("python")

    },[])
    return (
        <div>
            {goodList.map(item =>(
                <h1 className={item.title} key={item.title}>Page {item.title}</h1>
            ))}
        </div>
    );
})
