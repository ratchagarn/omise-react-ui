/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - DatePicker
* Wrapper component for https://reactdatepicker.com/
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import PropTypes from 'prop-types'

import ReactDatePicker from 'react-datepicker'

import { inputTextStyle } from '../TextField'

import 'react-datepicker/dist/react-datepicker.css'


injectGlobal([`
  .react-datepicker-popper {
    .react-datepicker {
      padding: 12px 16px;
      border: 0;
      box-shadow: 0 0 15px rgba(100, 100, 100, .2)
    }

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__navigation {
      top: 22px;
    }

    .react-datepicker__header {
      border-bottom: 0;
      background-color: white;
    }

    .react-datepicker__current-month {
      margin-bottom: 20px;
    }

    .react-datepicker__day {
      &:hover {
        border-radius: 0;
      }
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range {
      background-color: #2761E8;
      border-radius: 0;

      &:hover {
        border-radius: 0;
      }
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      width: 2rem;
      line-height: 2rem;
    }
  }
`])


export const DATE_FORMAT = 'YYYY-MM-DD'

export const DatePicker = ({
  className,
  selected,
  dateFormat,
  minDate,
  maxDate,
  placeholder,
  onChange,
  ...restProps,
}) => (
  <ReactDatePicker
    className={className}
    selected={selected}
    dateFormat={dateFormat}
    minDate={minDate}
    maxDate={maxDate}
    placeholder="YYYY-MM-DD"
    onChange={onChange}
    { ...restProps }
  />
)

DatePicker.defaultProps = {
  dateFormat: DATE_FORMAT,
  onChange: () => {},
}


export default styled(DatePicker)`${inputTextStyle}`
