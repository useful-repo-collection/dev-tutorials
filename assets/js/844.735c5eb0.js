(window.webpackJsonp=window.webpackJsonp||[]).push([[844],{1190:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iterators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterators"}},[t._v("#")]),t._v(" Iterators")]),t._v(" "),a("h2",{attrs:{id:"creating-iterators-using-yield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-iterators-using-yield"}},[t._v("#")]),t._v(" Creating Iterators Using Yield")]),t._v(" "),a("p",[t._v("Iterators "),a("strong",[t._v("produce")]),t._v(" enumerators. In C#, enumerators are produced by defining methods, properties or indexers that contain "),a("code",[t._v("yield")]),t._v(" statements.")]),t._v(" "),a("p",[t._v("Most methods will return control to their caller through normal "),a("code",[t._v("return")]),t._v(" statements, which disposes all state local to that method. In contrast, methods that use "),a("code",[t._v("yield")]),t._v(" statements allow them to return multiple values to the caller on request while "),a("strong",[t._v("preserving")]),t._v(" local state in-between returning those values. These returned values constitute a sequence. There are two types of "),a("code",[t._v("yield")]),t._v(" statements used within iterators:")]),t._v(" "),a("li",[t._v("\n`yield return`, which returns control to the caller but preserves state. The callee will continue execution from this line when control is passed back to it.\n")]),t._v(" "),a("li",[t._v("\n`yield break`, which functions similarly to a normal `return` statement - this signifies the end of the sequence. Normal `return` statements themselves are illegal within an iterator block.\n")]),t._v(" "),a("p",[t._v("This example below demonstrates an iterator method that can be used to generate the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fibonacci_number",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fibonacci sequence"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("IEnumerable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fibonacci")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" curr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        curr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("This iterator can then be used to produce an enumerator of the Fibonacci sequence that can be consumed by a calling method. The code below demonstrates how the first ten terms within the Fibonacci sequence can be enumerated:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" term "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fibonacci")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("term"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("34")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"simple-numeric-iterator-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-numeric-iterator-example"}},[t._v("#")]),t._v(" Simple Numeric Iterator Example")]),t._v(" "),a("p",[t._v("A common use-case for iterators is to perform some operation over a collection of numbers. The example below demonstrates how each element within an array of numbers can be individually printed out to the console.")]),t._v(" "),a("p",[t._v("This is possible because arrays implement the "),a("code",[t._v("IEnumerable")]),t._v(" interface, allowing clients to obtain an iterator for the array using the "),a("code",[t._v("GetEnumerator()")]),t._v(" method. This method returns an "),a("strong",[t._v("enumerator")]),t._v(", which is a read-only, forward-only cursor over each number in the array.")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEnumerator")]),t._v(" iterator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetEnumerator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MoveNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n")])])]),a("p",[t._v("It's also possible to achieve the same results using a "),a("code",[t._v("foreach")]),t._v(" statement:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("An iterator is a method, get accessor, or operator that performs a custom iteration over an array or collection class by using the yield keyword")])])}),[],!1,null,null,null);s.default=n.exports}}]);