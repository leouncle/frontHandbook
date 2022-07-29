# 前端ide选择&&项目环境

## ide安装

- 推荐vscode（开源免费）[官网](https://code.visualstudio.com/)

- webstorm（付费，可破解）[官网](https://www.jetbrains.com/webstorm/)

- sublime（付费，可无限期试用）[官网](http://www.sublimetext.com/)

## 项目环境

1. 安装node [官网](https://nodejs.org/en/)，下载v16.x.x的稳定版即可

2. 安装完成打开cmd，输入node-v和npm-v验证是否安装

```
node -v
```

```
npm -v
```

3. 切换npm仓库至淘宝镜像，cmd里输入命令

```
npm config set registry https://registry.npm.taobao.org
```

4. 查看是否更改成功

```
npm config get registry 
```

5. cmd进入项目根目录

```
npm i
```

6. 根目录输入命令启动项目，done！
```
npm run dev
```