import React from 'react'
import PropTypes from 'prop-types'
import './Alert.css'

const AlertComponent = ({ message = 'this is an alert' }) => (
  <div className="Alert">
    <span>{message}</span>
  </div>
)

AlertComponent.propTypes = {
  message: PropTypes.string,
}

AlertComponent.defaultProps = {
  message: 'Hell Alert',
}
export default AlertComponent
