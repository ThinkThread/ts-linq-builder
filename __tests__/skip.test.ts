import QueryBuilder from "../src/query/query-builder";

test("skip", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.skip(3).select(x => x);
    expect(result).toEqual([4, 5, 6, 7, 8, 9, 10]);
})