/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - ProgressBar/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import ProgressBar from '../../libs/packages/ProgressBar'


const scope = {
  ProgressBar,
}

const code = `
<ProgressBar value={50} />
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="ProgressBar - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
