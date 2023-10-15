import QueryBuilder from "../src/query/query-builder";

test("empty", () => {
    const query = QueryBuilder.empty();
    const result = query.select(x => x);
    expect(result).toEqual([]);
})