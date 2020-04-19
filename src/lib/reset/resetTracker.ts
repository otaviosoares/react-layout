import dedent from 'dedent'

let resetImported = false

export const markResetImported = () => {
  resetImported = true
}

export const ensureResetImported = () => {
  if (!resetImported) {
    throw new Error(dedent`
      react-layout components imported before reset.

      Make sure to import the react-layout reset module before importing any components. 
      This ensures the CSS reset does not override the component styles. 
    
      e.g.

      import 'react-layout/reset'; // <-- Must be first
      import { ReactLayoutProvider, Box } from 'react-layout';
    `)
  }
}
