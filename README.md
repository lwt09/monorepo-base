# PNPM monorepo 项目

结构采用 Pnpm-monorepo 形式，用以容纳业务项目和公用模块

## 结构

apps 下存放各个 APP 应用

packages 为公共模块目录

```
├── apps                # 后台应用目录
│   └── demo            # next 的 demo 项目
├── packages            # 公用模块目录，可理解为不依赖 npm 发布而可以直接引入的模块
│   ├── components      # 一些公用组件，建议只存放样式类或简单逻辑的组件
│   ├── auth            # 登录相关逻辑及组件
│   ├── http            # 网络请求封装
│   ├── configrc        # babelrc 等配置
|   ├── scripts         # 项目工程化脚本
│   ├── styles          # 公用样式文件及样式相关配置
│   ├── db              # 数据库相关逻辑
│   └── hooks           # 公用 hook
└── package.json        # 定义项目需要的各种模块及配置信息
```

## Q&A

### 为什么根目录需要安装 next

项目子包 packages/configrc 为该项目的 babelrc/eslintrc 等配置包。
pnpm 结构下[bug]，eslintrc 如果需要找到 next 的部分配置文件，需要把 next 直接安装在全局。当然也有可能是我找的 eslint-config-next 不对，不然正常应该是找得到的。

如果该项目内没有使用到 next ，可以把 eslint 中 next 相关的配置 + 根目录的 next 移除。
上网查听说可以用 peerDependencies 来确保全局已经安装了 next，但是尝试失败。

### 为什么需要把 @lwt/scripts 安装到根目录
pnpm 下，不会自动把子包 package.json 的 bin 挂载到当前项目，只有引入的情况才会挂载 bin