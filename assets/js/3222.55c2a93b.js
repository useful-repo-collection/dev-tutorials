(window.webpackJsonp=window.webpackJsonp||[]).push([[3222],{3567:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring-boot-jdbc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-jdbc"}},[t._v("#")]),t._v(" Spring-Boot + JDBC")]),t._v(" "),a("p",[t._v("Spring Boot can be used to build and persist a SQL Relational DataBase. You can choose to connect to an H2 in memory DataBase using Spring Boot, or perhaps choose to connect to MySql DataBase, it's completely your choice. If you want to conduct CRUD operations against your DB you can do it using JdbcTemplate bean, this bean will automatically bean be provided by Spring Boot. Spring Boot will help you by providing auto configuration of some commonly used beans related to JDBC.")]),t._v(" "),a("h2",{attrs:{id:"schema-sql-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema-sql-file"}},[t._v("#")]),t._v(" schema.sql file")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("CREATE SCHEMA IF NOT EXISTS `backgammon`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nUSE `backgammon`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nDROP TABLE IF EXISTS `user_in_game_room`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDROP TABLE IF EXISTS `game_users`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDROP TABLE IF EXISTS `user_in_game_room`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nCREATE TABLE `game_users`\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    `user_id` BIGINT NOT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NULL")]),t._v(" AUTO_INCREMENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `first_name` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `last_name` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `email` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NOT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NULL")]),t._v(" UNIQUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `user_name` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NOT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NULL")]),t._v(" UNIQUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `password` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `role` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `last_updated_date` DATETIME "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `last_updated_by` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `created_date` DATETIME "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `created_by` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("`user_id`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nDROP TABLE IF EXISTS `game_rooms`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nCREATE TABLE `game_rooms`\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    `game_room_id` BIGINT NOT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NULL")]),t._v(" AUTO_INCREMENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `name` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v("` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `white` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DEFAULT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `black` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DEFAULT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `opened_by` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `speed` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `last_updated_date` DATETIME "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `last_updated_by` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `created_date` DATETIME "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `created_by` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `token` "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SHA1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CONCAT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("`name`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a qwe secret 123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `created_by`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `created_date`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("`game_room_id`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nCREATE TABLE `user_in_game_room`\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    `user_id` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `game_room_id` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `last_updated_date` DATETIME "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `last_updated_by` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `created_date` DATETIME "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    `created_by` BIGINT "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NOT")]),t._v(" NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("`user_id`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `game_room_id`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FOREIGN")]),t._v(" KEY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("`user_id`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" REFERENCES `game_users`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("`user_id`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FOREIGN")]),t._v(" KEY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("`game_room_id`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" REFERENCES `game_rooms`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("`game_room_id`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"first-jdbctemplate-boot-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-jdbctemplate-boot-app"}},[t._v("#")]),t._v(" First JdbcTemplate Boot App")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringBootJdbcApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdbcTemplate")]),t._v(" template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/cars"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stocks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryForList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from car"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringBootJdbcApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"data-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-sql"}},[t._v("#")]),t._v(" data.sql")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("insert into game_users "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninsert into game_users "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninsert into game_users "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("In order to get started, in your sts eclipse go to new --\x3e Spring Starter Project --\x3e fill in your Maven coordinates --\x3e and add the next dependencies:")]),t._v(" "),a("p",[t._v("Under SQL tab --\x3e add JDBC + add MySql (if MySql is your choice).")]),t._v(" "),a("p",[t._v("For Mysql you'll also need to add the MySql Java Connector.")]),t._v(" "),a("p",[t._v("In you Spring Boot application.properties file (you Spring Boot configuration file) you'll need to configure your Data Source credentials to MySql DB:")]),t._v(" "),a("ol",[a("li",[t._v("spring.datasource.url")]),t._v(" "),a("li",[t._v("spring.datasource.username")]),t._v(" "),a("li",[t._v("spring.datasource.password")]),t._v(" "),a("li",[t._v("spring.datasource.driver-class-name")])]),t._v(" "),a("p",[t._v("for example:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jdbc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test\nspring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dbuser\nspring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dbpass\nspring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Driver")]),t._v("\n\n")])])]),a("p",[t._v("Under the resources folder add the next two files:")]),t._v(" "),a("li",[t._v("\nschema.sql --\x3e every time you run your application Spring Boot will run this file, inside it you suppose to write your DB schema, define tables and their relationships.\n")]),t._v(" "),a("li",[t._v("\ndata.sql --\x3e every time you run your application Spring Boot will run this file, inside it, you suppose to write data that will be inserted into your table as an initial initialization.\n")]),t._v(" "),a("p",[t._v("Spring Boot will provide you JdbcTemplate bean automatically so you can instantly can you use it like this:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdbcTemplate")]),t._v(" template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("without any other configurations.")])])}),[],!1,null,null,null);s.default=e.exports}}]);