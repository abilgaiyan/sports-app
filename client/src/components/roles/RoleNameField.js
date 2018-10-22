import React from 'react';
export const RoleNameField = ({ record }) =>{ 
   return (
    <ul>
        {record.username.map((item,index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
)}

RoleNameField.defaultProps = { addLabel: true };