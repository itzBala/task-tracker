import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'black' : 'green'} text={showAdd ? 'Close' : 'Add'} onAdd={onAdd} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header