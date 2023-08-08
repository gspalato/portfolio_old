interface Array<T> {
    intersectionWith(array: Array<any | T>): Array<T>;
    intersects(array: Array<any | T>): boolean;
}

Array.prototype.intersectionWith = function (array: Array<any>): Array<any> {
    return this.filter(value => array.includes(value));
}

Array.prototype.intersects = function (array: Array<any>): boolean {
    return this.intersectionWith(array).length > 0;
}