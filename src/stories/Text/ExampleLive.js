/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Text/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Text from '../../libs/packages/Text'


const scope = {
  Text,
}

const code = `
<React.Fragment>
  <Text>Text 1</Text>
  <Text size="sm">Text 2</Text>
  <Text block size="lg">Text 3</Text>
  <Text userSelect={false}>Text 4</Text>
</React.Fragment>
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Checkbox - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
