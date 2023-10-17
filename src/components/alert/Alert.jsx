import PropTypes from "prop-types"
import "./Alert.css"
const Alert = (props) => {
    return (
        <div className={props.alert} role="alert">
            {props.msg}
        </div>
    )
}

Alert.propTypes = {
    alert: PropTypes.string,
    msg: PropTypes.string
}

export default Alert