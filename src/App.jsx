import { Suspense } from 'react';
import './App.css'
import CardSection from './components/CardSection/CardSection';
import NavBar from './components/NavBar/NavBar'

const foodPromise=fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(res=>res.json());
// console.log(foodPromise);
function App() {
 

  return (
    <>
      <header>
    <NavBar></NavBar>
      </header>

      <main>
      
     <Suspense fallback={<h2>Loading...............</h2>}>
       <CardSection foodPromise={foodPromise}></CardSection>
     </Suspense>
      </main>

     
    </>
  )
}

export default App
