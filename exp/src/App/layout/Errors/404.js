import React ,{useEffect, useState}from "react";
import {withRouter, Redirect} from "react-router-dom"
import Doh from "../../../assets/images/doh.png"


const ErrorPage = ({location}) => {

    const [redirctTo, setRedirctTo] = useState(false); // your state value to manipulate

    useEffect(() => {
        if (location.pathname === "/") {
          setRedirctTo(true)
        }
     
    },[location.pathname]);
  
  
    const getFile = async  () => {
      // const res = await fetch("http://localhost:3001/api/file/download/1234.jpg");
      // const blob = await res.blob();
     // download(blob, "test.jpg");
  }

      return (<>
      {redirctTo ?  <Redirect to='/signin' /> :
            <div className="text-center">
              <div className="error mx-auto" data-text="404">404</div>
            <button onClick={getFile}>test</button>
  
              <p className="lead text-gray-800 mb-5">Page Not Found</p>
              <img src={Doh}className="img-fluid" alt="PageNotFount"/>
            </div>
            }
      </>);
}
export default withRouter(ErrorPage);