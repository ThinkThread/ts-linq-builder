import QueryBuilder from "../src/query/query-builder";

test("average", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.average(item => item);
    expect(result).toBe(5.5);
})