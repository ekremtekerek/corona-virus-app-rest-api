import PropTypes from 'prop-types'

const Logo = ({logo, title}) => {
    return(
        <div className='flex items-center'>
            <img src={logo} alt={title} className="mr-3 h-6" />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
                {title}
            </span>
        </div>
    )
}

Logo.propTypes = {
    title : PropTypes.string,
    logo:PropTypes.string
}

Logo.defaultProps = {
    title : 'Corona App',
    logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAsTvfNl_T4pIScGFAv7Nc3LeZX2FkvK09uzHRTM_wx7mQx7mZpuss4LEaHyxKnPQH9o&usqp=CAU'
}

export default Logo