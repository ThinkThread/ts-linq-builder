import QueryBuilder from "../src/query/query-builder";

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