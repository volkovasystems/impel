
const assert = require( "assert" );
const impel = require( "./impel.js" );

impel( "property", "value" );
assert.equal( global.property, "value", "should have value" );

let test = { };
impel( "property", "value", test )
assert.equal( test.property, "value", "should have value" );

console.log( "ok" );

