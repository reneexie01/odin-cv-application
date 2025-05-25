export { Inputs }

function Inputs({ 
    onChangeFirst, onChangeLast, onChangeEmail, onChangePhone, 
    educationValidationCheck, onChangeSchool, onChangeQualification, onChangeEducationStart, onChangeEducationEnd, educationValidation, newEducationEntry,
    experienceValidationCheck, onChangeCompany, onChangePosition, onChangeResponsibility, onChangeExperienceStart, onChangeExperienceEnd, experienceValidation, newExperienceEntry, 
    inputStatus, onClickInputStatus
}) {
    return (
        <>
        <div className={inputStatus}>
        <GeneralInformationInputs 
            onChangeFirst={onChangeFirst} 
            onChangeLast={onChangeLast} 
            onChangeEmail={onChangeEmail}
            onChangePhone={onChangePhone}
        />
        <EducationInputs 
            educationValidationCheck={educationValidationCheck}
            onChangeSchool={onChangeSchool}
            onChangeQualification={onChangeQualification}
            onChangeEducationStart={onChangeEducationStart}
            onChangeEducationEnd={onChangeEducationEnd}
            educationValidation={educationValidation}
            newEducationEntry={newEducationEntry}
        />
        <ExperienceInputs 
            experienceValidationCheck={experienceValidationCheck}
            onChangeCompany={onChangeCompany}
            onChangePosition={onChangePosition}
            onChangeResponsibility={onChangeResponsibility}
            onChangeExperienceStart={onChangeExperienceStart}
            onChangeExperienceEnd={onChangeExperienceEnd}
            experienceValidation={experienceValidation}
            newExperienceEntry={newExperienceEntry}
        />
        <br></br>
        <button onClick={onClickInputStatus} className="submit">Submit</button>
        </div>
        </>
    )
}

function GeneralInformationInputs({ onChangeFirst, onChangeLast, onChangeEmail, onChangePhone }) {
    return (
        <>
        <div className="general-information">
            <h1>General Information: </h1>
            <div>
                <label>
                <span>First name: </span>
                <input 
                    onChange={onChangeFirst}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Last name: </span>
                <input 
                    onChange={onChangeLast}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Email: </span>
                <input onChange={onChangeEmail}/>
                </label>
            </div>
            <div>
                <label>
                <span>Phone number: </span>
                <input onChange={onChangePhone}/>
                </label>
            </div>
        </div>
        </>
    )
}

function EducationInputs({ educationValidationCheck, onChangeSchool, onChangeQualification, onChangeEducationStart, onChangeEducationEnd, educationValidation, newEducationEntry }) {
    return (
        <>
        <div className="education-information">
            <h1>Education: </h1>
            <div>
                <label>
                <span>School: </span>
                <input
                    value={newEducationEntry.school}
                    onChange={onChangeSchool}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Qualification:</span>
                <input 
                    value={newEducationEntry.qualification}
                    onChange={onChangeQualification}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Start date: </span>
                <input type="date" 
                    value={newEducationEntry.startDate}
                    onChange={onChangeEducationStart}
                />
                </label>    
            </div>
            <div>
                <label>
                <span>End date: </span>
                <input type="date"
                    value={newEducationEntry.endDate}
                    onChange={onChangeEducationEnd}
                />
                </label>
            </div>
            <div className="education-validation">{educationValidation}</div>
            <button onClick={educationValidationCheck}>Add</button>
        </div>
        </>
    )
}

function ExperienceInputs({ experienceValidationCheck, onChangeCompany, onChangePosition, onChangeResponsibility, onChangeExperienceStart, onChangeExperienceEnd, experienceValidation, newExperienceEntry }) {
    return (
        <>
        <div className="experience-information">
            <h1>Experience: </h1>
            <div>
                <label>
                <span>Company name: </span>
                <input 
                    value={newExperienceEntry.company}
                    onChange={onChangeCompany}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Position title: </span>
                <input
                    value={newExperienceEntry.position}
                    onChange={onChangePosition}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Main responsibilities: </span>
                <input
                    value={newExperienceEntry.responsibilities}
                    onChange={onChangeResponsibility}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Start date: </span>
                <input type="date"
                    value={newExperienceEntry.startDate}
                    onChange={onChangeExperienceStart}
                />
                </label>
            </div>
            <div>
                <label>
                <span>End date: </span>
                <input type="date"
                    value={newExperienceEntry.endDate}
                    onChange={onChangeExperienceEnd}
                />
                </label>
            </div>
            <div className="experience-validation">{experienceValidation}</div>
            <button onClick={experienceValidationCheck}>Add</button>
        </div>
        </>
    )
}