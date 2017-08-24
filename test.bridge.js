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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("impel", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`impel( 'property', 'value' )`", function () {
		it("should be equal to 'value'", function () {

			var result = browser.url(bridgeURL).execute(
			function () {
				impel("property", "value");
				return window.property;
			}).
			value;

			assert.equal(result, "value");

		});
	});


	describe("`impel( 'hello', 'world', { } )`", function () {
		it("should be equal to 'world'", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				var test = {};
				impel("hello", "world", test);
				return test.hello;
			}).

			value;

			assert.equal(result, "world");

		});
	});


	describe("`Property descriptor configurable`", function () {
		it("should be equal to false", function () {
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
			assert.equal(result, false);

		});
	});


	describe("`Property descriptor enumerable`", function () {
		it("should be equal to false", function () {
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
		});
	});


	describe("`Property descriptor writable`", function () {
		it("should be equal to false", function () {
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
			assert.equal(result, false);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImltcGVsIiwid2luZG93IiwicHJvcGVydHkiLCJ2YWx1ZSIsImVxdWFsIiwidGVzdCIsImhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLE9BQVYsRUFBbUIsWUFBTzs7QUFFekIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNsREksS0FBSSw0QkFBSixFQUFrQyxZQUFPOztBQUV4QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCO0FBQ1osZUFBVztBQUNWQyxVQUFPLFVBQVAsRUFBbUIsT0FBbkI7QUFDQSxXQUFPQyxPQUFPQyxRQUFkO0FBQ0EsSUFKVztBQUtYQyxRQUxGOztBQU9BZixVQUFPZ0IsS0FBUCxDQUFjUixNQUFkLEVBQXNCLE9BQXRCOztBQUVBLEdBWEQ7QUFZQSxFQWJEOzs7QUFnQkFMLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREksS0FBSSw0QkFBSixFQUFrQyxZQUFPOztBQUV4QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixRQUFJTSxPQUFPLEVBQVg7QUFDQUwsVUFBTyxPQUFQLEVBQWdCLE9BQWhCLEVBQXlCSyxJQUF6QjtBQUNBLFdBQU9BLEtBQUtDLEtBQVo7QUFDQSxJQU5XOztBQVFYSCxRQVJGOztBQVVBZixVQUFPZ0IsS0FBUCxDQUFjUixNQUFkLEVBQXNCLE9BQXRCOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7O0FBbUJBTCxVQUFVLG9DQUFWLEVBQWdELFlBQU87QUFDdERJLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QztBQUNIOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNHUCxVQUFPZ0IsS0FBUCxDQUFjUixNQUFkLEVBQXNCLEtBQXRCOztBQUVBLEdBakJEO0FBa0JBLEVBbkJEOzs7QUFzQkFMLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREksS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDRyxHQWpCRDtBQWtCQSxFQW5CRDs7O0FBc0JBSixVQUFVLGdDQUFWLEVBQTRDLFlBQU87QUFDbERJLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QztBQUNIOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNHUCxVQUFPZ0IsS0FBUCxDQUFjUixNQUFkLEVBQXNCLEtBQXRCOztBQUVBLEdBakJEO0FBa0JBLEVBbkJEOztBQXFCQSxDQXhHRDs7QUEwR0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImltcGVsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJpbXBlbC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvaW1wZWwuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImltcGVsXCI6IFwiaW1wZWxcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwiaW1wZWxcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYGltcGVsKCAncHJvcGVydHknLCAndmFsdWUnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICd2YWx1ZSdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRpbXBlbCggXCJwcm9wZXJ0eVwiLCBcInZhbHVlXCIgKTtcblx0XHRcdFx0XHRyZXR1cm4gd2luZG93LnByb3BlcnR5O1xuXHRcdFx0XHR9XG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJ2YWx1ZVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBpbXBlbCggJ2hlbGxvJywgJ3dvcmxkJywgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICd3b3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0XHRcdGltcGVsKCBcImhlbGxvXCIsIFwid29ybGRcIiwgdGVzdCApO1xuXHRcdFx0XHRcdHJldHVybiB0ZXN0LmhlbGxvO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIndvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYFByb3BlcnR5IGRlc2NyaXB0b3IgY29uZmlndXJhYmxlYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0XHRcdGltcGVsKCBcImhlbGxvXCIsIFwid29ybGRcIiwgdGVzdCApO1xuXHRcdFx0XHRcdGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGVzdCwgXCJoZWxsb1wiICk7XG5cdFx0XHRcdFx0cmV0dXJuIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYFByb3BlcnR5IGRlc2NyaXB0b3IgZW51bWVyYWJsZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHsgfTtcblx0XHRcdFx0XHRpbXBlbCggXCJoZWxsb1wiLCBcIndvcmxkXCIsIHRlc3QgKTtcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRlc3QsIFwiaGVsbG9cIiApO1xuXHRcdFx0XHRcdHJldHVybiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgUHJvcGVydHkgZGVzY3JpcHRvciB3cml0YWJsZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHsgfTtcblx0XHRcdFx0XHRpbXBlbCggXCJoZWxsb1wiLCBcIndvcmxkXCIsIHRlc3QgKTtcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRlc3QsIFwiaGVsbG9cIiApO1xuXHRcdFx0XHRcdHJldHVybiBkZXNjcmlwdG9yLndyaXRhYmxlO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
