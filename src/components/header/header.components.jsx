import React from 'react'
import './header.styles.scss'
export function Header2({ text }) {
    return (
        <h1 class="header2">{text}</h1>
    )
}
export function Header1({ text, color = '#ffff' }) {
    return (
        <span class="header1" style={{ color: color }}>
            {text}
        </span>
    )
}

