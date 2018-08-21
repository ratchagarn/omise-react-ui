/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Markdown
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlight.js'

import './Markdown.css'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'


const toMarkupSource = source => ({
  __html: source
})


export default class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string
  }

  componentDidMount() {
    const code = this.root.querySelectorAll('pre code')

    if (code) {
      for (let i = 0, len = code.length; i < len; i++) {
        const node = code[i]

        setTimeout(() => {
          hljs.highlightBlock(node)
        })
      }
    }
  }


  render() {
    const shouldHideForE2E = global.self === global.top

    return (
      !shouldHideForE2E
      ? (
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={toMarkupSource(this.props.source)}
            ref={n => this.root = n}
          />
        )
      : null
    )
  }
}
