import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Filter from '../components/Filter';
import Students from '../components/Students';
import Student from '../components/Student';


const dummyStudents = [{
    id: 1,
    name: 'Alex',
    email: 'www@www.com',
    joined: '12.12.12',
    adress: '123 main street',
    city: 'tel aviv',
    country: 'israel',
    zip: 12345,
    subject: 'algebra',
    grade: 98
  },{
    id: 2,
    name: 'Alex',
    email: 'www@www.com',
    joined: '12.12.13',
    adress: '321 main street',
    city: 'tel yosef',
    country: 'israel',
    zip: 54321,
    subject: 'algebra',
    grade: 98
  },{
    id: 3,
    name: 'Alex',
    email: 'www@www.com',
    joined: '12.12.14',
    adress: '321 main street',
    city: 'tel harod',
    country: 'israel',
    zip: 11111,
    subject: 'algebra',
    grade: 100
  }]

class Dashboard extends React.Component {
    addDataBtn(){
        //first click new form
        //second click save new form
    }
    render() {
      return (
        <div>
        <div className="container">
        <Filter />
        <button onClick={this.addDataBtn.bind(this)}> Add Data Button </button>
        <button>Remove</button>
        </div>
    
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <Students students={dummyStudents}/>
                </div>
                <div className="col-lg-4">
                   <Student />
                </div>
            </div>
        </div>
    </div>
      );
    }
  }



export default Dashboard;