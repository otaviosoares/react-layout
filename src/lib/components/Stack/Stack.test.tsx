import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import { ReactLayoutTestProvider, Stack, Text } from '..'

describe('Stack', () => {
  it('should not render a list by default', () => {
    const { queryAllByRole } = render(
      <ReactLayoutTestProvider>
        <Stack space="small">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </Stack>
      </ReactLayoutTestProvider>
    )

    expect(queryAllByRole('list').length).toBe(0)
    expect(queryAllByRole('listItem').length).toBe(0)
  })

  it('should render a valid unordered list when "component" is "ul"', () => {
    const { getByRole } = render(
      <ReactLayoutTestProvider>
        <Stack component="ul" space="small">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </Stack>
      </ReactLayoutTestProvider>
    )

    const list = getByRole('list')
    expect(list.nodeName).toBe('UL')

    expect(
      Array.from(list.childNodes).map(childNode => childNode.nodeName)
    ).toEqual(['LI', 'LI', 'LI'])
  })

  it('should render a valid ordered list when "component" is "ol"', () => {
    const { getByRole } = render(
      <ReactLayoutTestProvider>
        <Stack component="ol" space="small">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </Stack>
      </ReactLayoutTestProvider>
    )

    const list = getByRole('list')
    expect(list.nodeName).toBe('OL')

    expect(
      Array.from(list.childNodes).map(childNode => childNode.nodeName)
    ).toEqual(['LI', 'LI', 'LI'])
  })
})
