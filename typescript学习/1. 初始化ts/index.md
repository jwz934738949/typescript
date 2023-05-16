# 初始化ts 
## 1. 全局安装typescript
```js
  npm install -g typescript
  tsc -v // 验证是否安装成功
```
## 2. 手动编译ts文件
```js
  tsc 文件
  tsc ./index.ts
```
## 3. vscode自动编译ts文件
```js
  // 初始化生成tsconfig.json文件
  tsc -init 

  // tsconfig.json部分字段含义
  // 编译为es6或者es5
  target 
  // 编译成js文件存放位置
  outDir 
  // 是否严格模式
  strict 
```
## 4. 开启vscode任务，监视tsconfig.json文件，当ts文件修改时会自动编译生成js文件