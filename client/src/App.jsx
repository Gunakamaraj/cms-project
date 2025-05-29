
import { AuthProvider } from './AuthContest/Auth'
import Approute from './Route/Approute'

import {BrowserRouter} from 'react-router-dom'
function App() {
 
  return (
    <>
      <AuthProvider>
        <Approute></Approute>
      </AuthProvider>
    </>
  )
}

export default App
