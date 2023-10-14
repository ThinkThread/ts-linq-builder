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


test("select", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.select(x => x);
    expect(result).toEqual(data);
})

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

test("groupBy", () => {
    const data = [
        { key: 1, value: 'A' },
        { key: 2, value: 'B' },
        { key: 1, value: 'C' },
        { key: 2, value: 'D' },
    ];

    const result = new QueryBuilder(data).groupBy((item) => item.key);

    expect(result).toEqual({
        1: [
            { key: 1, value: 'A' },
            { key: 1, value: 'C' },
        ],
        2: [
            { key: 2, value: 'B' },
            { key: 2, value: 'D' },
        ],
    });
})

test("skip", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.skip(3).select(x => x);
    expect(result).toEqual([4, 5, 6, 7, 8, 9, 10]);
})

test("take", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.take(3).select(x => x);
    expect(result).toEqual([1, 2, 3]);
})

test("distinct", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.distinct().select(x => x);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})

test("count", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.count();
    expect(result).toBe(10);
})

test("any", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.any();
    expect(result).toBe(true);
})

test("join", () => {
    const table1 = [
        { key: 1, value: 'A' },
    ];
    const table2 = [
        { key: 1, value: 'B' },
    ]
    const query = new QueryBuilder(table1);
    const result = query.join(table2, (t1, t2) => t1.key === t2.key, (t1, t2) => ({ key: t1.key, value: t1.value, value2: t2.value }));
    expect(result).toEqual([
        { key: 1, value: 'A', value2: 'B' },
    ])
})

test("first", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.first();
    expect(result).toBe(1);
})

test("first with filter", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.first(item => item === 3);
    expect(result).toBe(3);
})

test("single", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.single(item => item === 3);
    expect(result).toBe(3);
})

test("last", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.last(item => item === 3);
    expect(result).toBe(3);
})

test("sum", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.sum(item => item);
    expect(result).toBe(55);
})

test("average", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.average(item => item);
    expect(result).toBe(5.5);
})

test("min", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.min(item => item);
    expect(result).toBe(1);
})

test("max", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const query = new QueryBuilder(data);
    const result = query.max(item => item);
    expect(result).toBe(10);
})