import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeFieldForm} from "../../../../../store/modules/question";


const Toggle = () => {
    
  const dispatch = useDispatch();
  const {type} = useSelector(state=> state.question.new);

  // type -> 1 : 객관식   , 2 : 주관식 
  const toggle = type === 1 ? true : false;
  
  const onChange = e => {
      dispatch(changeFieldForm({
          form : "new",
          key : e.target.name,
          value : e.target.checked ? 1 : 2
      }))
  }
  

    return(<>
        <div id="checkBoxArea">
            <div className="onoffswitch">
                <input 
                  type="checkbox" 
                  name="type" 
                  className="onoffswitch-checkbox" 
                  id="myonoffswitch" 
                  tabIndex="0" 
                  value={toggle} 
                  onChange={onChange}
                  checked={toggle}
                />
                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
            </div>
          
        </div>

    
    </>);

}
export default Toggle;

