import React from 'react'
import * as themes from '../../themes'
import {
  ReactLayoutProvider,
  ReactLayoutProviderProps
} from '../ReactLayoutProvider/ReactLayoutProvider'
import { ReactLayoutTestProviderContext } from './ReactLayoutTestProviderContext'
import {
  breakpointContext,
  Breakpoint
} from '../useBreakpoint/BreakpointProvider'

interface ReactLayoutTestProviderProps
  extends Omit<ReactLayoutProviderProps, 'theme' | 'styleBody'> {
  themeName?: keyof typeof themes
  breakpoint?: Breakpoint | null
}
export const ReactLayoutTestProvider = ({
  themeName = 'wireframe',
  breakpoint = null,
  ...restProps
}: ReactLayoutTestProviderProps) => (
  <ReactLayoutTestProviderContext.Provider value={true}>
    <breakpointContext.Provider value={breakpoint}>
      <ReactLayoutProvider
        {...restProps}
        theme={themes[themeName]}
        styleBody={undefined}
      />
    </breakpointContext.Provider>
  </ReactLayoutTestProviderContext.Provider>
)
