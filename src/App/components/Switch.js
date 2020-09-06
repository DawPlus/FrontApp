import React, {  useState } from 'react';



const SwitchBtn = (props) => {
    const {checked, id, onChange} = props;
    console.log(checked, id );

    const [isChecked, setIsChecked] = useState(checked === "Y" ? true : false);

    const onChangeHandler = () => {

        setIsChecked(isChecked ? false : true);

        onChange(id);

    }

    return(<>
        <div className='custom-control custom-switch'>
            <input
                type='checkbox'
                className='custom-control-input'
                id={`checke${id}`}
                checked={isChecked}
                onChange={onChangeHandler}
                readOnly
            />
            <label className='custom-control-label' htmlFor={`checke${id}`}>
           
            </label>
         </div>    
    </>);


}
export default SwitchBtn;
