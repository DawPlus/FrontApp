import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin =  React.lazy(() => import('./App/layout/SignIn'));

const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/signin', exact: true, name: 'Signin', component: Signin }
];

export default route;