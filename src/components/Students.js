import React from 'react';

import Student from '../components/Student'
import StudentListItem from '../components/StudentListItem'

class Students extends React.Component {
  handleOnClick(){
    consol.log('on click')
  }
    render() {
      return (
        <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Joined</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Subject</th>
                </tr>
              </thead>
              <tbody>
                {this.props.students.map((student) => {
                  return <StudentListItem  key={student.id} {...student} onClick={this.handleOnClick.bind(this)}/>
                })}
                
              </tbody>
          </table>
        </div>
      );
    }
  }



export default Students;