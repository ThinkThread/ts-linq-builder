import QueryBuilder from "../src/query/query-builder";

test("orderBy", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.orderBy(x => x).select(x => x);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

})

test("orderByDescending", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.orderByDescending(x => x).select(x => x);
    expect(result).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
})