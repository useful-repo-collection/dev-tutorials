(window.webpackJsonp=window.webpackJsonp||[]).push([[3128],{3474:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"activerecord-locking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activerecord-locking"}},[t._v("#")]),t._v(" ActiveRecord Locking")]),t._v(" "),a("h2",{attrs:{id:"optimistic-locking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimistic-locking"}},[t._v("#")]),t._v(" Optimistic Locking")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("user_one "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuser_two "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuser_one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),t._v("\nuser_one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run at the same instance ")]),t._v("\nuser_two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doe"')]),t._v("\nuser_two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Raises a ActiveRecord::StaleObjectError")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"pessimistic-locking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pessimistic-locking"}},[t._v("#")]),t._v(" Pessimistic Locking")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("appointment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Appointment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nappointment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lock"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#no other users can read this appointment, ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#they have to wait until the lock is released")]),t._v("\nappointment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#lock is released, other users can read this account")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);