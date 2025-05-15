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
}

function ExperienceOutputs({experience}) {
    return (
        <>
        <p>Experience: {experience}</p>
        </>
    )
}