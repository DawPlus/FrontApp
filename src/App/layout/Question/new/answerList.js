import React from "react";
import InputAdornment from '@material-ui/core/InputAdornment';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import Looks5Icon from '@material-ui/icons/Looks5';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';




const AnswerList = () => {

    const test = ()=>{
        console.log("Hello")
    }
return(<>

    <Input id="" startAdornment={ <Icon idx={1} onClick={test}/>} size="small" fullWidth/>
    <Input id="" startAdornment={ <Icon idx={2} />} size="small" fullWidth/>
    <Input id="" startAdornment={ <Icon idx={3} />} size="small" fullWidth/>
    <Input id="" startAdornment={ <Icon idx={4} />} size="small" fullWidth />
    <Input id="" startAdornment={ <Icon idx={5} />} size="small" fullWidth />
  









</>)

}

const Icon = (props) => {
    const {idx , onClick} = props
    const onClickHandler = e =>{
        console.log(e.target);
    }


    const rowIcon = (row) => {    
        switch(row){
            case 1 : return  <LooksOneIcon onClick={onClickHandler}/>;
            case 2 : return  <LooksTwoIcon onClick={onClickHandler}/>;
            case 3 : return  <Looks3Icon   onClick={onClickHandler}/>;
            case 4 : return  <Looks4Icon   onClick={onClickHandler}/>;
            case 5 : return  <Looks5Icon   onClick={onClickHandler}/>;
        }
    }
    


    return (
        <InputAdornment position="start">
               <Radio
                    color="primary"
                    size="small"
                    value="d"
                    name="radio-button-demo"
                />
            {rowIcon(idx)}
        </InputAdornment>

    );

}
export default AnswerList;