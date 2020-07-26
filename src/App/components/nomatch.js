import React ,{useEffect, useState}from "react";
import {withRouter, Redirect} from "react-router-dom"
import Doh from "../../assets/images/doh.png";
// 404 Page 
const NoMatch = ({location}) => {

  const [redirctTo, setRedirctTo] = useState(false); // your state value to manipulate

  useEffect(() => {
      if (location.pathname === "/") {
        setRedirctTo(true)
      }
   
  },[location.pathname]);

    return (<>
    {redirctTo ?  <Redirect to='/login' /> :
          <div className="text-center">
            <div className="error mx-auto" data-text="404">404</div>
            <p className="lead text-gray-800 mb-5">Page Not Found</p>
            <img src={Doh}className="img-fluid" alt="PageNotFount"/>
          </div>
          }
    </>);
}
export default withRouter(NoMatch);