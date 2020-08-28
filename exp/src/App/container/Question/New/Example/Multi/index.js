import React from 'react'
import { useDispatch , useSelector} from 'react-redux';
import {changeFieldList} from "../../../../../../store/modules/question";

const MultiContainer = () => {
    const dispatch = useDispatch();
    const {examples} = useSelector(state=> state.question);
    const onChange = (e, idx )=> {
        dispatch(changeFieldList({
                index : idx,
                item : {
                        [e.target.name] : e.target.type ==="text" ? e.target.value : e.target.checked
                }
        }));
    }
    return(<>
            {examples.map((item, idx)=>
                <div className="input-group" key={idx}  style={{margin:"3px 0px"}}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <input aria-label="Checkbox for following text input" 
                                        type="checkbox" 
                                        className="" 
                                        name="isAnswer"
                                        value={item.isAnswer}
                                        onChange={e => onChange(e, idx)} 
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