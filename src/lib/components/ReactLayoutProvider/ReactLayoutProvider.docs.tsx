import { ComponentDocs } from '../../../site/src/types'

const docs: ComponentDocs = {
  category: 'Logic',
  migrationGuide: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Selecting a theme',
      code: `
        import wireframe from 'react-layout/themes/wireframe';

        export const App = () => (
          <ReactLayoutProvider theme={wireframe}>
            ...
          </ReactLayoutProvider>
        );
      `
    },
    {
      label: 'Custom link implementation',
      code: `
        import React from 'react';
        import { Link as ReactRouterLink } from 'react-router-dom';
        import { ReactLayoutProvider, LinkComponent } from 'react-layout';
        import wireframe from 'react-layout/themes/wireframe';

        // First create the custom link implementation:
        const CustomLink: LinkComponent = ({ href, ...restProps }) =>
          href[0] === '/' ? (
            <ReactRouterLink to={href} {...restProps} />
          ) : (
            <a href={href} {...restProps} />
          );

        // Then pass it to ReactLayoutProvider:
        export const App = () => (
          <ReactLayoutProvider theme={wireframe} linkComponent={CustomLink}>
            ...
          </ReactLayoutProvider>
        );
      `
    }
  ]
}

export default docs
