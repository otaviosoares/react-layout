/* eslint-disable no-undef */
import { createElement, forwardRef } from 'react'
// import { useBoxStyles } from './useBoxStyles'
// import { renderBackgroundProvider } from './BackgroundContext'

const NamedBox = forwardRef(
  (
    {
      component = 'div',
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      flexDirection,
      flexWrap,
      flexShrink,
      flexGrow,
      alignItems,
      justifyContent,
      textAlign,
      borderRadius,
      background,
      boxShadow,
      transition,
      transform,
      height,
      width,
      position,
      cursor,
      pointerEvents,
      overflow,
      minWidth,
      top,
      bottom,
      right,
      left,
      userSelect,
      outline,
      className,
      ...restProps
    },
    ref
  ) => {
    const boxStyles = useBoxStyles({
      component,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      flexDirection,
      flexWrap,
      flexShrink,
      flexGrow,
      alignItems,
      justifyContent,
      textAlign,
      borderRadius,
      background,
      boxShadow,
      transition,
      transform,
      height,
      width,
      position,
      cursor,
      pointerEvents,
      overflow,
      minWidth,
      top,
      bottom,
      right,
      left,
      userSelect,
      outline,
      className
    })

    const element = createElement(component, {
      className: boxStyles,
      ...restProps,
      ref
    })

    return renderBackgroundProvider(background, element)
  }
)

NamedBox.displayName = 'Box'

export const Box = NamedBox
