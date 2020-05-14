(window.webpackJsonp=window.webpackJsonp||[]).push([[2117],{2463:function(s,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"install-mysql-container-with-docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-mysql-container-with-docker-compose"}},[s._v("#")]),s._v(" Install Mysql container with Docker-Compose")]),s._v(" "),e("h2",{attrs:{id:"simple-example-with-docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-example-with-docker-compose"}},[s._v("#")]),s._v(" Simple example with docker-compose")]),s._v(" "),e("p",[s._v("This is an simple example to create a mysql server with docker")]),s._v(" "),e("p",[s._v("1.- create "),e("strong",[s._v("docker-compose.yml")]),s._v(":")]),s._v(" "),e("p",[e("strong",[s._v("Note:")]),s._v(" If you want to use same container for all your projects, you should create a PATH in your HOME_PATH. If you want to create it for every project you could create a "),e("strong",[s._v("docker")]),s._v(" directory in your project.")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("version: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\nservices:\n  cabin_db:\n    image: mysql:latest\n    volumes:\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./.mysql-data/db:/var/lib/mysql"')]),s._v("\n    restart: always\n    ports:\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n    environment:\n      MYSQL_ROOT_PASSWORD: rootpw\n      MYSQL_DATABASE: cabin\n      MYSQL_USER: cabin\n      MYSQL_PASSWORD: cabinpw\n\n")])])]),e("p",[s._v("2.- run it:")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("cd PATH_TO_DOCKER"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("COMPOSE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("YML\ndocker"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("compose up "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d\n\n")])])]),e("p",[s._v("3.- connect to server")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u root "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("P "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p rootpw\n\n")])])]),e("p",[s._v("Hurray!!")]),s._v(" "),e("p",[s._v("4.- stop server")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("compose stop\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);