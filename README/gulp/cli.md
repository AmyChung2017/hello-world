# Gulp CLI 命令行

## 1. 参数标记

### 1.1 -v 或者 --version
会显示全局和项目本地所安装的gulp版本号

    $ gulp -v

或者

    $ gulp --version

### 1.2 --cwd <dir path>
手动指定CWD定义gulpfile查找的位置，此外，所有的相应的依赖（require）会从这里开始计算相对路径。

假设有目录结构如下，当前所在目录hello-world

    /hello-world
        /gulpfile-list
            /project1
            /project2

使用如下命令

    $ gulp --cwd gulpfile-list/project1

### 1.3 --gulpfile <gulpfile path>
手动指定一个gulpfile的路径，这在你有很多个gulpfile的时候很有用。这也会将CWD设置到该gulpfile所在目录。

> CWD: Current Working Directory 当前工作目录

假设除了`gulpfile.js`外还有一个`gulpfile-test.js`的文件，想要执行`gulpfile-test.js`文件下的default任务

    $ gulp --gulpfile gulpfile-test.js

### 1.4 --color
强制gulp和gulp插件显示颜色，即便没有颜色支持

    $ gulp --color

### 1.5 --no-color
强制不显示颜色，即便检测到有颜色支持

    $ gulp --no-color

### 1.6 -T 或者 --tasks
会显示所指定gulpfile的task依赖树

    $ gulp -T

或者

    $ gulp --tasks

### 1.7 --tasks-simple
会以纯文本的方式显示所载入的gulpfile中的task列表

    $ gulp --tasks-simple

### 1.8 --silent
禁止所有的gulp日志

### 1.9 --require
将会在执行之前reqiure一个模块。这对于一些语言编译器或者需要其他应用的情况来说来说很有用。你可以使用多个`--require`

# 参考文章
1. [gulp 命令行（CLI）文档 - Gulp中文网](http://www.gulpjs.com.cn)
2. [指定一个新的 cwd (当前工作目录) - Gulp中文网](http://www.gulpjs.com.cn/docs/recipes/specifying-a-cwd/)

