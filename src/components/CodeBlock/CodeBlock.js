/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - CodeBlock
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import hljs from 'highlight.js'


const toCodeBlock = (code, type = 'js') => (
  ['```' + type, code.trim(), '```'].join('\n')
)

class CodeBlock extends Component {
  componentDidMount() {
    hljs.highlightBlock(this.code)
  }

  componentDidUpdate() {
    hljs.highlightBlock(this.code)
  }

  render() {
    const { source, type, children } = this.props
    const code = children ? children : source

    return (
      <div className="markdown-body">
        <pre>
          <code ref={(n) => this.code = n}>{code}</code>
        </pre>
      </div>
    )
  }
}

export default CodeBlock
