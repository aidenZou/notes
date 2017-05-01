## MAC

- [python DOC](https://docs.python.org/3/)
- [Tornado 中文翻译](http://demo.pythoner.com/itt2zh/)
- [pypi](https://pypi.python.org/pypi)


### 安装 python 3.x
brew install python3

### 升级 3.5

`brew update`

`sudo chown -R $(whoami):admin /usr/local`

`brew upgrade python3`

### 创建虚拟

`pip install virtualenv`

`pyvenv-3.5 ./develop/py35env`

### 模块 install

freeze Output installed packages in requirements format.

`~/develop/py35env/bin/pip3 freeze > requirements.txt`

pip install [options] -r <requirements file> [package-index-options] ...

`~/develop/py35env/bin/pip3 install -r requirements.txt`


## 模块

- [jupyter](https://jupyter.org/)
	`./develop/py35env/bin/pip3 install jupyter`
	`./develop/py35env/bin/jupyter-notebook`
- [ipython](https://pypi.python.org/pypi/ipython)
- [Beautiful](http://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/) 一个可以从HTML或XML文件中提取数据的Python库
- [motor](https://github.com/mongodb/motor) for mongodb(支持异步)
- [Tornado-MySQL](https://github.com/PyMySQL/Tornado-MySQL) PyMySQL fork for Tornado
- [Markdown](http://pythonhosted.org/Markdown/siteindex.html) [扩展](https://pythonhosted.org/Markdown/extensions/index.html) markdown2html
- [misaka](https://github.com/FSX/misaka) markdown2html

- [You-Get](https://github.com/soimort/you-get) 命令行实用程序从网络下载媒体内容（视频，音频，图像）

https://github.com/vmg/sundown

## CentOS

```shell
# 下载Python源(Download Python source)
$wget https://www.python.org/ftp/python/3.5.1/Python-3.5.1.tar.xz

# 提取Python包(Extract Python package):
$tar xf Python-3.5.1.tar.xz

$xz -d Python-3.5.1.tar.xz

$cd Python-3.5.1

# 编译的Python(Compile Python):
$./configure

# Make:
$make

# 安装(Install):
$make install

# 检查Python版本(Check Python version):
$which python3.5
/usr/local/bin/python3.5
```


## ubuntu

apt-get install libssl-dev

apt-get install python3-pip

---

apt-cache search pyvenv
python3.4-venv - Interactive high-level object-oriented language (pyvenv binary, version 3.4)
python3.5-venv - Interactive high-level object-oriented language (pyvenv binary, version 3.5)

apt-cache search pyvenv

apt-get install python3.5-dev


### Flask

####安装

```shell
pip3 install Flask
```

#### DOC

- [doc](http://flask.pocoo.org/) [doc](http://dormousehole.readthedocs.org/en/latest/)


### Tornado

- [Tornado DOC](http://demo.pythoner.com/itt2zh/index.html)
- [Tornado DOC](http://www.tornadoweb.org/)
- [Tornado DOC zh](http://www.tornadoweb.cn/)


### 部署

ngingx + gunicorn


source py35env/bin/activate

deactivate


ngingx + uwsgi


supervisor

---
ps -ef |grep super


apt-get install supervisor

/usr/bin/supervisord    --supervisor服务守护进程
/usr/bin/supervisorctl  --supervisor服务控制程序，比如：status/start/stop/restartxx等
/etc/supervisor/supervisord.conf   --配置文件，定义服务名称以及接口等等

supervisorctl -c /etc/supervisor/supervisord.conf
restart all


supervisord
supervisorctl reload


---

ngin

/etc/nginx/conf.d/nginx.conf


### Web服务

python -m SimpleHTTPServer


