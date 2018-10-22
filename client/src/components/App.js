import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { RoleList, RoleEdit, RoleCreate } from './roles/RoleList';
//import jsonServerProvider from 'ra-data-json-server';
//import simpleRestProvider from 'ra-data-simple-rest';
import fakeDataProvider from 'ra-data-fakerest';


//const dataProvider = simpleRestProvider('http://localhost:3000/api');

// const dataProvider = fakeDataProvider({
//     roles: [{
//         "rolename": "PI",
//         "username": [
//             "rudra@singh.com",
//             "shenly@glenn.com",
//             "victor@twick.com"
//         ],
//         "permissions": {
//             "dataupload": true,
//             "settings": true,
//             "newusers": true,
//             "datadownload": true,
//             "changepermission": true,
//             "createstudy": true,
//             "createbattery": true
//         }
//     },
//     {
//         "rolename": "coPI",
//         "username": [
//             "pratap@singh.com",
//             "tony@glenn.com"
//         ],
//         "permissions": {
//             "dataupload": true,
//             "settings": false,
//             "newusers": true,
//             "datadownload": false,
//             "changepermission": true,
//             "createstudy": false,
//             "createbattery": false
//         }
//     },
//     {
//         "rolename": "coordinator",
//         "username": [
//             "amit@singh.com"
//         ],
//         "permissions": {
//             "dataupload": true,
//             "settings": true,
//             "newusers": false,
//             "datadownload": false,
//             "changepermission": false,
//             "createstudy": false,
//             "createbattery": false
//         }
//     }]
// })

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate} />
    </Admin>
);


export default App;