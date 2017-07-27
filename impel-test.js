
const assert = require( "assert" );
const impel = require( "./impel.js" );

let test1 = { };
impel( "hello", "world", test1 );
assert.equal( test1.hello, "world", "should be equal to 'world'" );

let descriptor = Object.getOwnPropertyDescriptor( test1, "hello" );

assert.equal( descriptor.configurable, false, "should be equal to false" );

assert.equal( descriptor.enumerable, false, "should be equal to false" );

assert.equal( descriptor.writable, false, "should be equal to false" );

impel( "property", "value" );
assert.equal( global.property, "value", "should be equal to 'value'" );

let test2 = { };
impel( "property", "value", test2 )
assert.equal( test2.property, "value", "should be equal to value" );

console.log( "ok" );
