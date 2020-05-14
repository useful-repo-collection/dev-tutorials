(window.webpackJsonp=window.webpackJsonp||[]).push([[2200],{2546:function(e,a,o){"use strict";o.r(a);var t=o(19),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"how-modules-are-loaded"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-modules-are-loaded"}},[e._v("#")]),e._v(" How modules are loaded")]),e._v(" "),o("h2",{attrs:{id:"global-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#global-mode"}},[e._v("#")]),e._v(" Global Mode")]),e._v(" "),o("p",[e._v("If you installed Node using the default directory, while in the global mode, NPM installs packages into "),o("code",[e._v("/usr/local/lib/node_modules")]),e._v(". If you type the following in the shell, NPM will search for, download, and install the latest version of the package named sax inside the directory "),o("code",[e._v("/usr/local/lib/node_modules/express")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[e._v("$ npm install "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("g express\n\n")])])]),o("p",[e._v("Make sure that you have sufficient access rights to the folder. These modules will be available for all node process which will be running in that machine")]),e._v(" "),o("p",[e._v("In local mode installation. Npm will down load and install modules in the current working folders by creating a new folder called "),o("code",[e._v("node_modules")]),e._v(" for example if you are in "),o("code",[e._v("/home/user/apps/my_app")]),e._v(" a new folder will be created called "),o("code",[e._v("node_modules")]),e._v(" "),o("code",[e._v("/home/user/apps/my_app/node_modules")]),e._v(" if its not already exist")]),e._v(" "),o("h2",{attrs:{id:"loading-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#loading-modules"}},[e._v("#")]),e._v(" Loading modules")]),e._v(" "),o("p",[e._v("When we refer the module in the code, node first looks up the "),o("code",[e._v("node_module")]),e._v(" folder inside the referenced folder in required statement\nIf the module name is not relative and is not a core module, Node will try to find it inside the "),o("code",[e._v("node_modules")]),e._v(" folder in the current directory.\nFor instance, if you do the following, Node will try to look for the file "),o("code",[e._v("./node_modules/myModule.js")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" myModule "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'myModule.js'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),o("p",[e._v("If Node fails to find the file, it will look inside the parent folder called "),o("code",[e._v("../node_modules/myModule.js")]),e._v(". If it fails again, it will try the parent folder and keep descending until it reaches the root or finds the required module.")]),e._v(" "),o("p",[e._v("You can also omit the "),o("code",[e._v(".js")]),e._v(" extension if you like to, in which case node will append the "),o("code",[e._v(".js")]),e._v(" extension and will search for the file.")]),e._v(" "),o("h3",{attrs:{id:"loading-a-folder-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#loading-a-folder-module"}},[e._v("#")]),e._v(" Loading a Folder Module")]),e._v(" "),o("p",[e._v("You can use the path for a folder to load a module like this:")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" myModule "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./myModuleDir'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),o("p",[e._v("If you do so, Node will search inside that folder. Node will presume this folder is a package and will try to look for a package definition. That package definition should be a file named "),o("code",[e._v("package.json")]),e._v(".\nIf that folder does not contain a package definition file named "),o("code",[e._v("package.json")]),e._v(", the package entry point will assume the default value of "),o("code",[e._v("index.js")]),e._v(", and Node will look, in this case, for a file under the path "),o("code",[e._v("./myModuleDir/index.js")]),e._v(".")]),e._v(" "),o("p",[e._v("The last resort if module is not found in any of the folders is the global module  installation folder.")])])}),[],!1,null,null,null);a.default=s.exports}}]);