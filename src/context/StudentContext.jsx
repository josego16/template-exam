import {createContext, useState} from "react";

const StudentContext = createContext();

const StudentProvider = ({children}) => {
    const [students, setStudents] = useState([]);

    const getStudents = async () => {
        try {
            const response = await fetch('http://localhost:3000/students');
            if (!response.ok) throw new Error("Error al obtener estudiantes");
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error("Error en getStudents:", error);
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
            }); // Asegúrate de devolver la respuesta
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
        <StudentContext.Provider value={{students, getStudents, postStudent, deleteStudent}}>
            {children}
        </StudentContext.Provider>
    );
};

export {StudentContext, StudentProvider};