```bash
npm i
npm run dev

```

# 项目介绍
自行搭建 webpack+react+redux+redux-saga

redux 模块化（命名空间

redux-saga 模块化（Symbol）

# Redux-saga API

## take

```js
//等待 action.type="string" 的 reducer 执行完以后再执行后续代码
yield take("string")

//等待 action.type为"string1"或者"string2"的任一 reducer 执行完以后再执行后续代码
yield take(["string1","string2"])

```

## call(fn,...args)

```js
//fn 既可以是一个普通函数，也可以是一个 Generator 函数
//阻塞执行，call()执行完，才会往下执行
yield call(fn,arg1,arg2)

```