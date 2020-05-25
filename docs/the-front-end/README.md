# 前端开发规范

## 命名规范

### id命名
::: tip id
 - id 统一采用**小驼峰式命名**，例如：`myBtn`
 - 禁止通过 id 设置样式
:::

### class命名
::: tip class
- class 统一采用**小写字符并以`-`连接**，例如：`mian-content`
:::

#### 通用 class 命名规范
| 名称        | 含义           | 名称        | 含义           |
| ------------- |:-------------| ------------- |:-------------|
| wrapper | 页面整体宽度| layout  | 布局 |
| header  | 页头 |  main    | 页面主题 |
| footer  | 页脚 |   sidebar | 侧边栏 | 
| nav     | 主导航 | subnav  | 二级导航 |
 | menu    | 菜单 | submenu | 二级菜单 |
| tag     | 标签 |  tips    | 提示 |
| title   | 标题 |  summary | 摘要 |
| search-input| 搜素框 | logo    | 标志 |  
| login   | 登录 | register| 注册 |
| list    | 列表 | list-item| 列表子元素 |
| banner  | 广告条，顶部横图 | download| 下载 |
| box     | 盒子  | content | 内容|
| btn     | 按钮  | submit-btn,... | 提交按钮,...|

### 常量命名
::: tip constant
-  constant统一采用**大写并以`_`连接**，例如：`const = MAX_NUM`
:::

### 变量命名
::: tip variable
-  variable统一采用**小驼峰式命名**，例如：`shipList`
-  建议采用名词或者名词或者形容词结合方式。
-  避免使用缩写
:::

#### 变量常用动词前缀

| 动词        | 含           | 返回值  | 案例 |
| ------------- |:-------------:| :-----|:-----|
| can      | 判断能否执行某个动作，或者能否进行页面跳转 | true/false   | canSubmit:判断数据能否提交 |
| has      | 判断是否含有某个值，某项权限             | true/false   | hasPermisson:是否拥有权限 |
| is       | 判断是否为某个值，某个状态               | true/false   | isLoading:判断页面是否正在加载  | 

### 方法命名
::: tip method
-  method统一采用**小驼峰式命名**，例如：`handleDelete`
-  事件方法建议采用动词开头+目的的命名方式，如：`handleEdit`
:::

#### 方法常用动词前缀
| 动词        | 含           | 返回值  | 案例 |
| ------------- |:-------------:| :-----|:-----|
| can      | 判断某个动作能否执行     | true/false   | canSearch:判断能否发起搜索 |
| has      | 判断是否含有某个值，某项权限             | true/false   |  |
| is       | 判断是否为某个值，某个状态               | true/false   |   | 
| handle   | 处理某个事件                   |any | handleSearch:处理点击搜索按钮时触发的事件，并未向后台发情搜索请求 |
| do       | 执行某个动作                   |any | doSearch:真正向后台发起搜索请求 |

- 注意 `can`,`has`,`is`可同时用于变量和方法，区别在于变量通常后缀**名词**，方法通常后缀**动词**用于描述方法发目的。

## 组件命名规范
::: tip components
- 组件
- 组件目录及组件文件采用**小写字符并以`-`连接**（至少有一个短横线），并且组件目录和组件文件必须同名。
  如`my-btn/my-btn.vue`以便使用`easycom`规则（仅uni-app项目有限）。
- 组件命名采用**小驼峰格式**，组件使用采用**小写字符并以`-`连接**（遵循html规则）
- uni-app 项目组件规范
	- 所有组件统一放置在根目录下的*components*目录下
	- uni-app项目下特定页面使用组件必须前缀**the-**以作区分。如:`the-page-header/the-page-header.vue`
	- 公共组件，必须在组件目录下添加*readme.md*文件，并说明组件调用案列，属性参数，事件方法等。或添加组件doc注释。
- jn_web项目组件规范
	- 公共组件放置在*components*目录下，特定页面组件放置在当前页面目录下。
	- 公共组件，必须在组件目录下添加*readme.md*文件，并说明组件调用案列，属性参数，事件方法等
:::

## 代码风格

### 缩进

::: tip  indent
 - indent 统一缩进**2个空格**；
 - 建议将编辑器tab缩进修改为2空格
:::

### 换行

::: tip  Line break
 - 每行不超过100个字符；建议将编辑器常竖线提示设置到100列出，超过100列则换行。
 - 为html标签或者组件设置超过3个以上属性时，换行设置。见*推荐的写法1*
 - **`.then()`**,**`.catch()`**等默认换行。见*推荐的写法2*
:::

::: details 推荐的写法1
 - *推荐的写法*
``` html
 <table-header-button
 	:editbutton = 'false'
 	:uploadbutton = 'false'
 	@handleForbiden = 'handleBulkDelete'>
 </table-header-button>
 
 ```
 - *不推荐的写法*
 ``` html
 <table-header-button :editbutton = 'false' :uploadbutton = 'false'	@handleForbiden = 'handleBulkDelete'>
 </table-header-button>
 ```
:::

::: details 推荐的写法2
- *推荐的写法*
``` js
getList()
.then((data)=>{})
.catch((err)=>{})
```
- *不推荐的写法*
``` js
getList().then((data)=>{}).catch((err)=>{});
``` 
:::

### 关于空格
::: tip space
- `=`号两侧分别留一个空格。如：`let a = 123;`
- 三元表达式符号两侧留一个空格。如 `let a = b>0 ? b ：0`
- `switch-case` 符号两侧留一个空格。如` case 1 : doSomething();`
- `{ }` 两侧留空格。如：`import { A } from "@/api/api.js";`
:::

### 关于注释
::: tip omment
- **js**注释统一采用`/*  */`风格，单行注释不在采用`//`
- 注释前面保留一行空行
- 推荐使用jsdoc进行**js**代码注释
- 代码屏蔽统一使用`//`
:::

### 关于路径
::: tip path
- 优先使用**绝对路径**，方便代码复用。如:`import { A } from "@/api/api.js";`
:::

### 函数结构
::: danger fun
- 函数不要写的过于复杂，应根据功能对函数结构进行拆分，并添加合理的注释，增加函数可读性。
- *tips:函数行数最好不要超过当前屏幕高度2/3*
:::

### 关于分号
::: tip semicolon
- 行尾统一使用";"
:::

### 关于引号
::: tip  quote
- 外层引号统一使用双引号"";内层引号使用单引号''。如 `:list = "'val'+1" `
:::

## vue/uni-app 项目 文档结构
``` html
<template></template>

<javascript>
	import {} from '';
	export default{
		components:{},
		data:(){},
		prop:{},
		computed:{},
		watch:{},
		filters:{},
		created(){},
		mounted(){},
		onLoad(){},
		onShow(){},
		onReady(){},
		onHide(){},
		onUnload(){},
		onunload(){}，
		onPullDownRefefresh(){},
		onReachBottom(){},
		onPageScroll(){},
		onNavigationBarButtonTab(){},
		onBackPress(){},
		onShareAppMessage(){},
		beforeDestroy(){},
		methods{},
	}
</javascript>

<style></style>	
```
