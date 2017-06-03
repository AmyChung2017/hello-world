# Node-glob API

## 1. 简介
node的glob模块允许你使用*等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则的文件.

这个glob工具基于javascript。它使用了`minimatch`库来进行匹配。

## 2. 安装使用

### 2.1 使用npm安装

    $ npm install --save-dev glob

### 2.2 在文件中引用

    var glob = require("glob");

    // options is optional
    glob("**/*.js", options, function (er, files) {
      // files is an array of filenames.
      // If the `nonull` option is set, and nothing
      // was found, then files is ["**/*.js"]
      // er is an error object or null.
    });

## 3. 语法

### 3.1 *
匹配该路径段中0个或多个任意字符。

    glob("gulpfile-list/*/*.js",function (er, files) {
        console.log(files)
    });

### 3.2 ?
匹配该路径段中1个任意字符。

    glob("gulpfile-list/*/?.js",function (er, files) {
        console.log(files)
    });

### 3.3 [...]
匹配该路径段中在指定范围内的字符，类似正则表达式。
如果第1个字符是!或者^，会匹配不在指定范围内的字符。

    glob("gulpfile-list/[p]*/*.js", function (er, files) {
        console.log(files);
    });

### 3.4 !(pattern|pattern|pattern)
匹配不包含任何模型的路径。

    glob("gulpfile-list/*/!(f*|g*).js", function (er, files) {
        console.log(files);
    });

### 3.5 ?(pattern|pattern|pattern)
匹配多个模型中的0个或任意1个，必须精确匹配。

    glob("gulpfile-list/*/?(first|gulpfile).js", function (er, files) {
        console.log(files);
    });

### 3.6 +(pattern|pattern|pattern)
匹配多个模型中的1个或多个的组合，必须有一个，为空不匹配。

    glob("gulpfile-list/**/+(first|copy).js", function (er, files) {
        console.log(files);
    });

### 3.7 *(a|b|c)
匹配多个模型的0个或多个或任意个的组合。|前后不能有空格。

    glob("gulpfile-list/**/*(first|copy).js", function (er, files) {
        console.log(files);
    });

### 3.8 @(pattern|pat*|pat?erN)
匹配多个模型中的任意1个，必须精确匹配模型，不可以为空。

    glob("gulpfile-list/**/@(first|*test).js", function (er, files) {
        console.log(files);
    });

### 3.9 **
可以匹配任何内容。
不仅匹配路径中的某一段，还可以匹配'a/b/c'这样带有'/'的内容，所以，它还可以匹配子文件夹下的文件。

    glob("gulpfile-list/**/*.js",function (er, files) {
        console.log(files)
    });

## 4. options属性

### 4.1 matchBase
设置为`matchBase:true`以后，在当前目录下所有的文件夹和子文件夹里寻找匹配的文件。

    glob("@(first|*test).js", {matchBase:true}, function (er, files) {
        console.log(files);
    });

### 4.2 nonull
当glob没有获取到任何匹配的文件是，并不会像shell里那样返回模型本身，files参数返回的是一个空数组。
如果需要让files返回的是模型本身，需要设置`nonull:true`。

    glob("gulpfile-list/*.js",{nonull:true}, function (er, files) {
        console.log(files);
    });

### 4.3 dot
默认任何模型都不会匹配以.开头的文件名或者目录的路径，除非该模型是以.开头。
例子，模型`a/.*/c`会匹配在`a/.b/c`目录下的文件，但模型`a/*/c`并不会匹配该目录下的文件。
可以设置`dot:true`，使得匹配以.开头的文件名或者目录的路径。

    glob("gulpfile-list/*/*.js",{dot:true}, function (er, files) {
        console.log(files);
    });

# 参考文章
1. [Glob](https://github.com/isaacs/node-glob)
2. [node-glob学习](https://www.bbsmax.com/A/q4zVLOW5Kr/)
