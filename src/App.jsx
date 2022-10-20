import React, { useEffect } from "react";
import { useState } from 'react'
import { Button } from 'antd'
const App = () => {
    const [money, setMoney] = useState(0)
    const delay = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            },1000)
        })
    }
    function a () {
        console.log('4')
    }
    
    const  handle = async () => {
       await delay()
       setMoney(1000000)
    }
    useEffect(() => {
        a()
    },[])
    return (
        <>
            <div>{money}</div>
            <Button onClick={handle} type="primary">点击</Button>
        </>
    )
}
export default App