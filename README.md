# 完整项目构建

## 1. 安装

### 1.1 Git
- 在[Git官网](https://git-scm.com)下载最新版本
- [Git安装教程](https://git-scm.com/book/zh/v2/起步-安装-Git)

### 1.2 Node
- 在[Node官网](https://nodejs.org/en/)下载最新版本
- [Node安装教程](http://www.runoob.com/nodejs/nodejs-install-setup.html)

### 1.3 Npm
Node会默认为我们安装某个版本的npm，一般无需单独安装，详情请见
- [npm安装教程](http://coloration.cc/npmjs-documentation/2016/03/29/installingNodejsAndUpdatingNpm.html)

### 1.4 创建package.json文件
进入本地项目所在目录，创建一个`package.json`的文件，包含以下内容

    {
      "name": "hello-world",
      "version": "1.0.0",
      "description": "learn to build a complete web project",
      "main": "home.js",
      "scripts": {
        "test": "test text"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/AmyChung2017/hello-world.git"
      },
      "bugs": {
        "url": "https://github.com/AmyChung2017/hello-world/issues"
      },
      "homepage": "https://github.com/AmyChung2017/hello-world",
      "keywords": [
        "node", "npm", "gulp", "html", "css", "javascript"
      ],
      "author": "AmyChung",
      "license": "MIT",
      "dependencies": {},
      "devDependencies": {
        "gulp": "^3.9.1"
      }
    }

- name 包的名称
- version 包的版本
- description 包的描述
- main 入口文件，当require这个包名的时候，这个文件会被require进去
- script 基于npm的脚本，可以在命令行里，在这个包里面运行npm run test，就会显示一行字
- repository 仓库信息
- bugs 提交bug的位置
- homepage 包的主页地址
- keywords 关键字
- author 作者信息
- license 授权信息
- dependencies 生产环境需要依赖的包
- devDependencies 开发环境需要依赖的包，不会被部署到生产环境

### 1.5 安装本地项目所需的所有依赖包
进入本地项目所在目录，执行如下命令

    $ npm install

### 1.6 单独安装某个依赖包（可选）
有两种不同的安装包的命令，二者选其一。

    $ npm install --save 包名

或者

    $ npm install --save-dev 包名

- [--save与--save-dev的区别（英文解释）](https://stackoverflow.com/questions/22891211/what-is-difference-between-save-and-save-dev)
- [--save与--save-dev的区别（中文解释）](http://gaoxiaosong.xsweby.com/2016/03/20/npm-save-save-dev.html)

## 2. 使用Gulp

### 2.1 全局安装gulp-cli命令

    $ npm install -g gulp-cli

- [安装gulp与gulp-cli的区别（英文解释）](https://stackoverflow.com/questions/35571679/what-does-gulp-cli-stands-for)
- [安装gulp与gulp-cli的区别（中文解释）](http://feizhaojun.com/?p=570)

### 2.2 安装gulp依赖（可选）
若`package.json`的devDependencies属性里有gulp，并且已执行`npm install`命令，可跳过此步。

若`package.json`的devDependencies属性里没有gulp，则需要进入本地项目所在目录，执行如下命令

    $ npm install --save-dev gulp

### 2.3 创建gulpfile文件
进入本地项目所在目录，创建一个`gulpfile.js`的文件，包含以下内容

    var gulp = require('gulp');

    gulp.task('default', function() {
      // place code for your default task here
    });

### 2.4 测试gulp命令
进入本地项目所在目录，执行如下命令

    $ gulp

### 2.5 学习