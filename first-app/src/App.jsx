
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'  
import Form from './components/Form.jsx'  
export default function App() {
 
  const y=[2024,2025,2026,2027]
  const name=["Rishab1","Rishab2","Rishab3","Rishab4"]
  const details={
    name:"Rishab",
    Year:"2026"
  }
  return (
    <>
    <Header title="Hello"/>
    <Form/>
    <Footer year={details.Year} name={details.name}/>
    </>
    
     //component calling 
     )
}

// export default App
