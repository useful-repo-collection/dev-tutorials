(window.webpackJsonp=window.webpackJsonp||[]).push([[3110],{3454:function(t,e,r){"use strict";r.r(e);var a=r(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"special-constants-in-ruby"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#special-constants-in-ruby"}},[t._v("#")]),t._v(" Special Constants in Ruby")]),t._v(" "),r("h2",{attrs:{id:"file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[t._v("#")]),t._v(" "),r("strong",[t._v("FILE")])]),t._v(" "),r("p",[t._v("Is the relative path to the file from the current execution directory"),r("br"),t._v("\nAssume we have this directory structure: /home/stackoverflow/script.rb"),r("br"),t._v("\nscript.rb contains:")]),t._v(" "),r("div",{staticClass:"language-ruby extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ruby"}},[r("code",[t._v("puts __FILE__\n\n")])])]),r("p",[t._v("If you are inside /home/stackoverflow and execute the script like "),r("code",[t._v("ruby script.rb")]),t._v(" then  "),r("code",[t._v("__FILE__")]),t._v(" will output "),r("code",[t._v("script.rb")]),t._v("\nIf you are inside /home then it will output "),r("code",[t._v("stackoverflow/script.rb")])]),t._v(" "),r("p",[t._v("Very useful to get the path of the script in versions prior to 2.0 where "),r("code",[t._v("__dir__")]),t._v(" doesn't exist.")]),t._v(" "),r("p",[r("strong",[t._v("Note")]),t._v(" "),r("code",[t._v("__FILE__")]),t._v(" is not equal to "),r("code",[t._v("__dir__")])]),t._v(" "),r("h2",{attrs:{id:"dir"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dir"}},[t._v("#")]),t._v(" "),r("strong",[t._v("dir")])]),t._v(" "),r("p",[r("code",[t._v("__dir__")]),t._v(" is not a constant but a function"),r("br"),t._v(" "),r("code",[t._v("__dir__")]),t._v(" is equal to "),r("code",[t._v("File.dirname(File.realpath(__FILE__))")])]),t._v(" "),r("h2",{attrs:{id:"program-name-or-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#program-name-or-0"}},[t._v("#")]),t._v(" $PROGRAM_NAME or $0")]),t._v(" "),r("p",[t._v("Contains the name of the script being executed."),r("br"),t._v("\nIs the same as "),r("code",[t._v("__FILE__")]),t._v(" if you are executing that script.")]),t._v(" "),r("h2",{attrs:{id:""}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" $$")]),t._v(" "),r("p",[t._v("The process number of the Ruby running this script")]),t._v(" "),r("h2",{attrs:{id:"_1-2-etc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-etc"}},[t._v("#")]),t._v(" $1, $2, etc")]),t._v(" "),r("p",[t._v("Contains the subpattern from the corresponding set of parentheses in the last successful pattern matched, not counting patterns matched in nested blocks that have been exited already, or nil if the last pattern match failed. These variables are all read-only.")]),t._v(" "),r("h2",{attrs:{id:"argv-or"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#argv-or"}},[t._v("#")]),t._v(" ARGV or $*")]),t._v(" "),r("p",[t._v("Command line arguments given for the script. The options for Ruby interpreter are already removed.")]),t._v(" "),r("h2",{attrs:{id:"stdin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stdin"}},[t._v("#")]),t._v(" STDIN")]),t._v(" "),r("p",[t._v("The standard input. The default value for $stdin")]),t._v(" "),r("h2",{attrs:{id:"stdout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stdout"}},[t._v("#")]),t._v(" STDOUT")]),t._v(" "),r("p",[t._v("The standard output. The default value for $stdout")]),t._v(" "),r("h2",{attrs:{id:"stderr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stderr"}},[t._v("#")]),t._v(" STDERR")]),t._v(" "),r("p",[t._v("The standard error output. The default value for $stderr")]),t._v(" "),r("h2",{attrs:{id:"stderr-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stderr-2"}},[t._v("#")]),t._v(" $stderr")]),t._v(" "),r("p",[t._v("The current standard error output.")]),t._v(" "),r("h2",{attrs:{id:"stdout-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stdout-2"}},[t._v("#")]),t._v(" $stdout")]),t._v(" "),r("p",[t._v("The current standard output")]),t._v(" "),r("h2",{attrs:{id:"stdin-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stdin-2"}},[t._v("#")]),t._v(" $stdin")]),t._v(" "),r("p",[t._v("The current standard input")]),t._v(" "),r("h2",{attrs:{id:"env"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" ENV")]),t._v(" "),r("p",[t._v("The hash-like object contains current environment variables. Setting a value in ENV changes the environment for child processes.")])])}),[],!1,null,null,null);e.default=s.exports}}]);