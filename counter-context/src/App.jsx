import CounterContextProvider from './context/CounterContextProvider'
import Counters from './components/Counters'

function App() {

  return (
    <CounterContextProvider>
      <Counters />
    </CounterContextProvider>
  )
}

export default App
