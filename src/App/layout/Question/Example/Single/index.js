import React from "react";
import TextField from '@material-ui/core/TextField';

const singleExampleContainer =  (props) => {
    const { example, onChange} = props;
    return(<>
        <TextField
            name="singleExample"
            id="singleExample"
            label="주관식 답변 "
            multiline
            rows={6}
            value={example}
            onChange={onChange}
            variant="outlined"
            fullWidth
        />
    </>);



}
export default singleExampleContainer;