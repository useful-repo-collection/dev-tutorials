(window.webpackJsonp=window.webpackJsonp||[]).push([[1714],{2060:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"comments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[t._v("#")]),t._v(" Comments")]),t._v(" "),s("h2",{attrs:{id:"using-comments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-comments"}},[t._v("#")]),t._v(" Using Comments")]),t._v(" "),s("p",[t._v("To add annotations, hints, or exclude some code from being executed JavaScript provides two ways of commenting code lines")]),t._v(" "),s("h3",{attrs:{id:"single-line-comment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-line-comment"}},[t._v("#")]),t._v(" Single line Comment "),s("code",[t._v("//")])]),t._v(" "),s("p",[t._v("Everything after the "),s("code",[t._v("//")]),t._v(" until the end of the line is excluded from execution.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("elementAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Gets the element from Event coordinates")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("elementFromPoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: write more cool stuff!")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"multi-line-comment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-line-comment"}},[t._v("#")]),t._v(" Multi-line Comment "),s("code",[t._v("/**/")])]),t._v(" "),s("p",[t._v("Everything between the opening "),s("code",[t._v("/*")]),t._v(" and the closing "),s("code",[t._v("*/")]),t._v(" is excluded from execution, even if the opening and closing are on different lines.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n   Gets the element from Event coordinates.\n   Use like: \n   var clickedEl = someEl.addEventListener("click", elementAt, false);\n*/')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("elementAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("elementFromPoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* TODO: write more useful comments! */")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"using-html-comments-in-javascript-bad-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-html-comments-in-javascript-bad-practice"}},[t._v("#")]),t._v(" Using HTML comments in JavaScript (Bad practice)")]),t._v(" "),s("p",[t._v("HTML comments (optionally preceded by whitespace) will cause code (on the same line) to be ignored by the browser also, though this is considered "),s("strong",[t._v("bad practice")]),t._v(".")]),t._v(" "),s("p",[t._v("One-line comments with the HTML comment opening sequence ("),s("code",[t._v("\x3c!--")]),t._v("):")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" the JavaScript interpreter ignores the closing characters of HTML comments ("),s("code",[t._v("--\x3e")]),t._v(") here.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" single"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("line comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Identical to using "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("//")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" since\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" the closing "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("--\x3e")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" is ignored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),s("p",[t._v("This technique can be observed in legacy code to hide JavaScript from browsers that didn't support it:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),t._v(" language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JavaScript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Arbitrary JavaScript code.\n   Old browsers would treat\n   it as HTML code. */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("An HTML closing comment can also be used in JavaScript (independent of an opening comment) at the beginning of a line (optionally preceded by whitespace) in which case it too causes the rest of the line to be ignored:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Unreachable "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JS")]),t._v(" code\n\n")])])]),s("p",[t._v("These facts have also been exploited to allow a page to call itself first as HTML and secondly as JavaScript. For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reached JS \"file\"'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n--\x3e\n<!DOCTYPE html>\n<script>\nvar w1 = new Worker('#1');\nw1.onmessage = function (e) {\n    console.log(e.data); // 'reached JS \"file\"\n};\n<\/script>\n\x3c!--\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("When run a HTML, all the multiline text between the "),s("code",[t._v("\x3c!--")]),t._v(" and "),s("code",[t._v("--\x3e")]),t._v(" comments are ignored, so the JavaScript contained therein is ignored when run as HTML.")]),t._v(" "),s("p",[t._v("As JavaScript, however, while the lines beginning with "),s("code",[t._v("\x3c!--")]),t._v(" and "),s("code",[t._v("--\x3e")]),t._v(" are ignored, their effect is not to escape over "),s("strong",[t._v("multiple")]),t._v(" lines, so the lines following them (e.g., "),s("code",[t._v("self.postMessage(...")]),t._v(") will not be ignored when run as JavaScript, at least until they reach a "),s("strong",[t._v("JavaScript")]),t._v(" comment, marked by "),s("code",[t._v("/*")]),t._v(" and "),s("code",[t._v("*/")]),t._v(". Such JavaScript comments are used in the above example to ignore the remaining "),s("strong",[t._v("HTML")]),t._v(" text (until the "),s("code",[t._v("--\x3e")]),t._v(" which is also ignored as JavaScript).")]),t._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("// Single line comment (continues until line break)")])]),t._v(" "),s("li",[s("code",[t._v("/* Multi line comment */")])]),t._v(" "),s("li",[s("code",[t._v('\x3c!-- Single line comment starting with the opening HTML comment segment "\x3c!--" (continues until line break)')])]),t._v(" "),s("li",[s("code",[t._v('--\x3e Single line comment starting with the closing HTML comment segment "--\x3e" (continues until line break)')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);