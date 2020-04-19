import assert from 'assert'
import React, {
  createContext,
  useContext,
  ReactNode,
  ComponentType,
  AnchorHTMLAttributes
} from 'react'
import { TreatProvider } from 'react-treat'
import { ensureResetImported } from '../../reset/resetTracker'
import { HideFocusRingsRoot } from '../private/hideFocusRings/hideFocusRings'
import { ReactLayoutTestProviderContext } from '../ReactLayoutTestProvider/ReactLayoutTestProviderContext'
import { BreakpointProvider } from '../useBreakpoint/BreakpointProvider'
import { ReactLayoutTheme } from '../../themes/ReactLayoutTheme.d'

if (process.env.NODE_ENV === 'development') {
  ensureResetImported()
}

const ReactLayoutThemeContext = createContext<ReactLayoutTheme | null>(null)
export const useReactLayoutTheme = () => {
  const reactLayoutTheme = useContext(ReactLayoutThemeContext)

  if (reactLayoutTheme === null) {
    throw new Error('No react-layout theme available on context')
  }

  return reactLayoutTheme
}

export interface LinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}
export type LinkComponent = ComponentType<LinkComponentProps>
const DefaultLinkComponent = (props: LinkComponentProps) => <a {...props} />
const LinkComponentContext = createContext<LinkComponent>(DefaultLinkComponent)
export const useLinkComponent = () => useContext(LinkComponentContext)

export interface ReactLayoutProviderProps {
  theme: ReactLayoutTheme
  styleBody?: boolean
  linkComponent?: LinkComponent
  children: ReactNode
}

export const ReactLayoutProvider = ({
  theme,
  styleBody = true,
  linkComponent,
  children
}: ReactLayoutProviderProps) => {
  const alreadyInReactLayoutProvider = Boolean(
    useContext(ReactLayoutThemeContext)
  )
  const inTestProvider = useContext(ReactLayoutTestProviderContext)
  const linkComponentFromContext = useLinkComponent()

  assert(
    typeof navigator !== 'object' ||
      navigator.userAgent.indexOf('jsdom') === -1 ||
      inTestProvider,
    `Rendering 'ReactLayoutProvider' in Jest is not supported as it expects a browser environment. Please switch to 'ReactLayoutTestProvider'. See the docs for more info: https://seek-oss.github.io/react-layout/components/ReactLayoutTestProvider`
  )

  return (
    <ReactLayoutThemeContext.Provider value={theme}>
      <TreatProvider theme={theme.treatTheme}>
        <LinkComponentContext.Provider
          value={linkComponent || linkComponentFromContext}
        >
          {styleBody ? (
            <style type="text/css">{`body{margin:0;padding:0;background:${theme.background}}`}</style>
          ) : null}
          {alreadyInReactLayoutProvider || inTestProvider ? (
            children
          ) : (
            <BreakpointProvider>
              <HideFocusRingsRoot>{children}</HideFocusRingsRoot>
            </BreakpointProvider>
          )}
        </LinkComponentContext.Provider>
      </TreatProvider>
    </ReactLayoutThemeContext.Provider>
  )
}
