# vscode

## 安装/卸载 shell

F1 -> >shell

查看帮助 `code -h`

### -a

添加一个文件到活动窗口, 可以是文件也可以是文件夹
比如 code -a pages
code -a 1.txt 这种会创建一个 1.txt 文件到当前活动窗口

### -n

创建一个新的窗口

### -r

复用窗口

### —user-data-dir

指定保留用户数据的目录，在以 root 身份运行时非常有用。
(这个理解为创建一个新的 vscode，只不过你的个人数据会存放在你指定的那个文件夹里。)

### -w

可以使用--wait 命令行中的参数启动 VS Code，以等待打开的实例关闭。

具体用法

git config --global core.editor "code —wait”&&
git config --global -e
[diff]
tool = default-difftool
[difftool "default-difftool"]
cmd = code --wait --diff $LOCAL$REMOTE

## 常用操作

打开当前文件夹 `code .`
用已经打开的窗口打开文件(窗口的复用) `code -r .`
打开指定文件指定行 `code -r -g package.jspn:10`
比较文本：如果 a 文件和 b 文件不存在的话，会创建他们 `code -r -d project/a/package.json project/b/package.json`

vscode 也支持管道运算符 `ll -h | code -`, `top | code -`

## 快捷键

在文件，符号，代码之间跳转

- 在打开的文件之间跳转 `ctrl+tab`
- 在最近打开的文件之间跳转 `cmd+p`
  - 在此基础上，可以用 `cmd+enter` 在一个新编辑窗口打开文件
- 在行之间跳转 `ctrl+g` 出现行框
- 跳转指定文件的指定行 `cmd+p` 输入文件名：行号

符号跳转

- 调出所有符号 `cmd+shift+o`
- 在 `@` 之后输入 `：` 可以将符号分类

上述行跳转和符号跳转，也可以这样操作
`cmd+p` 出现框之后，输入 `：` 或者 输入 `@` 能达到
相同效果
