
import { AuthProvider } from './AuthContest/Auth'
import Approute from './Route/Approute'
import Todo from './Dashboard/Todo'
import {BrowserRouter} from 'react-router-dom'
function App() {
 
  return (
    <>
      {/* <AuthProvider>
        <Approute></Approute>
      </AuthProvider> */}
      <Todo></Todo>
    </>
  )
}

export default App
