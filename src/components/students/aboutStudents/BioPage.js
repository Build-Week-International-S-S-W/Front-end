import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../../actions/students';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';


import {Button} from 'reactstrap';

const AboutStudents = (props) => {

    useEffect(() => {
        props.getStudents();       
    }, [props]);

    
    console.log('studetns infor from store>>>>>>>>>>>>>>>>', props.studentsList);
    return (
        <React.Fragment>
            
            <div className="btn">
                <Button color="success" onClick={(touched) => {
                    
                    touched = (alert('Educell International network is being monitor!'));

                    window.location.href = "/add-students"}}>Add Student</Button>
            </div>
            <DataTable value={props.studentsList}>
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
        </React.Fragment>          
    )
};

const mapStateToProps = (state) => {
    console.log(state.students)
    return{
        error:state.students.error,
        isLoading:state.students.isLoading,
        studentsList:state.students.students
    }
}

export default connect( mapStateToProps,{ getStudents })(AboutStudents);



   
        //      <style>        
        //         {
        //             `.custom-tag {
        //       max-width: 50%;

        //       height: 300px;

        //       background: black;
        //       font-size: 29px;

        //     }`
        //         }
        //     </style>

        //     <Carousel
        //         activeIndex={activeIndex}
        //         next={next}
        //         previous={previous}

        //     >
        //         <CarouselIndicators
        //             items={students}
        //             students={students}
        //             activeIndex={activeIndex}
        //             onClickHandler={goToIndex}
        //         />

        //         {classmates}
        //         <CarouselControl
        //             direction="prev"
        //             directionText="Previous"
        //             onClickHandler={previous}

        //         />
        //         <CarouselControl
        //             direction="next"
        //             directionText="Next"
        //             onClickHandler={next}
        //         />

        //     </Carousel >
