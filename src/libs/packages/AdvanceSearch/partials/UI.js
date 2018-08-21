/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/UI
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import styled from 'styled-components'


export const Table = styled.div`
  display: table;
`

export const Col = styled.div`
  display: ${props => props.hide ? 'none' : 'table-cell'};
  min-width: 200px;
  padding-right: 8px;
  vertical-align: middle;

  &:last-child {
    padding-right: none;
  }
`

export const InputStyle = `
  display: block;
  width: 100%;
  height: 38px;
  padding: 4px 8px;
  border: 1px solid hsl(0, 0%, 80%);
  background-color: hsl(0, 0%, 98%);
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  transition: .2s;

  &:focus {
    border-color: #2684FF;
    box-shadow: 0 0 0 1px #2684FF;
  }
`
export const Input = styled.input`${InputStyle}`


export const Choice = styled.span`
  display: inline-block;
  margin-right: 5px;
  padding: 5px 10px;
  background-color: ${props => props.active ? '#2761E8' : 'transparent'};
  color: ${props => props.active ? 'white' : null};
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  transition: .2s;

  &:hover {
    background-color: #2761E8;
    color: white;
  }

  &:last-child {
    margin-right: 0;
  }
`
