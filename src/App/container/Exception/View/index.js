import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
import { initialize, initializeForm  , selectAction} from "../../../../store/modules/exceptions"
const ViewContainer = ({history, match}) => {

    const {id} = match.params;
    const dispatch = useDispatch();
    const {status, views, message} = useSelector(state=> state.exceptions);
    const { enqueueSnackbar } = useSnackbar();

    const { title, exceptions, device_id, save_date} = views;

    // SmacBar    
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
  
  

    // 뒤로 
    const onCancle = () => {
        history.push("/exception");
    }



      

    useUpdateEffect(() => {
        if(status === null ) return;
            switch(status){
                case "SELECT_SUCCESS" : 
                    snackBar(message);
                    break;
                case "SELECT_FAILURE" : 
                    snackBar(message);
                    break;
                default : break;
            }
    
        dispatch(initializeForm("status"));
        dispatch(initializeForm("message"));
    
        return () => { // *OPTIONAL*
          // do something on unmount
        }
      },[status]) // you can include deps array if necessary
    



    useEffect(() => {
        
        dispatch(selectAction(id))


        return () => {
            dispatch(initialize());
        }
    }, [dispatch, id])


    return(<>
        
        

            <div className="position-relative row form-group">
                <label for="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <TextField id="standard-basic" label="Standard" fullWidth value={title}/>
                    {/* <input name="title" id="title" placeholder="with a placeholder" type="text" className="form-control" value={title}/> */}
                </div>
            </div>
            <div className="position-relative row form-group"><label for="device_id" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input name="device_id" id="device_id" placeholder="password placeholder" type="text" className="form-control" value={device_id}/>
                    </div>
            </div>
            <div className="position-relative row form-group">
                <label for="save_date" className="col-sm-2 col-form-label">등록일</label>
                <div className="col-sm-10">
                    <input name="save_date" id="save_date" placeholder="password placeholder" type="text" className="form-control" value={save_date}/>
                    </div>
            </div>
        
            <div className="position-relative row form-group"><label for="exceptions" className="col-sm-2 col-form-label">Text Area</label>
                <div className="col-sm-10">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    rows={8}
                    value={exceptions}
                    disabled
                    fullWidth
                    variant="outlined"
                    />
                    {/* <textarea name="text" id="exceptions" className="form-control" value={exceptions}></textarea></div> */}
                    </div>
            </div>
        
            
            
            <div className="position-relative row form-check">
                <div className="col-sm-10 offset-sm-2">
                    <button className="btn btn-secondary" onClick={onCancle}>뒤로</button>
                </div>
            </div>


        
    </>);


}
export default withRouter(ViewContainer);