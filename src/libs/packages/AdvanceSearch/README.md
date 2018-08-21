# UI - AdvanceSearch
> Component Advance Search

### Properties
| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| schema | Array | [] | Yes | Schema data for tell advance search to generate filter |
| suggestions | Array | [] | No | Suggestions data for display list of suggestions |
| addMoreLabel | String | 'Add more filter' | No | String for display add more filter button |
| expandedFilter | Boolean | false | No | Expanded filter from the start, if filter has expanded the close button will hide automatically |
| processQueryDelay | Number | 250 | No | Delay before process the query (Millisecond) |
| onChange | Function | () => void | No | Handler when advance search was changed |
