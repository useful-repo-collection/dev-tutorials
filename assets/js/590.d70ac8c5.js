(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{935:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sequence-points"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequence-points"}},[t._v("#")]),t._v(" Sequence points")]),t._v(" "),a("h2",{attrs:{id:"unsequenced-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsequenced-expressions"}},[t._v("#")]),t._v(" Unsequenced expressions")]),t._v(" "),a("p",[t._v("The following expressions are "),a("strong",[t._v("unsequenced")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("In the above examples, the expression "),a("code",[t._v("a")]),t._v(" may be evaluated before or after the expression "),a("code",[t._v("b")]),t._v(", "),a("code",[t._v("b")]),t._v(" may be evaluated before "),a("code",[t._v("a")]),t._v(", or they may even be intermixed if they correspond to several instructions.")]),t._v(" "),a("p",[t._v("A similar rule holds for function calls:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Here not only "),a("code",[t._v("a")]),t._v(" and "),a("code",[t._v("b")]),t._v(" are unsequenced (i.e. the "),a("code",[t._v(",")]),t._v(" operator in a function call "),a("strong",[t._v("does not")]),t._v(" produce a sequence point) but also "),a("code",[t._v("f")]),t._v(", the expression that determines the function that is to be called.")]),t._v(" "),a("p",[t._v("Side effects may be applied immediately after evaluation or deferred until a later point.")]),t._v(" "),a("p",[t._v("Expressions like")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* the ',' in a function call is *not* the same as the comma operator */")]),t._v("\nx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("will yield "),a("strong",[t._v("undefined behavior")]),t._v(" because")]),t._v(" "),a("ul",[a("li",[t._v("a modification of an object and any other access to it must be sequenced")]),t._v(" "),a("li",[t._v("the order of evaluation and the order in which "),a("strong",[t._v("side effects")]),a("sup",[t._v("1")]),t._v(" are applied is not specified.")])]),t._v(" "),a("p",[a("sub",[t._v("1 Any changes in the state of the execution environment.")])]),t._v(" "),a("h2",{attrs:{id:"sequenced-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequenced-expressions"}},[t._v("#")]),t._v(" Sequenced expressions")]),t._v(" "),a("p",[t._v("The following expressions are "),a("strong",[t._v("sequenced")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" b\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" b\na "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" c\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("In all cases, the expression "),a("code",[t._v("a")]),t._v(" is fully evaluated and "),a("strong",[t._v("all side effects are applied")]),t._v(" before either "),a("code",[t._v("b")]),t._v(" or "),a("code",[t._v("c")]),t._v(" are evaluated.  In the fourth case, only one of "),a("code",[t._v("b")]),t._v(" or "),a("code",[t._v("c")]),t._v(" will be evaluated.  In the last case, "),a("code",[t._v("b")]),t._v(" is fully evaluated and all side effects are applied before "),a("code",[t._v("c")]),t._v(" is evaluated.")]),t._v(" "),a("p",[t._v("In all cases, the evaluation of expression "),a("code",[t._v("a")]),t._v(" is "),a("strong",[t._v("sequenced before")]),t._v(" the evaluations of "),a("code",[t._v("b")]),t._v(" or "),a("code",[t._v("c")]),t._v(" (alternately, the evaluations of "),a("code",[t._v("b")]),t._v(" and "),a("code",[t._v("c")]),t._v(" are "),a("strong",[t._v("sequenced after")]),t._v(" the evaluation of "),a("code",[t._v("a")]),t._v(").")]),t._v(" "),a("p",[t._v("Thus, expressions like")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\nx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("have well defined behavior.")]),t._v(" "),a("h2",{attrs:{id:"indeterminately-sequenced-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indeterminately-sequenced-expressions"}},[t._v("#")]),t._v(" Indeterminately sequenced expressions")]),t._v(" "),a("p",[t._v("Function calls as "),a("code",[t._v("f(a)")]),t._v(" always imply a sequence point between the evaluation of the arguments and the designator (here "),a("code",[t._v("f")]),t._v(" and "),a("code",[t._v("a")]),t._v(") and the actual call. If two such calls are unsequenced, the two function calls are indeterminately sequenced, that is, one is executed before the other, and order is unspecified.")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nunsingned "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("account")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" counter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"the order is %u %u\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("account")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("account")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("This implicit twofold modification of "),a("code",[t._v("counter")]),t._v(" during the evaluation of the "),a("code",[t._v("printf")]),t._v(" arguments is valid, we just don't know which of the calls comes first. As the order is unspecified, it may vary and cannot be depended on. So the printout could be:")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("the order is 0 1")]),t._v(" "),a("p",[t._v("or")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("the order is 1 0")]),t._v(" "),a("p",[t._v("The analogous statement to the above without intermediate function call")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n  printf("the order is %u %u\\n", counter++, counter++); // undefined behavior\n\n')])])]),a("p",[t._v("has undefined behavior because there is no sequence point between the two modifications of "),a("code",[t._v("counter")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[a("strong",[t._v("International Standard ISO/IEC 9899:201x Programming languages — C")])]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("Accessing a volatile object, modifying an object, modifying a file, or\ncalling a function that does any of those operations are all "),a("em",[t._v("side\neffects")]),t._v(", which are changes in the state of the execution environment.")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("The presence of a **sequence point** between the evaluation of expressions\nA and B implies that every value computation and side effect\nassociated with A is sequenced before every value computation and side\neffect associated with B.")]),t._v(" "),a("p",[t._v("Here is the complete list of sequence points from Annex C of the "),a("a",{attrs:{href:"http://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("online 2011 pre-publication draft"),a("OutboundLink")],1),t._v(" of the C language standard:")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[a("strong",[t._v("Sequence points")]),a("br"),a("br"),t._v("\n1     The following are the sequence points described in 5.1.2.3:"),a("br"),a("br"),t._v(" "),a("ul",[a("li",[t._v("Between the evaluations of the function designator and actual arguments in a function\ncall and the actual call. (6.5.2.2).\n")]),a("li",[t._v("Between the evaluations of the first and second operands of the following operators:\nlogical AND "),a("strong",[a("code",[t._v("&&")])]),t._v(" (6.5.13); logical OR "),a("strong",[a("code",[t._v("||")])]),t._v(" (6.5.14); comma "),a("strong",[a("code",[t._v(",")])]),t._v(" (6.5.17).\n")]),a("li",[t._v("Between the evaluations of the first operand of the conditional "),a("strong",[a("code",[t._v("? :")])]),t._v(" operator and\nwhichever of the second and third operands is evaluated (6.5.15).\n")]),a("li",[t._v("The end of a full declarator: declarators (6.7.6);\n")]),a("li",[t._v("Between the evaluation of a full expression and the next full expression to be\nevaluated. The following are full expressions: an initializer that is not part of a\ncompound literal (6.7.9); the expression in an expression statement (6.8.3); the\ncontrolling expression of a selection statement ("),a("strong",[a("code",[t._v("if")])]),t._v(" or "),a("strong",[a("code",[t._v("switch")])]),t._v(") (6.8.4); the\ncontrolling expression of a "),a("strong",[a("code",[t._v("while")])]),t._v(" or "),a("strong",[a("code",[t._v("do")])]),t._v(" statement (6.8.5); each of the (optional)\nexpressions of a "),a("strong",[a("code",[t._v("for")])]),t._v(" statement (6.8.5.3); the (optional) expression in a "),a("strong",[a("code",[t._v("return")])]),t._v("\nstatement (6.8.6.4).\n")]),a("li",[t._v("Immediately before a library function returns (7.1.4).\n")]),a("li",[t._v("After the actions associated with each formatted input/output function conversion\nspecifier (7.21.6, 7.29.2).\n")]),a("li",[t._v("Immediately before and immediately after each call to a comparison function, and\nalso between any call to a comparison function and any movement of the objects\npassed as arguments to that call (7.22.5).\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);