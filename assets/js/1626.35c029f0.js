(window.webpackJsonp=window.webpackJsonp||[]).push([[1626],{1972:function(e,a,t){"use strict";t.r(a);var s=t(19),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" Modules")]),e._v(" "),t("h2",{attrs:{id:"defining-a-basic-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-basic-module"}},[e._v("#")]),e._v(" Defining a basic module")]),e._v(" "),t("p",[e._v("Modules are defined in a file named "),t("code",[e._v("module-info.java")]),e._v(", named a module descriptor. It should be placed in the source-code root:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n|-- module-info.java\n |-- com\n     |-- example\n         |-- foo\n             |-- Foo.java\n         |-- bar\n             |-- Bar.java\n\n")])])]),t("p",[e._v("Here is a simple module descriptor:")]),e._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("module")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("requires")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("httpclient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("exports")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),t("p",[e._v("The module name should be unique and it is recommended that you use the same "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Reverse_domain_name_notation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reverse-DNS naming notation"),t("OutboundLink")],1),e._v(" as used by packages to help ensure this.")]),e._v(" "),t("p",[e._v("The module "),t("code",[e._v("java.base")]),e._v(", which contains Java's basic classes, is implicitly visible to any module and does not need to be included.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("requires")]),e._v(" declaration allows us to use other modules, in the example the module "),t("code",[e._v("java.httpclient")]),e._v(" is imported.")]),e._v(" "),t("p",[e._v("A module can also specify which packages it "),t("code",[e._v("exports")]),e._v(" and therefore makes it visible to other modules.")]),e._v(" "),t("p",[e._v("The package "),t("code",[e._v("com.example.foo")]),e._v(" declared in the "),t("code",[e._v("exports")]),e._v(" clause will be visible to other modules. Any sub-packages of "),t("code",[e._v("com.example.foo")]),e._v(" will not be exported, they need their own "),t("code",[e._v("export")]),e._v(" declarations.")]),e._v(" "),t("p",[e._v("Conversely, "),t("code",[e._v("com.example.bar")]),e._v(" which is not listed in "),t("code",[e._v("exports")]),e._v(" clauses will not be visible to other modules.")]),e._v(" "),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("ul",[t("li",[e._v("requires java.xml;")]),e._v(" "),t("li",[e._v("requires public java.xml; # exposes module to dependents for use")]),e._v(" "),t("li",[e._v("exports com.example.foo; # dependents can use public types in this package")]),e._v(" "),t("li",[e._v("exports com.example.foo.impl to com.example.bar; # restrict usage to a module")])]),e._v(" "),t("h4",{attrs:{id:"remarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),t("p",[e._v("The use of modules is encouraged but not required, this allows existing code to continue working in Java 9. It also allows for a gradual transition to modular code.")]),e._v(" "),t("p",[e._v("Any non-modular code is put in an "),t("strong",[e._v("unnamed module")]),e._v(" when it is compiled. This is a special module that is able to use types from all other modules but "),t("strong",[e._v("only from packages which have an "),t("code",[e._v("exports")]),e._v(" declaration")]),e._v(".")]),e._v(" "),t("p",[e._v("All packages in the "),t("strong",[e._v("unnamed module")]),e._v(" are exported automatically.")]),e._v(" "),t("p",[e._v("Keywords, e.g. "),t("code",[e._v("module")]),e._v(" etc..., are restricted in use within the module declaration but can be continue to be used as identifiers elsewhere.")])])}),[],!1,null,null,null);a.default=o.exports}}]);