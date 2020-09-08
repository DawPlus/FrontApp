import React from 'react'
import { useDispatch , useSelector} from 'react-redux';
import {changeFieldList, changeFieldRadio} from "../../../../../../store/modules/question";

const MultiContainer = () => {
    const dispatch = useDispatch();
    const {examples} = useSelector(state=> state.question.new);
    const onChange = (e, idx )=> {
        dispatch(changeFieldList({
                index : idx,
                item : {
                    [e.target.name] :e.target.value
                }
        }));
    }

    const onRadioChange = (e, idx) => {
        dispatch(changeFieldRadio({
            index : idx,
            item : {
                [e.target.name] :  e.target.checked ? 1 :2
            }
        }));
    }
    return(<>
            <p>※ 정답은 CheckBox 를 선택해 주십시오</p>
            {examples.map((item, idx)=>
                <div className="input-group" key={idx}  style={{margin:"3px 0px"}}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <input aria-label="Checkbox for following text input" 
                                        type="radio" 
                                        className="" 
                                        name="isAnswer"                                    
                                        onChange={e => onRadioChange(e, idx)} 
                            />
                        </span>
                    </div>
                    <input placeholder="" 
                            type="text" 
                            className="form-control"
                            name="content"
                            value={item.content}
                            onChange={e => onChange(e, idx)}
                            />
                </div>
            )}
        </>);
}
export default MultiContainer;