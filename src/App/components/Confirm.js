import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ChatIcon from '@material-ui/icons/Chat';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


const messageStyle = {
    color: "#000",
    padding: "2px",
    fontSize: "14px",
    minWidth:"450px",
    minHeight:"80px"
}

const ConfirmComponent = (props) => {

    const {message, title="확인" , confrimBtn ='확인', cancleBtn='취소', onAccept,  isOpen, onCancle} = props;

    return(<>
          
            <Dialog
                open={isOpen}
                TransitionComponent={Transition}
                maxWidth="sm"
                keepMounted
                onClose={onCancle}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                     <ChatIcon color="primary" style={{ marginRight: "10px"}} />
                       {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <span style={messageStyle}>
                            {message}
                        </span>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onAccept} color="primary" variant="contained"size="small" >
                        {confrimBtn}
                    </Button>
                    <Button onClick={onCancle} color="primary" variant="contained"size="small" >
                        {cancleBtn}
                    </Button>
                </DialogActions>
            </Dialog>
    
    
    </>);
}
export default ConfirmComponent;