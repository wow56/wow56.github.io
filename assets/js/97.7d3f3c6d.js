(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{586:function(t,v,a){"use strict";a.r(v);var s=a(48),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.w3school.com.cn/css/index.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS W3C"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh.learnlayout.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Layout"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc()",target:"_blank",rel:"noopener noreferrer"}},[t._v("calc 函数"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"css-选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器"}},[t._v("#")]),t._v(" css 选择器")]),t._v(" "),a("h3",{attrs:{id:"简单选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单选择器"}},[t._v("#")]),t._v(" 简单选择器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("id 选择器")]),t._v(" "),a("p",[t._v("格式为 "),a("code",[t._v("#id {}")]),t._v("，id 选择器是使用元素的 id 来选定元素。")]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" id 选择器不能以数字开头。")])]),t._v(" "),a("li",[a("p",[t._v("类选择器")]),t._v(" "),a("p",[t._v("格式为 "),a("code",[t._v(".类名 {}")]),t._v("，还可以 "),a("code",[t._v("标签名.类名 {}")]),t._v("，比如：p.center {...}，选择具有这个类的这个标签可以生效。就是指的是具有 center 类的 p 标签生效。")]),t._v(" "),a("p",[t._v("选择多个类的话，类之间使用空格隔开。")]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" 类名不能使用数字开头！")])]),t._v(" "),a("li",[a("p",[t._v("通用选择器")]),t._v(" "),a("p",[t._v("格式为 "),a("code",[t._v("* {}")]),t._v("，使用 * 可以选择页面 的所有元素。")])]),t._v(" "),a("li",[a("p",[t._v("元素选择器")]),t._v(" "),a("p",[t._v("格式为 "),a("code",[t._v("标签名 {}")]),t._v("，即元素名，直接使用元素的名字进行选择。")])]),t._v(" "),a("li",[a("p",[a("em",[t._v("选择器分组")])]),t._v(" "),a("p",[t._v("多个选择器可以进行分组，然后使用“，”进行分隔。")])])]),t._v(" "),a("h3",{attrs:{id:"高级选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级选择器"}},[t._v("#")]),t._v(" 高级选择器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("多类选择器")]),t._v(" "),a("p",[t._v("格式为 "),a("code",[t._v(".类名.类名 {}")]),t._v("，即类名直接连接在一起，之间没有空格，表示筛选同时具有这两个类的元素。")])]),t._v(" "),a("li",[a("p",[t._v("属性选择器")]),t._v(" "),a("p",[t._v("格式为 "),a("code",[t._v("标签名[属性名 1=属性值 1][属性名 2=属性值 2] {}")]),t._v("，标签名可省略，属性名可以是多个，但是多个使用要连接在一起。")]),t._v(" "),a("ul",[a("li",[t._v("[attribute = value] ，用于选取带有指定属性和值的元素。")]),t._v(" "),a("li",[t._v("[attribute~ = value] ，用于选取属性值中包含指定词汇的元素。")]),t._v(" "),a("li",[t._v("[attribute| = value] ，用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。")]),t._v(" "),a("li",[t._v("[attribute^ = value] ，匹配属性值以指定值开头的每个元素。")]),t._v(" "),a("li",[t._v("[attribute$ = value] ，匹配属性值以指定值结尾的每个元素。")]),t._v(" "),a("li",[t._v("[attribute* = value] ，匹配属性值中包含指定值的每个元素。")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*[title]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*-- 这里是包含 title 属性的所有元素都设置为红色字体 --*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a[href]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*-- 这里是把有 href 属性的 a 标签设置为红色字体 --*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("多类选择器")]),t._v(" "),a("p",[t._v("格式为 "),a("code",[t._v(".类名.类名 {}")]),t._v("，即类名直接连接在一起，之间没有空格，表示筛选同时具有这两个类的元素。")])])]),t._v(" "),a("h3",{attrs:{id:"组合器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合器"}},[t._v("#")]),t._v(" 组合器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("后代选择器 (空格)，所有后代。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("子选择器 (>)，只是子。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div > p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("相邻兄弟选择器 (+)")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div + p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("通用兄弟选择器 (~)，所有兄弟。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div ~ p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"三种使用-css-的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三种使用-css-的方法"}},[t._v("#")]),t._v(" 三种使用 CSS 的方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("外部 CSS")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("<link>")]),t._v(" 标签引用外部的 CSS 文件，例如 "),a("code",[t._v('<link rel="stylesheet" type="text/css" href="文件地址">')]),t._v("。")]),t._v(" "),a("p",[t._v("外部样式表的扩展名必须是 .css 的文件，文件中不应该包含任何 HTML 标签，属性值和单位之间不加空格。")])]),t._v(" "),a("li",[a("p",[t._v("内部 CSS")]),t._v(" "),a("p",[t._v("内部 CSS 写在页面声明的 "),a("code",[t._v("<head>")]),t._v(" 标签内，样式代码写在 "),a("code",[t._v("<style>")]),t._v(" 标签中。")])]),t._v(" "),a("li",[a("p",[t._v("内联（行内） CSS")]),t._v(" "),a("p",[t._v("内联样式是写在标签的属性中，HTML 标签有一个 style 属性，样式代码作为属性值写进去。")])])]),t._v(" "),a("h2",{attrs:{id:"多个样式表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个样式表"}},[t._v("#")]),t._v(" 多个样式表")]),t._v(" "),a("p",[t._v("优先级：行内样式 > 内部（在 head 中声明）/外部 > 浏览器默认样式")]),t._v(" "),a("p",[t._v("内部/外部的优先级是看谁最后被读取。如果是先使用 "),a("code",[t._v("<link>")]),t._v(" 标签引入的外部文件，而内部的 "),a("code",[t._v("<style>")]),t._v(" 标签则在引用的后面，那么是内部的生效。"),a("strong",[t._v("生效后面的那个。")])]),t._v(" "),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),a("p",[t._v("CSS 的注释和 HTML 一致。")]),t._v(" "),a("h2",{attrs:{id:"颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色"}},[t._v("#")]),t._v(" 颜色")]),t._v(" "),a("ul",[a("li",[t._v("使用颜色名称，比如 red、blue 等")]),t._v(" "),a("li",[t._v("还可以使用 RGB 值、HEX 值、HSL 值、RGBA 值或者 HSLA 值来指定颜色。\n"),a("ul",[a("li",[a("p",[t._v("RGB(red, green, blue)，取值 0 ~ 255，比如（255，0，0）表示的就是红色。")]),t._v(" "),a("p",[t._v("通常使用三种颜色值相同来使用不同程度的灰色，比如用到阴影的时候。")])]),t._v(" "),a("li",[a("p",[t._v("RGBA(red, green, blue， alpha)，添加了 alpha 属性来指定不透明度，A 取值 0.0 ~ 1.0，0.0 是完全透明，1.0 是完全不透明。")])]),t._v(" "),a("li",[a("p",[t._v("HEX，#rrggbb，十六进制取色。")])])])])]),t._v(" "),a("h2",{attrs:{id:"渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渐变"}},[t._v("#")]),t._v(" 渐变")]),t._v(" "),a("p",[a("code",[t._v("linear-gradient")]),t._v(" 线性渐变")]),t._v(" "),a("ul",[a("li",[t._v("默认从上而下 "),a("code",[t._v("background-image: linear-gradient(red, yellow);")])]),t._v(" "),a("li",[t._v("从左到右 "),a("code",[t._v("linear-gradient(to right, red , yellow);")])]),t._v(" "),a("li",[t._v("对角线 "),a("code",[t._v("linear-gradient(to bottom right, red, yellow);")])])]),t._v(" "),a("p",[a("code",[t._v("radial-gradient")]),t._v(" 径向渐变")]),t._v(" "),a("ul",[a("li",[t._v("调整占比 "),a("code",[t._v("background-image: radial-gradient(red 5%, yellow 15%, green 60%);")])]),t._v(" "),a("li",[t._v("设置形状 "),a("code",[t._v("background-image: radial-gradient(circle, red, yellow, green);")])])]),t._v(" "),a("h2",{attrs:{id:"css-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-背景"}},[t._v("#")]),t._v(" CSS 背景")]),t._v(" "),a("h3",{attrs:{id:"背景色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景色"}},[t._v("#")]),t._v(" 背景色")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("background-color: 取值;")]),t._v(" 指定背景颜色")])]),t._v(" "),a("h3",{attrs:{id:"背景图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景图"}},[t._v("#")]),t._v(" 背景图")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('background-image: url("地址");')]),t._v("，指定使用的背景图片。")]),t._v(" "),a("li",[a("code",[t._v("background-repeat: repeat-x;")]),t._v("，只在在水平方向重复；"),a("code",[t._v("repeat-y")]),t._v("，只在在垂直方向重复，"),a("code",[t._v("no-repeat")]),t._v("，只显示一次。")]),t._v(" "),a("li",[a("code",[t._v("background-position: right top;")]),t._v(",指定图片位置。")]),t._v(" "),a("li",[a("code",[t._v("background-attachment: fixed;")]),t._v("，选择图片是否和页面一起滚动，"),a("code",[t._v("fixed")]),t._v(" 固定，"),a("code",[t._v("scroll")]),t._v(" 滚动。")])]),t._v(" "),a("h3",{attrs:{id:"属性简写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性简写"}},[t._v("#")]),t._v(" 属性简写")]),t._v(" "),a("p",[a("code",[t._v('background: url("地址") no-repeat right top')]),t._v("，可以在 background 属性里面直接写其他所有取值，但是要遵循以下顺序：颜色、图片、重复、固定、位置。")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("background-color")])]),t._v(" "),a("li",[a("code",[t._v("background-image")])]),t._v(" "),a("li",[a("code",[t._v("background-repeat")])]),t._v(" "),a("li",[a("code",[t._v("background-attachment")])]),t._v(" "),a("li",[a("code",[t._v("background-position")])])]),t._v(" "),a("h3",{attrs:{id:"其他属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他属性"}},[t._v("#")]),t._v(" 其他属性")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("background")]),t._v("，在一条声明中设置所有背景属性的简写属性。")]),t._v(" "),a("li",[a("code",[t._v("background-clip")]),t._v("，规定背景的绘制区域。")]),t._v(" "),a("li",[a("code",[t._v("background-origin")]),t._v("，规定在何处放置背景图像。")]),t._v(" "),a("li",[a("code",[t._v("background-position")]),t._v("，设置背景图像的开始位置。")]),t._v(" "),a("li",[a("code",[t._v("background-size")]),t._v("，规定背景图像的尺寸。\n"),a("ul",[a("li",[t._v("contain，背景图像将保持其长宽比缩放，并尝试匹配内容区域。")]),t._v(" "),a("li",[t._v("100% 100%，拉伸以覆盖整个内容区域。")]),t._v(" "),a("li",[t._v("cover，保持比例缩放。不会拉伸。")])])])]),t._v(" "),a("h2",{attrs:{id:"css-边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-边框"}},[t._v("#")]),t._v(" CSS 边框")]),t._v(" "),a("h3",{attrs:{id:"边框类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框类型"}},[t._v("#")]),t._v(" 边框类型")]),t._v(" "),a("p",[a("code",[t._v("border-style")]),t._v("，指定边框类型。取值有以下这些：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("dotted")]),t._v(" - 定义点线边框")]),t._v(" "),a("li",[a("code",[t._v("dashed")]),t._v(" - 定义虚线边框")]),t._v(" "),a("li",[a("code",[t._v("solid")]),t._v(" - 定义实线边框")]),t._v(" "),a("li",[a("code",[t._v("double")]),t._v(" - 定义双边框")]),t._v(" "),a("li",[a("code",[t._v("groove")]),t._v(" - 定义 3D 坡口边框，效果取决于 border-color 值")]),t._v(" "),a("li",[a("code",[t._v("ridge")]),t._v(" - 定义 3D 脊线边框，效果取决于 border-color 值")]),t._v(" "),a("li",[a("code",[t._v("inset")]),t._v(" - 定义 3D inset 边框，效果取决于 border-color 值")]),t._v(" "),a("li",[a("code",[t._v("outset")]),t._v(" - 定义 3D outset 边框，效果取决于 border-color 值")]),t._v(" "),a("li",[a("code",[t._v("none")]),t._v(" - 定义无边框")]),t._v(" "),a("li",[a("code",[t._v("hidden")]),t._v(" - 定义隐藏边框")])]),t._v(" "),a("p",[a("code",[t._v("border-style")]),t._v(" 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。即按照上右下左的"),a("strong",[t._v("顺时针")]),t._v("的顺序自定义四个边框。它的工作原理是这样的：")]),t._v(" "),a("ul",[a("li",[t._v("四个值："),a("code",[t._v("border-style: dotted solid double dashed;")]),t._v(" "),a("ul",[a("li",[t._v("上边框是虚线")]),t._v(" "),a("li",[t._v("右边框是实线")]),t._v(" "),a("li",[t._v("下边框是双线")]),t._v(" "),a("li",[t._v("左边框是虚线")])])]),t._v(" "),a("li",[t._v("三个值："),a("code",[t._v("border-style: dotted solid double;")]),t._v(" "),a("ul",[a("li",[t._v("上边框是虚线")]),t._v(" "),a("li",[t._v("右和左边框是实线")]),t._v(" "),a("li",[t._v("下边框是双线")])])]),t._v(" "),a("li",[t._v("两个值："),a("code",[t._v("border-style: dotted solid;")]),t._v(" "),a("ul",[a("li",[t._v("上和下边框是虚线")]),t._v(" "),a("li",[t._v("右和左边框是实线")])])]),t._v(" "),a("li",[t._v("一个值："),a("code",[t._v("border-style: dotted;")]),t._v(" "),a("ul",[a("li",[t._v("四条边均为虚线")])])])]),t._v(" "),a("h3",{attrs:{id:"边框宽度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框宽度"}},[t._v("#")]),t._v(" 边框宽度")]),t._v(" "),a("p",[a("code",[t._v("border-width")]),t._v(" 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框），即"),a("strong",[t._v("顺时针")]),t._v("方向。")]),t._v(" "),a("h3",{attrs:{id:"边框颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框颜色"}},[t._v("#")]),t._v(" 边框颜色")]),t._v(" "),a("p",[a("code",[t._v("border-color")]),t._v(" 属性用于设置四个边框的颜色。同样可以"),a("strong",[t._v("顺时针")]),t._v("选择分别自定义四个边框。")]),t._v(" "),a("h3",{attrs:{id:"属性简写-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性简写-2"}},[t._v("#")]),t._v(" 属性简写")]),t._v(" "),a("p",[a("code",[t._v("border")]),t._v(" 属性是以下各个边框属性的简写属性：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("border-width")])]),t._v(" "),a("li",[a("code",[t._v("border-style")]),t._v("（必需）")]),t._v(" "),a("li",[a("code",[t._v("border-color")])])]),t._v(" "),a("p",[t._v("即"),a("strong",[t._v("宽度 > 样式 > 颜色")]),t._v("的顺序，进行编写。")]),t._v(" "),a("h3",{attrs:{id:"圆角边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#圆角边框"}},[t._v("#")]),t._v(" 圆角边框")]),t._v(" "),a("p",[a("code",[t._v("border-radius: npx")]),t._v(" 属性用于向元素添加圆角边框。")]),t._v(" "),a("h2",{attrs:{id:"边距"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边距"}},[t._v("#")]),t._v(" 边距")]),t._v(" "),a("h3",{attrs:{id:"外边距"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外边距"}},[t._v("#")]),t._v(" 外边距")]),t._v(" "),a("p",[a("code",[t._v("margin")]),t._v(" 属性用于在任何定义的边框之外，为元素周围创建空间。可选以下属性值：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("auto")]),t._v(" - 浏览器来计算外边距，以使元素在其容器中水平居中。然后，该元素将占据指定的宽度，并且剩余空间将在左右边界之间平均分配。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("length")]),t._v(" - 以 px、pt、cm 等单位指定外边距。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("%")]),t._v(" - 指定以包含元素宽度的百分比计的外边距。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("inherit")]),t._v(" - 指定应从父元素继承外边距。")])])]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" 允许负值，可以简写，遵循"),a("strong",[t._v("顺时针")]),t._v("原则。")]),t._v(" "),a("h4",{attrs:{id:"外边距合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外边距合并"}},[t._v("#")]),t._v(" 外边距合并")]),t._v(" "),a("p",[t._v("TODO：")]),t._v(" "),a("h3",{attrs:{id:"内边距"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内边距"}},[t._v("#")]),t._v(" 内边距")]),t._v(" "),a("p",[a("code",[t._v("padding")]),t._v(" 属性用于在任何定义的边界内的元素内容周围生成空间。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("length")]),t._v(" - 以 px、pt、cm 等单位指定内边距。")]),t._v(" "),a("li",[a("code",[t._v("%")]),t._v(" - 指定以包含元素宽度的百分比计的内边距。")]),t._v(" "),a("li",[a("code",[t._v("inherit")]),t._v(" - 指定应从父元素继承内边距。")])]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" 不允许为负值，没有 auto。可以简写，遵循"),a("strong",[t._v("顺时针")]),t._v("原则。")]),t._v(" "),a("h3",{attrs:{id:"高度宽度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高度宽度"}},[t._v("#")]),t._v(" 高度宽度")]),t._v(" "),a("p",[t._v("height、width 指的是内容区域的宽度高度，不包括内边距、边框和外边距。")]),t._v(" "),a("h3",{attrs:{id:"盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[t._v("#")]),t._v(" 盒子模型")]),t._v(" "),a("p",[t._v("盒子包括内容 + 内边距 + 边框 + 外边距。")]),t._v(" "),a("p",[a("code",[t._v("box-sizing")]),t._v("，此元素的内边距和边框不再会增加它的宽度。")]),t._v(" "),a("p",[t._v("下面是部分代码，匹配各种浏览器用的。通过挤压内容实现。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("实例：")]),t._v(" "),a("ul",[a("li",[t._v("-moz 代表 firefox 浏览器私有属性；")]),t._v(" "),a("li",[t._v("-ms 代表 IE 浏览器私有属性；")]),t._v(" "),a("li",[t._v("-webkit 代表 chrome、safari 私有属性；")]),t._v(" "),a("li",[t._v("-o 代表 Opera 私有属性。")])]),t._v(" "),a("h2",{attrs:{id:"轮廓"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轮廓"}},[t._v("#")]),t._v(" 轮廓")]),t._v(" "),a("p",[a("code",[t._v("outline")]),t._v(" 指的是元素的外轮廓，使用见 "),a("code",[t._v("border")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("offset")]),t._v(" - 偏移量，轮廓与边框之间的距离（有点外边距的味道）。")])]),t._v(" "),a("h2",{attrs:{id:"文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本"}},[t._v("#")]),t._v(" 文本")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("color")]),t._v(" - 颜色")]),t._v(" "),a("li",[a("code",[t._v("text-align")]),t._v(" - 水平对齐方式，left/center/right。")]),t._v(" "),a("li",[a("code",[t._v("vertical-align")]),t._v(" - 垂直对齐方式，top/middle/bottom。")]),t._v(" "),a("li",[a("code",[t._v("text-decoration")]),t._v(" - 设置或删除文本装饰\n"),a("ul",[a("li",[a("code",[t._v("text-decoration: none;")]),t._v("，通常用于从链接上删除下划线。")]),t._v(" "),a("li",[a("code",[t._v("text-decoration: overline;")]),t._v("，上划线。")]),t._v(" "),a("li",[a("code",[t._v("text-decoration: line-through;")]),t._v("，删除线。")]),t._v(" "),a("li",[a("code",[t._v("text-decoration: underline;")]),t._v("，下划线。")])])]),t._v(" "),a("li",[a("code",[t._v("text-transform: 属性值;")]),t._v(" - 文本转换。\n"),a("ul",[a("li",[a("code",[t._v("uppercase")]),t._v("，全大写。")]),t._v(" "),a("li",[a("code",[t._v("lowercase")]),t._v("，全小写")]),t._v(" "),a("li",[a("code",[t._v("capitalize")]),t._v("，首字母大写。")])])]),t._v(" "),a("li",[a("code",[t._v("text-indent")]),t._v(" - 指定文本第一行的缩进。")]),t._v(" "),a("li",[a("code",[t._v("letter-spacing")]),t._v(" - 文本中字符之间的间距。")]),t._v(" "),a("li",[a("code",[t._v("line-height")]),t._v(" - 行距。")]),t._v(" "),a("li",[a("code",[t._v("word-spacing")]),t._v(" - 文本中单词之间的间距。")]),t._v(" "),a("li",[a("code",[t._v("text-shadow")]),t._v(" - 文本添加阴影。\n"),a("ul",[a("li",[a("code",[t._v("text-shadow: 2px 3px 5px red;")]),t._v("，表示水平 2px，垂直 3px，模糊 5px，阴影颜色 red。")])])]),t._v(" "),a("li",[a("code",[t._v("font-size")]),t._v(" - 字体大小。")]),t._v(" "),a("li",[a("code",[t._v("font-weight")]),t._v(" - 粗细。")])]),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("a:link")]),t._v(" - 正常的，未访问的链接")]),t._v(" "),a("li",[a("code",[t._v("a:visited")]),t._v(" - 用户访问过的链接")]),t._v(" "),a("li",[a("code",[t._v("a:hover")]),t._v(" - 用户将鼠标悬停在链接上时")]),t._v(" "),a("li",[a("code",[t._v("a:active")]),t._v(" - 链接被点击时")])]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("link "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("visited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("这里说的是未访问的是蓝色字体，访问过的字体颜色变成红色。")]),t._v(" "),a("h2",{attrs:{id:"表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表格"}},[t._v("#")]),t._v(" 表格")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("border-collapse")]),t._v(" 属性设置是否将表格边框折叠为单一边框。")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("<tr>")]),t._v(" 元素上使用 "),a("code",[t._v(":hover")]),t._v(" 选择器，以突出显示鼠标悬停时的表格行。")])]),t._v(" "),a("h2",{attrs:{id:"display-visitable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-visitable"}},[t._v("#")]),t._v(" Display & visitable")]),t._v(" "),a("p",[a("code",[t._v("display: none;")]),t._v(" 从 DOM 树中移除，"),a("code",[t._v("visitable: hidden")]),t._v("不显示，但是占用空间。")]),t._v(" "),a("h2",{attrs:{id:"位置-定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位置-定位"}},[t._v("#")]),t._v(" 位置/定位")]),t._v(" "),a("h3",{attrs:{id:"position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" position")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("static")]),t._v(" 是默认值。")]),t._v(" "),a("p",[t._v("任意 "),a("code",[t._v("position: static;")]),t._v(" 的元素不会被特殊的定位。不受 top、bottom、left 和 right 属性的影响。它始终根据页面的正常流进行定位。一个 "),a("code",[t._v("static")]),t._v(" 元素表示它不会被“positioned”，一个 position 属性被设置为其他值的元素表示它会被“positioned”。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("relative")]),t._v(" 表现的和 "),a("code",[t._v("static")]),t._v(" 一样，除非你添加了一些额外的属性，相对于它的正常位置偏移。")]),t._v(" "),a("ul",[a("li",[t._v("top - 比如 "),a("code",[t._v("top: -20px;")])]),t._v(" "),a("li",[t._v("left")]),t._v(" "),a("li",[t._v("bottom")]),t._v(" "),a("li",[t._v("right")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fixed")]),t._v(" 固定位置。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("absolute")]),t._v(" 相对于最近的"),a("strong",[t._v("被定位")]),t._v("的父元素的位置进行定位，取值四个方向顺时针。如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。")]),t._v(" "),a("ul",[a("li",[t._v("绝对定位元素的位置与文档流无关，因此它"),a("strong",[t._v("不占据任何空间")]),t._v("。")]),t._v(" "),a("li",[t._v("被定位的是指的除了 "),a("code",[t._v("static")]),t._v(" 以外的任何元素。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("sticky")]),t._v(" "),a("strong",[t._v("粘性定位")]),t._v("，根据用户的滚动位置进行定位。")])])]),t._v(" "),a("h3",{attrs:{id:"元素重叠"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素重叠"}},[t._v("#")]),t._v(" 元素重叠")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("z-index")]),t._v(" 属性可以指定元素的堆栈顺序（那个元素在上面或者下面）。可以设置为正/负值。")])]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" 如果两个定位的元素重叠而未指定 z-index，则位于 HTML 代码中最后的元素将显示在顶部。")]),t._v(" "),a("h2",{attrs:{id:"溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#溢出"}},[t._v("#")]),t._v(" 溢出")]),t._v(" "),a("p",[a("code",[t._v("overflow")]),t._v(" 如果内容溢出，则提供一个滚动条。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("visible")]),t._v(" - 默认。溢出没有被剪裁。内容在元素框外渲染。")]),t._v(" "),a("li",[a("code",[t._v("hidden")]),t._v(" - 溢出被剪裁，其余内容将不可见。")]),t._v(" "),a("li",[a("code",[t._v("scroll")]),t._v(" - 溢出被剪裁，同时添加滚动条以查看其余内容。")]),t._v(" "),a("li",[a("code",[t._v("auto")]),t._v(" - 与 "),a("code",[t._v("scroll")]),t._v(" 类似，但仅在必要时添加滚动条")]),t._v(" "),a("li",[a("code",[t._v("overflow-x")]),t._v(" 指定如何处理内容的左/右边缘。")]),t._v(" "),a("li",[a("code",[t._v("overflow-y")]),t._v(" 指定如何处理内容的上/下边缘。")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 隐藏水平滚动栏 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 添加垂直滚动栏 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("strong",[t._v("注意：")]),t._v(" "),a("code",[t._v("overflow")]),t._v(" 属性仅适用于"),a("strong",[t._v("具有指定高度")]),t._v("的块元素。")]),t._v(" "),a("h2",{attrs:{id:"浮动-清除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动-清除"}},[t._v("#")]),t._v(" 浮动 & 清除")]),t._v(" "),a("h3",{attrs:{id:"浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动"}},[t._v("#")]),t._v(" 浮动")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("float:left;")]),t._v(" - 当前元素向左侧浮动。")]),t._v(" "),a("li",[a("code",[t._v("float:right;")]),t._v(" - 当前元素向右侧浮动。")])]),t._v(" "),a("p",[a("code",[t._v("float")]),t._v(" 占用其他的显示，会把其他的字挤过去。文字包围图片效果，使用的时候，将"),a("strong",[t._v("图片放在文字前面。")])]),t._v(" "),a("h3",{attrs:{id:"清除浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("clear:left;")]),t._v(" - 禁止左侧出现浮动元素,如果左侧存在浮动元素,则当前元素将在浮动元素下面另起一行呈现。")]),t._v(" "),a("li",[a("code",[t._v("clear:right;")]),t._v(" - 禁止右侧出现浮动元素,如果右侧存在浮动元素,则右侧的浮动元素将在当前元素下面另起一行呈现。")]),t._v(" "),a("li",[a("code",[t._v("clear:both;")]),t._v(" - 禁止左右两侧出现浮动元素,当前元素将排斥浮动元素独占一行呈现。")])]),t._v(" "),a("h2",{attrs:{id:"响应式设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式设计"}},[t._v("#")]),t._v(" 响应式设计")]),t._v(" "),a("p",[t._v("HTML5 引入了一种方法，使 Web 设计者可以通过 "),a("code",[t._v("<meta>")]),t._v(" 标签来控制视口（viewport）。")]),t._v(" "),a("p",[a("code",[t._v('<meta name="viewport" content="width=device-width, initial-scale=1.0">')])]),t._v(" "),a("p",[a("code",[t._v("width=device-width")]),t._v(" 部分将页面的宽度设置为跟随设备的屏幕宽度（视设备而定）。")]),t._v(" "),a("p",[t._v("当浏览器首次加载页面时，"),a("code",[t._v("initial-scale=1.0")]),t._v(" 部分设置初始缩放级别。")]),t._v(" "),a("h3",{attrs:{id:"图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("width")]),t._v(" 属性设置为百分比，且高度设置为 "),a("code",[t._v("auto")]),t._v("，则图像将进行响应来放大或缩小。")]),t._v(" "),a("li",[t._v("如果将 "),a("code",[t._v("max-width")]),t._v(" 属性设置为 100％，则图像将按需缩小，但绝不会放大到大于其原始大小。")])]),t._v(" "),a("h2",{attrs:{id:"伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类"}},[t._v("#")]),t._v(" 伪类")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v(":first-child")]),t._v(" 伪类与指定的元素匹配：该元素是另一个元素的第一个子元素。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*-- 选择器匹配所有 <p> 元素中的第一个 <i> 元素 --*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p:first-child i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*-- 匹配所有首个 <p> 元素中的所有 <i> 元素 --*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p i:first-child")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"不透明度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不透明度"}},[t._v("#")]),t._v(" 不透明度")]),t._v(" "),a("p",[a("code",[t._v("opacity")]),t._v(" 属性的取值范围为 0.0-1.0。值越低，越透明。")]),t._v(" "),a("p",[t._v("当使用 opacity 属性为元素背景添加透明度时，其所有子元素也将变为透明，比如它内部的字体颜色也会变得透明。")]),t._v(" "),a("h2",{attrs:{id:"单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单位"}},[t._v("#")]),t._v(" 单位")]),t._v(" "),a("h3",{attrs:{id:"绝对单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对单位"}},[t._v("#")]),t._v(" 绝对单位")]),t._v(" "),a("ul",[a("li",[t._v("cm - 厘米")]),t._v(" "),a("li",[t._v("mm - 毫米")]),t._v(" "),a("li",[t._v("in - 英寸 (1in = 96px = 2.54cm)")]),t._v(" "),a("li",[t._v("px - 像素 (1px = 1/96th of 1in)\n"),a("ul",[a("li",[t._v("像素（px）是相对于观看设备的。对于低 dpi 的设备，1px 是显示器的一个设备像素（点）。对于打印机和高分辨率屏幕，1px 表示多个设备像素。")])])]),t._v(" "),a("li",[t._v("pt - 点 (1pt = 1/72 of 1in)")]),t._v(" "),a("li",[t._v("pc - 派卡 (1pc = 12 pt)")])]),t._v(" "),a("h3",{attrs:{id:"相对单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对单位"}},[t._v("#")]),t._v(" 相对单位")]),t._v(" "),a("ul",[a("li",[t._v("em - 相对于元素的字体大小（font-size）（2em 表示当前字体大小的 2 倍）")]),t._v(" "),a("li",[t._v("ex - 相对于当前字体的 x-height(极少使用)")]),t._v(" "),a("li",[t._v('ch - 相对于 "0"（零）的宽度')]),t._v(" "),a("li",[t._v("rem - 相对于根元素的字体大小（font-size）")]),t._v(" "),a("li",[t._v("vw - 相对于视口*宽度的 1%")]),t._v(" "),a("li",[t._v("vh - 相对于视口*高度的 1%")]),t._v(" "),a("li",[t._v("vmin - 相对于视口*较小尺寸的 1％")]),t._v(" "),a("li",[t._v("vmax - 相对于视口*较大尺寸的 1％")]),t._v(" "),a("li",[t._v("% - 相对于父元素")])]),t._v(" "),a("p",[a("strong",[t._v("视口")]),t._v("（Viewport）= 浏览器窗口的尺寸。如果视口为 50 厘米宽，则 1vw = 0.5 厘米。")]),t._v(" "),a("h2",{attrs:{id:"讨论区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讨论区"}},[t._v("#")]),t._v(" 讨论区")]),t._v(" "),a("blockquote",[a("p",[t._v("由于评论过多会影响页面最下方的导航，故将评论区做默认折叠处理。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看评论区内容，渴望您的宝贵建议~")]),t._v(" "),a("Vssue",{attrs:{title:t.$title,options:{locale:"zh"}}})],1)])}),[],!1,null,null,null);v.default=e.exports}}]);