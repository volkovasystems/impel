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
              */var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var impel = require("./impel.support.js");
//: @end-client






//: @client:

describe("impel", function () {

	describe("`impel( 'property', 'value' )`", function () {
		it("should be equal to 'value'", function () {

			impel("property", "value");

			assert.equal(global.property, "value");

		});
	});


	describe("`impel( 'hello', 'world', { } )`", function () {
		it("should be equal to 'world'", function () {

			var test = {};
			impel("hello", "world", test);

			assert.equal(test.hello, "world");

		});
	});


	describe("`Property descriptor configurable`", function () {
		it("should be equal to false", function () {

			var test = {};
			impel("hello", "world", test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "hello");
			assert.equal(descriptor.configurable, false);

		});
	});


	describe("`Property descriptor enumerable`", function () {
		it("should be equal to false", function () {

			var test = {};
			impel("hello", "world", test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "hello");
			assert.equal(descriptor.enumerable, false);

		});
	});


	describe("`Property descriptor writable`", function () {
		it("should be equal to false", function () {

			var test = {};
			impel("hello", "world", test);

			var descriptor = (0, _getOwnPropertyDescriptor2.default)(test, "hello");
			assert.equal(descriptor.writable, false);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiaW1wZWwiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJnbG9iYWwiLCJwcm9wZXJ0eSIsInRlc3QiLCJoZWxsbyIsImRlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLE9BQVYsRUFBbUIsWUFBTzs7QUFFekJBLFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNsREMsS0FBSSw0QkFBSixFQUFrQyxZQUFPOztBQUV4Q0YsU0FBTyxVQUFQLEVBQW1CLE9BQW5COztBQUVBRixVQUFPSyxLQUFQLENBQWNDLE9BQU9DLFFBQXJCLEVBQStCLE9BQS9COztBQUVBLEdBTkQ7QUFPQSxFQVJEOzs7QUFXQUosVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BEQyxLQUFJLDRCQUFKLEVBQWtDLFlBQU87O0FBRXhDLE9BQUlJLE9BQU8sRUFBWDtBQUNBTixTQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUJNLElBQXpCOztBQUVBUixVQUFPSyxLQUFQLENBQWNHLEtBQUtDLEtBQW5CLEVBQTBCLE9BQTFCOztBQUVBLEdBUEQ7QUFRQSxFQVREOzs7QUFZQU4sVUFBVSxvQ0FBVixFQUFnRCxZQUFPO0FBQ3REQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlJLE9BQU8sRUFBWDtBQUNBTixTQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUJNLElBQXpCOztBQUVBLE9BQUlFLGFBQWEsd0NBQWlDRixJQUFqQyxFQUF1QyxPQUF2QyxDQUFqQjtBQUNBUixVQUFPSyxLQUFQLENBQWNLLFdBQVdDLFlBQXpCLEVBQXVDLEtBQXZDOztBQUVBLEdBUkQ7QUFTQSxFQVZEOzs7QUFhQVIsVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BEQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlJLE9BQU8sRUFBWDtBQUNBTixTQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUJNLElBQXpCOztBQUVBLE9BQUlFLGFBQWEsd0NBQWlDRixJQUFqQyxFQUF1QyxPQUF2QyxDQUFqQjtBQUNBUixVQUFPSyxLQUFQLENBQWNLLFdBQVdFLFVBQXpCLEVBQXFDLEtBQXJDOztBQUVBLEdBUkQ7QUFTQSxFQVZEOzs7QUFhQVQsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ2xEQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlJLE9BQU8sRUFBWDtBQUNBTixTQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUJNLElBQXpCOztBQUVBLE9BQUlFLGFBQWEsd0NBQWlDRixJQUFqQyxFQUF1QyxPQUF2QyxDQUFqQjtBQUNBUixVQUFPSyxLQUFQLENBQWNLLFdBQVdHLFFBQXpCLEVBQW1DLEtBQW5DOztBQUVBLEdBUkQ7QUFTQSxFQVZEOztBQVlBLENBL0REOztBQWlFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImltcGVsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJpbXBlbC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvaW1wZWwuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImltcGVsXCI6IFwiaW1wZWxcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGltcGVsID0gcmVxdWlyZSggXCIuL2ltcGVsLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwiaW1wZWxcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgaW1wZWwoICdwcm9wZXJ0eScsICd2YWx1ZScgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ3ZhbHVlJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRpbXBlbCggXCJwcm9wZXJ0eVwiLCBcInZhbHVlXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBnbG9iYWwucHJvcGVydHksIFwidmFsdWVcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgaW1wZWwoICdoZWxsbycsICd3b3JsZCcsIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnd29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0aW1wZWwoIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCB0ZXN0ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdC5oZWxsbywgXCJ3b3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBQcm9wZXJ0eSBkZXNjcmlwdG9yIGNvbmZpZ3VyYWJsZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB7IH07XG5cdFx0XHRpbXBlbCggXCJoZWxsb1wiLCBcIndvcmxkXCIsIHRlc3QgKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0ZXN0LCBcImhlbGxvXCIgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggZGVzY3JpcHRvci5jb25maWd1cmFibGUsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBQcm9wZXJ0eSBkZXNjcmlwdG9yIGVudW1lcmFibGVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0aW1wZWwoIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCB0ZXN0ICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGVzdCwgXCJoZWxsb1wiICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3IuZW51bWVyYWJsZSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYFByb3BlcnR5IGRlc2NyaXB0b3Igd3JpdGFibGVgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0geyB9O1xuXHRcdFx0aW1wZWwoIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCB0ZXN0ICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGVzdCwgXCJoZWxsb1wiICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRlc2NyaXB0b3Iud3JpdGFibGUsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
