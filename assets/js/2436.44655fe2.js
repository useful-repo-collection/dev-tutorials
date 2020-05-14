(window.webpackJsonp=window.webpackJsonp||[]).push([[2436],{2782:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"contributing-to-the-php-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing-to-the-php-core"}},[e._v("#")]),e._v(" Contributing to the PHP Core")]),e._v(" "),a("h2",{attrs:{id:"setting-up-a-basic-development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-basic-development-environment"}},[e._v("#")]),e._v(" Setting up a basic development environment")]),e._v(" "),a("p",[e._v("PHP's source code is hosted on "),a("a",{attrs:{href:"https://github.com/php/php-src",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(". To build from source you will first need to check out a working copy of the code.")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[e._v("mkdir "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("\ncd "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("\ngit "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("clone")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("b "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("PHP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//github.com/php/php-src .")]),e._v("\n\n")])])]),a("p",[e._v("If you want to add a feature, it's best to create your own branch.")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[e._v("git checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("b my_private_branch\n\n")])])]),a("p",[e._v("Finally, configure and build PHP")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("buildconf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("configure\nmake\nmake test\nmake install\n\n")])])]),a("p",[e._v("If configuration fails due to missing dependencies, you will need to use your operating system's package management system to install them (e.g. "),a("code",[e._v("yum")]),e._v(", "),a("code",[e._v("apt")]),e._v(", etc.) or download and compile them from source.")]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("PHP is an open source project, and as such, anyone is able to contribute to it. Broadly speaking, there are two ways to contribute to the PHP core:")]),e._v(" "),a("ul",[a("li",[e._v("Bug fixing")]),e._v(" "),a("li",[e._v("Feature additions")])]),e._v(" "),a("p",[e._v("Before contributing, however, it is important to understand how PHP versions are managed and released so that bug fixes and feature requests can target the correct PHP version. The developed changes can be submitted as a pull request to the "),a("a",{attrs:{href:"https://github.com/php/php-src#pull-requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP Github repository"),a("OutboundLink")],1),e._v(". Useful information for developers can be found on the "),a("a",{attrs:{href:"https://secure.php.net/get-involved.php",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Get Involved" section of the PHP.net site'),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://externals.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("#externals forum"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"contributing-with-bug-fixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing-with-bug-fixes"}},[e._v("#")]),e._v(" Contributing with Bug Fixes")]),e._v(" "),a("p",[e._v("For those looking to begin contributing to the core, it's generally easier to start with bug fixing. This helps to gain familiarity with PHP's internals before attempting to make more complex modifications to the core that a feature would require.")]),e._v(" "),a("p",[e._v("With respect to the version management process, bug fixes should target the lowest affected, "),a("strong",[e._v("whilst still supported")]),e._v(" PHP version. It's this version that bug fixing pull requests should target. From there, an internals member can merge the fix into the correct branch and then merge it upwards to later PHP versions as necessary.")]),e._v(" "),a("p",[e._v("For those looking to get started on resolving bugs, a list of bug reports can be found at "),a("a",{attrs:{href:"http://bugs.php.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("bugs.php.net"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"contributing-with-feature-additions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing-with-feature-additions"}},[e._v("#")]),e._v(" Contributing with Feature Additions")]),e._v(" "),a("p",[e._v("PHP follows an RFC process when introducing new features and making important changes to the language. RFCs are voted on by members of php.net, and must achieve either a simple majority (50% + 1) or a super majority (2/3 + 1) of the total votes. A super majority is required if the change affects the language itself (such as introducing a new syntax), otherwise only a simple majority is required.")]),e._v(" "),a("p",[e._v("Before RFCs can be put to vote, they must undergo a discussion period of at least 2 weeks on the official PHP mailing list. Once this period has finished, and there are no open issues with the RFC, it can then be moved into voting, which must last at least 1 week.")]),e._v(" "),a("p",[e._v("If a user would like to revive a previously rejected RFC, then they can do so only under one of the following two circumstances:")]),e._v(" "),a("ul",[a("li",[e._v("6 months has passed from the previous vote")]),e._v(" "),a("li",[e._v("The author(s) make substantial enough changes to the RFC that would likely affect the outcome of the vote should the RFC be put to vote again.")])]),e._v(" "),a("p",[e._v("The people who have the privilege to vote will either be contributors to PHP itself (and so have php.net accounts), or be representatives of the PHP community. These representatives are chosen by those with php.net accounts, and will either be lead developers of PHP-based projects or regular participants to internals discussions.")]),e._v(" "),a("p",[e._v("When submitting new ideas for proposal, it is almost always required for the proposer to write, at the very least, a proof-of-concept patch. This is because without an implementation, the suggestion simply becomes another feature request that is unlikely to be fulfilled in the near future.")]),e._v(" "),a("p",[e._v("A thorough how-to of this process can be found at the official "),a("a",{attrs:{href:"https://wiki.php.net/rfc/howto",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Create an RFC"),a("OutboundLink")],1),e._v(" page.")]),e._v(" "),a("h3",{attrs:{id:"releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#releases"}},[e._v("#")]),e._v(" Releases")]),e._v(" "),a("p",[e._v("Major PHP versions have no set release cycle, and so they may be released at the discretion of the internals team (whenever they see fit for a new major release). Minor versions, on the other hand, are released annually.")]),e._v(" "),a("p",[e._v("Prior to every release in PHP (major, minor, or patch), a series of release candidates (RCs) are made available. PHP does not use an RC as other projects do (i.e. if an RC has not problems found with it, then make it as the next final release). Instead, it uses them as a form of final betas, where typically a set number of RCs are decided before the final release is made.")]),e._v(" "),a("h3",{attrs:{id:"versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[e._v("#")]),e._v(" Versioning")]),e._v(" "),a("p",[e._v("PHP generally attempts to follow semantic versioning where possible. As such, backwards compatibility (BC) should be maintained in minor and patch versions of the language. Features and changes that preserve BC should target minor versions (not patch versions). If a feature or change has the potential to break BC, then they should aim to target the next major PHP version ("),a("strong",[e._v("X")]),e._v(".y.z) instead.")]),e._v(" "),a("p",[e._v("Each minor PHP version (x."),a("strong",[e._v("Y")]),e._v('.z) has two years of general support (so-called "active support") for all types of bug fixes. An additional year on top of that is added for security support, where only security-related fixes are applied. After the three years is up, support for that version of PHP is dropped completely. A list of '),a("a",{attrs:{href:"http://php.net/supported-versions.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("currently supported PHP versions can be found at php.net"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);