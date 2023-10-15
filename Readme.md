# QueryBuilder

[![ts-linq-builder](https://img.shields.io/npm/dt/ts-linq-builder.svg)](https://www.npmjs.com/package/ts-linq-builder)

`QueryBuilder` is a TypeScript class that provides LINQ-like querying capabilities for collections. It allows you to perform common operations such as `where`, `select`, `join`, `sum`, `average`, `min`, `max`, and more on your data collections.

## Installation

To use `QueryBuilder` in your project, you can install it via npm:

```bash
npm i ts-linq-builder
```

## Usage

Here's how you can use QueryBuilder in your TypeScript project:

```typescript
import QueryBuilder from "ts-linq-builder";

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
];

const userDetails = [
    { id: 1, age: 30 },
    { id: 2, age: 20 },
];

const queryBuilder = new QueryBuilder(users);

queryBuilder
    .join(userDetails, (outer, inner) => outer.id === inner.id, (outer, inner) => {
        return {
            id: outer.id,
            name: outer.name,
            age: inner.age,
        };
    })
    .forEach(item => console.log(item));    

queryBuilder
    .where(item => item.id === 1)
    .select(item => item.name)
    .forEach(item => console.log(item));


console.log(queryBuilder.first());
console.log(queryBuilder.any());
console.log(queryBuilder.single());
console.log(queryBuilder.last());
```

## Example Project

See more [Example](./example)

## Available Operations

QueryBuilder supports the following operations:

```typescript
where(filter: FilterFunction<T> | Partial<T>): QueryBuilder<T>;
select<K>(selector: SelectorFunction<T, K>): K[];
orderBy(comparator: (a: T, b: T) => number): QueryBuilder<T>;
orderByDescending(comparator: (a: T, b: T) => number): QueryBuilder<T>;
groupBy<K extends string | number | symbol>(keySelector: (item: T) => K): Record<K, T[]>;
skip(count: number): QueryBuilder<T>;
take(count: number): QueryBuilder<T>;
distinct(): QueryBuilder<T>;
count(): number;
any(): boolean;
join<U, R>(
inner: U[],
condition: (outer: T, inner: U) => boolean,
resultSelector: (outer: T, inner: U) => R
): R[];
first(filter?: (item: T) => boolean): T | undefined;
single(filter?: (item: T) => boolean): T | undefined;
last(filter?: (item: T) => boolean): T | undefined;
sum(selector: (item: T) => number): number;
average(selector: (item: T) => number): number;
min(selector: (item: T) => number): number | undefined;
max(selector: (item: T) => number): number | undefined;
add(item: T): QueryBuilder<T>;
remove(item: T): QueryBuilder<T>;
clear(): QueryBuilder<T>;
toPromise(): Promise<T[]>;
toArrayAsync(): Promise<T[]>;
toArray(): T[];
toListAsync(): Promise<T[]>;
toList(): T[];
map<U>(selector: (item: T) => U): QueryBuilder<U> 
static from<T>(data: T[]): QueryBuilder<T>;
static empty<T>(): QueryBuilder<T>;
```

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. We welcome your suggestions and improvements.

## License

This project is licensed under the MIT License.