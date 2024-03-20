import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleado from "./empleados/EditarEmpleado";
import './css/App.css';



function App() {
  return (
  <div className="app">  
   <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoEmpleados />}/>
          <Route exact path="/agregar" element={<AgregarEmpleado />}/>
          <Route exact path="/editar/:id" element={<EditarEmpleado />}/>
        </Routes>
      </BrowserRouter>
   </div>
  </div> 
  );
}

export default App;
