export { Outputs }

function Outputs() {
    const person = {firstName: "John", lastName:"Doe", school: "UNSW", experience:"Account manager"}
    return (
        <>
        <GeneralInformationOutputs firstName={person.firstName} lastName={person.lastName}/>
        <br></br>
        <EducationOutputs school={person.school} />
        <br></br>
        <ExperienceOutputs experience={person.experience}/>
        </>
    )
}

function GeneralInformationOutputs({firstName, lastName}) {
    return (
        <>
        Full Name: {firstName} {lastName}
        </>
    )
}

function EducationOutputs({school}) {
    return (
        <>
        Education: {school}
        </>
    )
}

function ExperienceOutputs({experience}) {
    return (
        <>
        Experience: {experience}
        </>
    )
}