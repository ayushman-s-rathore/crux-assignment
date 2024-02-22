import './App.css'
import Navbar from './Components/navbar/navbar'
import Sidebar from './Components/sidebar/sidebar'
import Dashboard from './Components/dashboard/dashboard'
import {  DashboardProvider } from './hooks/context'



function App() {


  

  return (
    <>
      <div className="app">
        <div className="container">
        <Sidebar/>
        </div>
        <div className="dashboard">
         <DashboardProvider>
        <Navbar/>
        <Dashboard/>
        </DashboardProvider>
        </div>
      </div>
    </>
  )
}

export default App
