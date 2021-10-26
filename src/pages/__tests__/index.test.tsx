import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../index'

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const tree = renderer.create(<Home projects={[]} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
