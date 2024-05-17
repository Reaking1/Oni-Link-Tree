import logo from "./assets/Reabetswe1.png"
import './App.css'

function App() {


  return (
    <>
      <div className="section_1">
        <div className="image_logo">
          <img src={logo} alt="My logo" /> 
        </div>
        <div className="link_bar one">
          <h1 className="twicth">Twicth</h1>
        </div>
        <div className="link_bar two">
          <h1 className="Youtube">Youtube</h1>
          </div>
        <div className="link_bar three">
          <h1 className="tiktok">TikTok</h1>
          </div>
          <div className="link_bar four">
            <h1 className="twitter">Twitter</h1>
          </div>

      </div>
   
    </>
  )
}

export default App
