#!/usr/bin/env node
require('./proof')(2 * 3, function (serialize) {
    serialize('foo: l64f', { foo: -9.1819281981e3 }, 8, [ 0xdb, 0x01, 0x32, 0xcf, 0xf6, 0xee, 0xc1, 0xc0 ], 'very negative')
    serialize('foo: l64f', { foo: -10 }, 8, [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x24, 0xc0 ], 'negative')
})
