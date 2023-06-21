import LevelLoader from "./components/LevelLoader"
import levels from "./levels"

function App() {
  return (
    <>
      <LevelLoader levels={levels} />
    </>
  )
}

export default App
