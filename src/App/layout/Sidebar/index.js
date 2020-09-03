import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (<>
            <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
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
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>    <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading">관리도구</li>
                            <li>
                                <Link to="/init">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    API 관리 
                                </Link>
                            </li>
                            <li>
                                <Link to="/exception">
                                    <i className="metismenu-icon pe-7s-display2"></i>
                                    Exception 관리 
                                </Link>
                            </li>
                            <li>
                                <Link to="/team">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    팀 관리 
                                </Link>
                            </li>
                            <li>
                                <a href="index.html">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    문제관리
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <Link to="/question">
                                            <i className="metismenu-icon pe-7s-rocket"></i>
                                            문제 관리 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/map">
                                            <i className="metismenu-icon pe-7s-rocket"></i>
                                            지도 관리 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/guide">
                                            <i className="metismenu-icon pe-7s-rocket"></i>
                                            가이드 관리 
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>   



        
        
        
        </>)
}

export default SideBar
