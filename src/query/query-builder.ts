import FilterFunction from "../types/filter-function";
import SelectorFunction from "../types/selector-function";

class QueryBuilder<T> {
    private data: T[] = [];

    constructor(data: T[]) {
        this.data = data;
    }

    where(filter: FilterFunction<T> | Partial<T>): QueryBuilder<T> {
        if (typeof filter === 'function') {
            this.data = this.data.filter(filter);
        } else {
            this.data = this.data.filter((item) => {
                for (const key in filter) {
                    if (filter[key] !== item[key]) {
                        return false;
                    }
                }
                return true;
            });
        }
        return this;
    }

    select<K>(selector: SelectorFunction<T, K>): K[] {
        return this.data.map(selector);
    }

    orderBy(comparator: (a: T, b: T) => number): QueryBuilder<T> {
        this.data.sort(comparator);
        return this;
    }

    orderByDescending(comparator: (a: T, b: T) => number): QueryBuilder<T> {
        this.data.sort((a, b) => -comparator(a, b));
        return this;
    }

    groupBy<K extends string | number | symbol>(keySelector: (item: T) => K): Record<K, T[]> {
        const groups: Record<K, T[]> = {} as Record<K, T[]>;

        this.data.forEach((item) => {
            const key = keySelector(item);

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(item);
        });

        return groups;
    }

    skip(count: number): QueryBuilder<T> {
        this.data = this.data.slice(count);
        return this;
    }

    take(count: number): QueryBuilder<T> {
        this.data = this.data.slice(0, count);
        return this;
    }

    distinct(): QueryBuilder<T> {
        this.data = Array.from(new Set(this.data));
        return this;
    }

    count(): number {
        return this.data.length;
    }

    any(): boolean {
        return this.data.length > 0;
    }

    join<U, R>(
        inner: U[],
        condition: (outer: T, inner: U) => boolean,
        resultSelector: (outer: T, inner: U) => R
    ): R[] {
        const joinedItems: R[] = [];

        this.data.forEach((outerItem) => {
            inner.forEach((innerItem) => {
                if (condition(outerItem, innerItem)) {
                    joinedItems.push(resultSelector(outerItem, innerItem));
                }
            });
        });

        return joinedItems;
    }

    first(filter?: (item: T) => boolean): T | undefined {
        if (!filter) {
            return this.data[0];
        }
        return this.data.find(filter);
    }

    single(filter?: (item: T) => boolean): T | undefined {
        if (!filter) {
            return this.data[0];
        }
        const items = this.data.filter(filter);
        if (items.length === 1) {
            return items[0];
        } else if (items.length === 0) {
            return undefined;
        } else {
            throw new Error('Multiple matching elements found.');
        }
    }

    last(filter?: (item: T) => boolean): T | undefined {
        const reversedData = [...this.data].reverse();
        if (!filter) {
            return reversedData[0];
        }
        return reversedData.find(filter);
    }

    sum(selector: (item: T) => number): number {
        return this.data.reduce((total, item) => total + selector(item), 0);
    }

    average(selector: (item: T) => number): number {
        const total = this.data.reduce((total, item) => total + selector(item), 0);
        return total / this.data.length;
    }

    min(selector: (item: T) => number): number | undefined {
        if (this.data.length === 0) return undefined;

        return this.data.reduce((min, item) => {
            const value = selector(item);
            return value < min ? value : min;
        }, selector(this.data[0]));
    }

    max(selector: (item: T) => number): number | undefined {
        if (this.data.length === 0) return undefined;

        return this.data.reduce((max, item) => {
            const value = selector(item);
            return value > max ? value : max;
        }, selector(this.data[0]));
    }
}

export default QueryBuilder;