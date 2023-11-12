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
