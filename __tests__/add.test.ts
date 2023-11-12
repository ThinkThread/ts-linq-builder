import QueryBuilder from "../src/query/query-builder";

test("add", () => {
    const data = [1];
    const query = new QueryBuilder(data);
    const result = query.add(2).select(x => x);
    expect(result).toEqual([1, 2]);
})
