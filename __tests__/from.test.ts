import QueryBuilder from "../src/query/query-builder";

test("from", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = QueryBuilder.from(data);
    const result = query.select(x => x);
    expect(result).toEqual(data);
})