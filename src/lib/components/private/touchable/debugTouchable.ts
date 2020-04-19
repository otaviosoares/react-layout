import { Style } from 'sku/treat'

type SelectorMap = Style['selectors']

export const debugTouchable = ({ after = false } = {}): SelectorMap =>
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        [`[data-react-layout-debug] &${after ? ':after' : ''}`]: {
          background: 'red',
          opacity: 0.2
        }
      }
