export { Outputs }

function Outputs({ generalInformation, educationInformation }) {
    return (
        <>
        <GeneralInformationOutputs firstName={generalInformation.firstName} lastName={generalInformation.lastName} email={generalInformation.email} phone={generalInformation.phone}/>
        <br></br>
        <EducationOutputs education={educationInformation}/>
        <br></br>
        <ExperienceOutputs />
        </>
    )
}

function GeneralInformationOutputs({firstName, lastName, email, phone}) {
    return (
        <>
        <p>Full Name: {firstName} {lastName}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        </>
    )
}

function EducationOutputs({ education }) {
  return (
    <>
    <p>Education: </p>
    <ul>
        {
        education.map((entry) => (
        <li key={entry.id}>
            ID: {entry.id}
            <br></br>
            {entry.qualification} ({entry.school})
            <br></br>
            {entry.startDate} - {entry.endDate}
        </li>
        ))   
        }
    </ul>
    </>
  );
} // Need to fix this and figure out how to parse it through

function ExperienceOutputs({experience}) {
    return (
        <>
        <p>Experience: {experience}</p>
        </>
    )
}