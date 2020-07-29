import React from "react";
import {useSelector } from "react-redux";

import AnswerList from "./List";
import AnswerSingle from "./Single";
const ToggleContainer = () => {      
    const  {type} = useSelector(state => state.question);
    return(<>
            { type ? 
                    <AnswerList/> :
                    <AnswerSingle />
            }
    </>);
}
export default ToggleContainer;