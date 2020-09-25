import React from 'react'

const Schools = (props) => {
    const {
        'school.name': schoolName,
        'school.state': schoolState,
        'school.city': schoolCity,
        'school.admissions.admission_rate.overall': schoolAdmissions,
        'latest.student.size': schoolStudentSize,
    } = props.schools

    return (
        <div>
            {schoolName}
            {schoolState}
            {schoolCity}
            {schoolAdmissions}
            {schoolStudentSize}
        </div>
    )
}

export default Schools
