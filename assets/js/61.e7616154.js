(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{532:function(t,s,a){"use strict";a.r(s);var n=a(48),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"junit5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#junit5"}},[t._v("#")]),t._v(" JUnit5")]),t._v(" "),a("p",[t._v("Spring Boot 2.2.0 开始引入 JUnit5 作为默认单元测试库。")]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://junit.org/junit5/docs/current/user-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JUnit5 用户手册"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组成"}},[t._v("#")]),t._v(" 组成")]),t._v(" "),a("p",[t._v("Junit5 由三部分组成：")]),t._v(" "),a("ul",[a("li",[t._v("JUnit Platform")]),t._v(" "),a("li",[t._v("JUnit Jupiter")]),t._v(" "),a("li",[t._v("JUnit Vintage")])]),t._v(" "),a("h3",{attrs:{id:"junit-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#junit-platform"}},[t._v("#")]),t._v(" JUnit Platform")]),t._v(" "),a("p",[t._v("JUnit Platform 是在 JVM 上启动测试框架的基础，不仅支持 JUnit 自制的测试引擎，其他测试引擎也都可以接入。")]),t._v(" "),a("h3",{attrs:{id:"junit-jupiter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#junit-jupiter"}},[t._v("#")]),t._v(" Junit Jupiter")]),t._v(" "),a("p",[t._v("JUnit Jupiter 提供了 JUnit5 新的编程模型，是 JUnit5 新特性的核心。内部包含了一个测试引擎，用于在 JUnit Platform 上运行。")]),t._v(" "),a("h3",{attrs:{id:"junit-vintage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#junit-vintage"}},[t._v("#")]),t._v(" Junit Vintage")]),t._v(" "),a("p",[t._v("由于 JUnit 项目已经开发了很多年，为了照顾老的项目，JUnit Vintage 提供了兼容 JUnit4.x、JUnit3.x 的测试引擎。")]),t._v(" "),a("p",[t._v("Spring Boot 2.4 之后移除了默认对 Vintage 的依赖。如果需要使用 JUnit4 则需要自行引入依赖：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.junit.vintage"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("junit-vintage-engine"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("exclusions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("exclusion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.hamcrest"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hamcrest-core"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("exclusion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("exclusions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h2",{attrs:{id:"注解-annotations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解-annotations"}},[t._v("#")]),t._v(" 注解 Annotations")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Test")]),t._v("：表示方法是测试方法，但是与 Junit4 的 "),a("code",[t._v("@Test")]),t._v(" 不同，它的职责非常单一，不能声明任何属性，拓展的测试将会由 Jupiter 提供额外测试。")]),t._v(" "),a("li",[a("code",[t._v("@DisplayName")]),t._v("：为测试类或测试方法设置展示名称。")]),t._v(" "),a("li",[a("code",[t._v("@ParameterizedTest")]),t._v("：表示方法是参数化测试。")]),t._v(" "),a("li",[a("code",[t._v("@RepeatedTest")]),t._v("：表示方法可重复执行。")]),t._v(" "),a("li",[a("code",[t._v("@BeforeEach")]),t._v("：表示在每个单元测试之前执行。")]),t._v(" "),a("li",[a("code",[t._v("@AfterEach")]),t._v("：表示在每个单元测试之后执行。")]),t._v(" "),a("li",[a("code",[t._v("@BeforeAll")]),t._v("：表示在所有单元测试之前执行。\n"),a("ul",[a("li",[t._v("要加 static 关键字修饰，因为只会在整个测试类之前运行一次。")])])]),t._v(" "),a("li",[a("code",[t._v("@AfterAll")]),t._v("：表示在所有单元测试之后执行。\n"),a("ul",[a("li",[t._v("要加 static 修饰，理由同上。")])])]),t._v(" "),a("li",[a("code",[t._v("@Disabled")]),t._v("：表示测试类或测试方法不执行。\n"),a("ul",[a("li",[t._v("一个测试类中多个测试实例，该注解可以选择禁用某个实例。")])])]),t._v(" "),a("li",[a("code",[t._v("@TimeOut")]),t._v(":表示测试方法运行如果超过了指定时间，将会返回错误。")]),t._v(" "),a("li",[a("code",[t._v("@ExtendWith")]),t._v("：为测试类或测试方法提供扩展类引用。\n"),a("ul",[a("li",[t._v("之前版本使用 "),a("code",[t._v("@RunWith")])])])]),t._v(" "),a("li",[a("code",[t._v("@Tag")]),t._v("：表示单元测试类别，类似于 JUnit4 中的 "),a("code",[t._v("@Categories")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"assertions-断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assertions-断言"}},[t._v("#")]),t._v(" Assertions 断言")]),t._v(" "),a("p",[t._v("示例："),a("code",[t._v("Assertions.assertEquals(expected, actual, message)")])]),t._v(" "),a("p",[t._v("一个 test 中有两处断言，前面的断言失败后，程序不会继续执行。")]),t._v(" "),a("h3",{attrs:{id:"简单断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单断言"}},[t._v("#")]),t._v(" 简单断言")]),t._v(" "),a("ul",[a("li",[t._v("assertEquals，判断两个对象或原始类型是否相等")]),t._v(" "),a("li",[t._v("assertNotEquals")]),t._v(" "),a("li",[t._v("assertSame，判断两个对象的引用是否指向同一个对象")]),t._v(" "),a("li",[t._v("assertNotSame")]),t._v(" "),a("li",[t._v("assertNull，判断给定的对象引用是否为 Null")]),t._v(" "),a("li",[t._v("assertNotNull")]),t._v(" "),a("li",[t._v("assertTrue，判断给定的值是否为 true")]),t._v(" "),a("li",[t._v("assertFalse")])]),t._v(" "),a("h3",{attrs:{id:"数组断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组断言"}},[t._v("#")]),t._v(" 数组断言")]),t._v(" "),a("ul",[a("li",[t._v("assertArrayEquals，判断两个对象或原始类型的数组是否相等。")])]),t._v(" "),a("p",[t._v("这里判断的是数组的内容，而不是数组的地址。")]),t._v(" "),a("h3",{attrs:{id:"组合断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合断言"}},[t._v("#")]),t._v(" 组合断言")]),t._v(" "),a("p",[t._v("判定多个断言是否都成功。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertTrue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"返回的不是 true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEquals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"得到的值不是 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这里只有两个断言都成功的时候，才会成功，有一个断言不成功，那么 assertAll 就执行失败。")]),t._v(" "),a("h3",{attrs:{id:"异常断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常断言"}},[t._v("#")]),t._v(" 异常断言")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertThrows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NullPointerException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"竟然正常运行了"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("期望的逻辑执行时会发生 NPE，但是却没有发生这个异常就，那么就显示自定义的 Message。")]),t._v(" "),a("h3",{attrs:{id:"超时断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超时断言"}},[t._v("#")]),t._v(" 超时断言")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"程序超时了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v('期望程序在 1 毫秒执行完毕，但是这里却大于 1 毫秒，所有这里断言失败了，打印信息 "程序超时了"。')]),t._v(" "),a("h3",{attrs:{id:"快速失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速失败"}},[t._v("#")]),t._v(" 快速失败")]),t._v(" "),a("p",[a("code",[t._v('fail("测试失败");')])]),t._v(" "),a("h2",{attrs:{id:"assumptions-假设"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assumptions-假设"}},[t._v("#")]),t._v(" Assumptions 假设")]),t._v(" "),a("p",[t._v("也可以理解为前置条件。")]),t._v(" "),a("p",[a("code",[t._v('Assumptions.assumeTrue("56".equals("ss"),"假设不成立，程序不继续执行");')])]),t._v(" "),a("p",[t._v("假设成立，代码会向下执行，不成立的时候，程序会终止，直接跳过 test。")]),t._v(" "),a("p",[t._v("断言不满足会报失败，而假设则是不继续执行。")]),t._v(" "),a("h2",{attrs:{id:"嵌套测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套测试"}},[t._v("#")]),t._v(" 嵌套测试")]),t._v(" "),a("p",[t._v("在嵌套测试时内层的测试会触发外层的 BeforeEach ... 方法，但是外层的方法不会驱动内层的方法。")]),t._v(" "),a("h2",{attrs:{id:"parameterized-tests-参数化测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameterized-tests-参数化测试"}},[t._v("#")]),t._v(" Parameterized Tests 参数化测试")]),t._v(" "),a("p",[t._v("生成参数注解：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@ValueSource")])]),t._v(" "),a("li",[a("code",[t._v("@NullSource")])]),t._v(" "),a("li",[a("code",[t._v("@EnumSource")])]),t._v(" "),a("li",[a("code",[t._v("@CsvFileSource")])]),t._v(" "),a("li",[a("code",[t._v("@MethodSource")]),t._v(" "),a("ul",[a("li",[t._v("这种方式需要导入的方法需要是 static 的，并且返回值是 Stream 的。")])])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DisplayName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Parameterized Tests"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ParameterizedTest")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ValueSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ints "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterizedTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"讨论区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讨论区"}},[t._v("#")]),t._v(" 讨论区")]),t._v(" "),a("blockquote",[a("p",[t._v("由于评论过多会影响页面最下方的导航，故将评论区做默认折叠处理。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看评论区内容，渴望您的宝贵建议~")]),t._v(" "),a("Vssue",{attrs:{title:t.$title,options:{locale:"zh"}}})],1)])}),[],!1,null,null,null);s.default=e.exports}}]);