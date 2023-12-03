import { Route ,Routes  } from 'react-router-dom'
import './App.css'
import Posts from './assets/Pages/Posts'
import SnakesDetail from './assets/Pages/SnakesDetail'


function App() {

  return (
    <>
    	<Routes>
			<Route path="/" element={<Posts/>} />
          	<Route path="/:Id" element={<SnakesDetail/>} />
    	</Routes>
    </>
  )
}

export default App;