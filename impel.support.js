"use strict";

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

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asea = require("asea");
var falzy = require("falzy");
var kein = require("kein");
var protype = require("protype");
var zelf = require("zelf");

var impel = function impel(property, value, entity) {
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

	if (falzy(property) || !protype(property, STRING, SYMBOL, NUMBER)) {
		throw new Error("invalid property");
	}

	var self = zelf(this);

	entity = entity || self;

	try {
		(0, _defineProperty2.default)(entity, property, {
			"enumerable": false,
			"configurable": false,
			"writable": false,
			"value": value
		});
	} catch (error) {}

	if ((asea.SERVER && entity !== global || asea.CLIENT && entity !== window) && !kein(entity, "impel")) {
		try {
			Object.defineProperty(entity, "impel", {
				"enumerable": false,
				"configurable": false,
				"writable": false,
				"value": impel.bind(self)
			});
		} catch (error) {
			throw new Error("cannot bind impel, error, " + error);
		}
	}

	return entity;
};

module.exports = impel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcGVsLmpzIl0sIm5hbWVzIjpbImFzZWEiLCJyZXF1aXJlIiwiZmFsenkiLCJrZWluIiwicHJvdHlwZSIsInplbGYiLCJpbXBlbCIsInByb3BlcnR5IiwidmFsdWUiLCJlbnRpdHkiLCJTVFJJTkciLCJTWU1CT0wiLCJOVU1CRVIiLCJFcnJvciIsInNlbGYiLCJlcnJvciIsIlNFUlZFUiIsImdsb2JhbCIsIkNMSUVOVCIsIndpbmRvdyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxPQUFPRixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1HLFVBQVVILFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1LLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsUUFBaEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxNQUFqQyxFQUF5QztBQUN0RDs7Ozs7Ozs7Ozs7Ozs7QUFjQSxLQUFJUCxNQUFPSyxRQUFQLEtBQXFCLENBQUNILFFBQVNHLFFBQVQsRUFBbUJHLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ0MsTUFBbkMsQ0FBMUIsRUFBdUU7QUFDdEUsUUFBTSxJQUFJQyxLQUFKLENBQVcsa0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLE9BQU9ULEtBQU0sSUFBTixDQUFYOztBQUVBSSxVQUFTQSxVQUFVSyxJQUFuQjs7QUFFQSxLQUFHO0FBQ0YsZ0NBQXVCTCxNQUF2QixFQUErQkYsUUFBL0IsRUFBeUM7QUFDeEMsaUJBQWMsS0FEMEI7QUFFeEMsbUJBQWdCLEtBRndCO0FBR3hDLGVBQVksS0FINEI7QUFJeEMsWUFBU0M7QUFKK0IsR0FBekM7QUFPQSxFQVJELENBUUMsT0FBT08sS0FBUCxFQUFjLENBQUc7O0FBRWxCLEtBQUksQ0FBSWYsS0FBS2dCLE1BQUwsSUFBZVAsV0FBV1EsTUFBNUIsSUFDSGpCLEtBQUtrQixNQUFMLElBQWVULFdBQVdVLE1BRHpCLEtBRUgsQ0FBQ2hCLEtBQU1NLE1BQU4sRUFBYyxPQUFkLENBRkYsRUFHQTtBQUNDLE1BQUc7QUFDRlcsVUFBT0MsY0FBUCxDQUF1QlosTUFBdkIsRUFBK0IsT0FBL0IsRUFBd0M7QUFDdkMsa0JBQWMsS0FEeUI7QUFFdkMsb0JBQWdCLEtBRnVCO0FBR3ZDLGdCQUFZLEtBSDJCO0FBSXZDLGFBQVNILE1BQU1nQixJQUFOLENBQVlSLElBQVo7QUFKOEIsSUFBeEM7QUFPQSxHQVJELENBUUMsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsU0FBTSxJQUFJRixLQUFKLGdDQUF5Q0UsS0FBekMsQ0FBTjtBQUNBO0FBQ0Q7O0FBRUQsUUFBT04sTUFBUDtBQUNBLENBbkREOztBQXFEQWMsT0FBT0MsT0FBUCxHQUFpQmxCLEtBQWpCIiwiZmlsZSI6ImltcGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJpbXBlbFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiaW1wZWwvaW1wZWwuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImltcGVsLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImltcGVsXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvaW1wZWwuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJpbXBlbC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEZvcmNlIGhhcmRlbiBwcm9wZXJ0eS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiLFxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IGltcGVsID0gZnVuY3Rpb24gaW1wZWwoIHByb3BlcnR5LCB2YWx1ZSwgZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJzeW1ib2xcIixcblx0XHRcdFx0XHRcIm51bWJlclwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwidmFsdWU6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwiZW50aXR5Om9wdGlvbmFsXCI6IFwib2JqZWN0XCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIFNUUklORywgU1lNQk9MLCBOVU1CRVIgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0fVxuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdGVudGl0eSA9IGVudGl0eSB8fCBzZWxmO1xuXG5cdHRyeXtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGVudGl0eSwgcHJvcGVydHksIHtcblx0XHRcdFwiZW51bWVyYWJsZVwiOiBmYWxzZSxcblx0XHRcdFwiY29uZmlndXJhYmxlXCI6IGZhbHNlLFxuXHRcdFx0XCJ3cml0YWJsZVwiOiBmYWxzZSxcblx0XHRcdFwidmFsdWVcIjogdmFsdWVcblx0XHR9ICk7XG5cblx0fWNhdGNoKCBlcnJvciApeyB9XG5cblx0aWYoICggKCBhc2VhLlNFUlZFUiAmJiBlbnRpdHkgIT09IGdsb2JhbCApIHx8XG5cdFx0KCBhc2VhLkNMSUVOVCAmJiBlbnRpdHkgIT09IHdpbmRvdyApICkgJiZcblx0XHQha2VpbiggZW50aXR5LCBcImltcGVsXCIgKSApXG5cdHtcblx0XHR0cnl7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGVudGl0eSwgXCJpbXBlbFwiLCB7XG5cdFx0XHRcdFwiZW51bWVyYWJsZVwiOiBmYWxzZSxcblx0XHRcdFx0XCJjb25maWd1cmFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwid3JpdGFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwidmFsdWVcIjogaW1wZWwuYmluZCggc2VsZiApXG5cdFx0XHR9ICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgYmluZCBpbXBlbCwgZXJyb3IsICR7IGVycm9yIH1gICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVudGl0eTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW1wZWw7XG4iXX0=
