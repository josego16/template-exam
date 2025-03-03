import {createContext, useState} from "react";

const StudentContext = createContext();

const StudentProvider = ({children}) => {
    const [students, setStudents] = useState([]);
    const [hobbies, setHobbies] = useState([]);

    const getStudents = async () => {
        try {
            const response = await fetch('http://localhost:3000/students');
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error("Error en getStudents:", error);
            return {ok: false, error: "Error al descargar todos los estudiantes"};
        }
    };
    const getHobbies = async () => {
        try {
            const response = await fetch('http://localhost:3000/hobbies');
            const data = await response.json();
            setHobbies(data);
        } catch (error) {
            console.error("Error en getHobbies:", error);
            return {ok: false, error: "Error al descargar todos los hobbies de los estudiantes"};
        }
    };

    const postStudent = async (student) => {
        try {
            return await fetch('http://localhost:3000/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });
        } catch (error) {
            console.error('Error en postStudent:', error);
            return {ok: false, message: 'Error de red'}; // Manejo de error
        }
    };

    const deleteStudent = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/students/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error("Error al eliminar estudiante");
            await getStudents();
        } catch (error) {
            console.error("Error en deleteStudent:", error);
        }
    };

    return (
        <StudentContext.Provider value={{students,hobbies, getStudents, getHobbies, postStudent, deleteStudent}}>
            {children}
        </StudentContext.Provider>
    );
};

export {StudentContext, StudentProvider};