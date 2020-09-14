import React from 'react'
import { NavLink } from 'react-router-dom';


const activeStyle = {

    backgroundColor: "#85CE36 !important",
    color:"#ffffff !important"
}
const SideBar = () => {
    return (<>

            <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
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
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>    
                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li>
                                <NavLink to="/init" activeStyle={activeStyle}>
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    API 관리 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/exception">
                                    <i className="metismenu-icon pe-7s-display2"></i>
                                    Exception 관리 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/team">
                                    <i className="metismenu-icon pe-7s-network"></i>
                                    팀 관리 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/question">
                                    <i className="metismenu-icon pe-7s-note"></i>
                                    문제 관리 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/map">
                                    <i className="metismenu-icon pe-7s-compass"></i>
                                    지도 관리 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/guide">
                                    <i className="metismenu-icon pe-7s-map"></i>
                                    가이드 관리 
                                </NavLink>
                            </li>
                        </ul>
                           
                    </div>
                </div>
            </div>   



        
        
        
        </>)
}

export default SideBar
