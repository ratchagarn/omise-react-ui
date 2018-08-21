/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Tooltip/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Tooltip from '../../libs/packages/Tooltip'


const scope = {
  Tooltip,
}

const code = `
<Tooltip title="Tooltip title">
  Hover me
</Tooltip>
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Tooltip - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
