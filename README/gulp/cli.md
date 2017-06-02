# Gulp CLI 命令行

## 1. 参数标记

### 1.1 -v 或者 --version
会显示全局和项目本地所安装的 gulp 版本号

    $ gulp -v

或者

    $ gulp --version

### 1.2 --gulpfile <gulpfile path>
手动指定一个 gulpfile 的路径，这在你有很多个 gulpfile 的时候很有用。这也会将 CWD 设置到该 gulpfile 所在目录。

> CWD: Current Working Directory 当前工作目录

假设除了`gulpfile.js`外还有一个`gulpfile-test.js`的文件，想要执行`gulpfile-test.js`文件下的default任务

    $ gulp --gulpfile gulpfile-test.js



