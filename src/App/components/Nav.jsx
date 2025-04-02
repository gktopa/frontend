import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/contacts">Контакти</Link></li>
                <li><Link to="/add-task">Добавити задачу</Link></li>
                <li><Link to="/tasks">Задачі</Link></li>
            </ul>
        </nav>
    )
}
