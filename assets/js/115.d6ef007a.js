(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{605:function(s,t,a){"use strict";a.r(t);var n=a(48),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"using-regex-in-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-regex-in-java"}},[s._v("#")]),s._v(" Using Regex in Java")]),s._v(" "),a("p",[s._v("以下使用到的类 from "),a("code",[s._v("java.util.regex")])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 目标内容，想要提取 status 的值 limit。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UNKNOWN: 1000999\\n\\nPurchase failed\\n\\n{\\"status\\":\\"limit\\"}"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编写正则表达式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\{\\"status\\":\\"(.+)\\"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建样板")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pattern")]),s._v(" pattern "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用样板去匹配内容 str")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Matcher")]),s._v(" matcher "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("matcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行匹配操作, find() 是匹配子串，matches() 是匹配整个 str")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// find(start_index) 接收一个参数表示从 str 的哪一位开始匹配。")]),s._v("\nmatcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取捕获到的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" limit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" matcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"讨论区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讨论区"}},[s._v("#")]),s._v(" 讨论区")]),s._v(" "),a("blockquote",[a("p",[s._v("由于评论过多会影响页面最下方的导航，故将评论区做默认折叠处理。")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看评论区内容，渴望您的宝贵建议~")]),s._v(" "),a("Vssue",{attrs:{title:s.$title,options:{locale:"zh"}}})],1)])}),[],!1,null,null,null);t.default=e.exports}}]);