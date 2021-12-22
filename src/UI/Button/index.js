import React from 'react'
import Container from './style'
import Spinner from '../Spinner'

const Button = ({
  disabled = false,
  loading = false,
  primary = true,
  secondary,
  tertiary,
  full,
  spinnerWithTxt,
  style,
  small,
  type = 'button',
  className,
  rounded,
  plain,
  icon,
  iconRight,
  iconLeft,
  bordered,
  hasShadow,
  onClick,
  children,
  ...rest
}) => {
  const isPrimary = !secondary && !tertiary && !plain && !icon && true
  return (
    <Container
      className={`btn u--typo__btn ${className ? className : ''}`}
      icon={icon ? icon : undefined}
      iconRight={iconRight ? iconRight : undefined}
      iconLeft={iconLeft ? iconLeft : undefined}
      disabled={disabled ? disabled : loading ? true : false}
      primary={isPrimary}
      secondary={secondary ? secondary : undefined}
      spinnerWithTxt={spinnerWithTxt ? spinnerWithTxt : undefined}
      tertiary={tertiary ? tertiary : undefined}
      plain={plain ? plain : undefined}
      rounded={rounded ? rounded : undefined}
      full={full ? full : undefined}
      onClick={onClick}
      type={type}
      style={style}
      {...rest}
    >
      {spinnerWithTxt ? (
        <>
          {loading && <Spinner size={'1rem'} />} {children}
        </>
      ) : (
        <>{loading ? <Spinner size={'1rem'} /> : children}</>
      )}
    </Container>
  )
}
export default Button
