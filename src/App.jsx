import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <div className='flex justify-center items-center mt-16'>

        <div className='grid grid-cols-2 gap-5 w-[1000px]'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>

      </div>
    </div>
  )
}

export default App
