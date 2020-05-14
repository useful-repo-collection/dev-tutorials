(window.webpackJsonp=window.webpackJsonp||[]).push([[1610],{1956:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jshell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jshell"}},[t._v("#")]),t._v(" JShell")]),t._v(" "),a("p",[t._v("JShell is an interactive REPL for Java added in JDK 9. It allows developers to instantly evaluate expressions, test classes, and experiment with the Java language.\nEarly access for jdk 9 can be obtained from: "),a("a",{attrs:{href:"http://jdk.java.net/9/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jdk.java.net/9/"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"editting-snippets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editting-snippets"}},[t._v("#")]),t._v(" Editting Snippets")]),t._v(" "),a("p",[t._v("The basic unit of code used by JShell is the "),a("strong",[t._v("snippet")]),t._v(", or "),a("strong",[t._v("source entry")]),t._v(". Every time you declare a local variable or define a local method or class, you create a snippet whose name is the identifier of the variable/method/class. At any time, you can edit a snippet you have created with the "),a("code",[t._v("/edit")]),t._v(" command. For example, let's say I have created the class "),a("code",[t._v("Foo")]),t._v(" with a single, method, "),a("code",[t._v("bar")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Now, I want to fill in the body of my method. Rather than rewrite the entire class, I can edit it:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("edit "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v("\n\n")])])]),a("p",[t._v("By default, a swing editor will pop up with the most basic features possible. However you can change the editor that JShell uses:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("set editor emacs\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("set editor vi\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("set editor nano\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("set editor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n\n")])])]),a("p",[t._v("Note that if "),a("strong",[t._v("the new version of the snippet contains any syntax errors, it may not be saved.")]),t._v(" Likewise, a snippet is only created if the original declaration/definition is syntactically correct; the following does not work:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" st "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//error omitted")]),t._v("\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("edit st\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("No")]),t._v(" such snippet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" st\n\n")])])]),a("p",[t._v("However, snippets may be compiled and hence editable despite certain compile-time errors, such as mismatched types—the following works:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//error omitted")]),t._v("\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("edit i\n\n")])])]),a("p",[t._v("Finally, snippets may be deleted using the "),a("code",[t._v("/drop")]),t._v(" command:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("drop i\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  cannot find symbol\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    symbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   variable i\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n")])])]),a("p",[t._v("To delete all snippets, thereby reseting the state of the JVM, use "),a("code",[t._v("\\reset")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),t._v("\n\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("reset\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resetting")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" i\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  cannot find symbol\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    symbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   variable i\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  i\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\n\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" s\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  cannot find symbol\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    symbol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   variable s\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  s\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"entering-and-exiting-jshell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entering-and-exiting-jshell"}},[t._v("#")]),t._v(" Entering and Exiting JShell")]),t._v(" "),a("h3",{attrs:{id:"starting-jshell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-jshell"}},[t._v("#")]),t._v(" Starting JShell")]),t._v(" "),a("p",[t._v("Before trying to start JShell, make sure your "),a("code",[t._v("JAVA_HOME")]),t._v(" environment variable points to a JDK 9 installation. To start JShell, run the following command:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("$ jshell\n\n")])])]),a("p",[t._v("If all goes well, you should see a "),a("code",[t._v("jshell>")]),t._v(" prompt.")]),t._v(" "),a("h3",{attrs:{id:"exiting-jshell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exiting-jshell"}},[t._v("#")]),t._v(" Exiting JShell")]),t._v(" "),a("p",[t._v("To exit JShell, run the following command from the JShell prompt:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("exit\n\n")])])]),a("h2",{attrs:{id:"expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expressions"}},[t._v("#")]),t._v(" Expressions")]),t._v(" "),a("p",[t._v("Within JShell, you can evaluate Java expressions, with or without semicolons. These can range from basic expressions and statements to more complex ones:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am %d years old.\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("421")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Loops and conditionals are fine, too:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("It is important to note that "),a("strong",[t._v("expressions within blocks must have semicolons!")])]),t._v(" "),a("h2",{attrs:{id:"methods-and-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-and-classes"}},[t._v("#")]),t._v(" Methods and Classes")]),t._v(" "),a("p",[t._v("You can define methods and classes within JShell:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("speak")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doNothing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("No access modifiers are necessary. As with other blocks, semicolons are required inside of method bodies. Keep in mind that, as with variables, it is possible to redefine methods and classes. To see a list of methods or classes, enter "),a("code",[t._v("/methods")]),t._v(" or "),a("code",[t._v("/types")]),t._v(" at the JShell prompt, respectively.")]),t._v(" "),a("h2",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),a("p",[t._v("You can declare local variables within JShell:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),t._v("\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n\n")])])]),a("p",[t._v("Keep in mind that variables can be redeclared with different types; this is perfectly valid in JShell:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("jshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),t._v("\njshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n")])])]),a("p",[t._v("To see a list of variables, enter "),a("code",[t._v("/vars")]),t._v(" at the JShell prompt.")]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("ul",[a("li",[t._v("$ jshell — Start the JShell REPL")]),t._v(" "),a("li",[t._v("jshell> /"),a("command",[t._v(" — Run a given JShell command")])],1),t._v(" "),a("li",[t._v("jshell> /exit — Exit JShell")]),t._v(" "),a("li",[t._v("jshell> /help — See a list of JShell commands")]),t._v(" "),a("li",[t._v("jshell> <java_expression> - Evaluate the given Java expression (semicolon optional)")]),t._v(" "),a("li",[t._v("jshell> /vars OR /methods OR /types — See a list of variables, methods, or classes, respectively.")]),t._v(" "),a("li",[t._v("jshell> /open "),a("file",[t._v(" — read a file as input to the shell")])],1),t._v(" "),a("li",[t._v("jshell> /edit "),a("identifier",[t._v(" — edit a snippet in the set editor")])],1),t._v(" "),a("li",[t._v("jshell> /set editor "),a("command",[t._v(" — set the command to be used to edit snippets using /edit")])],1),t._v(" "),a("li",[t._v("jshell> /drop "),a("identifier",[t._v(" — delete a snippet")])],1),t._v(" "),a("li",[t._v("jshell> /reset — Reset the JVM and delete all snippets")])]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("JShell requires the Java 9 JDK, which can currently (March 2017) be downloaded as early access snapshots from "),a("a",{attrs:{href:"http://jdk9.java.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("jdk9.java.net"),a("OutboundLink")],1),t._v(". If, when you try to run the "),a("code",[t._v("jshell")]),t._v(" command, you get an error beginning with "),a("code",[t._v("Unable to locate an executable")]),t._v(", make sure "),a("code",[t._v("JAVA_HOME")]),t._v(" is set correctly.")]),t._v(" "),a("h3",{attrs:{id:"default-imports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-imports"}},[t._v("#")]),t._v(" Default Imports")]),t._v(" "),a("p",[t._v("The following packages are imported automatically when JShell starts:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concurrent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("regex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);