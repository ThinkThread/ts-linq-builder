import QueryBuilder from "../src/query/query-builder";

test("join", () => {
    const table1 = [
        { key: 1, value: 'A' },
    ];
    const table2 = [
        { key: 1, value: 'B' },
    ]
    const query = new QueryBuilder(table1);
    const result = query.join(table2, (t1, t2) => t1.key === t2.key, (t1, t2) => ({ key: t1.key, value: t1.value, value2: t2.value }))
        
    expect(result).toEqual([
        { key: 1, value: 'A', value2: 'B' },
    ])
})