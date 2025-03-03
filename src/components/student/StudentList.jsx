import React, {useContext, useEffect} from 'react';
import {StudentContext} from "../../context/StudentContext.jsx";
import StudentCard from "./StudentCard.jsx";

const StudentList = () => {
    const {students, getStudents, deleteStudent} = useContext(StudentContext);

    useEffect(() => {
        getStudents();
    }, []);

    return (
        <table border="1">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Edad</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {students.length > 0 ? (
                students.map(student => (
                    <StudentCard key={student.id} student={student} onDelete={deleteStudent}/>
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