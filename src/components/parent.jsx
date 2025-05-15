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

    const [experience, setExperience] = useState({
            company: "",
            position: "",
            responsibilities: "",
            startDate: "",
            endDate: ""
    })

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
        />
        <hr></hr>
        <Outputs 
            generalInformation={person}
            educationInformation={education}
            onClickEducation={removeEducation}
        />
        </>
    )
}
