import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';


export class StudentsDataTable extends Component {

  constructor(props) {
      super(props);
      this.state = {
        students:props.data
      };      
  }

  componentDidMount() {
      
  }
                // name:'',
                // student_grade:'',
                // student_class:'',
                // background:'',
                // student_status:'',
                // age:'',
                // special_needs:'',
                // insurance:false,
                // birth_certificate:false

  render() {
     console.log('data table>>>>>>', this.state.students)
      return (
          <DataTable value={this.state.students}>
              <Column field="name" header="Name" />
              <Column field="age" header="Age" />
              <Column field="grade" header="Grade" />
              <Column field="class" header="Class" />
              <Column field="background" header="Background" />
              <Column field="status" header="Status" />
              <Column field="special_needs" header="Special Needs" />
              <Column field="insurance" header="Insurance" />
              <Column field="birth_certificate" header="Birth Certificate" />
          </DataTable>
      );
  }
}

