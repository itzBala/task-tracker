import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button className="btn" style={{backgroundColor: props.color}} onClick={props.onClick}>{ props.text }</button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button