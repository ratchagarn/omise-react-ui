# UI - Dropdown
> Dropdown component

### Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| placeholder | string | '' | No | Placeholder text |
| helpMessage | string | '' | No | Help message (Will not display if already have error message) |
| errorMessage | string | '' | No | Error message |
| name | string | '' | No | Name for text field |
| value | string | '' | No | Default value for text field |
| options | array | [] | No | List items for dropdown need to contain object `{ text: 'Item 1' value 'Item 1' }` |
| onChange | function | () => void | No | Handler for on input text change |
