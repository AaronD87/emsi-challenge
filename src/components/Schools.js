import React from 'react'
import useProgramCounts from '../hooks/useProgramCounts'

const Schools = ({ schools }) => {
  const {
    'school.name': schoolName,
    'school.state': schoolState,
    'school.city': schoolCity,
    'latest.admissions.admission_rate.overall': schoolAdmissions,
    'latest.student.size': schoolStudentSize,
    'latest.programs.cip_4_digit': programCount,
  } = schools

  console.log(12)

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
    <ul className="wrapper">
      <li className="card">
        <section className="upper-card-wrapping">
          <h2 className="school-title">{schoolName}</h2>
          <p className="city-state"> {schoolCity}, {schoolState}</p>
          <img src="https://foroakcliff.org/wp-content/uploads/2016/05/placeholder-160x160.png" className="logo" alt="logo"/>
          <p className="student-size-header"> Student Size: </p>
          <p className="student-size"> {schoolStudentSize} </p>
          <p className="admission-rate-header"> Admission Rate: </p>
          <div className="admission-rate-progress-bar-wrapper">
            <p className="admission-rate"> {Math.round(schoolAdmissions * 100)}% </p>
            <progress value={Math.round(schoolAdmissions * 100)} max="100" className="admission-rate-progress-bar"></progress>
          </div>
        </section>
    
    <hr />
    
        <section className="lower-card-wrapping">
          <p className="program-count-header">
            Available Program Counts: 
          </p>
          {undergraduateDegreeCount && <p className="degree-counts"> Undergraduate Degree: <strong>{undergraduateDegreeCount}</strong></p>}
          <p className="degree-counts"> Associate Degree: <strong>{associateDegreeCount}</strong></p>
          <p className="degree-counts"> Bachelors Degree: <strong>{bachelorDegreeCount}</strong></p>
          <p className="degree-counts"> Post Baccalaureate Certificate: <strong>{postBaccalaureateCertificateCount}</strong></p>
          <p className="degree-counts"> Masters Degree: <strong>{mastersDegreeCount}</strong></p>
          <p className="degree-counts"> Doctoral Degree: <strong>{doctoralDegreeCount}</strong></p>
          <p className="degree-counts"> First Professional Degree: <strong>{firstProfessionalDegreeCount}</strong></p>
          <p className="degree-counts"> Graduate/Professional Certificate: <strong>{graduateProfessionalCertificateCount}</strong></p>
        </section>
      </li>
    </ul>
  )
}

export default Schools
