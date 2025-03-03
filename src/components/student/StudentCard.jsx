import React from 'react';

const StudentCard = ({student, onDelete}) => {
    return (
        <tr>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.age}</td>
            <td>
                <button onClick={() => onDelete(student.id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default StudentCard;