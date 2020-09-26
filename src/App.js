import React from 'react'
import Schools from './components/Schools'
import useFetch from './hooks/useFetch'

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential,latest.programs.cip_4_digit.title&api_key=${API_KEY}`

  const { loading, data } = useFetch(url)

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.results.length > 0 &&
        data.results.map((school, i) => <Schools schools={school} key={i} />)
      )}

      <div>
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  )
}

export default App
