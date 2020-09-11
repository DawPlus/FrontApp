import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLifecycles } from "react-use";
import {selectAction, initialize} from "../../../store/modules/team";
import { withRouter } from 'react-router-dom';
const ScreenShotContainer = ({match}) => {


    const {id} = match.params;
    const dispatch = useDispatch();
    const {view} = useSelector(s => s.team);

    // Page Mount Event 
    useLifecycles(
        ()=>{
            dispatch(selectAction(id));
        },
        () =>{
            dispatch(initialize());
            console.log("뒷정리");
        }
      );

    return(<>
        <div className="card-border mb-3 card card-body border-primary">
            <h5 className="card-title">{view.team}</h5>
            {view.manager} / {view.phone}
        </div>
    </>);



}
export default withRouter(ScreenShotContainer);