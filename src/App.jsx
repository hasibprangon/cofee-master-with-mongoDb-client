import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';

function App() {
  const coffees = useLoaderData();


  return (
    <div>
      <div className='flex justify-center items-center mt-16'>

        <div className='grid grid-cols-2 gap-5 w-[1000px]'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
            ></CoffeeCard>)
          }
        </div>

      </div>
    </div>
  )
}

export default App
