import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {changeField} from "../../../../store/modules/question";
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
          <FormControlLabel
                style={{    float: "right"}}
                control={
                <Switch
                    checked={type}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="문제유형"
           />
    
    
    </>);
}
export default ToggleContainer;