import React from 'react'
import classnames from 'classnames'
// assets
import { Icon } from '../../Icon/Icons'

export const NavCloseButton = ({
  onClick,
  className,
  ...buttonProps
}: JSX.IntrinsicElements['button']): React.ReactElement => {
  const classes = classnames('usa-nav__close', className)

  return (
    <button
      className={classes}
      onClick={onClick}
      data-testid="navCloseButton"
      {...buttonProps}
      type="button">
      <Icon.Close size={3} aria-label="Close" />
    </button>
  )
}
