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
```

### - 扩展内容详情

#### - Date

- ```typescript
  format (fmt: string) : string
  ```

......

## - 包管理与发布

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
```

### - npm 包更新

```bash
npm version 【版本号】
```

### - npm 包发布

```bash
npm publish // or npm publish --access public
```