# @xizher/js-extension
[TOC]

## - @xizher/js-extension

### - 安装与使用

```bash
npm install --save @xizher/js-extension
```

```javascript
require('@xizher/js-extension')
// or
import '@xizher/js-extension'
import { ... } '@xizher/js-extension/utils'
```

### - 扩展内容详情

#### - Date

```typescript
format (fmt: string) : string
getNextDate (day: number) : Date
```

#### - Array

```typescript
insert (index: number, item: any) : void
remove (index: number) : void
clear () : void
reset (...items) : void
removeByValue (val: any, options: {  many: boolean }) : void
unique () : Array<any>
equal (array: Array<string | number | boolean>) : boolean
findItem (propName: string, propValue: string | number | boolean) : object
findItems (propName: string, propValue: string | number | boolean): object
propToArr (propName: string) : Array<any>
sum () : number
last () : any
max () : number
min () : number
ave () : number
```

#### - Number

```typescript
toChineseNum () : string
floor () : number
ceil () : number
abs () : number
round (count: number) : number
```

#### - String

```typescript
contain (arr: string[]) : boolean
trimAll () : string
replaceAll (searchValue: string, replaceValue) : string
```

......

### 工具类方式

```
deepCopy (obj: any) : any
guid () : string
getRootPath () : string
randomRange () : number
```



### - 包管理与发布

包发布前需要注意镜像源的切换

```bash
npm config set registry http://registry.npmjs.org
```

```bash
npm config set registry https://registry.npm.taobao.org
```

### - npm 用户登录

```bash
npm login
// or 
```

### - npm 包更新

```bash
npm version 【版本号】
```

### - npm 包发布

```bash
npm publish // or npm publish --access public
```