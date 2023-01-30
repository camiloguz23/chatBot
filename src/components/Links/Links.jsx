import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./links.scss"

const Links = ({title,path }) => {
  return (
    <NavLink className={`links`} to={path}>
      {title}
    </NavLink>
  )
}

export default Links
