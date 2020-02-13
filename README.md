# frontend

## 项目命令

```
npm run serve    启动服务
npm run build    打包正式环境资源
npm run testing  打包测试环境资源(没有hash值)
npm run lint     eslint检测
```



## 目录结构

```
#结构
 |-- dist               # 打包后的文件
 	|-- css             # 打包后的css
 	|-- js              # 打包后的js
 	|-- img             # 打包后的图片
 	|-- font            # 打包后的icon图标文件
 	-- index.html       # 打包后的页面
 |-- public 静态资源文件夹
 |-- src 项目文件
 	|-- api              # 接口文件夹，里面存放所有接口文件(每个页面单独一个js)
 	|-- assets           # 主题 字体等静态资源 (由 webpack 处理加载)
    |-- layout           # 全局布局
    |-- components       # 全局公用的组件
    |-- directive        # 全局公用的指令
    |-- filters          # 全局公用的过滤函数
    |-- styles           # 全局公用的样式
    |-- utils            # 全局公用的方法
    |-- router           # 路由文件
    |-- store            # Vuex状态管理文件
    |-- pages            # 页面文件夹
    -- App.vue           # 入口页面
    -- main.ts           # 入口文件
 -- .browserslistrc      # 兼容的浏览器配置
 -- .eslintrc            # eslint语法检测配置
 -- babel.config.js      # bable打包配置
 -- tsconfig.json        # ts配置
 -- vue.config.js        # vue打包配置
```


