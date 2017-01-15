"use strict";

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcGVsLmpzIl0sIm5hbWVzIjpbImFzZWEiLCJyZXF1aXJlIiwiZmFsenkiLCJrZWluIiwicHJvdHlwZSIsInplbGYiLCJpbXBlbCIsInByb3BlcnR5IiwidmFsdWUiLCJlbnRpdHkiLCJTVFJJTkciLCJTWU1CT0wiLCJOVU1CRVIiLCJFcnJvciIsInNlbGYiLCJlcnJvciIsIlNFUlZFUiIsImdsb2JhbCIsIkNMSUVOVCIsIndpbmRvdyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsVUFBVUgsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUssUUFBUSxTQUFTQSxLQUFULENBQWdCQyxRQUFoQixFQUEwQkMsS0FBMUIsRUFBaUNDLE1BQWpDLEVBQXlDO0FBQ3REOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQUlQLE1BQU9LLFFBQVAsS0FBcUIsQ0FBQ0gsUUFBU0csUUFBVCxFQUFtQkcsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxNQUFuQyxDQUExQixFQUF1RTtBQUN0RSxRQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsT0FBT1QsS0FBTSxJQUFOLENBQVg7O0FBRUFJLFVBQVNBLFVBQVVLLElBQW5COztBQUVBLEtBQUc7QUFDRixnQ0FBdUJMLE1BQXZCLEVBQStCRixRQUEvQixFQUF5QztBQUN4QyxpQkFBYyxLQUQwQjtBQUV4QyxtQkFBZ0IsS0FGd0I7QUFHeEMsZUFBWSxLQUg0QjtBQUl4QyxZQUFTQztBQUorQixHQUF6QztBQU9BLEVBUkQsQ0FRQyxPQUFPTyxLQUFQLEVBQWMsQ0FBRzs7QUFFbEIsS0FBSSxDQUFJZixLQUFLZ0IsTUFBTCxJQUFlUCxXQUFXUSxNQUE1QixJQUNIakIsS0FBS2tCLE1BQUwsSUFBZVQsV0FBV1UsTUFEekIsS0FFSCxDQUFDaEIsS0FBTU0sTUFBTixFQUFjLE9BQWQsQ0FGRixFQUdBO0FBQ0MsTUFBRztBQUNGVyxVQUFPQyxjQUFQLENBQXVCWixNQUF2QixFQUErQixPQUEvQixFQUF3QztBQUN2QyxrQkFBYyxLQUR5QjtBQUV2QyxvQkFBZ0IsS0FGdUI7QUFHdkMsZ0JBQVksS0FIMkI7QUFJdkMsYUFBU0gsTUFBTWdCLElBQU4sQ0FBWVIsSUFBWjtBQUo4QixJQUF4QztBQU9BLEdBUkQsQ0FRQyxPQUFPQyxLQUFQLEVBQWM7QUFDZCxTQUFNLElBQUlGLEtBQUosZ0NBQXlDRSxLQUF6QyxDQUFOO0FBQ0E7QUFDRDs7QUFFRCxRQUFPTixNQUFQO0FBQ0EsQ0FuREQ7O0FBcURBYyxPQUFPQyxPQUFQLEdBQWlCbEIsS0FBakIiLCJmaWxlIjoiaW1wZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiaW1wZWxcIixcblx0XHRcdFwicGF0aFwiOiBcImltcGVsL2ltcGVsLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJpbXBlbC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJpbXBlbFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2ltcGVsLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiaW1wZWwtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRGb3JjZSBoYXJkZW4gcHJvcGVydHkuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIixcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBpbXBlbCA9IGZ1bmN0aW9uIGltcGVsKCBwcm9wZXJ0eSwgdmFsdWUsIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwic3ltYm9sXCIsXG5cdFx0XHRcdFx0XCJudW1iZXJcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInZhbHVlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcImVudGl0eTpvcHRpb25hbFwiOiBcIm9iamVjdFwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcsIFNZTUJPTCwgTlVNQkVSICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdH1cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRlbnRpdHkgPSBlbnRpdHkgfHwgc2VsZjtcblxuXHR0cnl7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBlbnRpdHksIHByb3BlcnR5LCB7XG5cdFx0XHRcImVudW1lcmFibGVcIjogZmFsc2UsXG5cdFx0XHRcImNvbmZpZ3VyYWJsZVwiOiBmYWxzZSxcblx0XHRcdFwid3JpdGFibGVcIjogZmFsc2UsXG5cdFx0XHRcInZhbHVlXCI6IHZhbHVlXG5cdFx0fSApO1xuXG5cdH1jYXRjaCggZXJyb3IgKXsgfVxuXG5cdGlmKCAoICggYXNlYS5TRVJWRVIgJiYgZW50aXR5ICE9PSBnbG9iYWwgKSB8fFxuXHRcdCggYXNlYS5DTElFTlQgJiYgZW50aXR5ICE9PSB3aW5kb3cgKSApICYmXG5cdFx0IWtlaW4oIGVudGl0eSwgXCJpbXBlbFwiICkgKVxuXHR7XG5cdFx0dHJ5e1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBlbnRpdHksIFwiaW1wZWxcIiwge1xuXHRcdFx0XHRcImVudW1lcmFibGVcIjogZmFsc2UsXG5cdFx0XHRcdFwiY29uZmlndXJhYmxlXCI6IGZhbHNlLFxuXHRcdFx0XHRcIndyaXRhYmxlXCI6IGZhbHNlLFxuXHRcdFx0XHRcInZhbHVlXCI6IGltcGVsLmJpbmQoIHNlbGYgKVxuXHRcdFx0fSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGJpbmQgaW1wZWwsIGVycm9yLCAkeyBlcnJvciB9YCApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbnRpdHk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGltcGVsO1xuIl19
