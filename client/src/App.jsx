
import { AuthProvider } from './AuthContest/Auth'
import Approute from './Route/Approute'
import Todo from './Dashboard/Todo'
import {BrowserRouter} from 'react-router-dom'
import Calculator from './Dashboard/Calculator'
function App() {
 
  return (
    <>
      {/* <AuthProvider>
        <Approute></Approute>
      </AuthProvider> */}
      <Calculator/>
      
    </>
  )
}

export default App
