export default function() {
    if (!Array.prototype.findIndex) {
        Object.defineProperty(Array.prototype, 'findIndex', {
            value: function(predicate) {
                if (this == null) throw new TypeError('"this" is null or not defined');
                let o = Object(this);
                let len = o.length >>> 0;
                if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
                let thisArg = arguments[1];
                let k = 0;
                while (k < len) {
                    let kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) return k;
                    k++;
                }
                return -1;
            }
        });
    }

}