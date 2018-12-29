# https

## 链接

- [使用 SSL 证书保护网站的访问](https://dearb.me/archive/2015-03-23/use-ssl-certificates-to-protect-your-website-visitors-data/) SSL扫盲
- [FreeSSL.org](https://freessl.org/) FreeSSL.org 一个申请免费HTTPS证书的网站.html
- [Let's Encrypt](https://letsencrypt.org/)
- [acme.sh](https://github.com/Neilpang/acme.sh) `acme.sh` 实现了 acme 协议, 可以从 letsencrypt 生成免费的证书.
- [CSR Generator](https://ym.github.io/jscsrgen/)
- [获取每日免费SSL](https://ssl.ni-co.moe/ssl/create/free.html) 获取每日免费SSL

## 生成文件

首先，确保你有key.pem和cert.pem文件。您可以使用以下命令生成它们：

这将生成一个证书密钥对，它将有效期约10年（准确地说是3650天）。

```shell
~ openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
Generating a 2048 bit RSA private key
..................................+++
...............................................................................+++
writing new private key to 'key.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) []:CN
State or Province Name (full name) []:Beijing
Locality Name (eg, city) []:Beijing
Organization Name (eg, company) []:local.me
Organizational Unit Name (eg, section) []:local.me
Common Name (eg, fully qualified host name) []:Aiden Zou
Email Address []:aidenzou@gmail.com
```

## 启动

`http-server -g -S -K ~/key.pem -C ~/cert.pem`
