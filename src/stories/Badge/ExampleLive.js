/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Badge/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Badge from '../../libs/packages/Badge'


const scope = {
  Badge,
}

const code = `
<React.Fragment>
  <Badge color="gray" size="lg">Badge</Badge>
</React.Fragment>
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Badge - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
