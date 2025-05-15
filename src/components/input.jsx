export { Inputs }

function Inputs({ 
    onChangeFirst, onChangeLast, onChangeEmail, onChangePhone, 
    onClickEducation, onChangeSchool, onChangeQualification, onChangeEducationStart, onChangeEducationEnd 
}) {
    return (
        <>
        <GeneralInformationInputs 
            onChangeFirst={onChangeFirst} 
            onChangeLast={onChangeLast} 
            onChangeEmail={onChangeEmail}
            onChangePhone={onChangePhone}
        />
        <EducationInputs 
            onChangeSchool={onChangeSchool}
            onClickEducation={onClickEducation}
            onChangeQualification={onChangeQualification}
            onChangeEducationStart={onChangeEducationStart}
            onChangeEducationEnd={onChangeEducationEnd}
        />
        <ExperienceInputs />
        </>
    )
}

function GeneralInformationInputs({ onChangeFirst, onChangeLast, onChangeEmail, onChangePhone }) {
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
            <input onChange={onChangeEmail}/>
        </label>
        <label>
            Phone number:
            <input onChange={onChangePhone}/>
        </label>
        </>
    )
}

function EducationInputs({ onClickEducation, onChangeSchool, onChangeQualification, onChangeEducationStart, onChangeEducationEnd }) {
    return (
        <>
        <h1>Education: </h1>
        <label>
            School: 
            <input
                onChange={onChangeSchool}
            />
        </label>
        <label>
            Qualification:
            <input 
                onChange={onChangeQualification}
            />
        </label>
        <label>
            Start date: 
            <input type="date" 
                onChange={onChangeEducationStart}
            />
        </label>
        <label>
            End date: 
            <input type="date"
                onChange={onChangeEducationEnd}
            />
        </label>
        <button onClick={onClickEducation}>Add</button>
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