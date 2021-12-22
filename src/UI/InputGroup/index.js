import React, { useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Container from './styles'

const InputGroup = ({
  children,
  onChange,
  label,
  type,
  errorId,
  errorClass,
  componentType,
  className = '',
  optionLists,
  ...props
}) => {
  const componentId = uuid()
  const [{ showPassword }, setDisplay] = useState(false)
  const errorRef = useRef(null)
  return (
    <Container className={`input--group ${className}`}>
      {children ? (
        children
      ) : (
        <>
          {label && <label>{label}</label>}
          {type === 'textarea' ? (
            <textarea
              {...props}
              data-errorid={componentId}
              data-error={errorClass ? errorClass : `${props.name}--error`}
              onChange={(e) => {
                errorRef.current.innerHTML = ''
                if (typeof onChange === 'function') onChange(e)
              }}
            />
          ) : type === 'password' || componentType === 'password' ? (
            <div className="password--container">
              <input
                {...props}
                type={showPassword ? 'text' : 'password'}
                data-type="password"
                data-errorid={componentId}
                onChange={(e) => {
                  errorRef.current.innerHTML = ''
                  if (typeof onChange === 'function') onChange(e)
                }}
              />
              <button
                type="button"
                onClick={() =>
                  setDisplay((s) => ({
                    ...s,
                    showPassword: !s.showPassword,
                  }))
                }
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          ) : type === 'select' ? (
            <>
              <select
                {...props}
                type={type ? type : 'text'}
                data-errorid={componentId}
                onChange={(e) => {
                  errorRef.current.innerHTML = ''
                  if (typeof onChange === 'function') onChange(e)
                }}
              >
                {optionLists}
              </select>
            </>
          ) : (
            <input
              {...props}
              type={type ? type : 'text'}
              data-errorid={componentId}
              onChange={(e) => {
                errorRef.current.innerHTML = ''
                if (typeof onChange === 'function') onChange(e)
              }}
            />
          )}
        </>
      )}
      <p
        className={`error-msg ${
          errorClass ? errorClass : `${props.name}--error`
        }`}
        id={errorId || componentId}
        ref={errorRef}
      />
    </Container>
  )
}

export default InputGroup
