import React from 'react';

const SwitchBtn = (props) => {
    const {checked, id, onChange} = props;
    const onChangeHandler = () => {     
        onChange(checked === "Y"? "N" : "Y", id);
    }
    return(<>
        <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id={`checke${id}`}
                checked={checked === "Y" ? true : false}
                onChange={onChangeHandler}
                readOnly
            />
            <label className='custom-control-label' htmlFor={`checke${id}`}>
           
            </label>
         </div>    
    </>);


}
export default SwitchBtn;
