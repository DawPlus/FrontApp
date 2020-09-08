import React from "react";
const MultiContainer = (props) => {
    const {data} = props;
    return(<>
              {data.map((item, idx)=>
                <div className="input-group" key={idx}  style={{margin:"3px 0px"}}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <input aria-label="Checkbox for following text input" 
                                        type="radio" 
                                        name="isAnswer"
                                        checked={item.isAnswer === "1" ? true  : false }
                                        readOnly 
                            />
                        </span>
                    </div>
                    <input placeholder="" 
                            type="text" 
                            className="form-control"
                            name="content"
                            value={item.content}
                            readOnly
                            />
                </div>
            )}
    
    
    
    
    
    </>);
}
export default MultiContainer;