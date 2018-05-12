import React from 'react';


const StudentListItem = ({id, name, joined, grade, subject}) => (

<tr >
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{joined}</td>
    <td>{grade}</td>
    <td>{subject}</td>
  </tr>
    
)



export default StudentListItem;