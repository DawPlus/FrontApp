import React, {useEffect}  from "react";
import { withRouter } from 'react-router-dom';
import {useSelector}   from "react-redux";
const AuthContainer = ({history}) => {

    const tokken = sessionStorage.getItem("tokken");
    const {authrization} = useSelector(state=> state.auth);
   
    
    useEffect(()=>{

        if(tokken){
            return;
        } 
        console.log("Tokken Check");
        history.push("/signin");
    },[tokken,history]);

    useEffect(()=>{
        
        if(authrization === false){
            console.log(authrization) ;
            history.push("/signin");
        }
    },[authrization,  history])
    


    return <></>;
}
export default withRouter(AuthContainer);