import React from "react";

import TextField from '@material-ui/core/TextField';
const answerSingle =  () => {

    return(<>
     <TextField
          id="outlined-multiline-static"
          label="주관식 답변 "
          multiline
          rows={6}
          variant="outlined"
          fullWidth
        />
        
    
    </>);



}
export default answerSingle;