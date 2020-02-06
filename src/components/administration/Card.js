import React, {Component} from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

export default class StudentCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        student: props.student
      }
    }
    render() {
        const header = (
            <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>
        );
        const footer = (
            <span>
                <Button label="Edit" icon="pi pi-check"/>
                <Button label="Delete" icon="pi pi-times" className="p-button-secondary"/>
            </span>
        );

        return (
            <div>
                <div className="content-section implementation">
                    <Card title= {this.state.student.name }
                          subTitle = {this.state.student.id}
                          style={{width: '360px'}}
                          className="ui-card-shadow"
                          footer={footer}
                          header={header}>
                        <div>
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
        )
    }
}
