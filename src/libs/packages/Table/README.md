# UI - Table
> Table component

### Properties
| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| heads | array | [] | No | Table head data. |
| rows | array | [] | Yes | Table rows data. |

For about `rows` data you need to add object like this example below.

```js
// Example of rows data.
const rows = [
  [
    {
      column: (
        <div>
          <h5>Title</h5>
          <p>Detail</p>
        </div>
      ),
      align: 'right'
    },
    {
      column: 'Normal content column',
    },
  ],
  [
    // ...
  ],
]
```

This object allow two props `column` and `align`.
