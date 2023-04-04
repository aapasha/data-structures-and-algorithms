"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items = __spreadArray(__spreadArray([], this.items, true), [item], false);
        return this;
    };
    Queue.prototype.dequeue = function () {
        var item = this.items[0];
        this.items = this.items.slice(1);
        return item;
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    Queue.prototype.peek = function () {
        if (!this.isEmpty()) {
            return this.items[0];
        }
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    Queue.prototype.toString = function () {
        return this.items.toString();
    };
    return Queue;
}());
exports.Queue = Queue;
