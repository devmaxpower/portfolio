import { useState } from 'react'

function App() {
  //handle click
  //const [entrar, setEntrar] = useState(false);
  const [moverBox1, setMoverBox1] = useState({});
  const [moverBox2, setMoverBox2] = useState({});
  const [hiddeBtn, setHiddeBtn] = useState({});
  const [showPresentacion, setpresentacion] = useState({});
  //get click
  const getClick = (e)=>{
    e.preventDefault();

    setMoverBox1({
      top: "-100%",
      left: "-100%",
      transform: "translate(-50%, -50%)"
    })
    setMoverBox2({
      right: "-100%",
      bottom: "-100%"
    })
    setHiddeBtn({
      opacity: 0,
      color: "#000"
    })
    setTimeout(()=>{
      setpresentacion({
        display: "none"
      })

    }, 1000)
  }

  return (
    <main>
      <section id='presentacion' style={showPresentacion} >
        
        <div style={moverBox1} className="box"></div>
        <div style={moverBox2} className="box"></div>
        <a style={hiddeBtn} href="#" className="entrar" onClick={getClick}>Entrar</a>
      </section>
    </main>
  )
}

export default App
