(window.webpackJsonp=window.webpackJsonp||[]).push([[1985],{2332:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"converting-data-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-data-types"}},[t._v("#")]),t._v(" Converting data types")]),t._v(" "),s("h2",{attrs:{id:"try-parse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#try-parse"}},[t._v("#")]),t._v(" TRY PARSE")]),t._v(" "),s("p",[t._v("It converts string data type to target data type(Date or Numeric).")]),t._v(" "),s("p",[t._v("For example, source data is string type and we need to covert to date type. If conversion attempt fails it returns NULL value.")]),t._v(" "),s("p",[t._v("Syntax: TRY_PARSE (string_value AS data_type [ USING culture ])")]),t._v(" "),s("p",[t._v("String_value – This is argument is source value which is NVARCHAR(4000) type.\n"),s("br"),t._v("Data_type – This argument is target data type either date or numeric.\n"),s("br"),t._v("Culture – It is an optional argument which helps to convert the value to in Culture format. Suppose you want to display the date in French, then you need to pass culture type as ‘Fr-FR’. If you will not pass any valid culture name, then PARSE will raise an error.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@fakeDate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@realDate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@fakeDate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iamnotadate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@realDate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'13/09/2015'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TRY_PARSE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@fakeDate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--NULL  as the parsing fails")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TRY_PARSE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@realDate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- NULL due to type mismatch")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TRY_PARSE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@realDate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fr-FR'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 2015-09-13 ")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"try-convert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#try-convert"}},[t._v("#")]),t._v(" TRY CONVERT")]),t._v(" "),s("p",[t._v("It converts value to specified data type and if conversion fails it returns NULL. For example, source value in string format and we need date/integer format. Then this will help us to achieve the same.")]),t._v(" "),s("p",[t._v("Syntax: TRY_CONVERT ( data_type [ ( length ) ], expression [, style ] )")]),t._v(" "),s("p",[t._v("TRY_CONVERT()  returns a value cast to the specified data type if the cast succeeds; otherwise, returns null.")]),t._v(" "),s("p",[s("br"),t._v("Data_type - The datatype into which to convert. Here length is an optional parameter which helps to get result in specified length.\n"),s("br"),t._v("Expression - The value to be convert\n"),s("br"),t._v("Style - It is an optional parameter which determines formatting. Suppose you want date format like “May, 18 2013” then you need pass style as 111.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sampletext")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sampletext")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" @ realDate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@realDate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" '"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2015")]),t._v("’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TRY_CONVERT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sampletext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 123456  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TRY_CONVERT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATETIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sampletext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- NULL  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TRY_CONVERT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATETIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@realDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Sep, 13 2015  ")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"try-cast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#try-cast"}},[t._v("#")]),t._v(" TRY CAST")]),t._v(" "),s("p",[t._v("It converts value to specified data type and if conversion fails it returns NULL. For example, source value in string format and we need it in double/integer format. Then this will help us in achieving it.")]),t._v(" "),s("p",[t._v("Syntax: TRY_CAST ( expression AS data_type [ ( length ) ] )")]),t._v(" "),s("p",[t._v("TRY_CAST() returns a value cast to the specified data type if the cast succeeds; otherwise, returns null.")]),t._v(" "),s("p",[t._v("Expression - The source value which will go to cast.\n"),s("br"),t._v("Data_type - The target data type the source value will cast.\n"),s("br"),t._v("Length - It is an optional parameter that specifies the length of target data type.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sampletext")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sampletext")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TRY_CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sampletext")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 123456  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" TRY_CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sampletext")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- NULL  ")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"cast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cast"}},[t._v("#")]),t._v(" Cast")]),t._v(" "),s("p",[t._v("The Cast() function is used to convert a data type variable or data from one data type to another data type.")]),t._v(" "),s("p",[t._v("Syntax")]),t._v(" "),s("p",[t._v("CAST ( [Expression] AS Datatype)")]),t._v(" "),s("p",[t._v("The data type to which you are casting an expression is the target type. The data type of the expression from which you are casting is the source type.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@B")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@A")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'25a'")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@B")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'15'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Select")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@B")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Result \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--'25a' is casted to 25 (string to int)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--'15' is casted to 15 (string to int)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--Result ")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--40")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),t._v("    \n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" CAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Result    \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--Result")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--Conversion failed when converting the varchar value 'a' to data type int.")]),t._v("\n\n")])])]),s("p",[t._v("Throws error if failed")]),t._v(" "),s("h2",{attrs:{id:"convert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convert"}},[t._v("#")]),t._v(" Convert")]),t._v(" "),s("p",[t._v("When you convert expressions from one type to another, in many cases there will be a need within a stored procedure or other routine to convert data from a datetime type to a varchar type. The Convert function is used for such things. The CONVERT() function can be used to display date/time data in various formats.\nSyntax")]),t._v(" "),s("p",[t._v("CONVERT(data_type(length), expression, style)")]),t._v(" "),s("p",[t._v("Style - style values for datetime or smalldatetime conversion to character data.  Add 100 to a style value to get a four-place year that includes the century (yyyy).")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("convert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("GETDATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("108")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);