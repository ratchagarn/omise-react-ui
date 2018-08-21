/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - AdvanceSearch/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import AdvanceSearch from '../../libs/packages/AdvanceSearch'


const scope = {
  AdvanceSearch,
}

const code = `
<React.Fragment>
  <AdvanceSearch />
</React.Fragment>
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="AdvanceSearch - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
