import QueryBuilder from "../src/query/query-builder";

test("map", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.map(x => x * 2).select(x => x);
    expect(result).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
})