/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Playground2
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import InputSelect from './partials/InputSelect'
import InputSwitch from './partials/InputSwitch'
import InputGroup from './partials/InputGroup'
import InputNumber from './partials/InputNumber'
import InputText from './partials/InputText'
import EventTrigger from './partials/EventTrigger'

import {
  Markdown,
  DocContainer,
  Preview,
  Playground,
  SourceCode,
} from '../'


export default class Playground2 extends Component {
  static defaultProps = {
    propsSchema: [],
    hidePropsSection: false,
    bgTransparent: true,
    state: {},
  }

  static propTypes = {
    propsSchema: PropTypes.array,
    hidePropsSection: PropTypes.bool,
    bgTransparent: PropTypes.bool,
    state: PropTypes.object,
  }

  constructor(props) {
    super(props)

    this.state = {
      onChangeMessage: '',
      __sourceCode__: '',
    }
  }

  componentDidMount() {
    const initState = {}

    this.props.propsSchema.forEach((item) => {
      if (item.type === 'select') {
        initState[item.propName] = item.defaultValue.value
      }
      else {
        initState[item.propName] = item.defaultValue
      }
    })

    this.setState({ ...initState }, () => {
      this.updateSourceCode()
    })
  }

  componentWillReceiveProps(nextProps) {
    this.updateSourceCode(nextProps)
  }

  render() {
    const {
      propsSchema,
      hidePropsSection,
      bgTransparent,
      triggerOnChange,
      README,
      code,
    } = this.props
    const { __sourceCode__ } = this.state

    let shouldHidePropsSection = hidePropsSection
    if (!hidePropsSection && propsSchema.length === 0) {
      shouldHidePropsSection = true
    }

    const propsControl = propsSchema.map((item, i) => {
      const { type, propName, defaultValue, value } = item
      let control = null

      if (type === 'select') {
        control = (
          <InputSelect
            name={propName}
            defaultValue={defaultValue}
            value={value}
            onChange={this.handleOnChange}
          />
        )
      }
      else if (type === 'switch') {
        control = (
          <InputSwitch
            name={propName}
            defaultValue={defaultValue}
            onChange={this.handleOnChange}
          />
        )
      }
      else if (type === 'group') {
        control = (
          <InputGroup
            name={propName}
            vertical={item.vertical}
            defaultValue={defaultValue}
            value={value}
            onChange={this.handleOnChange}
          />
        )
      }
      else if (type === 'text') {
        control = (
          <InputText
            name={propName}
            defaultValue={defaultValue}
            onChange={this.handleOnChange}
          />
        )
      }
      else if (type === 'number') {
        control = (
          <InputNumber
            name={propName}
            value={defaultValue}
            onChange={this.handleOnChange}
          />
        )
      }
      else if (type === 'eventTrigger') {
        control = <EventTrigger onChangeMessage={triggerOnChange} />
      }

      return (
        <tr key={i}>
          <td style={{ width: '40%' }}><PropName>{propName}</PropName></td>
          <td>
            {control}
          </td>
        </tr>
      );
    })

    return (
      <DocContainer>
        <Markdown source={README} />
        <Container singleCol={shouldHidePropsSection}>
          <Col hide={shouldHidePropsSection}>
            <Title>Props</Title>
            <Table>
              <tbody>
                {propsControl}
              </tbody>
            </Table>
          </Col>
          <Col fullWidth={shouldHidePropsSection}>
            <Title>Preview</Title>
            <Preview bgTransparent={bgTransparent}>
              {this.props.render(this.state)}
            </Preview>
          </Col>
        </Container>
        <SourceCode>{__sourceCode__}</SourceCode>
      </DocContainer>
    )
  }

  handleOnChange = ({ name, value }) => {
    this.setState({ [name]: value }, () => {
      this.updateSourceCode()
    })
  }

  updateSourceCode = (nextProps) => {
    const newProps = nextProps ? nextProps : this.props

    this.setState({
      __sourceCode__: this.props.sourceCode(this.state, newProps.state)
    })
  }
}


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  position: relative;
  z-index: 9999;
  margin-top: 40px;
  margin-left: ${props => props.singleCol ? '0' : '-15px'};

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`

const Col = styled.div`
  display: ${props => props.hide ? 'none' : 'block'};
  float: left;
  width: ${props => props.fullWidth ? '100%' : '50%'};
  padding-left: ${props => props.fullWidth ? null : '15px'};
`

const Title = styled.h5`
  margin: 0 0 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #CCC;
  color: #999;
  font-size: 16px;
  text-transform: uppercase;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr:nth-child(even) {
    td {
      background-color: #F6F8FA;
    }
  }

  td {
    width: 50%;
    padding: 15px 10px;
  }
`

const PropName = styled.span`
  padding: 2px 5px;
  border-radius: 2px;
  background-color: #EFEFEF;
`
