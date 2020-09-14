import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

// API 관리 
const initList      = React.lazy(() => import('./Page/Init/list'));
const initNew       = React.lazy(() => import('./Page/Init/new'));
const initView      = React.lazy(() => import('./Page/Init/view'));

// Exception 관리 
const ExceptionList =  React.lazy(() => import('./Page/Exception/list'));
const ExceptionView =  React.lazy(() => import('./Page/Exception/view'));

// 지도관리 
const mapList =  React.lazy(() => import('./Page/Map/list'));

// 가이드관리
const guideList = React.lazy(() => import('./Page/Guide/list'));

// 문제관리
const questionList = React.lazy(() => import('./Page/Question/list'));
const questionNew = React.lazy(() => import('./Page/Question/new'));
const questionView = React.lazy(() => import('./Page/Question/view'));
const questionEdit = React.lazy(() => import('./Page/Question/edit'));



// 팀관리 
const teamList = React.lazy(()=> import("./Page/Team/list"))
const teamView = React.lazy(()=> import("./Page/Team/view"))
const routes = [
  
    // API 관리 
    { path: '/init',        exact: true, name: 'API관리  ', component: initList },
    { path: '/init/new',    exact: true, name: 'API등록 ', component: initNew },
    { path: '/init/:id',    exact: true, name: 'API상세 ', component: initView },

    // Exception 관리 
    { path: '/exception',   exact: true, name: 'Exception관리 ', component: ExceptionList },
    { path: '/exception/:id', exact: true, name: 'Exception상세 ', component: ExceptionView },
    
    // 지도관리 
    { path: '/map',         exact: true, name: '지도관리 ', component: mapList },

    // 가이드관리
    { path: '/guide',       exact: true, name: '가이드관리 ', component: guideList },

    // 팀관리
    { path: '/team',        exact: true, name: '팀관리 ', component: teamList },
    { path: '/team/:id',   exact: true, name: '스크린샷관리' , component: teamView },
    

    
    // 문제관리
    { path: '/question',        exact: true, name: '문제관리 ', component: questionList },
    { path: '/question/new',    exact: true, name: '문제등록 ', component: questionNew },
    { path: '/question/:id',    exact: true, name: '문제상세보기 ', component: questionView },
    { path: '/question/edit/:id',    exact: true, name: '.문제수정 ', component: questionEdit }
    

];

export default routes;