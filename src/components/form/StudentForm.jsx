import React, {useContext, useEffect, useState} from 'react';
import {StudentContext} from "../../context/StudentContext.jsx";
import {useNavigate} from "react-router-dom";

const StudentForm = () => {
    const [student, setStudent] = useState({
        firstname: '',
        lastname: '',
        hobbies: '',
        age: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const {postStudent, getStudents, getHobbies, hobbies} = useContext(StudentContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (hobbies.length > 0) {
            getHobbies(hobbies);
        }
    }, [getHobbies, hobbies]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setStudent({...student, [name]: value});
        setErrorMessage('');
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (student.firstname.length > 2 && student.lastname) {
            const response = await postStudent(student);
            if (response.ok) {
                await getStudents();
                await getHobbies();
                setErrorMessage('Estudiante agregado correctamente');
                navigate('/');
            } else {
                setErrorMessage(response.message);
            }
        } else {
            setErrorMessage('El nombre es obligatorio');
        }
    }

    return (
        <div>
            <h2>Agregar un nuevo estudiante</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="firstname" style={{margin: "5px", padding: "5px"}}
                           value={student.firstname} onChange={handleChange}/>
                </label><br/>
                <label>
                    Apellidos:
                    <input type="text" name="lastname" style={{margin: "5px", padding: "5px"}}
                           value={student.lastname} onChange={handleChange}/>
                </label><br/>
                <label>
                    Edad:
                    <input type="text" name="age" style={{margin: "5px", padding: "5px"}}
                           value={student.age} onChange={handleChange}/>
                </label><br/>
                <label>
                    Aficiones:
                    <select name="hobbies" id="hobbies" style={{margin: "5px", padding: "5px"}}
                            value={student.hobbies} onChange={handleChange}>
                        <option value="">--Seleccione una opcion</option>
                        {
                            hobbies.map((hobby) => (
                                <option key={hobby.id} value={hobby.id}>{hobby.name}</option>
                            ))
                        }
                    </select>
                </label>
                <p>{errorMessage}</p>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default StudentForm;