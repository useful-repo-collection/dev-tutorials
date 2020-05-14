(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{870:function(a,s,t){"use strict";t.r(s);var e=t(19),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"read-a-file-data-stream-variable-line-by-line-and-or-field-by-field"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-a-file-data-stream-variable-line-by-line-and-or-field-by-field"}},[a._v("#")]),a._v(" Read a file (data stream, variable) line-by-line (and/or field-by-field)?")]),a._v(" "),t("h2",{attrs:{id:"looping-through-a-file-line-by-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#looping-through-a-file-line-by-line"}},[a._v("#")]),a._v(" Looping through a file line by line")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file\n\n")])])]),t("p",[a._v("If file may not include a newline at the end, then:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r line "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file\n\n")])])]),t("h2",{attrs:{id:"looping-through-the-output-of-a-command-field-by-field"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#looping-through-the-output-of-a-command-field-by-field"}},[a._v("#")]),a._v(" Looping through the output of a command field by field")]),a._v(" "),t("p",[a._v("Let's assume that the field separator is "),t("code",[a._v(":")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" -r field "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"**'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('**"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" google.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),t("p",[a._v("Or with a pipe:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" google.com "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" -r field "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"**'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('**"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"read-lines-of-a-file-into-an-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-lines-of-a-file-into-an-array"}},[a._v("#")]),a._v(" Read lines of a file into an array")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("readarray")]),a._v(" -t arr "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file\n\n")])])]),t("p",[a._v("Or with a loop:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file\n\n")])])]),t("h2",{attrs:{id:"read-lines-of-a-string-into-an-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-lines-of-a-string-into-an-array"}},[a._v("#")]),a._v(" Read lines of a string into an array")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'line 1\nline 2\nline3'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("readarray")]),a._v(" -t arr "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v('"')]),a._v("\n\n")])])]),t("p",[a._v("or with a loop:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v('"')]),a._v("\n\n")])])]),t("h2",{attrs:{id:"looping-through-a-string-line-by-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#looping-through-a-string-line-by-line"}},[a._v("#")]),a._v(" Looping through a string line by line")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'line 1\nline 2\nline3'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v('-"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v('"')]),a._v("\n\n")])])]),t("p",[a._v("or")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("readarray")]),a._v(" -t arr "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("i")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("}")]),a._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),a._v('-"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"looping-through-the-output-of-a-command-line-by-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#looping-through-the-output-of-a-command-line-by-line"}},[a._v("#")]),a._v(" Looping through the output of a command line by line")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"**'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v('**"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" google.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])]),t("p",[a._v("or with a pipe:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" google.com "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"**'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v('**"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"read-a-file-field-by-field"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-a-file-field-by-field"}},[a._v("#")]),a._v(" Read a file field by field")]),a._v(" "),t("p",[a._v("Let's assume that the field separator is "),t("code",[a._v(":")]),a._v(" (colon) in the file "),t("strong",[a._v("file")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" -r field "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file\n\n")])])]),t("p",[a._v("For a content:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("first "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" se\ncon\nd:\n    Thi rd:\n    Fourth\n\n")])])]),t("p",[a._v("The output is:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("**first **\n** se\ncon\nd**\n**\n    Thi rd**\n**\n    Fourth\n**\n\n")])])]),t("h2",{attrs:{id:"read-a-string-field-by-field"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-a-string-field-by-field"}},[a._v("#")]),a._v(" Read a string field by field")]),a._v(" "),t("p",[a._v("Let's assume that the field separator is "),t("code",[a._v(":")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'line: 1\nline: 2\nline3'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" -r field "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('-"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v('"')]),a._v("\n\n")])])]),t("p",[a._v("Output:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("-line-\n- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nline-\n- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nline3\n-\n\n")])])]),t("h2",{attrs:{id:"read-fields-of-a-file-into-an-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-fields-of-a-file-into-an-array"}},[a._v("#")]),a._v(" Read fields of a file into an array")]),a._v(" "),t("p",[a._v("Let's assume that the field separator is "),t("code",[a._v(":")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" -r field "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file\n\n")])])]),t("h2",{attrs:{id:"read-fields-of-a-string-into-an-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-fields-of-a-string-into-an-array"}},[a._v("#")]),a._v(" Read fields of a string into an array")]),a._v(" "),t("p",[a._v("Let's assume that the field separator is "),t("code",[a._v(":")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'1:2:3:4:\nnewline'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" -r field "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$field")]),a._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("}")]),a._v('"')]),a._v("\n\n")])])]),t("p",[a._v("Output:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("newline\n\n")])])]),t("h2",{attrs:{id:"reads-file-etc-passwd-line-by-line-and-field-by-field"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reads-file-etc-passwd-line-by-line-and-field-by-field"}},[a._v("#")]),a._v(" Reads file (/etc/passwd) line by line and field by field")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FILENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/passwd"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(": "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r username password userid groupid comment homedir cmdshell\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$username")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$userid")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$comment")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$homedir")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$FILENAME")]),a._v("\n\n")])])]),t("p",[a._v("In unix password file, user information is stored line by line, each line consisting of information for a user separated by colon (😃 character. In this example while reading the file line by line, the line is also split into fields using colon character as delimiter which is indicated by the value given for IFS.")]),a._v(" "),t("p",[t("strong",[a._v("Sample input")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/bash\npulse:x:497:495:PulseAudio System Daemon:/var/run/pulse:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\ntomcat:x:91:91:Apache Tomcat:/usr/share/tomcat6:/sbin/nologin\nwebalizer:x:67:67:Webalizer:/var/www/usage:/sbin/nologin\n\n")])])]),t("p",[t("strong",[a._v("Sample Output")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mysql, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("27")]),a._v(", MySQL Server /var/lib/mysql\npulse, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("497")]),a._v(", PulseAudio System Daemon /var/run/pulse\nsshd, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("74")]),a._v(", Privilege-separated SSH /var/empty/sshd\ntomcat, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("91")]),a._v(", Apache Tomcat /usr/share/tomcat6\nwebalizer, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("67")]),a._v(", Webalizer /var/www/usage\n\n")])])]),t("p",[a._v("To read line by line and have the entire line assigned to variable, following is a modified version of the example. Note that we have only one variable by name line mentioned here.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FILENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/passwd"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("IFS")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" -r line\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$line")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$FILENAME")]),a._v("\n\n")])])]),t("p",[t("strong",[a._v("Sample Input")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/bash\npulse:x:497:495:PulseAudio System Daemon:/var/run/pulse:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\ntomcat:x:91:91:Apache Tomcat:/usr/share/tomcat6:/sbin/nologin\nwebalizer:x:67:67:Webalizer:/var/www/usage:/sbin/nologin\n\n")])])]),t("p",[t("strong",[a._v("Sample Output")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/bash\npulse:x:497:495:PulseAudio System Daemon:/var/run/pulse:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\ntomcat:x:91:91:Apache Tomcat:/usr/share/tomcat6:/sbin/nologin\nwebalizer:x:67:67:Webalizer:/var/www/usage:/sbin/nologin\n\n")])])]),t("h4",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Parameter")]),a._v(" "),t("th",[a._v("Details")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("IFS")]),a._v(" "),t("td",[a._v("Internal field separator")])]),a._v(" "),t("tr",[t("td",[a._v("file")]),a._v(" "),t("td",[a._v("A file name/path")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("-r")])]),a._v(" "),t("td",[a._v("Prevents backslash interpretation when used with read")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("-t")])]),a._v(" "),t("td",[a._v("Removes a trailing newline from each line read by "),t("code",[a._v("readarray")])])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("-d DELIM")])]),a._v(" "),t("td",[a._v("Continue until the first character of DELIM is read (with "),t("code",[a._v("read")]),a._v("), rather than newline")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);