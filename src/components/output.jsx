export { Outputs }

function Outputs({ generalInformation, educationInformation, onClickEducation, experienceInformation, onClickExperience, inputStatus }) {
    return (
        <>
        <GeneralInformationOutputs firstName={generalInformation.firstName} lastName={generalInformation.lastName} email={generalInformation.email} phone={generalInformation.phone}/>
        <hr />
        <EducationOutputs education={educationInformation} onClickEducation={onClickEducation} inputStatus={inputStatus}/>
        <hr />
        <ExperienceOutputs experience={experienceInformation} onClickExperience={onClickExperience} inputStatus={inputStatus}/>
        </>
    )
}

function GeneralInformationOutputs({firstName, lastName, email, phone}) {
    return (
        <>
        <p>General information: </p>
        <p>Full Name: {firstName} {lastName}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        </>
    )
}

function EducationOutputs({ education, onClickEducation, inputStatus }) {
  return (
    <>
    <p>Education: </p>
    <ul>
        {
        education.map((entry) => (
        <li key={entry.id}>
            ID: {entry.id}
            <br></br>
            {entry.qualification} ({entry.school}) <button id={entry.id} onClick={onClickEducation} className={inputStatus}>Delete</button>
            <br></br>
            {entry.startDate} to {entry.endDate}
        </li>
        ))   
        }
    </ul>
    </>
  );
} 

function ExperienceOutputs({ experience, onClickExperience, inputStatus }) {
    return (
        <>
        <p>Experience: </p>
        <ul>
            {
            experience.map((entry) => (
            <li key={entry.id}>
                ID: {entry.id}
                <br></br>
                {entry.position} ({entry.company}) <button id={entry.id} onClick={onClickExperience} className={inputStatus}>Delete</button>
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