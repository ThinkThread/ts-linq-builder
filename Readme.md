# QueryBuilder

[![ts-linq-builder](https://img.shields.io/npm/dt/ts-linq-builder.svg)](https://www.npmjs.com/package/ts-linq-builder)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_ts-linq-builder&metric=bugs)](https://sonarcloud.io/summary/new_code?id=thinkthread_ts-linq-builder)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_ts-linq-builder&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=thinkthread_ts-linq-builder)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_ts-linq-builder&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=thinkthread_ts-linq-builder)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_ts-linq-builder&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=thinkthread_ts-linq-builder)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_ts-linq-builder&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=thinkthread_ts-linq-builder)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_ts-linq-builder&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=thinkthread_ts-linq-builder)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_ts-linq-builder&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=thinkthread_ts-linq-builder)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_ts-linq-builder&metric=coverage)](https://sonarcloud.io/summary/new_code?id=thinkthread_ts-linq-builder)

`QueryBuilder` is a TypeScript class that provides LINQ-like querying capabilities for collections. It allows you to perform common operations such as `where`, `select`, `join`, `sum`, `average`, `min`, `max`, and more on your data collections.

## Installation

To use `QueryBuilder` in your project, you can install it via npm:

```bash
npm ts-linq-builder
```

## Usage

Here's how you can use QueryBuilder in your TypeScript project:

```typescript
import { QueryBuilder } from 'my-query-builder';

const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
];

const query = new QueryBuilder(data);

// Perform operations on the data collection
const result = query
  .where((item) => item.id % 2 === 0)
  .select((item) => item.name);

console.log(result); // ['Bob', 'David']
```
## Example Project

See more [Example](./example)

## Available Operations

QueryBuilder supports the following operations:

- where: Filters the collection based on a condition.
- select: Projects the collection to a new shape.
- join: Joins two collections based on a condition.
- sum: Calculates the sum of a numeric property.
- average: Calculates the average of a numeric property.
- min: Finds the minimum value of a numeric property.
- max: Finds the maximum value of a numeric property.
- first: Returns the first element based on a condition.
- single: Returns a single element based on a condition.
- last: Returns the last element based on a condition.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. We welcome your suggestions and improvements.

## License

This project is licensed under the MIT License.