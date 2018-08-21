# UI - SelectBox
> SelectBox component.
  Custom select field build on top with [React Selectv2](https://deploy-preview-2289--react-select.netlify.com/home)

### Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| name | string | '' | No | Name of select element |
| placeholder | string | 'Select...' | No | Placeholder text |
| options | array | [] | No | List items for select need to contain object `{ label: 'Item 1' value 'Item 1' }` |
| onChange | function | () => void | No | Handler for on select change |
| disabled | boolean | false | No | Set select to disabled state |
| defaultValue | object | {} | No | Default object for select need to contain data like options item |
