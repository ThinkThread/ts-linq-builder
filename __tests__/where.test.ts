import QueryBuilder from "../src/query/query-builder";

test("where", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.where(item => item % 2 === 0).select(x => x);
    expect(result).toEqual([2, 4, 6, 8, 10]);
})

test("where with partial", () => {
    const data = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 10 }];
    const query = new QueryBuilder(data);
    const result = query.where({ key: 1 } as any).select(x => x);
    expect(result).toEqual([{ key: 1 }]);
})