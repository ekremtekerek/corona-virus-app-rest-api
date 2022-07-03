import React from 'react'
import Logo from './Logo'
import Menuitem from './Menuitem'
import PropTypes from 'prop-types'
import {useState} from 'react'

function Header({activeTitle, onMenuChange}) { 
    const [_activeTitle, setActiveTitle] = useState(activeTitle)
   const [menuItems] = useState (
   [{
        title:"Ülkelere Göre Corona Değerleri",
        value:1
   },
   {
    title:"Kayda Geçmiş Tüm Corona Değerleri",
    value:2
    },
    {
        title:"Kıtalara Göre Corona Değerleri",
        value:3
   }
]) 
  return (
    <nav className='bg-gray-800 border-gray-200 px-2 py-2.5'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
            <Logo/>
            <div className='w-auto'>
                <ul className='flex flex-row font-medium space-x-8 font-semibold text-xs space-x-8'>
                    {menuItems.map((item) => {
                        return(
                            <Menuitem key={item.title} active={item.title === _activeTitle} onClick={(title) => {
                                setActiveTitle(title)
                                onMenuChange(item.value)
                            }} title={item.title}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    </nav>
  )
}

Header.propTypes = {
    activeTitle:PropTypes.string,
    onMenuChange:PropTypes.func
}

Header.defaultProps = {
    activeTitle:'CÜlkelere Göre Corona Değerleri',
    onMenuChange:()=>null
}

export default Header