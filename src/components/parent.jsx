import { useState } from 'react'
import { Inputs } from './input.jsx'
import { Outputs } from './output.jsx'

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

    const educationHistory = [
    {
        id: "a1", 
        school: 'University of NSW',
        qualification: 'Bachelors of Arts',
        startDate: 'May 2020',
        endDate: 'December 2025'
    },
    {
        id: "a2",
        school: 'University of Sydney',
        qualification: 'Bachelors of Exercise Science',
        startDate: 'March 2019',
        endDate: 'April 2023'
    }
    ];

    const [education, setEducation] = useState({
        educationHistory
    })

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
        />
        <hr></hr>
        <Outputs 
            generalInformation={person}
            educationInformation={education}
        />
        </>
    )
}
