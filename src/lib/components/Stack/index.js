/* eslint-disable no-undef */
import React, { Children, Fragment } from 'react'
import { Divider } from '../Divider'
// import { alignToFlexAlign } from '../../utils/align'
// import { mapResponsiveProp } from '../../utils/responsiveProp'
// import { useBoxStyles } from '../Box/useBoxStyles'
import { Box } from '../Box'

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex'
}

export const useStackItem = ({ align, component, space }) => {
  const styles = useStyles(styleRefs)

  return useBoxStyles({
    component,
    className: styles.excludingLast,
    paddingBottom: space,
    // If we're aligned left across all screen sizes,
    // there's actually no alignment work to do.
    ...(align === 'left'
      ? {}
      : {
          display: mapResponsiveProp(align, alignToDisplay),
          flexDirection: 'column',
          alignItems: alignToFlexAlign(align)
        })
  })
}

const validStackComponents = ['div', 'ol', 'ul']

export const Stack = ({
  component = 'div',
  children,
  space,
  align = 'left',
  dividers = false
}) => {
  if (
    process.env.NODE_ENV === 'development' &&
    !validStackComponents.includes(component)
  ) {
    throw new Error(`Invalid Stack component: ${component}`)
  }

  const stackClasses = useStackItem({ component, space, align })
  const stackItems = Children.toArray(children)

  const isList = component === 'ol' || component === 'ul'
  const stackItemComponent = isList ? 'li' : 'div'

  if (stackItems.length <= 1 && align === 'left' && !isList) {
    return <Fragment>{stackItems}</Fragment>
  }

  return (
    <Box component={component}>
      {stackItems.map((child, index) => (
        <Box
          component={stackItemComponent}
          className={dividers ? undefined : stackClasses}
          key={index}
        >
          {dividers && index > 0 ? (
            <Box width="full" paddingY={space}>
              {typeof dividers === 'string' ? (
                <Divider weight={dividers} />
              ) : (
                <Divider />
              )}
            </Box>
          ) : null}
          {child}
        </Box>
      ))}
    </Box>
  )
}
