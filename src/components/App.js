import React, {useEffect, useState} from 'react'
import axios from 'axios'
import UserList from './UserList'
import SearchBar from './SearchBar'
import style from './App.module.scss'


function App() {

  const [users, displayUsers] = useState([])

  //!!!!!! metti stringa con un termire per testare, non stressare nominatim !!!!!!!!!!
  const [ errorMessage, setErrorMessage] = useState(null)

  const getCountryFromUser = async(user) =>  {
    const res = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}&zoom=18&addressdetails=1`);

    /* const res = await axios.get('https://nominatim.openstreetmap.org/reverse?format=json&lat=52.5487429714954&lon=-1.81602098644987&zoom=18&addressdetails=1') */

    const showCountry = res.data.error ? '🤷‍♀️' : res.data.address.country
    user.country = showCountry


    return user
  }

  useEffect(() => {
    const getUser = async() => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
     
        // array di promises
        const countriesPromises = res.data.map(user =>  getCountryFromUser(user))
       
        // users arricchiti con la country
        const usersObjects = await Promise.all(countriesPromises)
        displayUsers(usersObjects)
  
    
      } catch (err) {
        console.error(err);
        setErrorMessage('Si è verificato un errore 🤬 (probabilmente è il rate limit di Nominatim), ricarica la pagina per riprovare!')
      }
    }
    getUser()
  }, [])


  // quando sta ancora caricando l'array è vuoto, mostra emoji, quando l'array è fullfilled nascondi loader
  return (
    <div className="App">
      { errorMessage && <p className={style.App__errorMessage}> {errorMessage} </p> }
  
      {users.length === 0 ?  <p className={style.App__loader}>😴 Loading... </p> : 
        <>
          <SearchBar /> 
          <UserList users={users}/>
        </>
      }
    </div>
  );
}


export default App;
