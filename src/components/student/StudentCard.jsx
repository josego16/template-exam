import React from 'react';

const StudentCard = ({student, hobbies, onDelete}) => {

    const getHobbies = () => {
        const hobby = hobbies.filter((hob) => student.hobbies.includes(hob.id));
        if (hobby) {
            return hobby.map(hob => hob.name).join(', ');
        } else {
            return "No hobbies found";
        }
    }
    return (
        <tr>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{getHobbies()}</td>
            <td>{student.age}</td>
            <td>
                <button onClick={() => onDelete(student.id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default StudentCard;