/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Collapse/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Collapse from '../../libs/packages/Collapse'


const scope = {
  Collapse,
}

const code = `
() => (
  <Collapse />
)
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Collapse - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
