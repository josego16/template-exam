import React, {useContext, useState} from 'react';
import {StudentContext} from "../../context/StudentContext.jsx";
import {useNavigate} from "react-router-dom";

const StudentForm = () => {
    const [student, setStudent] = useState({
        firstname: '',
        lastname: '',
        age: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const {postStudent, getStudents} = useContext(StudentContext);
    const navigate = useNavigate();

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
                console.log(response);
                await getStudents();
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
                    <input type="text" name="firstname" value={student.firstname} onChange={handleChange}/>
                </label><br/>
                <label>
                    Apellidos:
                    <input type="text" name="lastname" value={student.lastname} onChange={handleChange}/>
                </label><br/>
                <label>
                    Edad:
                    <input type="text" name="age" value={student.age} onChange={handleChange}/>
                </label>
                <p>{errorMessage}</p>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default StudentForm;