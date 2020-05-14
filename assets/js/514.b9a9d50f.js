(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{860:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"navigating-directories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigating-directories"}},[e._v("#")]),e._v(" Navigating directories")]),e._v(" "),a("h2",{attrs:{id:"absolute-vs-relative-directories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#absolute-vs-relative-directories"}},[e._v("#")]),e._v(" Absolute vs relative directories")]),e._v(" "),a("p",[e._v("To change to an absolutely specified directory, use the entire name, starting with a backslash "),a("code",[e._v("\\")]),e._v(", thus:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/username/project/abc\n\n")])])]),a("p",[e._v("If you want to change to a directory near your current on, you can specify a relative location. For example, if you are already in "),a("code",[e._v("/home/username/project")]),e._v(", you can enter the subdirectory "),a("code",[e._v("abc")]),e._v(" thus:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" abc\n\n")])])]),a("p",[e._v("If you want to go to the directory above the current directory, you can use the alias "),a("code",[e._v("..")]),e._v(". For example, if you were in "),a("code",[e._v("/home/username/project/abc")]),e._v(" and wanted to go to "),a("code",[e._v("/home/username/project")]),e._v(", then you would do the following:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n\n")])])]),a("p",[e._v('This may also be called going "up" a directory.')]),e._v(" "),a("h2",{attrs:{id:"change-to-the-last-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-to-the-last-directory"}},[e._v("#")]),e._v(" Change to the last directory")]),e._v(" "),a("p",[e._v("For the current shell, this takes you to the previous directory that you were in, no matter where it was.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" -\n\n")])])]),a("p",[e._v('Doing it multiple times effectively "toggles" you being in the current directory or the previous one.')]),e._v(" "),a("h2",{attrs:{id:"change-to-the-home-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-to-the-home-directory"}},[e._v("#")]),e._v(" Change to the home directory")]),e._v(" "),a("p",[e._v("The default directory is the home directory ("),a("code",[e._v("$HOME")]),e._v(", typically "),a("code",[e._v("/home/username")]),e._v("), so "),a("code",[e._v("cd")]),e._v(" without any directory takes you there")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v("\n\n")])])]),a("p",[e._v("Or you could be more explicit:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v(" \n\n")])])]),a("p",[e._v("A shortcut for the home directory is "),a("code",[e._v("~")]),e._v(", so that could be used as well.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~\n\n")])])]),a("h2",{attrs:{id:"change-to-the-directory-of-the-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-to-the-directory-of-the-script"}},[e._v("#")]),e._v(" Change to the Directory of the Script")]),e._v(" "),a("p",[e._v("In general, there are two types of Bash "),a("strong",[e._v("scripts")]),e._v(":")]),e._v(" "),a("ol",[a("li",[e._v("System tools which operate from the current working directory")]),e._v(" "),a("li",[e._v("Project tools which modify files relative to their own place in the files system")])]),e._v(" "),a("p",[e._v("For the second type of scripts, it is useful to change to the directory where the script is stored. This can be done with the following command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"$(dirname "'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("readlink -f "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$0")]),e._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v('"\n\n')])])]),a("p",[e._v("This command runs 3 commands:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v('readlink -f "$0"')]),e._v(" determines the path to the current script ("),a("code",[e._v("$0")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("dirname")]),e._v(" converts the path to script to the path to its directory")]),e._v(" "),a("li",[a("code",[e._v("cd")]),e._v(" changes the current work directory to the directory it receives from "),a("code",[e._v("dirname")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);