import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeField} from "../../../../../store/modules/question";
  

const Toggle = () => {
    
  const dispatch = useDispatch();
  const {type} = useSelector(state=> state.question);

  const test = e => {
      console.log(e.target.checked)
      dispatch(changeField({
          key : e.target.name,
          value : e.target.checked
      }))
  }
  console.log(type)

    return(<>
        <div id="checkBoxArea">
            <div class="onoffswitch">
                <input 
                  type="checkbox" 
                  name="type" 
                  class="onoffswitch-checkbox" 
                  id="myonoffswitch" 
                  tabIndex="0" 
                  value={type} 
                  onChange={test}
                  checked={type}
                />
                <label class="onoffswitch-label" for="myonoffswitch">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                </label>
            </div>
        </div>
    </>);

}
export default Toggle;

