import React, { useEffect, useState } from "react"
import axios from "axios"

function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const API_KEY = process.env.REACT_APP_API_KEY
    const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential,latest.programs.cip_4_digit.title&api_key=${API_KEY}`

    useEffect(() => {
        const fetchData = async function () {
            try {
                setLoading(true)
                const response = await axios.get(url)
                if (response.status === 200) {
                    setData(response.data)
                }
            } catch (error) {
                throw error
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    console.log(data)

    return (
      <>
        {loading && <div className="App">Hello</div>}
      </>
    );
}

export default App
