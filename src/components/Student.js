import React from 'react';
class Student extends React.Component {

handleOnChange() {

}

    render() {
      return (
        <div>
        <h2>Details</h2>
        <ul>
        {/*Add Value and onchange method to the inputs*/}
            <li>ID: <input className="float-right" type="text"/></li>
            <li>Name: <input className="float-right" type="text"/></li>
            <li>Email: <input className="float-right" type="text"/></li>
            <li>Date Joined: <input className="float-right" type="text"/></li>
            <li>Address: <input className="float-right" type="text"/></li>
            <li>City: <input className="float-right" type="text"/></li>
            <li>Country: <input className="float-right" type="text"/></li>
            <li>ZIP: <input className="float-right" type="text"/></li>
            <li>Subject: <input className="float-right" type="text"/></li>
        </ul>
        
        </div>
      );
    }
  }



export default Student;