import React, {  Suspense} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Loader from "./Loader";
// import NoMatch from "../../components/nomatch";
// import Auth from "./Auth";
import './app.scss';
import routes from "../../routes";
import Header from "./Header";
// import ThemeSetting from "./ThemeSetting";
import SideBar from "./Sidebar";
import Footer from "./Footer";

import  "../../assets/scripts/main";
import config from  "../../config";
// import Error from "./Errors/404";
 import Auth from "../container/Auth"




const AdminLayout = () =>{
//class AdminLayout extends Component {

    
    //render() {
        
   



        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });

     

        return (<>
        
            <Auth/>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">          
                <Header />
                {/* <ThemeSetting/> */}
                <div className="app-main"> 
                    <SideBar/> 
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Suspense fallback={<Loader/>}>
                                <Switch>
                                    {menu}
                                    <Redirect from="/" to={config.defaultPath} />
                                    {/* <Route path="/" component={Error} /> */}
                                </Switch>
                            </Suspense>    
                        </div>
                        <Footer/>    
                    </div>     
                </div>
            </div>    
         
        </>);
  //  }
}

export default AdminLayout;