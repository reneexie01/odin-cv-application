export { Inputs }

function Inputs({ onChangeFirst, onChangeLast }) {
    return (
        <>
        <GeneralInformationInputs onChangeFirst={onChangeFirst} onChangeLast={onChangeLast}/>
        <EducationInputs />
        <ExperienceInputs />
        </>
    )
}

function GeneralInformationInputs({ onChangeFirst, onChangeLast }) {
    return (
        <>
        <h1>General Information: </h1>
        <label>
            First name: 
            <input 
                onChange={onChangeFirst}
            />
        </label>
        <label>
            Last name:
            <input 
                onChange={onChangeLast}
            />
        </label>
        <label>
            Email: 
            <input />
        </label>
        <label>
            Phone number:
            <input/>
        </label>
        </>
    )
}

function EducationInputs() {
    return (
        <>
        <h1>Education: </h1>
        <label>
            School: 
            <input/>
        </label>
        <label>
            Course:
            <input/>
        </label>
        <label>
            Start date: 
            <input type="date"/>
        </label>
        <label>
            End date: 
            <input type="date"/>
        </label>
        </>
    )
}

function ExperienceInputs() {
    return (
        <>
        <h1>Experience: </h1>
        <label>
            Company name:
            <input/>
        </label>
        <label>
            Position title:
            <input/>
        </label>
        <label>
            Main responsibilities: 
            <input/>
        </label>
        <label>
            Start date:
        <input type="date"/>
        </label>
        <label>
            End date: 
            <input type="date"/>
        </label>
        </>
    )
}