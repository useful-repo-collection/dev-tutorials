(window.webpackJsonp=window.webpackJsonp||[]).push([[2352],{2697:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexes"}},[e._v("#")]),e._v(" Indexes")]),e._v(" "),a("p",[e._v("Here I will explain different index using example, how index increase query performance, how index decrease DML performance etc")]),e._v(" "),a("h2",{attrs:{id:"b-tree-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-tree-index"}},[e._v("#")]),e._v(" b-tree index")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" ord_customer_ix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" orders "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("customer_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("p",[e._v("By default, if we do not mention anything, oracle creates an index as a b-tree index. But we should know when to use it.\nB-tree index stores data as binary tree format. As we know that, index is a schema object which stores some sort of entry for each value for the indexed column. So, whenever any search happens on those columns, it checks in the index for the exact location of that record to access fast. Few points about indexing:")]),e._v(" "),a("ul",[a("li",[e._v("To search for entry in the index, some sort of binary search algorithm used.")]),e._v(" "),a("li",[e._v("When "),a("strong",[e._v("data cardinality is high, b-tree")]),e._v(" index is perfect to use.")]),e._v(" "),a("li",[e._v("Index makes DML slow, as for each record, there should be one entry in the index for indexed column.")]),e._v(" "),a("li",[e._v("So, if not necessary, we should avoid creating index.")])]),e._v(" "),a("h2",{attrs:{id:"bitmap-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-index"}},[e._v("#")]),e._v(" Bitmap Index")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" BITMAP "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" \nemp_bitmap_idx\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" index_demo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("ul",[a("li",[e._v("Bitmap index is used when "),a("strong",[e._v("data cardinality is low.")])]),e._v(" "),a("li",[e._v("Here, "),a("strong",[e._v("Gender")]),e._v(" has value with low cardinality. Values are may be Male, Female & others.")]),e._v(" "),a("li",[e._v("So, if we create a binary tree for this 3 values while searching it will have unnecessary traverse.")]),e._v(" "),a("li",[e._v("In bitmap structures, a two-dimensional array is created with one column for every row in the table being indexed. Each column represents a distinct value within the bitmapped index. This two-dimensional array represents each value within the index multiplied by the number of rows in the table.")]),e._v(" "),a("li",[e._v("At row retrieval time, Oracle decompresses the bitmap into the RAM data buffers so it can be rapidly scanned for matching values. These matching values are delivered to Oracle in the form of a Row-ID list, and these Row-ID values may directly access the required information.")])]),e._v(" "),a("h2",{attrs:{id:"function-based-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-based-index"}},[e._v("#")]),e._v(" Function Based Index")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" first_name_idx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" user_data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("UPPER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v("   user_data\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v("  UPPER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'JOHN2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("ul",[a("li",[e._v("Function based index means, creating index based on a function.")]),e._v(" "),a("li",[e._v("If in search (where clause), frequently any function is used, it's better to create index based on that function.")]),e._v(" "),a("li",[e._v("Here, in the example, for search, "),a("strong",[e._v("Upper()")]),e._v(" function is being used. So, it's better to create index using upper function.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);