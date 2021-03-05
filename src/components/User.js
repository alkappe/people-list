import React from 'react'
import style from './User.module.scss'

export default function User({name, address, country, website}) {

    return (
        <div className={style.user}>
            <h1 className={style.user__name}>{name}</h1>
            <div className={style.user__addressWrapper}>
                <p className={style.user__address}>{address.street}</p>
                <p className={style.user__address}>{address.suite}</p>
                <p className={style.user__address}>{address.city}</p>
            </div>
            <p>country: { country }</p>
            <button className={style.user__button}><a href={website}>{website}</a></button>
        </div>
    )
}
