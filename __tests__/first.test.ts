import QueryBuilder from "../src/query/query-builder";

test("first", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.first();
    expect(result).toBe(1);
})

test("first with filter", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.first(item => item === 3);
    expect(result).toBe(3);
})