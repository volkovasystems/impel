"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "impel",
			"path": "impel/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/impel.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"impel": "impel"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const impel = require( "./impel.js" );
//: @end-server

//: @client:
const impel = require( "./impel.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "impel", ( ) => {

	describe( `"impel( "property", "value" )"`, ( ) => {
		it( "should have value" , ( ) => {

			impel( "property", "value" );
			assert.equal( global.property, "value" );

		} );
	} );

	describe( `"impel( "property", "value" )"`, ( ) => {
		it( "should have value", ( ) => {

		let test = { };
		impel( "property", "value", test )
		assert.equal( test.property, "value");

		} );
	} );
} );


//: @end-server


//: @client:


describe( "impel", ( ) => {

	describe( `"impel( "property", "value" )"`, ( ) => {
		it( "should have value" , ( ) => {

			impel( "property", "value" );
			assert.equal( global.property, "value" );

		} );
	} );

	describe( `"impel( "property", "value" )"`, ( ) => {
		it( "should have value", ( ) => {

		let test = { };
		impel( "property", "value", test )
		assert.equal( test.property, "value");

		} );
	} );
} );


//: @end-client


//: @bridge:

describe( "impel", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "impel( 'hello', 'world', { } )", ( ) => {

		it( "should be equal to 'world'", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let test = { };
					impel( "hello", "world", test );
					return test.hello;
				}

			).value;
			//: @end-ignore
			assert.equal( result, "world" );

		} );

		describe( "Property descriptor", ( ) => {

			it( "should be equal to false", ( ) => {
				//: @ignore:
				let result = browser.url( bridgeURL ).execute(

					function( ){
						let test = { };
						impel( "hello", "world", test );
						let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
						return descriptor.configurable;
					}

				).value;
				//: @end-ignore
				assert.equal( result, false );

			} );

			it( "should be equal to false", ( ) => {
				//: @ignore:
				let result = browser.url( bridgeURL ).execute(

					function( ){
						let test = { };
						impel( "hello", "world", test );
						let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
						return descriptor.enumerable;
					}

				).value;

				assert.equal( result, false );
				//: @end-ignore
			} );

			it( "should be equal to false", ( ) => {
				//: @ignore:
				let result = browser.url( bridgeURL ).execute(

					function( ){
						let test = { };
						impel( "hello", "world", test );
						let descriptor = Object.getOwnPropertyDescriptor( test, "hello" );
						return descriptor.writable;
					}

				).value;
				//: @end-ignore
				assert.equal( result, false );

			} );

		} );

	} );

} );

//: @end-bridge
