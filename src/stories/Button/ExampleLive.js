/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Button/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Button from '../../libs/packages/Button'


const scope = {
  Button,
}

const code = `
<React.Fragment>
  <Button type="primary" size="lg" disabled={true}>Button</Button>
</React.Fragment>
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Button - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
