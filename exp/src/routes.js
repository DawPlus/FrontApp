import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

// const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

// const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
// const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
// const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

// const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
// const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
// const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

// const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));
// const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));
// const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));
// const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));
// const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
// const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));



// const QuestionList = React.lazy(() => import('./Page/Question/list'));
// const QuestionNew = React.lazy(() => import('./Page/Question/new'));
// const QuestionView  = React.lazy(() => import('./Page/Question/view'));


// const MapList  = React.lazy(() => import('./Page/Map/list'));


// API 관리 
const initList      = React.lazy(() => import('./page/init/list'));
const initNew       = React.lazy(() => import('./page/init/new'));
const initView      = React.lazy(() => import('./page/init/view'));

// Exception 관리 
const ExceptionList =  React.lazy(() => import('./page/exception/list'));
const ExceptionView =  React.lazy(() => import('./page/exception/view'));

// 지도관리 
const mapList =  React.lazy(() => import('./page/map/list'));

const routes = [
    // // Question
    // { path: '/question', exact: true,   name: 'Question List', component: QuestionList },
    // { path: '/question/new', exact: true, name: 'Question Add', component: QuestionNew },
    // { path: '/question/:id', exact: true, name: 'Question View', component: QuestionView },
   
    // { path: '/map', exact: true, name: '지도관리 ', component: MapList },

    // API 관리 
    { path: '/init', exact: true, name: 'API 관리  ', component: initList },
    { path: '/init/new', exact: true, name: 'API 등록 ', component: initNew },
    { path: '/init/:id', exact: true, name: 'API 상세 ', component: initView },

    // Exception 관리 
    { path: '/exception', exact: true, name: 'Exception 관리 ', component: ExceptionList },
    { path: '/exception/:id', exact: true, name: 'Exception 상세 ', component: ExceptionView },

    
    // 지도관리 
    { path: '/map', exact: true, name: '지도 관리 ', component: mapList },
    // { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    // { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    // { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    // { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    // { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    // { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    // { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    // { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    // { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    // { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    // { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    // { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    // { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;