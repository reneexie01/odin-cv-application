export { Inputs }

function Inputs() {
    return (
        <>
        <GeneralInformationInputs />
        <EducationInputs />
        <ExperienceInputs />
        </>
    )
}

function GeneralInformationInputs() {
    return (
        <>
        <h1>General Information: </h1>
        <label for="full-name">Full name: </label>
            <input id="full-name" />
        <label for="email">Email: </label>
            <input id="email"/>
        <label for="phone-number">Phone number: </label>
            <input id="phone-number"/>
        </>
    )
}

function EducationInputs() {
    return (
        <>
        <h1>Education: </h1>
        <label for="school">School: </label>
            <input id="school"/>
        <label for="course">Course: </label>
            <input id="course"/>
        <label for="start-date">Start date: </label>
            <input id="education-start-date" type="date"/>
        <label for="end-date">End date: </label>
            <input id="education-end-date" type="date"/>
        </>
    )
}

function ExperienceInputs() {
    return (
        <>
        <h1>Experience: </h1>
        <label for="company">Company name: </label>
            <input id="company"/>
        <label for="position">Position title: </label>
            <input id="position"/>
        <label for="responsibilities">Main responsibilities: </label>
            <input id="responsibilities"/>
        <label for="experience-start-date">Start date: </label>
            <input id="experience-start-date" type="date"/>
        <label for="experience-end-date">End date: </label>
            <input id="experience-end-date" type="date"/>
        </>
    )
}