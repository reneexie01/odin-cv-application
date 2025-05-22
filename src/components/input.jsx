export { Inputs }

function Inputs({ 
    onChangeFirst, onChangeLast, onChangeEmail, onChangePhone, 
    educationValidationCheck, onChangeSchool, onChangeQualification, onChangeEducationStart, onChangeEducationEnd, educationValidation,
    experienceValidationCheck, onChangeCompany, onChangePosition, onChangeResponsibility, onChangeExperienceStart, onChangeExperienceEnd, experienceValidation,
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
        />
        <ExperienceInputs 
            experienceValidationCheck={experienceValidationCheck}
            onChangeCompany={onChangeCompany}
            onChangePosition={onChangePosition}
            onChangeResponsibility={onChangeResponsibility}
            onChangeExperienceStart={onChangeExperienceStart}
            onChangeExperienceEnd={onChangeExperienceEnd}
            experienceValidation={experienceValidation}
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

function EducationInputs({ educationValidationCheck, onChangeSchool, onChangeQualification, onChangeEducationStart, onChangeEducationEnd, educationValidation }) {
    return (
        <>
        <div className="education-information">
            <h1>Education: </h1>
            <div>
                <label>
                <span>School: </span>
                <input
                    onChange={onChangeSchool}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Qualification:</span>
                <input 
                    onChange={onChangeQualification}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Start date: </span>
                <input type="date" 
                    onChange={onChangeEducationStart}
                />
                </label>    
            </div>
            <div>
                <label>
                <span>End date: </span>
                <input type="date"
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

function ExperienceInputs({ experienceValidationCheck, onChangeCompany, onChangePosition, onChangeResponsibility, onChangeExperienceStart, onChangeExperienceEnd, experienceValidation }) {
    return (
        <>
        <div className="experience-information">
            <h1>Experience: </h1>
            <div>
                <label>
                <span>Company name: </span>
                <input 
                    onChange={onChangeCompany}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Position title: </span>
                <input
                    onChange={onChangePosition}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Main responsibilities: </span>
                <input
                    onChange={onChangeResponsibility}
                />
                </label>
            </div>
            <div>
                <label>
                <span>Start date: </span>
                <input type="date"
                    onChange={onChangeExperienceStart}
                />
                </label>
            </div>
            <div>
                <label>
                <span>End date: </span>
                <input type="date"
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