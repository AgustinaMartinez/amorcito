import Cow from '/cow.webp'
import Heart from '/heart.webp'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1>Te amo amorcito!</h1>
        <div className="images">
          <img src={Cow} className="logo" alt="Vaquita" />
          <img src={Heart} className="logo" alt="Corazón" />
        </div>
      </div>
    </div>
  )
}

export default App
