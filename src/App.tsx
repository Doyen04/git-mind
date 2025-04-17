import './App.css'
import Header from './component/header'

function App() {

  return (
    <div className="hero-page">
      <Header />
      <div className='hero-section'>
        <div className='headline'>
          Making Ideas Count
        </div>
        <div className='sub-headline'>
          AI-powered free collaborative mind mapping software for brainstorming and idea co-creation, stimulating the flow of ideas and allowing wisdom to spring forth organically.
        </div>
        <button className='cta'>
          Try GitMind AI Now
          <img src="./src/assets/arrow.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default App
