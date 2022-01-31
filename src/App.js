import "./App.css";
import Button from "./componentes/Button"

const App = () => {
  return (
    <div className="contenedor">
      <h1>Hola</h1>
      <Button
        mensaje="Hola"
        color="rojo"
      />

      <Button
        mensaje="Chau"
        color="verde"
      />

    </div>

  )
}


export default App;