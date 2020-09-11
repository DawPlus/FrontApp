import React from "react";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
  
const SpinnerComponent = () => {
    const classes = useStyles();
    
    const {isLoading} = useSelector(state=> state.loading);

    return (


        <>
            <Backdrop className={classes.backdrop} open={isLoading}>
                <PacmanLoader
                    css={override}
                    size={50}
                    margin={2}
                    color={"#85CE36"}
                    loading={true}
                />
            </Backdrop>
        </>
       
      );


}

export default SpinnerComponent;