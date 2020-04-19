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
import { BreakpointProvider } from '../useBreakpoint/BreakpointProvider'
import { LayoutTheme } from '../../themes/Theme.d'

if (process.env.NODE_ENV === 'development') {
  ensureResetImported()
}

const LayoutThemeContext = createContext<LayoutTheme | null>(null)
export const useTheme = () => {
  const layoutTheme = useContext(LayoutThemeContext)

  if (layoutTheme === null) {
    throw new Error('No react-layout theme available on context')
  }

  return layoutTheme
}

export interface LinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}
export type LinkComponent = ComponentType<LinkComponentProps>
const DefaultLinkComponent = (props: LinkComponentProps) => <a {...props} />
const LinkComponentContext = createContext<LinkComponent>(DefaultLinkComponent)
export const useLinkComponent = () => useContext(LinkComponentContext)

export interface LayoutProviderProps {
  theme: LayoutTheme
  styleBody?: boolean
  linkComponent?: LinkComponent
  children: ReactNode
}

export const LayoutProvider = ({
  theme,
  styleBody = true,
  linkComponent,
  children
}: LayoutProviderProps) => {
  const alreadyInLayoutProvider = Boolean(useContext(LayoutThemeContext))
  const linkComponentFromContext = useLinkComponent()

  assert(
    typeof navigator !== 'object' ||
      navigator.userAgent.indexOf('jsdom') === -1,
    `Rendering 'LayoutProvider' in Jest is not supported as it expects a browser environment. Please switch to 'ReactLayoutTestProvider'. See the docs for more info: https://seek-oss.github.io/react-layout/components/ReactLayoutTestProvider`
  )

  return (
    <LayoutThemeContext.Provider value={theme}>
      <TreatProvider theme={theme.treatTheme}>
        <LinkComponentContext.Provider
          value={linkComponent || linkComponentFromContext}
        >
          {styleBody ? (
            <style type="text/css">{`body{margin:0;padding:0;background:${theme.background}}`}</style>
          ) : null}
          {alreadyInLayoutProvider ? (
            children
          ) : (
            <BreakpointProvider>
              <HideFocusRingsRoot>{children}</HideFocusRingsRoot>
            </BreakpointProvider>
          )}
        </LinkComponentContext.Provider>
      </TreatProvider>
    </LayoutThemeContext.Provider>
  )
}
