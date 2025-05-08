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

    const [education, setEducation] = useState({
            school: "UNSW",
            course: "Bachelors of Arts",
            startDate: "01-01-2020",
            endDate: "31-12-2023"
    })

    const [experience, setExperience] = useState({
            company: "Microsoft",
            position: "Customer service",
            responsibilities: "Answering emails and phone calls",
            startDate: "01-01-2024",
            endDate: "31-12-2024"
    })
    return (
        <>
        <Inputs 
            onChangeFirst={handleFirstNameChange}
            onChangeLast={handleLastNameChange}
        />
        <hr></hr>
        <Outputs 
            firstName={person.firstName} 
            lastName={person.lastName}
        />
        </>
    )
}
