import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import WarningIcon from '@material-ui/icons/Warning';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



const titleStyle = {
    fontSize: "15px",
    verticalAlign: "bottom"
}


const WarningComponent = (props) => {

    const {message, isOpen, onCancle} = props;

    return(<>
          
            <Dialog
                id="warningDialog"
                open={isOpen}
                TransitionComponent={Transition}
                maxWidth="sm"
                keepMounted
                onClose={onCancle}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                     <WarningIcon color="secondary" style={{ marginRight: "10px"}} />
                      <span style={titleStyle}>Warning</span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" className="warningMessage">
                            {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancle} color="primary" variant="contained"size="small" >
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
    
    
    </>);
}
export default WarningComponent;