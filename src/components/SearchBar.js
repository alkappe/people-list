import React from 'react'
import style from './SearchBar.module.scss'
import { useDispatch } from 'react-redux'
import { createSearchAction } from '../actions'


export default function SearchBar() {

    //dispaccia l'evento
    const dispatch = useDispatch()


    return (
        <>
            <form className={style.searchBar}>
                <input
                    // dispatch vuole un oggetto, ossia un action
                    onChange={(e)=> dispatch(createSearchAction(e))}
                    type="text" 
                    placeholder="Search... 🕵️‍♀️"
                />
            </form>
        </>
    )
}
