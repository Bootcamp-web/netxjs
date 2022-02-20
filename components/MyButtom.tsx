import React from 'react';
import { Button } from 'antd';


const MyButtom = (props:any) => {
    const {text, actionsButton} = props
return(

    <Button type="primary" onClick={actionsButton}>{text}</Button>
)
};

export default MyButtom
