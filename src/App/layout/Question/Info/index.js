import React from "react";
import {Form} from 'react-bootstrap';
import Content from "./Content";
import Images from "./Images";
const InfoContainer = () =>{
    return(<>
       <Form>
            <Content/>
            <Images/>
        </Form>
    </>);
}
export default InfoContainer;