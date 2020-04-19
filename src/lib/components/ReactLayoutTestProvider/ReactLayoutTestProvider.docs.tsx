import React from 'react'
import { seekAnz } from '../../themes'
import { ComponentDocs } from '../../../site/src/types'
import { Stack, Text, Strong } from '..'

const docs: ComponentDocs = {
  category: 'Logic',
  description: (
    <Stack space="large">
      <Text>
        Alternative to `ReactLayoutProvider` for unit test environments. Note
        that, as the name implies, this should <Strong>not</Strong> be used in
        production code.
      </Text>
    </Stack>
  ),
  screenshotWidths: [],
  examples: [
    {
      label: 'Default usage',
      code: `
        import { ReactLayoutTestProvider } from 'braid-design-system';
        import { render } from 'react-testing-library';

        it('should do something', () => {
          render(
            <ReactLayoutTestProvider>
              ...
            </ReactLayoutTestProvider>
          );
        });
      `
    },
    {
      label: 'Specifying a theme',
      code: `
        import { ReactLayoutTestProvider } from 'braid-design-system';
        import { render } from 'react-testing-library';

        it('should do something', () => {
          render(
            <ReactLayoutTestProvider themeName="${seekAnz.name}">
              ...
            </ReactLayoutTestProvider>
          );
        });
      `
    },
    {
      label: 'Specifying a breakpoint',
      code: `
        import { ReactLayoutTestProvider } from 'braid-design-system';
        import { render } from 'react-testing-library';

        it('should do something', () => {
          render(
            <ReactLayoutTestProvider breakpoint="tablet">
              ...
            </ReactLayoutTestProvider>
          );
        });
      `
    }
  ]
}

export default docs
