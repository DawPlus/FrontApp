import React, {useEffect}  from "react";
import { withRouter } from 'react-router-dom';
import {useSelector}   from "react-redux";

const AuthContainer = ({history}) => {

    const tokken            = sessionStorage.getItem("tokken");
    const isLoading         = sessionStorage.getItem("isLoadJS");   
    const {authrization}    = useSelector(state=> state.auth);
   
    
    useEffect(()=>{
        // Step 1
        // Tokken 체크 
        // 토큰이 잇을경우 무시
        // 없을경우 로그인 페이지로 이동
        if(!tokken || authrization === false){
            history.push("/signin");
            return;
        }


        if(isLoading  === null ){
            sessionStorage.setItem("isLoadJS", true);
            window.location.reload();
            return;
        }


    },[tokken, authrization, isLoading ,history]);



    // useEffect(()=>{
        
    //     console.log(authrization, "<-- auth") ;
        
    //     if(authrization === false){
    //         history.push("/signin");
    //     }
    // },[authrization,  history]);


    // // 1회 로딩 안햇을경우 로딩 후 세션 스토리지에 저장함.
    // useEffect(()=>{
    //     console.log(isLoading ,"<=== is Loading")
    //     if(isLoading) return;
    //     if(isLoading=== null) {
    //         sessionStorage.setItem("isLoadJS", true);
    //         window.location.reload();
    //     }

    // },[isLoading])


    

    return <></>;
}
export default withRouter(AuthContainer);