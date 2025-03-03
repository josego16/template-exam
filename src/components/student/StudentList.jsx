import React, {useContext, useEffect} from 'react';
import {StudentContext} from "../../context/StudentContext.jsx";
import StudentCard from "./StudentCard.jsx";

const StudentList = () => {
    const {students, hobbies, getStudents, getHobbies, deleteStudent} = useContext(StudentContext);

    useEffect(() => {
        getStudents();
        getHobbies();
    }, []);

    return (
        <table border="1">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Aficiones</th>
                <th>Edad</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {students.length > 0 ? (
                students.map(student => (
                    <StudentCard key={student.id} student={student} hobbies={hobbies} onDelete={deleteStudent}/>
                ))
            ) : (
                <tr>
                    <td colSpan="3">No hay estudiantes registrados</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default StudentList;