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
  const isPrimary = !secondary && !tertiary && true
  return (
    <Container
      className={`btn u--typo__btn ${className ? className : ''}`}
      icon={icon ? icon : undefined}
      iconRight={iconRight ? iconRight : undefined}
      iconLeft={iconLeft ? iconLeft : undefined}
      disabled={disabled ? disabled : loading ? true : false}
      primary={isPrimary}
      secondary={secondary ? secondary : undefined}
      tertiary={tertiary ? tertiary : undefined}
      plain={plain ? plain : undefined}
      rounded={rounded ? rounded : undefined}
      // hasShadow={hasShadow ? hasShadow : undefined}
      // bordered={bordered ? bordered : undefined}
      full={full ? full : undefined}
      // small={small ? small : undefined}
      onClick={onClick}
      // loading={loading ? JSON.stringify(loading) : undefined}
      type={type}
      style={style}
      {...rest}
    >
      {loading ? <Spinner /> : children}
    </Container>
  )
}
export default Button
