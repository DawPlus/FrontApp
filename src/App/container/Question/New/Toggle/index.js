import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeField} from "../../../../../store/modules/question";
  

const Toggle = () => {
    
  const dispatch = useDispatch();
  const {type} = useSelector(state=> state.question);

  const test = e => {
      dispatch(changeField({
          key : e.target.name,
          value : e.target.checked
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
                  value={type} 
                  onChange={test}
                  checked={type}
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

