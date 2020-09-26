import React from 'react'
import useProgramCounts from '../hooks/useProgramCounts'
import './schools.scss'
import logo from '../assets/university.svg'

const Schools = ({ schools }) => {
  const {
    'school.name': schoolName,
    'school.state': schoolState,
    'school.city': schoolCity,
    'latest.admissions.admission_rate.overall': schoolAdmissions,
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
    <ul className="wrapper">
      <li className="card">
        <section className="upper-card-wrapping">
          <h2 className="school-title">{schoolName}</h2>
          <p className="city-state">
            {' '}
            {schoolCity}, {schoolState}
          </p>
          <img src={logo} className="logo" alt="logo" />
          {schoolStudentSize === null ? (
            <div className="student-size-unavailable">
              <p> Student Size: <p> unavailable </p> </p>
            </div>
          ) : (
            <p className="student-size-header"> Student Size: </p>
          )}
          {schoolStudentSize === null ? (
            ''
          ) : (
            <p className="student-size"> {schoolStudentSize} </p>
          )}
          {schoolAdmissions === null ? (
            <div className="admission-rate-unavailable">
              <p> Admissions Rate: unavailable </p>
            </div>
          ) : (
            <p className="admission-rate-header"> Admission Rate: </p>
          )}
          {schoolAdmissions === null ? (
            ''
          ) : (
            <div className="admission-rate-progress-bar-wrapper">
              <p className="admission-rate">
                {' '}
                {Math.round(schoolAdmissions * 100)}%
              </p>
              <progress
                value={Math.round(schoolAdmissions * 100)}
                max="100"
                className="admission-rate-progress-bar"
              ></progress>
            </div>
          )}
        </section>

        <hr />

        <section className="lower-card-wrapping">
          <p className="program-count-header">Available Program Counts:</p>
          {undergraduateDegreeCount > 0 && (
            <p className="degree-counts">
              {' '}
              Undergraduate Degree: <strong>{undergraduateDegreeCount}</strong>
            </p>
          )}
          {associateDegreeCount > 0 && (
            <p className="degree-counts">
              {' '}
              Associate Degree: <strong>{associateDegreeCount}</strong>
            </p>
          )}
          {bachelorDegreeCount > 0 && (
            <p className="degree-counts">
              {' '}
              Bachelors Degree: <strong>{bachelorDegreeCount}</strong>
            </p>
          )}
          {postBaccalaureateCertificateCount > 0 && (
            <p className="degree-counts">
              {' '}
              Post Baccalaureate Certificate:{' '}
              <strong>{postBaccalaureateCertificateCount}</strong>
            </p>
          )}
          {mastersDegreeCount > 0 && (
            <p className="degree-counts">
              {' '}
              Masters Degree: <strong>{mastersDegreeCount}</strong>
            </p>
          )}
          {doctoralDegreeCount > 0 && (
            <p className="degree-counts">
              {' '}
              Doctoral Degree: <strong>{doctoralDegreeCount}</strong>
            </p>
          )}
          {firstProfessionalDegreeCount > 0 && (
            <p className="degree-counts">
              {' '}
              First Professional Degree:{' '}
              <strong>{firstProfessionalDegreeCount}</strong>
            </p>
          )}
          {graduateProfessionalCertificateCount > 0 && (
            <p className="degree-counts">
              {' '}
              Graduate/Professional Certificate:{' '}
              <strong>{graduateProfessionalCertificateCount}</strong>
            </p>
          )}
        </section>
      </li>
    </ul>
  )
}

export default Schools
