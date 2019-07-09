//https://stackoverflow.com/questions/37437805/convert-map-to-json-object-in-javascript

function createPaths(aliases, propName, path) {
    aliases.set(propName, path);
}

var map = new Map(),
    object = {};

createPaths(map, 'paths.aliases.server.entry', 'src/test');
createPaths(map, 'paths.aliases.dist.entry', 'dist/test');

map.forEach((value, key) => {
    var keys = key.split('.'),
        last = keys.pop();
    keys.reduce((r, a) => r[a] = r[a] || {}, object)[last] = value;
});

console.log(object);
