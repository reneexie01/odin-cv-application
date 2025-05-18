import { useState } from 'react'
import { Inputs } from './input.jsx'
import { Outputs } from './output.jsx'
import { toolsManager } from './tools.jsx'

export { Parent }

function Parent() {
    const [person, setPerson] = useState({
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
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
    } // TODO: Validate that everything has been filled in before accepting data

    const removeEducation = (e) => {
        const targetId = e.target.id;
        console.log(targetId)
        const educationCopy = [...education]
        console.log(educationCopy)
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

    const [newExperience, setNewExperience] = useState({
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: ""
    })

    const handleCompanyChange = (e) => {
        const updatedExperience = {...newExperience, company: e.target.value}
        setNewExperience(updatedExperience)
    }

    const handlePositionChange = (e) => {
        const updatedExperience = {...newExperience, position: e.target.value}
        setNewExperience(updatedExperience)
    }

    const handleResponsibilityChange = (e) => {
        const updatedExperience = {...newExperience, responsibilities: e.target.value}
        setNewExperience(updatedExperience)
    }

    const handleExperienceStartDateChange = (e) => {
        const updatedExperience = {...newExperience, startDate: e.target.value}
        setNewExperience(updatedExperience)
    }
    
    const handleExperienceEndDateChange = (e) => {
        const updatedExperience = {...newExperience, endDate: e.target.value}
        setNewExperience(updatedExperience)
    }

    const addNewExperience = () => {
        const newEntry = {
                id: toolsManager(), 
                company: newExperience.company,
                position: newExperience.position,
                responsibilities: newExperience.responsibilities,
                startDate: newExperience.startDate,
                endDate: newExperience.endDate
            }
        const updatedExperience = [...experience, newEntry]
        setExperience(updatedExperience)
    } // TODO: Validate that everything has been filled in before accepting data

    const removeExperience = (e) => {
        const targetId = e.target.id;
        console.log(targetId)
        const experienceCopy = [...experience]
        console.log(experienceCopy)
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

    return (
        <>
        <Inputs 
            onChangeFirst={handleFirstNameChange}
            onChangeLast={handleLastNameChange}
            onChangeEmail={handleEmailChange}
            onChangePhone={handlePhoneChange}

            onClickEducation={addNewEducation}
            onChangeSchool={handleSchoolChange}
            onChangeQualification={handleQualificationChange}
            onChangeEducationStart={handleEducationStartChange}
            onChangeEducationEnd={handleEducationEndChange}
            
            onClickExperience={addNewExperience}
            onChangeCompany={handleCompanyChange}
            onChangePosition={handlePositionChange}
            onChangeResponsibility={handleResponsibilityChange}
            onChangeExperienceStart={handleExperienceStartDateChange}
            onChangeExperienceEnd={handleExperienceEndDateChange}
        />
        <hr></hr>
        <Outputs 
            generalInformation={person}
            educationInformation={education}
            onClickEducation={removeEducation}
            experienceInformation={experience}
            onClickExperience={removeExperience}
        />
        </>
    )
}
