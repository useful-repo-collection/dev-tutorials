(window.webpackJsonp=window.webpackJsonp||[]).push([[1958],{2303:function(e,s,t){"use strict";t.r(s);var n=t(19),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mongo-as-shards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo-as-shards"}},[e._v("#")]),e._v(" Mongo as Shards")]),e._v(" "),t("h2",{attrs:{id:"sharding-environment-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sharding-environment-setup"}},[e._v("#")]),e._v(" Sharding Environment Setup")]),e._v(" "),t("p",[e._v("Sharding Group Members :")]),e._v(" "),t("p",[e._v("For sharding there are three players.")]),e._v(" "),t("li",[e._v("\nConfig Server\n")]),e._v(" "),t("li",[e._v("\nReplica Sets\n")]),e._v(" "),t("li",[e._v("\nMongos\nFor a mongo shard we need to setup the above three servers.\n")]),e._v(" "),t("p",[e._v("Config Server Setup :\nadd the following to mongod conf file")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("sharding"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n  clusterRole"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" configsvr\nreplication"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n  replSetName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("setname"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  \n\n")])])]),t("p",[t("strong",[e._v("run :")]),e._v(" mongod --config")]),e._v(" "),t("p",[t("strong",[e._v("we can choose config server as replica set or may be a standalone server. Based on our requirement we can choose the best. If config need to run in replica set we need to follow the replica set setup")])]),e._v(" "),t("p",[t("strong",[e._v("Replica Setup :")]),e._v("\nCreate replica set\n// Please refer the replica setup")]),e._v(" "),t("p",[t("strong",[e._v("MongoS Setup :")]),e._v("\nMongos is main setup in shard. Its is query router to access all replica sets")]),e._v(" "),t("p",[e._v("Add the following in mongos conf file")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n   sharding:\n      configDB: <configReplSetName>/cfg1.example.net:27017;\n\n")])])]),t("p",[e._v("Configure Shared :")]),e._v(" "),t("p",[e._v("Connect the mongos via shell (mongo --host  --port )")]),e._v(" "),t("ol",[t("li",[e._v('sh.addShard( "/s1-mongo1.example.net:27017")')]),e._v(" "),t("li",[e._v('sh.enableSharding("")')]),e._v(" "),t("li",[e._v('sh.shardCollection("< database >.< collection >", { < key > : < direction > } )')]),e._v(" "),t("li",[e._v("sh.status() // To ensure the sharding")])])])}),[],!1,null,null,null);s.default=a.exports}}]);