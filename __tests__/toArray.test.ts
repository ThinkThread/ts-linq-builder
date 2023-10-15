import QueryBuilder from "../src/query/query-builder";

test("toArray", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.toArray();
    expect(result).toEqual(data);
})