export { Outputs }

function Outputs({ generalInformation, educationInformation, onClickEducation, experienceInformation, onClickExperience }) {
    return (
        <>
        <GeneralInformationOutputs firstName={generalInformation.firstName} lastName={generalInformation.lastName} email={generalInformation.email} phone={generalInformation.phone}/>
        <br></br>
        <EducationOutputs education={educationInformation} onClickEducation={onClickEducation}/>
        <br></br>
        <ExperienceOutputs experience={experienceInformation} onClickExperience={onClickExperience}/>
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

function EducationOutputs({ education, onClickEducation }) {
  return (
    <>
    <p>Education: </p>
    <ul>
        {
        education.map((entry) => (
        <li key={entry.id}>
            ID: {entry.id}
            <br></br>
            {entry.qualification} ({entry.school}) <button id={entry.id} onClick={onClickEducation}>Delete</button>
            <br></br>
            {entry.startDate} to {entry.endDate}
        </li>
        ))   
        }
    </ul>
    </>
  );
} // TODO: Add delete function to remove item from array

function ExperienceOutputs({ experience, onClickExperience }) {
    return (
        <>
        <p>Experience: </p>
        <ul>
            {
            experience.map((entry) => (
            <li key={entry.id}>
                ID: {entry.id}
                <br></br>
                {entry.position} ({entry.company}) <button id={entry.id} onClick={onClickExperience}>Delete</button>
                <br></br>
                {entry.responsibilities}
                <br></br>
                {entry.startDate} to {entry.endDate}
            </li>
            ))   
            }
        </ul>
        </>
    )
} // TODO: Consider putting responsibilities into a list