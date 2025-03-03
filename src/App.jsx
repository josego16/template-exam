import './css/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import StudentList from "./components/student/StudentList.jsx";
import StudentForm from "./components/form/StudentForm.jsx";
import {StudentProvider} from "./context/StudentContext.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    const router = createBrowserRouter([
        {
            element: <NavBar/>,
            children: [
                {index: true, element: <Home/>},
                {path: "/students", element: <StudentList/>},
                {path: "/form", element: <StudentForm/>},
                {path: "*", element: <NotFound/>}
            ]
        }
    ]);
    return (
        <StudentProvider>
            <RouterProvider router={router}/>
        </StudentProvider>
    )
}

export default App
