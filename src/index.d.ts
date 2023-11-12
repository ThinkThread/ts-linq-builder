import FilterFunction from "./types/filter-function";
import SelectorFunction from "./types/selector-function";

declare module 'ts-linq-builder' {
    class QueryBuilder<T> {
        constructor(data: T[]);
        where(filter: FilterFunction<T> | Partial<T>): QueryBuilder<T>;
        select<K>(selector: SelectorFunction<T, K>): K[];
        orderBy(comparator: (a: T, b: T) => number): QueryBuilder<T>;
        orderByDescending(comparator: (a: T, b: T) => number): QueryBuilder<T>;
        groupBy<K extends string | number | symbol>(keySelector: (item: T) => K): Record<K, T[]>;
        skip(count: number): QueryBuilder<T>;
        take(count: number): QueryBuilder<T>;
        distinct(): QueryBuilder<T>;
        count(): number;
        any(): boolean;
        join<U, R>(
          inner: U[],
          condition: (outer: T, inner: U) => boolean,
          resultSelector: (outer: T, inner: U) => R
        ): R[];
        first(filter?: (item: T) => boolean): T | undefined;
        single(filter?: (item: T) => boolean): T | undefined;
        last(filter?: (item: T) => boolean): T | undefined;
        sum(selector: (item: T) => number): number;
        average(selector: (item: T) => number): number;
        min(selector: (item: T) => number): number | undefined;
        max(selector: (item: T) => number): number | undefined;
        add(item: T): QueryBuilder<T>;
        remove(item: T): QueryBuilder<T>;
        clear(): QueryBuilder<T>;
        toPromise(): Promise<T[]>;
        toArrayAsync(): Promise<T[]>;
        toArray(): T[];
        toListAsync(): Promise<T[]>;
        toList(): T[];
        map<U>(selector: (item: T) => U): QueryBuilder<U> 
        static from<T>(data: T[]): QueryBuilder<T>;
        static empty<T>(): QueryBuilder<T>;
    }

    export default QueryBuilder
  }