/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Collapse
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'
import { storiesOf } from '@storybook/react'

import ExampleController from './ExampleController'
import ExampleLive from './ExampleLive'


export default (
  storiesOf('Collapse')
    .add('Overview', () => <ExampleController />)
    .add('Live example', () => <ExampleLive />)
)
