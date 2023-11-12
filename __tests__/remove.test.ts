import QueryBuilder from "../src/query/query-builder";

test("remove", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.remove(2).select(x => x);
    expect(result).toEqual([1, 3, 4, 5, 6, 7, 8, 9, 10]);
})