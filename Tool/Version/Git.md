<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:10:06
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-02-28 19:59:37
 * @Description:
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Tool\Git.md
-->

#### Git 报错： Failed to connect to github.com port 443 解决方案

两种情况：

1. 第一种情况自己有 VPN，网页可以打开 github。说明命令行在拉取/推送代码时并没有使用 VPN 进行代理。
2. 第二种情况没有 VPN，这时可以去某些网站上找一些代理 ip + port。

解决办法：配置 http 代理 Windows、Linux、Mac OS 中 git 命令相同：

配置 socks5 代理

```
git config --global http.proxy socks5 127.0.0.1:7890
git config --global https.proxy socks5 127.0.0.1:7890
```

配置 http 代理

```
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```

注意：

命令中的主机号（127.0.0.1）是使用的代理的主机号（自己电脑有 vpn 那么本机可看做访问 github 的代理主机），即填入 127.0.0.1 即可，否则填入代理主机 ip（就是网上找的那个 ip）。

命令中的端口号（7890）为代理软件（代理软件不显示端口的话，就去 Windows 中的代理服务器设置中查看）或代理主机的监听 IP，可以从代理服务器配置中获得，否则填入网上找的那个端口 port。

查看代理命令

```
git config --global --get http.proxy
git config --global --get https.proxy
```

取消代理命令

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```