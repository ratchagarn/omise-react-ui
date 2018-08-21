/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Radio/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Label from '../../libs/packages/Label'
import Radio from '../../libs/packages/Radio'


const scope = {
  Label,
  Radio,
}

const code = `
() => (
  <React.Fragment>
    <Label>
      <Radio name="example-radio" value="Radio 1" disabled={false} /> Radio 1
    </Label>
    <Label>
      <Radio name="example-radio" value="Radio 2" disabled={false} /> Radio 2
    </Label>
  </React.Fragment>
)
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Radio - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
