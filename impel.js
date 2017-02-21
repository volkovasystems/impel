/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "impel",
			"path": "impel/impel.js",
			"file": "impel.js",
			"module": "impel",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/impel.git",
			"test": "impel-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Force harden property.
	@end-module-documentation

	@include:
		{
			"asea": "asea",
			"falzy": "falzy",
			"protype": "protype",
			"zelf": "zelf",
		}
	@end-include
*/

const asea = require( "asea" );
const falzy = require( "falzy" );
const kein = require( "kein" );
const protype = require( "protype" );
const zelf = require( "zelf" );

const impel = function impel( property, value, entity ){
	/*;
		@meta-configuration:
			{
				"property:required": [
					"string",
					"symbol",
					"number"
				],
				"value:required": "*",
				"entity:optional": "object"
			}
		@end-meta-configuration
	*/

	if( falzy( property ) || !protype( property, STRING, SYMBOL, NUMBER ) ){
		throw new Error( "invalid property" );
	}

	let self = zelf( this );

	entity = entity || self;

	try{
		Object.defineProperty( entity, property, {
			"enumerable": false,
			"configurable": false,
			"writable": false,
			"value": value
		} );

	}catch( error ){ }

	if( ( ( asea.SERVER && entity !== global ) ||
		( asea.CLIENT && entity !== window ) ) &&
		!kein( entity, "impel" ) )
	{
		try{
			Object.defineProperty( entity, "impel", {
				"enumerable": false,
				"configurable": false,
				"writable": false,
				"value": impel.bind( self )
			} );

		}catch( error ){
			throw new Error( `cannot bind impel, error, ${ error.stack }` );
		}
	}

	return entity;
};

module.exports = impel;
