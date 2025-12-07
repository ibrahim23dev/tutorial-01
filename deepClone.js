function deepClone(obj, hash = new WeakMap()) {
    // Return the value if obj is null or not an object
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj);
    }
    // Handle RegExp
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    // Handle circular references
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    // Create a new instance of the object's constructor
    const cloneObj = new obj.constructor();
// Store the clone in the hash map
    hash.set(obj, cloneObj);
    // Recursively copy properties
    for (const key of Reflect.ownKeys(obj)) {
        cloneObj[key] = deepClone(obj[key], hash);
    }
    return cloneObj;
}
// Example usage:
const original = {
    name: "John",
    age: 30,
    date: new Date(),
    nested: {
        hobby: "reading",
        scores: [10, 20, 30],
    },
};

original.self = original;

const cloned = deepClone(original);

console.log(cloned);

console.log(cloned === original);

console.log(cloned.nested === original.nested);

console.log(cloned.self === cloned);

