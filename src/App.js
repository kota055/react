import './App.css';
import Employee from './components/Employee';
import {useState} from 'react'

function App() {
  const [role,setRole] = useState('dev')
  //let role = 'dev'
  let showEmployees = true
  return (
    <div className="App">
      {showEmployees ?( 
        <>
          <input
            type="text"
            onChange={(e)=>{
              console.log(e.target.value);
              //role = e.target.value
              setRole(e.target.value)
            }} 
          />
          <Employee name="Caleb" role="intern" />
          <Employee name="Michael" role={role}/>
          <Employee name="John"/>
        </>
       ) :(
        <p>You cannot see the employees</p>
      )} 
    </div>
  );
}


export default App;
