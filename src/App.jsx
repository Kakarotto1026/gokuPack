import React from "react";
import { useState } from 'react'
import { Button } from 'antd'
const App = () => {
    const [money, setMoney] = useState(0)
    const handle = () => {
        setMoney(1000000)
    }
    return (
        <>
            <div>{money}</div>
            <Button onClick={handle} type="primary">点击</Button>
        </>
    )
}
export default App