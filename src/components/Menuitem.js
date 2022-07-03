import React from 'react'
import PropTypes from 'prop-types'

function Menuitem({title,active,onClick}) {
  return (
    <li>
        <a onClick={()=>{
            onClick(title)
        }} className={`block cursor-pointer border-0 py-2 pr-4 pl-3 hover:text-blue-700 ${active ? 'text-blue-700' : 'text-gray-200'}`}>
            {title}
        </a>
    </li>
  )
}

Menuitem.propTypes = {
    title:PropTypes.string,
    active:PropTypes.bool,
    onClick:PropTypes.func
}

Menuitem.defaultProps = {
    title : 'Corona App',
    active : false,
    onclick : ()=>null
}

export default Menuitem
