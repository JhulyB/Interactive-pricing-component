import classes from "./styles.module.scss"

import { Card } from "./components/Card"
import { Head } from "./components/Head"

function App() {

  return (
    <div className={classes.body}>
      {/* Head */}
      <Head 
        title="Simple, traffic-based pricing"/>
      {/* Card */}
      <Card />
    </div>
  )
}

export default App
