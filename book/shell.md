#


- [spf13-vim](https://github.com/spf13/spf13-vim)

创建软连接
`
ln -s ~/develop/node/node_modules .
`

### MAC

brew install node
brew install watchman
brew install flow

定期运行
brew update && brew upgrade


### NODE

npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global


### SHELL

netstat -ant | grep LISTEN

```shell
netstat -lntp

tcp        0      0 0.0.0.0:3306                0.0.0.0:*                   LISTEN      1115/mysqld


lsof -n -i4TCP:8080

mac 如何查看本机8000端口被占用了

lsof -i -P | grep -i "8000"


ps -ef|grep 1115

mysql     1115   986  0 Mar11 ?        00:00:18 /usr/libexec/mysqld --basedir=/usr --datadir=/var/lib/mysql --user=mysql --log-error=/var/lib/mysql/iZ28506snwnZ.err --pid-file=/var/run/mysqld/mysqld.pid --socket=/tmp/mysql.sock --port=3306
root     13848 13809  0 16:48 pts/0    00:00:00 grep 1115

```


su - develop



### Ubuntu

```shell
# 添加用户组
groupadd dev
# 添加用户
sudo useradd -m -s /bin/bash -g dev hamlet
# 设置密码
passwd hamlet
# 切换用户 到 hamlet
su hamlet
# 切换用户 到 root
su
```



## SSH

### SSH免密码登录

~ ssh-keygen

~ cat .ssh/id_rsa.pub

~ .ssh/authorized_keys

authorized_keys的权限要是600


## Shell脚本

shell 程序必须以下面的行开始（必须方在文件的第一行）

```shell
#!/bin/sh
```

使脚本可执行

```shell
chmod +x filename # 使脚本可执行
```

./filename 来执行您的脚本

### 变量

```shell
name='aiden' # 给变量赋值
echo $name # 取出变量值(加一个美元符号 $)

# 变量名与其他文字混淆
echo "this i sthe $nameZou" # shell会去搜索变量 nameZou的值
echo "this is the ${name}Zou" # 使用花括号来告诉 shell我们要打印的是 name变量

echo "What is you name?"
read NAME # 输入
echo "age: $NAME"
```

### shell命令

1. Unix 命令

虽然在shell脚本中可以使用任意的unix命令，但是还是由一些相对更常用的命令。这些命令通常是用来进行文件和文字操作的。

常用命令语法及功能

echo "some text": 将文字内容打印在屏幕上
ls: 文件列表
wc –l filewc -w filewc -c file: 计算文件行数计算文件中的单词数计算文件中的字符数
cp sourcefile destfile: 文件拷贝
mv oldname newname : 重命名文件或移动文件
rm file: 删除文件
grep 'pattern' file: 在文件内搜索字符串比如：grep 'searchstring' file.txt
cut -b colnum file: 指定欲显示的文件内容范围，并将它们输出到标准输出设备比如：输出每行第5个到第9个字符cut -b5-9 file.txt千万不要和cat命令混淆，这是两个完全不同的命令
cat file.txt: 输出文件内容到标准输出设备（屏幕）上
file somefile: 得到文件类型
read var: 提示用户输入，并将输入赋值给变量
sort file.txt: 对file.txt文件中的行进行排序
uniq: 删除文本文件中出现的行列比如： sort file.txt | uniq
expr: 进行数学运算Example: add 2 and 3expr 2 "+" 3
find: 搜索文件比如：根据文件名搜索find . -name filename -print
tee: 将数据输出到标准输出设备(屏幕) 和文件比如：somecommand | tee outfile
basename file: 返回不包含路径的文件名比如： basename /bin/tux将返回 tux
dirname file: 返回文件所在路径比如：dirname /bin/tux将返回 /bin
head file: 打印文本文件开头几行
tail file : 打印文本文件末尾几行
sed: Sed是一个基本的查找替换程序。可以从标准输入（比如命令管道）读入文本，并将结果输出到标准输出（屏幕）。该命令采用正则表达式（见参考）进行搜索。不要和shell中的通配符相混淆。比如：将linuxfocus 替换为 LinuxFocus ：cat text.file | sed 's/linuxfocus/LinuxFocus/' > newtext.file
awk: awk 用来从文本文件中提取字段。缺省地，字段分割符是空格，可以使用-F指定其他分割符。cat file.txt | awk -F, '{print $1 "," $3 }'这里我们使用，作为字段分割符，同时打印第一个和第三个字段。如果该文件内容如下： Adam Bor, 34, IndiaKerry Miller, 22, USA命令输出结果为：Adam Bor, IndiaKerry Miller, USA

2. 概念: 管道, 重定向和 backtick

3. 流程控制



npm ls -g --depth=1 2>/dev/null | grep generator-


