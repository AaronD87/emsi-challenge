export const programCounts = (programCount) => {
    let undergraduateDegrees = 0
    let associateDegrees = 0
    let bachelorDegrees = 0
    let postBaccalaureateCertificates = 0
    let mastersDegrees = 0
    let doctoralDegrees = 0
    let firstProfessionalDegrees = 0
    let graduateProfessionalCertificates = 0

    for (let i = 0; i < programCount.length; i++) {
        switch (programCount[i].credential.level) {
            case 1:
                undergraduateDegrees++
                break
            case 2:
                associateDegrees++
                break
            case 3:
                bachelorDegrees++
                break
            case 4:
                postBaccalaureateCertificates++
                break
            case 5:
                mastersDegrees++
                break
            case 6:
                doctoralDegrees++
                break
            case 7:
                firstProfessionalDegrees++
                break
            case 8:
                graduateProfessionalCertificates++
                break
            default:
                console.log('degree not found')
                break
        }
    }
}
