import React from 'react'
import useProgramCounts from '../hooks/useProgramCounts'

const Schools = ({ schools }) => {
  const {
    'school.name': schoolName,
    'school.state': schoolState,
    'school.city': schoolCity,
    'school.admissions.admission_rate.overall': schoolAdmissions,
    'latest.student.size': schoolStudentSize,
    'latest.programs.cip_4_digit': programCount,
  } = schools

  const {
    undergraduateDegreeCount,
    associateDegreeCount,
    bachelorDegreeCount,
    postBaccalaureateCertificateCount,
    mastersDegreeCount,
    doctoralDegreeCount,
    firstProfessionalDegreeCount,
    graduateProfessionalCertificateCount,
  } = useProgramCounts(programCount)

  return (
    <div>
      {schoolName}
      {/* {schoolState}
            {schoolCity}
            {schoolAdmissions} */}
      {/* {schoolStudentSize} */}
      {associateDegreeCount > 0 ? (
        <p> Associate Degrees: {associateDegreeCount} </p>
      ) : (
        ''
      )}
      {bachelorDegreeCount > 0 ? (
        <p> Bachelor Degrees: {bachelorDegreeCount} </p>
      ) : (
        ''
      )}
      {/* {undergraduateDegreeCount} */}
      {/* {bachelorDegrees} */}
    </div>
  )
}

export default Schools
