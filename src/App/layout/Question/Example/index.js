import React, { useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import AnswerList from "./List";
import AnswerSingle from "./Single";
import {changeField, changeFieldList, initializeRadio,initializeForm} from "../../../modules/question"
const ToggleContainer = () => {      
    const  {type,singleExample, examples} = useSelector(state => state.question);
    const dispatch = useDispatch();
    const onChange = e=>{
        dispatch(changeField({
            key : e.target.name,
            value : e.target.value
        }));
    }
    const onChangeList = (e, idx)=> {
        dispatch(changeFieldList({
           index : idx,
           item :{
                [e.target.name]   : e.target.value
           } 
        }));
    }
    const onClick = (e, idx)=> {
        //var value = (e.target.value==='true');

        // 라디오 초기화
        dispatch(initializeRadio());


        dispatch(changeFieldList({
           index : idx,
           item :{
                [e.target.name]   : true
           } 
        }));
    }

    // 뒷정리
    useEffect(()=>{
        return ()=>{
            console.log("뒷정리")
            dispatch(initializeForm({form : "examples"}));
            dispatch(initializeForm("singleExample"));
        }
    },[dispatch]);
    return(<>
            { type ? 
                    <AnswerList onChange={onChangeList} onClick={onClick} example={examples}/> :
                    <AnswerSingle onChange={onChange} example={singleExample} />
            }
    </>);
}
export default ToggleContainer;