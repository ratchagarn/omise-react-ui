/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Tooltip/index
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'
import { storiesOf } from '@storybook/react'

import ExampleController from './ExampleController'
import ExampleLive from './ExampleLive'


export default (
  storiesOf('Tooltip')
    .add('Overview', () => <ExampleController />)
    .add('Live example', () => <ExampleLive />)
)
