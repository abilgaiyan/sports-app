import React from 'react';
//import { List, Datagrid, TextField, BooleanField  } from 'react-admin';
import { List, Edit, Create, Datagrid,BooleanField, BooleanInput , ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import {RoleNameField} from './RoleNameField'

export const RoleList = (props) => (
    <List  {...props}>
        <Datagrid>
            <TextField source="rolename" label="RoleName" />
            <RoleNameField  label="UserName" />
            <BooleanField source="permissions.dataupload" label="Dataupload" />
            <BooleanField source="permissions.settings" label="Settings" />
            <BooleanField source="permissions.newusers" label="Newusers" />
            <BooleanField source="permissions.datadownload" label="Datadownload" />
            <BooleanField source="permissions.changepermission" label="Changepermission" />
            <BooleanField source="permissions.createstudy" label="Createstudy" />
            <BooleanField source="permissions.createbattery" label="Createbattery" />

            <EditButton />
            
        </Datagrid>
    </List>
);

const RoleTitle = ({ record }) => {
    return <span>Role {record ? `"${record.rolename}"` : ''}</span>;
};

export const RoleEdit = (props) => (
    <Edit title={<RoleTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="rolename" />
            <TextInput label="User" source="username" >
            </TextInput>
            <BooleanInput  source="permissions.dataupload" label="Dataupload" />
            <BooleanInput  source="permissions.settings" label="Settings" />
            <BooleanInput  source="permissions.newusers" label="Newusers" />
            <BooleanInput  source="permissions.datadownload" label="Datadownload" />
            <BooleanInput  source="permissions.changepermission" label="Changepermission" />
            <BooleanInput  source="permissions.createstudy" label="Createstudy" />
            <BooleanInput  source="permissions.createbattery" label="Createbattery" />
        </SimpleForm>
    </Edit>
);

export const RoleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="rolename" />
            <TextInput label="User" source="username" >
            </TextInput>
            <BooleanInput  source="permissions.dataupload" label="Dataupload" />
            <BooleanInput  source="permissions.settings" label="Settings" />
            <BooleanInput  source="permissions.newusers" label="Newusers" />
            <BooleanInput  source="permissions.datadownload" label="Datadownload" />
            <BooleanInput  source="permissions.changepermission" label="Changepermission" />
            <BooleanInput  source="permissions.createstudy" label="Createstudy" />
            <BooleanInput  source="permissions.createbattery" label="Createbattery" />
        </SimpleForm>
    </Create>
);