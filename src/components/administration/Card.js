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
    deleteFunction = (id) => {
        console.log('Card.js line 12>>>>>>>>>',id)
        this.props.deleteStudents(id)
    }
    render() {
        const header = (
            <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>
        );
        // const footer = (
        //     // <span>
        //     //     <Button label="Edit" icon="pi pi-check"/>
        //     //     <Button label="Delete" 
        //     //             onClick={() => {this.deleteFunction(this.state.student.id)}}
        //     //             icon="pi pi-times" className="p-button-secondary"/>
        //     // </span>
        // );

        return (
            <div>   
                <div className="content-section implementation">  
                    <span>
                    <Button label="Edit" icon="pi pi-check"/>
                    <Button label="Delete" 
                            onClick={() => {this.deleteFunction(this.state.student.id)}}
                            icon="pi pi-times" className="p-button-secondary"/>
                   </span>                  
                    <Card title= {this.state.student.name }
                          subTitle={this.state.student.id} 
                          style={{width: '360px'}} 
                          className="ui-card-shadow" 
                          footer={this.state.student.id} 
                          header={header}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>
                </div>
            </div>
        )
    }
}
