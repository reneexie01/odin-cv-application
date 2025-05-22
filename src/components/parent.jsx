import { useState } from 'react'
import { Inputs } from './input.jsx'
import { Outputs } from './output.jsx'
import { toolsManager } from './tools.jsx'

export { Parent }

// TODO: Put the functions into a parent function that returns functions ??

function Parent() {
    const [person, setPerson] = useState({
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            phone: "+61 400 000 000"
    })

    const handleFirstNameChange = (e) => {
        const newPerson = {...person, firstName: e.target.value};
        setPerson(newPerson)
    }

    const handleLastNameChange = (e) => {
        const newPerson = {...person, lastName: e.target.value};
        setPerson(newPerson)
    }

    const handleEmailChange = (e) => {
        const newPerson = {...person, email: e.target.value};
        setPerson(newPerson)
    }

    const handlePhoneChange = (e) => {
        const newPerson = {...person, phone: e.target.value};
        setPerson(newPerson)
    }

    // New education inputs
    const [newEducationEntry, setNewEducationEntry] = useState({
        school: "",
        qualification: "",
        startDate: "",
        endDate: ""
    })

    const handleSchoolChange = (e) => {
        const newSchool = {...newEducationEntry, school: e.target.value};
        setNewEducationEntry(newSchool)
    }

    const handleQualificationChange = (e) => {
        const newQualification = {...newEducationEntry, qualification: e.target.value};
        setNewEducationEntry(newQualification)
    }

    const handleEducationStartChange = (e) => {
        const newQualification = {...newEducationEntry, startDate: e.target.value};
        setNewEducationEntry(newQualification)
    }

    const handleEducationEndChange = (e) => {
        const newQualification = {...newEducationEntry, endDate: e.target.value};
        setNewEducationEntry(newQualification)
    }

    const addNewEducation = () => {
        const newEntry = {
                id: toolsManager(), 
                school: newEducationEntry.school,
                qualification: newEducationEntry.qualification,
                startDate: newEducationEntry.startDate,
                endDate: newEducationEntry.endDate
            }
        const newEducation = [...education, newEntry]
        setEducation(newEducation)
    }

    // Validates inputs before accepting submission for new education
    const educationValidationCheck = () => {
        let masterError = ""
         if (newEducationEntry.school === "") {
            const errorSchool = "School field is empty. ";
            masterError += errorSchool;
        } 
        if (newEducationEntry.qualification === "") {
            const errorQualifications = "Qualification field is empty. "
            masterError += errorQualifications
        }
        if (newEducationEntry.startDate === "") {
            const errorEducationStart = "Start date missing. "
            masterError += errorEducationStart
        }
        if (newEducationEntry.endDate === "") {
            const errorEducationEnd = "End date missing. "
            masterError += errorEducationEnd
        }
        if (newEducationEntry.startDate > newEducationEntry.endDate) {
            const errorEducationDates = "Start date is after end date. "
            masterError += errorEducationDates
        }
        setEducationValidation(masterError)
        if (masterError === "") {
            addNewEducation();
        }
    }

    const [educationValidation, setEducationValidation] = useState("")

    // TODO: Clear the entries in the inputs after submission is made

    const removeEducation = (e) => {
        const targetId = e.target.id;
        const educationCopy = [...education]
        const newEducation = educationCopy.filter((entry) => (
            entry.id !== targetId
        ))
        setEducation(newEducation)
    }

    // Array of all the education inputs so far
    const [education, setEducation] = useState([ 
        {
        id: toolsManager(), 
        school: 'University of NSW',
        qualification: 'Bachelors of Arts',
        startDate: '2020-06-01',
        endDate: '2025-12-31'
        },
        {
        id: toolsManager(),
        school: 'University of Sydney',
        qualification: 'Bachelors of Exercise Science',
        startDate: '2019-03-31',
        endDate: '2021-04-01'
        }
    ])

    const [newExperienceEntry, setNewExperienceEntry] = useState({
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: ""
    })

    const handleCompanyChange = (e) => {
        const updatedExperience = {...newExperienceEntry, company: e.target.value}
        setNewExperienceEntry(updatedExperience)
    }

    const handlePositionChange = (e) => {
        const updatedExperience = {...newExperienceEntry, position: e.target.value}
        setNewExperienceEntry(updatedExperience)
    }

    const handleResponsibilityChange = (e) => {
        const updatedExperience = {...newExperienceEntry, responsibilities: e.target.value}
        setNewExperienceEntry(updatedExperience)
    }

    const handleExperienceStartDateChange = (e) => {
        const updatedExperience = {...newExperienceEntry, startDate: e.target.value}
        setNewExperienceEntry(updatedExperience)
    }
    
    const handleExperienceEndDateChange = (e) => {
        const updatedExperience = {...newExperienceEntry, endDate: e.target.value}
        setNewExperienceEntry(updatedExperience)
    }

    const addNewExperience = () => {
        const newEntry = {
                id: toolsManager(), 
                company: newExperienceEntry.company,
                position: newExperienceEntry.position,
                responsibilities: newExperienceEntry.responsibilities,
                startDate: newExperienceEntry.startDate,
                endDate: newExperienceEntry.endDate
            }
        const updatedExperience = [...experience, newEntry]
        setExperience(updatedExperience)
    } // TODO: Validate that everything has been filled in before accepting data

    const experienceValidationCheck = () => {
        let masterError = ""
        if (newExperienceEntry.company === "") {
            const errorCompany = "Company name field is empty. "
            masterError += errorCompany;
        }
        if (newExperienceEntry.position === "") {
            const errorPosition = "Position field is empty. "
            masterError += errorPosition;
        }
        if (newExperienceEntry.responsibilities === "") {
            const errorResponsibilities = "Responsibilities field is empty. "
            masterError += errorResponsibilities;
        }
        if (newExperienceEntry.startDate === "") {
            const errorExperienceStart = "Start date is missing. "
            masterError += errorExperienceStart;
        }
        if (newExperienceEntry.endDate === "") {
            const errorExperienceEnd = "End date is missing. "
            masterError += errorExperienceEnd;
        }
        if (newExperienceEntry.startDate > newExperienceEntry.endDate) {
            const errorExperienceDates = "Start date is after end date. "
            masterError += errorExperienceDates;
        }
        setExperienceValidation(masterError)
        if (masterError === "") {
            addNewExperience()
        }
    }

    const [experienceValidation, setExperienceValidation] = useState("")

    const removeExperience = (e) => {
        const targetId = e.target.id;
        const experienceCopy = [...experience]
        const newExperience = experienceCopy.filter((entry) => (
            entry.id !== targetId
        ))
        setExperience(newExperience)
    }

    // Array of all the experience inputs so far
    const [experience, setExperience] = useState([
        {
            id: toolsManager(),
            company: 'Acme Co',
            position: 'Supervisor',
            responsibilities: 'Supervising floor staff, organising weekly roster, training staff',
            startDate: '2022-01-01',
            endDate: '2023-12-01'
        },
        {
            id: toolsManager(),
            company: 'New Homes Co',
            position: 'Customer Service',
            responsibilities: 'Taking inbound calls, answering general enquiries',
            startDate: '2024-04-01',
            endDate: '2025-01-01'
        }
    ])

    // Submit button on the input section to hide input fields

    const [inputStatus, setInputStatus] = useState('active')

    const changeInputStatus = () => {
        const newStatus = 'hidden';
        setInputStatus(newStatus);
    }

    const editInputs = () => {
        const newStatus = 'active';
        setInputStatus(newStatus);
    }

    return (
        <>
        <div className="input">
        <Inputs 
            onChangeFirst={handleFirstNameChange}
            onChangeLast={handleLastNameChange}
            onChangeEmail={handleEmailChange}
            onChangePhone={handlePhoneChange}

            educationValidationCheck={educationValidationCheck}
            onChangeSchool={handleSchoolChange}
            onChangeQualification={handleQualificationChange}
            onChangeEducationStart={handleEducationStartChange}
            onChangeEducationEnd={handleEducationEndChange}
            educationValidation={educationValidation}
            
            experienceValidationCheck={experienceValidationCheck}
            onChangeCompany={handleCompanyChange}
            onChangePosition={handlePositionChange}
            onChangeResponsibility={handleResponsibilityChange}
            onChangeExperienceStart={handleExperienceStartDateChange}
            onChangeExperienceEnd={handleExperienceEndDateChange}
            experienceValidation={experienceValidation}

            inputStatus={inputStatus}
            onClickInputStatus={changeInputStatus}
        />
        </div>
        <div className="output">
        <Outputs 
            generalInformation={person}
            educationInformation={education}
            onClickEducation={removeEducation}
            experienceInformation={experience}
            onClickExperience={removeExperience}
            onClickEditInputs={editInputs}
            inputStatus={inputStatus}
        />
        </div>
        <button onClick={editInputs} className="edit">Edit</button>
        </>
    )
}
