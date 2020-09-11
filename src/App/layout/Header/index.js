import React, { useState } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from 'notistack';
import {changeField, initializeForm, changeAction, logout} from "../../../store/modules/auth"
import Confirm  from "../../components/Confirm";
import Warning  from "../../components/Warning";
import { useUpdateEffect } from "react-use";
import Info from "../../components/Info";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

const HeaderComponent = () => {
            
        const dispatch = useDispatch();
        // 비밀번호 변경창
        const [isOpen , setIsOpen] = useState(false);
        // 비밀번호 변경 컨펌창
        const [confirmOpen, setConfirmOpen] = useState(false);
        // 비밀번호 일치여부
        const [matchs , setMatchs] = useState(false);
        // 경고창
        const [isWarning, setIsWarning] = useState(false);
        // 경고메시지
        const [warning , setWarning] = useState("");
        // 정보창
        const [isInfo, setIsInfo] = useState(false);
        
        const {admin_id}= useSelector(s => s.auth.userInfo); 
        const {newPassword, oldPassword, confirmPassword} = useSelector(s => s.auth.changePw); 
        const {tokken,  message , status, changePw} = useSelector(s=>s.auth);
        // Change Event
        const onChange = e =>{
            dispatch(changeField({
                form : "changePw",
                key : e.target.name,
                value : e.target.value
            }))
        }


        // 비번 변경 Checkek
        const onChangePwHandler = () =>{
            if([newPassword, oldPassword, confirmPassword].includes("")){
                setWarning("값을 모두 입력해 주십시오.");
                setIsWarning(true);
                return;
            }
            if(newPassword.trim().length < 4){
                setWarning("비밀번호는 최소 4글자 이상 입력해 주십시오.");
                setIsWarning(true);
                return;
            }

            if(newPassword !== confirmPassword){
                setMatchs(true);
                return;
            }else{
                setMatchs(false);
            }
            setConfirmOpen(true);
        }
        // 비밀번호 변경 
        const onChangePw = () => {
            dispatch(changeAction({
                    ...changePw,
                    tokken,
                    admin_id
            }));
        }


            const { enqueueSnackbar } = useSnackbar();  
            const snackBar = (text, variant='info') =>{
                enqueueSnackbar(text,
                    {
                        variant  : variant,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right',
                        },
                        autoHideDuration : 3000
                    }
                );
            }



            // Use Update Event 
            useUpdateEffect(() => {
                if(status === null ) return;
                    switch(status){
                        case "CHANGE_SUCCESS" : 
                            setIsInfo(true);
                            break;
                        case "CHANGE_FAILURE" : 
                            snackBar(message);
                            // 모든 창을 닫고 초기화 한다. 
                            setMatchs(false);
                            setConfirmOpen(false);
                            setIsOpen(false);
                            dispatch(
                                initializeForm("changePw")
                            );

                            setWarning("오류가 발생했습니다 관리자에게 문의해주세요.");
                            setIsWarning(true);
                            break;
                        default : break;
                    }
            
                dispatch(initializeForm("status"));
                dispatch(initializeForm("message"));
            
                return () => {

                }
              },[status]);
            // 로그아웃 확인을 위한 정보창
            const onInfoClose = () => {
                    dispatch(logout());
            }


            //비밀번호 변경창을 닫는다 . 
            const onChangeModalClose = () =>{
                setIsOpen(false);
                dispatch(initializeForm("changePw"));
            }

            const logoutStyle = {
                fontStyle       : "normal",
                color           : "#ef0000",
                textDecoration  : "underline",
                fontWeight      : "bold"

            }

            return (<>
                    <div className="app-header header-shadow"> 
                        <div className="app-header__logo">
                            <div className="close-logo-src" ></div>
                            <div className="logo-src"></div>
                            <div className="header__pane ml-auto">
                                <div>
                                    <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="app-header__mobile-menu">
                            <div>
                                <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="app-header__menu">
                            {/* <span>
                                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                    <span className="btn-icon-wrapper">
                                        <i className="fa fa-ellipsis-v fa-w-6"></i>
                                    </span>
                                </button>
                            </span> */}
                        </div>    
                        <div className="app-header__content">
                            <div className="app-header-right">
                                <div className="header-btn-lg pr-0">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left  ml-3 header-user-info">
                                                <div className="widget-heading">
                                                    Admin
                                                </div>
                                                <div className="widget-subheading">
                                                    (관리자)
                                                </div>
                                            </div>
                                            <div className="widget-content-right header-user-info ml-3">
                                                <a href="/#" className="nav-link" onClick={e=>{e.preventDefault(); setIsOpen(true);}}>
                                                    <i className="nav-link-icon fa fa-cog"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>    


            <Dialog open={isOpen}
                 TransitionComponent={Transition}
                 maxWidth="sm"
                 keepMounted
                 onClose={onChangeModalClose}
                 aria-labelledby="alert-dialog-slide-title"
                 aria-describedby="alert-dialog-slide-description">
            
                <DialogTitle id="alert-dialog-slide-title">
                    <VpnKeyIcon color="primary" style={{ marginRight: "10px"}} />
                      비밀번호 변경
                </DialogTitle>
                
                <DialogContent  style={{minWidth : "500px"}}>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="oldPassword"
                        label="현재 비밀번호"
                        type="password"
                        size="small"
                        autoComplete="off"
                        fullWidth
                        value={oldPassword}
                        onChange={onChange}
                    />
                    <TextField
                        
                        margin="dense"
                        name="newPassword"
                        label="비밀번호"
                        type="password"
                        size="small"
                        autoComplete="off"
                        error={matchs} 
                        fullWidth
                        value={newPassword}
                        onChange={onChange}
                    />
                    <TextField
                        
                        margin="dense"
                        name="confirmPassword"
                        label="비밀번호확인"
                        type="password"
                        size="small"
                        error={matchs} 
                        autoComplete="off"
                        fullWidth
                        value={confirmPassword}
                        onChange={onChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onChangePwHandler} color="primary" variant="contained"size="small">
                        비밀번호 변경
                    </Button>
                    <Button onClick={onChangeModalClose} color="primary" variant="contained"size="small" >
                        취소
                    </Button>
                </DialogActions>
            </Dialog>
            <Confirm
                    message={<>
                               비밀번호를 변경 하시겠습니까? <br/>
                               비밀번호 변경 후 <em style={logoutStyle}>로그아웃</em> 됩니다.
                            </>}
                    isOpen={confirmOpen}
                    onCancle={()=>setConfirmOpen(false)}
                    onAccept={onChangePw}
                />
            <Warning
                    message={warning}
                    isOpen={isWarning}
                    onCancle={()=>{setWarning(""); setIsWarning(false)}}
                />
            <Info
                    message={<>비밀번호가 변경되었습니다 <br/> 다시 로그인 해주시기 바랍니다. </>}
                    isOpen={isInfo}
                    onClose={onInfoClose}
                />
            </>);
}
export default HeaderComponent;