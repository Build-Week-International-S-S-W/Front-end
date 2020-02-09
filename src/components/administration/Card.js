import React, {Component} from 'react';
import {Card} from 'primereact/card';
import {Link} from 'react-router-dom';
import {Button} from 'primereact/button';
import './Card.scss';


export default class StudentCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        student: props.student
      }
    }
    deleteFunction = (id) => {
        this.props.deleteStudents(id)
    }

    render() {
        const header = (

            <img alt="Card" src='https://via.placeholder.com/10'/>
        );
        const footer = (
            <span id='btn'>
                <Link to={`/edit-form/${this.props.student.id}`}>
                  <Button label="Edit"
                  className="edit" icon="pi pi-check"/>
                </Link>
                <Button label="Delete"
                        onClick={() => {this.deleteFunction(this.state.student.id)}}
                        className="delete"
                        icon="pi pi-times"/>
             </span>
        );

        return (
            <div>
                <div className="card-wrapper" style={{width: '30%', margin:'0 auto'}}>

                    <div className="card-container">
                        <Card title= {this.state.student.name }
                            subTitle = {this.state.student.id}
                            footer={footer}
                            header={header}>
                            <div className="card-info">
                                <p>Grade: {this.state.student.grade}</p>
                                <p>Class: {this.state.student.class}</p>
                                <p>Background Story: {this.state.student.background}</p>
                                <p>Status: {this.state.student.status}</p>
                                <p>Age: {this.state.student.age}</p>
                                <p>Has Insurance: {this.state.student.insurance}</p>
                                <p>Has Birth Certificate: {this.state.student.birth_certificate}</p>
                                <p>Special Needs: {this.state.student.special_needs}</p>
                                <p>Student's Contact Person: {this.state.student.student_contact}</p>
                                <p>Student's Social Worker: {this.state.student.social_worker}</p>
                            </div>

                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
