import React, { ReactNode, Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  background as boxBackgrounds,
  textAlign,
} from '../Box/useBoxStyles.treat';
import { heading as headingLevels } from '../../hooks/typography/typography.treat';
import { Box, Heading, Stack } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Level 1',
      Example: () => <Heading level="1">Heading Level 1</Heading>,
    },
    {
      label: 'Level 1 Weak',
      Example: () => (
        <Heading level="1" weight="weak">
          Heading Level 1 Weak
        </Heading>
      ),
    },
    {
      label: 'Level 2',
      Example: () => <Heading level="2">Heading Level 2</Heading>,
    },
    {
      label: 'Level 2 Weak',
      Example: () => (
        <Heading level="2" weight="weak">
          Heading Level 2 Weak
        </Heading>
      ),
    },
    {
      label: 'Level 3',
      Example: () => <Heading level="3">Heading Level 3</Heading>,
    },
    {
      label: 'Level 3 Weak',
      Example: () => (
        <Heading level="3" weight="weak">
          Heading Level 3 Weak
        </Heading>
      ),
    },
    {
      label: 'Level 4',
      Example: () => <Heading level="4">Heading Level 4</Heading>,
    },
    {
      label: 'Level 4 Weak',
      Example: () => (
        <Heading level="4" weight="weak">
          Heading Level 4 Weak
        </Heading>
      ),
    },
    {
      label: 'Truncate a long heading',
      Example: () => (
        <Box style={{ width: 160 }}>
          <Heading level="2" truncate>
            Really long heading
          </Heading>
        </Box>
      ),
    },
    {
      label: 'Heading Spacing',
      docsSite: false,
      background: 'card',
      Example: () => {
        const levels = Object.keys(headingLevels) as Array<
          keyof typeof headingLevels
        >;

        return (
          <Stack space="medium">
            {levels.sort().map((level) => (
              <Box key={level} background="neutralLight">
                <Heading level={level}>
                  Level {level} Heading (Line 1)
                  <br />
                  Level {level} Heading (Line 2)
                </Heading>
              </Box>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Heading Alignment: "left" | "center" | "right"',
      storybook: false,
      Example: () => (
        <Heading level="1" align="center">
          Centered heading
        </Heading>
      ),
    },
    {
      label: 'Heading Alignment',
      docsSite: false,
      Container,
      Example: () => {
        const alignments = Object.keys(textAlign) as Array<
          keyof typeof textAlign
        >;

        return (
          <Stack space="medium">
            {alignments.map((alignment) => (
              <Heading level="4" align={alignment} key={alignment}>
                {alignment}
              </Heading>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Heading Alignment (responsive)',
      Container,
      Example: () => (
        <Heading level="4" align={['right', 'center', 'left']}>
          Right aligned mobile, center on tablet, left on desktop
        </Heading>
      ),
    },
    {
      label: 'Heading Contrast',
      docsSite: false,
      Container,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background) => (
              <Box key={background} background={background} paddingY="xsmall">
                <Heading level="4">{background}</Heading>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
  snippets: [
    {
      name: 'Level 1',
      code: <Heading level="1">Heading</Heading>,
    },
    {
      name: 'Level 1 (Weak)',
      code: (
        <Heading level="1" weight="weak">
          Heading
        </Heading>
      ),
    },
    {
      name: 'Level 1 (centered)',
      code: (
        <Heading level="1" align="center">
          Heading
        </Heading>
      ),
    },
    {
      name: 'Level 2',
      code: <Heading level="2">Heading</Heading>,
    },
    {
      name: 'Level 2 (Weak)',
      code: (
        <Heading level="2" weight="weak">
          Heading
        </Heading>
      ),
    },
    {
      name: 'Level 3',
      code: <Heading level="3">Heading</Heading>,
    },
    {
      name: 'Level 3 (Weak)',
      code: (
        <Heading level="3" weight="weak">
          Heading
        </Heading>
      ),
    },
    {
      name: 'Level 4',
      code: <Heading level="4">Heading</Heading>,
    },
    {
      name: 'Level 4 (Weak)',
      code: (
        <Heading level="4" weight="weak">
          Heading
        </Heading>
      ),
    },
  ],
};

export default docs;
