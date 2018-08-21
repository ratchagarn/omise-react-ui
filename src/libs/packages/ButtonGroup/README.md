# UI - ButtonGroup
> Button group component

### Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| name | string | '' | Yes | Name for button group |
| items | array | [] | No | List items for button group need to contain object `{ text: 'Item 1' value 'Item 1' }` |
| vertical | boolean | false | No | Display button group as vertical style |
| defaultValue | any | null | No | Default selected value for button group |
| onChange | function | () => void | No | Handler for on button group change |
