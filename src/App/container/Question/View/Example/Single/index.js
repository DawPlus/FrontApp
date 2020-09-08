import React from "react";

const SingleContainer = (props) => {
    const {single} = props
    return(<>
             <textarea className="form-control" id="hint" value={single.content} readOnly style={{resize : "none"}}></textarea>
          </>);

}
export default SingleContainer