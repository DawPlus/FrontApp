import React, {useEffect}  from "react";
import { withRouter } from 'react-router-dom';
import {useSelector}   from "react-redux";

const AuthContainer = ({history}) => {

    const tokken = sessionStorage.getItem("tokken");
    const isLoading =   sessionStorage.getItem("isLoadJS");   
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
    },[authrization,  history]);


    // 1회 로딩 안햇을경우 로딩 후 세션 스토리지에 저장함.
    useEffect(()=>{
        if(isLoading) return;
        if(isLoading=== null) {
            sessionStorage.setItem("isLoadJS", true);
            window.location.reload();
        }

    },[isLoading])


    

    return <></>;
}
export default withRouter(AuthContainer);