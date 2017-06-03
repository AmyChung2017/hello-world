# Gulp API

## 1. gulp.src(globs[, options])
输出（Emits）符合所提供的匹配模式（glob）或者匹配模式的数组（array of globs）的文件。

将返回一个[Vinyl files](https://github.com/gulpjs/vinyl-fs)的[stream](https://nodejs.org/api/stream.html)它可以被[piped](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options)到别的插件中。

### 1.1 参数globs

> 类型：String或Array

所要读取的glob或者包含globs的数组。

可以使用node-glob语法，或者直接写文件的路径。

    gulp.src('gulpfile-list/src/*.js')
        .pipe(gulp.dest('gulpfile-list/build/minify'));

- [node-glob语法](https://github.com/isaacs/node-glob)
- [深入学习node-glob](../node-glob/api.md)

### 1.2 可选参数options

> 类型：Object

通过glob-stream所传递给node-glob的参数。

除了glob-stream和node-glob所支持的参数外（不支持`ignore`参数），gulp增加了一些额外的选项参数：

- [glob-stream](https://github.com/gulpjs/glob-stream)
- [深入学习glob-stream](../glob-stream/api.md)

#### 1.2.1 options.buffer

> 类型：Boolean

> 默认值： true

如果该项被设置为false，那么将会以stream方式返回file.contents而不是文件buffer的形式。这在处理一些大文件的时候将会很有用。
**注意：插件可能并不会实现对stream的支持。**

#### 1.2.2 options.read

> 类型：Boolean

> 默认值： true

如果该项被设置为false，那么file.contents会返回空值（null），也就是并不会去读取文件。

#### 1.2.3 options.base

> 类型：String

> 默认值：将会加在glob之前（请看[glob2base](https://github.com/contra/glob2base)）



# 参考文章
1. [gulp API文档 - Gulp中文网](http://www.gulpjs.com.cn/docs/api/)
2. [gulp API docs - Gulp官网](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

