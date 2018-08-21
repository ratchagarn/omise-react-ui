/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - TextField/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import TextField from '../../libs/packages/TextField'


const scope = {
  TextField,
}

const code = `
<TextField
  placeholder="Placeholder text"
  helpMessage="Help message"
  errorMessage=""
  disabled={false}
/>
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="TextField - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
