import React,{useEffect, useState} from 'react';
import {useDispatch , useSelector} from "react-redux";
import {withRouter}  from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";

import {login ,changeField, initializeForm} from "../../../store/modules/auth";
import config from "../../../config";
import { useUpdateEffect } from 'react-use';
import Warning  from "../../components/Warning";

const SignUp = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // 경고창
    const [isWarning, setIsWarning] = useState(false);
    // 경고메시지
    const [warning , setWarning] = useState("");
    
    const {loginInfo, authrization, tokken, userInfo, authError, status, message } = useSelector(state => state.auth);
    
    useEffect(() => {
      dispatch(initializeForm('loginInfo'));
      // 세선 초기화  
      sessionStorage.clear();
    }, [dispatch]);
  
    useEffect(() => {
      if (authError) {         
          return;
      }
      if (authrization) {
          sessionStorage.setItem("tokken",tokken);
          console.log('로그인 성공');  
          history.push(config.defaultPath);
      }
    }, [authrization, authError, userInfo, history, tokken, dispatch]);
  

    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
            form: 'loginInfo',
            key: name,
            value,
            }),
        );
    };
    const loginAction = e =>{
        e.preventDefault();
          dispatch(login(loginInfo));
      }


        // Use Update Event 
        useUpdateEffect(() => {
            if(status === null ) return;
                switch(status){
                    case "LOGIN_FAILURE" : 
                        setWarning(message);
                        setIsWarning(true);
                        break;
               
                    default : break;
                }

            dispatch(initializeForm("status"));
            dispatch(initializeForm("message"));

            return () => {

            }
        },[status]);





        return(<>
            <Warning
                    message={warning}
                    isOpen={isWarning}
                    onCancle={()=>{setWarning(""); setIsWarning(false)}}
                />
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <TextField
                                        label="User Id"
                                        type="text"
                                        autoComplete="off"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        name="id"
                                        value={loginInfo.id}
                                        onChange={onChange}/>
                                  
                                </div>
                                <div className="input-group mb-4">
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type="password"
                                        autoComplete="off"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        name="password"
                                        value={loginInfo.password}
                                        onChange={onChange}/>
                                </div>
                               
                                <button className="btn btn-primary shadow-2 mb-4"  onClick={loginAction}>
                                        Login
                                </button>
                                
                                <p className="mb-2 text-muted">
                                    Copyright © 2020 The React Admin Project
                                </p>
                                {/* <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p> */}
                            </div>
                        </div>
                    </div>
                </div>
         
        </>);
 
}

export default withRouter(SignUp);