import QueryBuilder from "../src/query/query-builder";

test("toPromise", async () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = await query.toPromise();
    expect(result).toEqual(data);
})