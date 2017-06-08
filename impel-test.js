
const assert = require( "assert" );
const impel = require( "./impel.js" );

let test1 = { };
impel( "hello", "world", test1 );
let descriptor = Object.getOwnPropertyDescriptor( test1, "hello" );

assert.equal( test1.hello, "world", "should have value 'hello'" );

assert.equal( descriptor.configurable, false, "should return false" );

assert.equal( descriptor.enumerable, false, "should return false" );

assert.equal( descriptor.writable, false, "should return false" );

impel( "property", "value" );
assert.equal( global.property, "value", "should have value" );

let test2 = { };
impel( "property", "value", test2 )
assert.equal( test2.property, "value", "should have value" );

console.log( "ok" );
