import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {changeField} from "../../../modules/question";
const ToggleContainer = () => {
    const dispatch = useDispatch();
    const {type} = useSelector(state => state.question);

    const handleChange = (e) => {
        dispatch(changeField({
            key :"type",
            value : e.target.checked
        }))
    };

    return(<>
          <FormControlLabel controlid="toggleSwitch" id="toggleSwitch" style={{float : "right"}}
                control={
                <Switch
                    checked={type}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                    size="small"
                />
                }
                label="문제유형"
           />
    
    
    </>);
}
export default ToggleContainer;