import React, { useState } from 'react'
import User from './User'
import style from './UserList.module.scss'
import Pagination from './Pagination'
import { useSelector } from 'react-redux'

function filterUsers(users, string) {
    if(string === undefined) {
        return users
    }
    
    return users.filter(user => user.name.toLowerCase().includes(string.toLowerCase()))
}
const usersForPage = 3
export default function UserList({users}) {
    
    const [page, setPage] = useState(1)
    const [currentSearch, setCurrentSearch] = useState(undefined)

    // la richesta da Redux (tramite onChange) 
    const searchString = useSelector(state => state.search)
    // se la richiesta è differente dal filtro corrente, allora setta la pagina a 1
    if(searchString !== currentSearch) {
        setCurrentSearch(searchString)
        setPage(1);
    }


    const filteredUsers = filterUsers(users, searchString)
    const totalPages = Math.ceil(filteredUsers.length / usersForPage)

    const startUsersIndex = (page - 1) * usersForPage;
    /* console.log('users', users) */

    const portionOfUsers = filteredUsers.slice(startUsersIndex, startUsersIndex + usersForPage)
    /* console.log('portionOfUsers', portionOfUsers) */

    return (
        <div className={style.userList}>
            <div className={style.userList__wrapper}>
                <div className={style.userList__container}>
                    {portionOfUsers.map((user) =>
                        <User key={user.id} {...user}/>
                    )}
                </div>
            </div>
            <Pagination setPage={setPage} totalPages={totalPages}/>
        </div>
    )
}




