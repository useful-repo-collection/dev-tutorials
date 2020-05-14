(window.webpackJsonp=window.webpackJsonp||[]).push([[1774],{2119:function(t,a,n){"use strict";n.r(a);var e=n(19),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"requestanimationframe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[t._v("#")]),t._v(" requestAnimationFrame")]),t._v(" "),n("h2",{attrs:{id:"use-requestanimationframe-to-fade-in-element"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-requestanimationframe-to-fade-in-element"}},[t._v("#")]),t._v(" Use requestAnimationFrame to fade in element")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("View jsFiddle")]),t._v(": "),n("a",{attrs:{href:"https://jsfiddle.net/HimmatChahal/jb5trg67/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jsfiddle.net/HimmatChahal/jb5trg67/"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("Copy + Pasteable code below")]),t._v(":")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("This will fade "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" at "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" frames per "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("second")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("or "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" close to possible "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" your hardware allows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fade in over 2000 ms = 2 seconds.")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FADE_DURATION")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -1 is simply a flag to indicate if we are rendering the very 1st frame")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" startTime"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Function to render current frame (whatever frame that may be)")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("currTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" head1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            \n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// How opaque should head1 be?  Its fade started at currTime=0.")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Over FADE_DURATION ms, opacity goes from 0 to 1")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" opacity "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currTime"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FADE_DURATION")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                head1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("opacity "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" opacity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Function to ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("eachFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Time that animation has been running (in ms)")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncomment the console.log function to view how quickly ")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the timeRunning updates its value (may affect performance)")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timeRunning "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" startTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log('var timeRunning = '+timeRunning+'ms');")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("startTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This branch: executes for the first frame only.")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// it sets the startTime, then renders at currTime = 0.0")]),t._v("\n                    startTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeRunning "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FADE_DURATION")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This branch: renders every frame, other than the 1st frame,")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// with the new timeRunning value.")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeRunning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now we're done rendering one frame.")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// So we make a request to the browser to execute the next")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// animation frame, and the browser optimizes the rest.")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This happens very rapidly, as you can see in the console.log();")]),t._v("\n                window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eachFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// start the animation")]),t._v("\n            window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eachFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"cancelling-an-animation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cancelling-an-animation"}},[t._v("#")]),t._v(" Cancelling an Animation")]),t._v(" "),n("p",[t._v("To cancel a call to "),n("code",[t._v("requestAnimationFrame")]),t._v(", you need the id it returned from when it was last called.  This is the parameter you use for "),n("code",[t._v("cancelAnimationFrame")]),t._v(".  The following example starts some hypothetical animation then pauses it after one second.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stores the id returned from each call to requestAnimationFrame")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" requestId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// draw something")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("timestamp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do some animation")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// request next frame")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pauses the animation")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pause")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pass in the id returned from the last call to requestAnimationFrame")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelAnimationFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// begin the animation")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store the id returned from requestAnimationFrame")]),t._v("\n    requestId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("draw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// begin now")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after a second, pause the animation")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pause"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"keeping-compatability"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keeping-compatability"}},[t._v("#")]),t._v(" Keeping Compatability")]),t._v(" "),n("p",[t._v("Of course, just like most things in browser JavaScript, you just can't count on the fact that everything will be the same everywhere. In this case, "),n("code",[t._v("requestAnimationFrame")]),t._v(" might have a prefix on some platforms and are named differently, such as "),n("code",[t._v("webkitRequestAnimationFrame")]),t._v(". Fortunately, there's a really easy way to group all the known differences that could exist down to 1 function:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestAnimationFrame "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestAnimationFrame "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitRequestAnimationFrame "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozRequestAnimationFrame "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("Note that the last option (which fills in when no existing support was found) will not return an id to be used in "),n("code",[t._v("cancelAnimationFrame")]),t._v(". There is, however an "),n("a",{attrs:{href:"https://gist.github.com/paulirish/1579671",target:"_blank",rel:"noopener noreferrer"}},[t._v("efficient polyfill"),n("OutboundLink")],1),t._v(" that was written which fixes this.")]),t._v(" "),n("h4",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),n("ul",[n("li",[t._v("window.requestAnimationFrame("),n("strong",[t._v("callback")]),t._v(");")]),t._v(" "),n("li",[t._v("window.webkitRequestAnimationFrame("),n("strong",[t._v("callback")]),t._v(");")]),t._v(" "),n("li",[t._v("window.mozRequestAnimationFrame("),n("strong",[t._v("callback")]),t._v(");")])]),t._v(" "),n("h4",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Parameter")]),t._v(" "),n("th",[t._v("Details")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("callback")]),t._v(" "),n("td",[t._v('"A parameter specifying a function to call when it\'s time to update your animation for the next repaint." ('),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)"),n("OutboundLink")],1),t._v(")")])])])]),t._v(" "),n("h4",{attrs:{id:"remarks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),n("p",[t._v("When it comes to animating DOM elements fluidly, we are limited to the following CSS transitions:")]),t._v(" "),n("ul",[n("li",[t._v("POSITION - "),n("code",[t._v("transform: translate (npx, npx);")])]),t._v(" "),n("li",[t._v("SCALE - "),n("code",[t._v("transform: scale(n)")]),t._v(";")]),t._v(" "),n("li",[t._v("ROTATION - "),n("code",[t._v("transform: rotate(ndeg);")])]),t._v(" "),n("li",[t._v("OPACITY - "),n("code",[t._v("opacity: 0;")])])]),t._v(" "),n("p",[t._v("However, using these is no guarantee that your animations will be fluid, because it causes the browser to start new "),n("code",[t._v("paint")]),t._v(" cycles, regardless of what else is going on. Basically, "),n("code",[t._v("paint")]),t._v(' are made inefficiently and your animation looks "janky" because the frames per second (FPS) suffers.')]),t._v(" "),n("p",[n("strong",[t._v("To guarantee smooth-as-possible DOM animations, requestAnimationFrame must be used in conjunction with the above CSS transitions.")])]),t._v(" "),n("p",[t._v("The reason this works, is because the "),n("code",[t._v("requestAnimationFrame")]),t._v(" API lets the browser know that you want an animation to happen at the next "),n("code",[t._v("paint")]),t._v(" cycle, "),n("strong",[t._v("as opposed to interrupting what's going on to force a new paint cycle in when a non-RAF animation is called")]),t._v(".")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("References")]),t._v(" "),n("th",[t._v("URL")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("What is jank?")]),t._v(" "),n("td",[n("a",{attrs:{href:"http://jankfree.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jankfree.org/"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",[t._v("High Performance Animations")]),t._v(" "),n("td",[n("a",{attrs:{href:"http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("tr",[n("td",[t._v("R.A.I.L.")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail?hl=en"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",[t._v("Analyzing Critical Rendering Path")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp?hl=en"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",[t._v("Rendering Performance")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/rendering/?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/fundamentals/performance/rendering/?hl=en"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",[t._v("Analyzing Paint Times")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://developers.google.com/web/updates/2013/02/Profiling-Long-Paint-Times-with-DevTools-Continuous-Painting-Mode?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/updates/2013/02/Profiling-Long-Paint-Times-with-DevTools-Continuous-Painting-Mode?hl=en"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",[t._v("Identifying Paint Bottlenecks")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas?hl=en"),n("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);