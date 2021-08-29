import React, { useRef } from 'react'
import Container from './styles'

const InputGroup = ({
  children,
  onChange,
  className = '',
  label,
  hasRequired = false,
  type,
  ...props
}) => {
  const errorRef = useRef(null)
  return (
    <Container className={`input--group ${className}`}>
      {children ? (
        children
      ) : (
        <>
          {label && (
            <label
              className={props.required && hasRequired ? 'required--label' : ''}
            >
              {label}
            </label>
          )}
          {type === 'textarea' ? (
            <textarea
              {...props}
              onChange={(e) => {
                errorRef.current.innerHTML = ''
                if (typeof onChange === 'function') onChange(e)
              }}
            />
          ) : (
            <input
              {...props}
              type={type ? type : 'text'}
              onChange={(e) => {
                errorRef.current.innerHTML = ''
                if (typeof onChange === 'function') onChange(e)
              }}
            />
          )}
        </>
      )}
      <p className="error-msg" ref={errorRef} />
    </Container>
  )
}

export default InputGroup
