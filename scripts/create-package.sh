#!/bin/sh

PACKAGE_NAME=$1
PACKAGE_DIR="src/libs/packages/${PACKAGE_NAME}"

if [ $# -eq 0 ]; then
  echo "Missing packages name"
  exit
fi

if [ -d $PACKAGE_DIR ]; then
  rm -rf $PACKAGE_DIR
fi


# Create Package
mkdir $PACKAGE_DIR

cat <<EOT >> "$PACKAGE_DIR/${PACKAGE_NAME}.js"
/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - ${PACKAGE_NAME}
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

const ${PACKAGE_NAME} = () => (
  <h1>New Package name \`${PACKAGE_NAME}\`</h1>
)

export default ${PACKAGE_NAME}
EOT

cat <<EOT >> "$PACKAGE_DIR/index.js"
/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - ${PACKAGE_NAME}/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
export { default } from './${PACKAGE_NAME}'
EOT

cat <<EOT >> "$PACKAGE_DIR/README.md"
# UI - ${PACKAGE_NAME}
> ${PACKAGE_NAME} component

### Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| Prop name | Prop type | 'Prop default value' | No | Prop description |

### Example usage
EOT


# Create Stories
STORIES_DIR="src/stories/${PACKAGE_NAME}"

if [ -d $STORIES_DIR ]; then
  rm -rf $STORIES_DIR
fi

mkdir $STORIES_DIR

cat <<EOT >> "$STORIES_DIR/${PACKAGE_NAME}.story.js"
/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - ${PACKAGE_NAME}
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'
import { storiesOf } from '@storybook/react'

import ExampleController from './ExampleController'
import ExampleLive from './ExampleLive'


export default (
  storiesOf('${PACKAGE_NAME}')
    .add('Overview', () => <ExampleController />)
    .add('Live example', () => <ExampleLive />)
)
EOT

cat <<EOT >> "$STORIES_DIR/ExampleController.js"
/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - ${PACKAGE_NAME}/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'

import Playground from '../../components/Playground/Playground'

import ${PACKAGE_NAME} from '../../libs/packages/${PACKAGE_NAME}'
import README from '../../libs/packages/${PACKAGE_NAME}/README.md'


const propsSchema = []


export default class ExampleController extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Playground
        propsSchema={propsSchema}
        README={README}
        render={props => <${PACKAGE_NAME} { ...props } />}
        sourceCode={(p, s) => (\`
<${PACKAGE_NAME} />
        \`)}
      />
    )
  }
}
EOT

cat <<EOT >> "$STORIES_DIR/ExampleLive.js"
/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - ${PACKAGE_NAME}/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import ${PACKAGE_NAME} from '../../libs/packages/${PACKAGE_NAME}'


const scope = {
  ${PACKAGE_NAME},
}

const code = \`
() => (
  <${PACKAGE_NAME} />
)
\`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="${PACKAGE_NAME} - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
EOT

echo "\nCreate package ${PACKAGE_NAME} success!\n"
