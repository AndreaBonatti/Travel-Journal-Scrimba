import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'
import data from './data.js'

function App() {
  /**const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Hero />
      {cards}
      <script src="index.pack.js"></script>
    </div>
  )*/
  const cards = data.map(item => {
    return (
      <span>
        {item.id != 1 && <hr className='card--hr'/>}
        <Card
          key={item.id}
          {...item}
        />
      </span>
    )
  })

  return (
    <div className="App">
      <Hero />
      {cards}
      <script src="index.pack.js"></script>
    </div>
  )
}

export default App
