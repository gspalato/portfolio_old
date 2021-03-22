declare global {
    interface Array<T> {
        shuffle(): Array<T>;
    }
}

Array.prototype.shuffle = function<T>(): Array<T> {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
};

export {};