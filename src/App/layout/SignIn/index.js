import React,{useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch , useSelector}         from "react-redux";
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../AdminLayout/Breadcrumb";
import TextField from '@material-ui/core/TextField';
import {withRouter }                        from 'react-router-dom';

import {login ,changeField, initializeForm} from "../../../store/modules/auth"
      
const SignUp = ({ history }) => {

  
    const dispatch = useDispatch();
    const {loginInfo, authrization, tokken, userInfo, authError } = useSelector(state => state.auth);
    
    useEffect(() => {
      dispatch(initializeForm('loginInfo'));
    }, [dispatch]);
  
    useEffect(() => {
    
      if (authError) {
          console.log(authError);
          return;
      }
      if (authrization) {
          sessionStorage.setItem("tokken",tokken);
          console.log('로그인 성공');
          history.push("/main");
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
        return(
            <Aux>
                <Breadcrumb/>
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
                                    <input type="text" 
                                        className="form-control" 
                                        placeholder="UserId"
                                        name="id"
                                        value={loginInfo.id}
                                        onChange={onChange}/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" 
                                           className="form-control" 
                                           placeholder="password"  
                                           value={loginInfo.password}
                                           name="password"
                                           onChange={onChange}/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                
                                <button className="btn btn-primary shadow-2 mb-4"  onClick={loginAction}>
                                        Login
                                </button>
                                
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
 
}

export default withRouter(SignUp);