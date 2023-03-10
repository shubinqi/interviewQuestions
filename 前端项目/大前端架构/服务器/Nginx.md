<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-05 23:49:45
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-11 00:39:09
 * @Description: Nginx 面试题（38题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端项目\桌面端\Nginx.md
-->

#### 什么是 Nginx？有哪些优缺点？

Nginx 是一款高性能、可扩展的 Web 服务器和反向代理服务器，它采用事件驱动的异步非阻塞处理模式，能够支持高并发和高流量的网站和应用程序。

优点：

1. **高性能**：Nginx 采用异步非阻塞的处理模式，能够高效处理大量的并发连接和请求，具有很高的吞吐量和低的响应延迟。
1. **轻量级**：Nginx 的代码量比较少，占用内存少，启动速度快。
1. **可扩展性**：Nginx 支持动态模块加载，能够通过第三方模块扩展其功能。
1. **配置简单**：Nginx 的配置文件语法简单易懂，配置灵活。

缺点：

1. 不支持直接解析动态脚本语言，如 PHP，需要与 PHP 解析器结合使用。
1. 对于一些复杂的 HTTP 应用，如 Web 服务化的 RPC，Nginx 需要使用第三方模块才能支持。
1. 对于一些高级的负载均衡算法，如哈希 IP，需要使用第三方模块来实现。

总的来说，Nginx 是一款高性能、可扩展、轻量级、易配置的 Web 服务器和反向代理服务器，特别适合用于高并发和高流量的网站和应用程序。

#### Nginx 应用场景？

Nginx 是一种高性能的 Web 服务器和反向代理服务器，它可以用于以下应用场景：

1. **静态资源服务**：Nginx 可以快速、高效地提供静态文件，如 HTML、CSS、JavaScript、图像等。
1. **反向代理**：Nginx 可以作为反向代理服务器，将客户端请求转发到后端服务器，从而实现负载均衡、高可用性、高性能等功能。
1. **缓存加速**：Nginx 可以将经常被请求的静态内容缓存到内存中，从而提高响应速度和并发性能。
1. **SSL/TLS 终端代理**：Nginx 可以作为 SSL/TLS 终端代理，将加密请求从客户端转发到后端服务器。
1. **虚拟主机**：Nginx 可以支持多个虚拟主机，将多个域名或 IP 地址映射到同一台服务器上，从而实现资源共享和隔离。
1. **WebSocket 支持**：Nginx 可以支持 WebSocket 协议，用于实时通信、在线游戏等应用场景。
1. **流媒体服务**：Nginx 可以用于流媒体服务，如视频直播、音频点播等。

总之，Nginx 可以用于提供高性能、可靠、安全的 Web 服务，是现代 Web 应用架构中不可或缺的一部分。

#### Nginx 怎么处理请求的？

Nginx 处理请求的过程可以简单描述为以下几个步骤：

1. **接收请求**：Nginx 接收客户端发来的 HTTP 请求。
1. **匹配请求**：Nginx 根据配置文件中的规则，匹配请求的 URI 和请求方法。
1. **处理请求**：如果请求匹配成功，Nginx 会执行相应的操作，如返回静态文件、反向代理请求到后端服务器、返回缓存的内容等。
1. **日志记录**：Nginx 会记录请求的访问日志，包括请求时间、客户端 IP 地址、请求 URI、响应状态码等信息。
1. **返回响应**：Nginx 将处理结果返回给客户端，包括 HTTP 响应头和响应体。

在处理请求的过程中，Nginx 采用了异步非阻塞的方式，即可以同时处理多个请求，提高了性能和吞吐量。同时，Nginx 还提供了一系列的模块和插件，可以扩展其功能，满足不同场景下的需求。

#### Nginx 是如何实现高并发的？

Nginx 实现高并发的主要原因有以下几个：

1. **异步非阻塞 IO 模型**：Nginx 采用异步非阻塞 IO 模型，可以在单个进程中处理大量的并发请求，避免了多进程、多线程间的切换和通信开销，提高了系统的吞吐量和性能。
1. **多进程/多线程架构**：Nginx 的多进程或多线程架构可以利用多核 CPU 的计算资源，进一步提高并发能力。
1. **事件驱动机制**：Nginx 的事件驱动机制可以监控和处理网络事件，如客户端请求、后端服务器响应等，从而更快地响应请求，减少等待时间。
1. **集成各种高效的模块**：Nginx 内置了一些高效的模块，如 gzip、SSL、proxy 等，这些模块可以在不降低性能的情况下提供更多的功能。
1. **负载均衡机制**：Nginx 作为反向代理服务器，可以将请求分发到多台后端服务器，从而实现负载均衡，进一步提高并发能力和可用性。
1. **高效的缓存机制**：Nginx 可以将静态文件和动态内容缓存到内存中，从而减少后端服务器的请求，提高响应速度和并发能力。

综上所述，Nginx 采用了一系列高效的技术和机制，能够快速、高效地处理大量并发请求，满足现代 Web 应用对高性能和高并发的需求。

#### 什么是正向代理？

正向代理是一种网络代理方式，其中客户端通过代理服务器访问互联网上的资源，而不是直接连接到该资源。代理服务器在客户端和服务器之间充当中介，并将客户端请求转发给服务器。正向代理可以用于访问受限制的网络资源，保护客户端的隐私，提高访问速度，以及在企业网络中控制对外部资源的访问等方面发挥作用。

举个例子，当您在访问被墙的网站时，可以使用正向代理来绕过封锁。您可以在自己的计算机或局域网中设置一个代理服务器，然后在浏览器或其他应用程序中设置代理服务器的地址和端口。当您访问被封锁的网站时，请求会先发送到代理服务器，代理服务器会将请求转发到目标网站，获取响应后再将响应返回给您的浏览器。这样就能够成功访问被墙的网站了。

#### 什么是反向代理？

反向代理是一种网络代理方式，与正向代理不同，它是在服务端使用的一种代理方式。反向代理服务器将客户端的请求转发到一个或多个后端服务器，然后将从后端服务器返回的响应返回给客户端。反向代理隐藏了后端服务器的真实地址，客户端只知道反向代理服务器的地址，并且可以对后端服务器进行负载均衡，从而提高系统的性能和可靠性。

举个例子，假设有一个高流量的网站，为了提高访问速度和可靠性，该网站可以使用反向代理来处理客户端的请求。反向代理服务器可以将请求分发到多台后端服务器上，从而减轻单个服务器的负载压力，并可以在某个后端服务器故障时自动切换到其他可用的后端服务器。客户端只需要知道反向代理服务器的地址，而不需要知道实际处理请求的后端服务器地址，这样可以保护后端服务器的安全。

#### 反向代理服务器的优点是什么？

反向代理服务器有以下几个优点：

1. **负载均衡**：反向代理服务器可以将客户端请求分发到多台后端服务器上，从而平衡服务器的负载，提高系统的性能和可靠性。
1. **安全性**：反向代理服务器可以隐藏后端服务器的真实地址，只向客户端暴露自己的地址，从而提高系统的安全性，防止攻击者直接攻击后端服务器。
1. **缓存**：反向代理服务器可以缓存静态资源，如图片、CSS、JS 等，从而减轻后端服务器的负载，提高系统的性能。
1. **SSL 终止**：反向代理服务器可以作为 SSL 终止点，解密客户端和后端服务器之间的 SSL 通信，从而减轻后端服务器的负载。
1. **灰度发布**：反向代理服务器可以根据一定的规则将一部分用户的请求转发到新版本的服务器上，以便测试新版本的稳定性和性能，从而实现灰度发布。

总的来说，反向代理服务器可以提高系统的性能、可靠性和安全性，是构建高性能 Web 应用程序的重要组成部分。

#### Nginx 目录结构有哪些？

Nginx 的目录结构一般如下：

1. **/etc/nginx/**: Nginx 的配置文件目录，包含 Nginx 主配置文件 nginx.conf 和其他配置文件。
1. **/usr/share/nginx/**: Nginx 的默认文件目录，包含 Nginx 的默认主页、错误页面等静态文件。
1. **/var/log/nginx/**: Nginx 的日志目录，包含 Nginx 的访问日志、错误日志等。
1. **/var/lib/nginx/**: Nginx 的运行目录，包含 Nginx 的临时文件和运行状态文件。
1. **/usr/sbin/nginx**: Nginx 可执行文件的位置，通常使用此命令来启动、停止和重启 Nginx。
1. **/usr/local/nginx**: Nginx 的默认安装目录，包含 Nginx 的可执行文件、模块文件和其他相关文件。

注意：这只是一般情况下的目录结构，具体的目录结构会根据 Nginx 的安装方式、版本和操作系统的不同而有所不同。

#### Nginx 配置文件 nginx.conf 有哪些属性模块？

Nginx 的配置文件 nginx.conf 主要由两个部分组成：全局块和 http 块。

全局块中定义的属性模块适用于整个 Nginx 服务器，包括全局配置、事件模块、邮件模块等。具体常用的属性模块包括：

1. **worker_processes**: 定义工作进程的数量，一般设置为 CPU 的核心数。
1. **error_log**: 定义错误日志的路径和级别。
1. **pid**: 定义进程 ID 文件的路径。
1. **events**: 定义事件模块相关的属性，如 worker_connections 等。
1. **http**: 定义 http 模块相关的属性，包括 server、upstream、location 等。

http 块中定义的属性模块适用于 HTTP 协议相关的配置，包括 server、location、upstream、proxy 等。具体常用的属性模块包括：

1. **server**: 定义虚拟主机的属性，如 listen、server_name、access_log 等。
1. **location**: 定义 URL 路径的属性，如 root、index、proxy_pass 等。
1. **upstream**: 定义后端服务器的属性，如 server、keepalive 等。
1. **proxy**: 定义代理服务器的属性，如 proxy_set_header、proxy_pass 等。

除了以上常用的属性模块外，Nginx 还提供了许多其他的模块，如 SSL 模块、Gzip 模块、Cache 模块、FastCGI 模块等，用户可以根据自己的需求选择合适的模块来扩展 Nginx 的功能。

#### cookie 和 session 区别？

Cookie 和 Session 都是 Web 开发中用于保存用户状态的机制，它们的主要区别如下：

1. **存储位置不同**：Cookie 保存在客户端浏览器中，而 Session 保存在服务器端。
1. **安全性不同**：由于 Cookie 存储在客户端浏览器中，因此容易被攻击者截获并篡改，从而引发安全问题。而 Session 存储在服务器端，因此相对安全一些。
1. **存储数据的类型不同**：Cookie 只能存储字符串类型的数据，而 Session 可以存储任何类型的数据，包括对象、数组等。
1. **生命周期不同**：Cookie 可以设置一个过期时间，当到达过期时间后，客户端浏览器会自动删除该 Cookie。而 Session 的生命周期是与用户会话相关的，一般会在用户关闭浏览器或者一段时间没有操作后自动过期。
1. **跨域访问不同**：Cookie 可以通过设置域名和路径来实现跨域访问，而 Session 只能在同一域名下共享。

综上所述，Cookie 主要用于保存一些较小、不敏感的数据，如用户的偏好设置、浏览记录等；而 Session 主要用于保存一些敏感数据，如用户登录状态、购物车信息等。在实际应用中，可以根据不同的需求来选择使用 Cookie 还是 Session。

#### 为什么 Nginx 不使用多线程？

Nginx 采用的是事件驱动的异步 I/O 模型，使用单线程或少量线程处理大量并发请求，相比于传统的多线程/多进程模型，它具有以下几个优点：

1. **资源占用少**：采用单线程/少量线程模型，避免了创建和维护大量线程/进程所带来的开销，可以充分利用系统资源。
1. **高并发能力**：采用异步 I/O 模型，可以在一个线程内处理多个并发请求，提高并发处理能力。
1. **可靠性高**：单线程模型避免了多线程/进程之间的同步和通信问题，避免了出现死锁、资源竞争等问题，提高了系统的可靠性。
1. **扩展性好**：单线程/少量线程模型更易于扩展和管理，不需要考虑线程/进程之间的同步和通信问题，可以更加灵活地进行部署和维护。

综上所述，Nginx 采用单线程/少量线程模型主要是为了提高性能和可靠性，并且更易于扩展和管理。而采用多线程/多进程模型虽然也可以处理并发请求，但是带来的资源开销和同步通信问题会导致系统性能和可靠性下降。

#### nginx 和 apache 的区别？

Nginx 和 Apache 都是常用的 Web 服务器软件，它们的主要区别如下：

1. **事件驱动模型**：Nginx 采用的是事件驱动的异步 I/O 模型，可以在单线程或少量线程内处理大量并发请求，而 Apache 采用的是多进程或多线程模型，每个请求都会创建一个进程或线程，相对而言，Nginx 具有更高的并发处理能力和更少的资源占用。
1. **配置语法**：Nginx 的配置语法相对简洁、清晰，易于维护和扩展，而 Apache 的配置语法相对复杂，需要较长时间的学习和使用。
1. **动态模块支持**：Apache 支持动态模块的动态加载和卸载，而 Nginx 需要重新编译才能支持新的模块。
1. **静态文件处理**：Nginx 在处理静态文件时，效率相对更高，而 Apache 则擅长处理动态请求和脚本语言。
1. **跨平台支持**：Apache 在各种平台上都有较好的支持，而 Nginx 在 Windows 平台上的支持相对较弱。

综上所述，Nginx 相对于 Apache，具有更高的并发处理能力、更少的资源占用、更简洁的配置语法和更高的静态文件处理效率，而 Apache 则擅长处理动态请求和脚本语言，并且具有良好的跨平台支持和动态模块支持。因此，在选择 Web 服务器时，应该根据实际需求来选择合适的软件。

#### 什么是动态资源、静态资源分离？为什么要做动、静分离？

动态资源和静态资源分离是指将 Web 应用中的动态资源（如 PHP、JSP、ASP 等）和静态资源（如 HTML、CSS、JavaScript、图片、音视频等）分别部署在不同的服务器上，以便分别处理这些资源。通常，静态资源由 Web 服务器（如 Nginx、Apache）处理，而动态资源由应用服务器（如 Tomcat、PHP-FPM）处理。

动、静分离的优点如下：

1. **提高性能**：将动态资源和静态资源分别处理可以避免静态资源请求被动态资源请求所阻塞，提高了 Web 应用的并发处理能力，缩短了请求响应时间，降低了 Web 服务器的负载。
1. **减少资源占用**：将静态资源交由 Web 服务器处理，可以减少应用服务器的负载，避免不必要的资源占用，提高了系统的可靠性和稳定性。
1. **便于扩展**：将动态资源和静态资源分别处理，可以更加灵活地进行扩展和管理，方便进行负载均衡和集群部署。

需要注意的是，动、静分离也存在一些缺点，如需要进行复杂的部署和管理，可能会增加系统复杂度和运维难度。因此，在选择动、静分离方案时，需要根据实际情况进行权衡和选择。

#### Nginx 怎么做的动静分离？

Nginx 可以通过配置实现动静分离。一般而言，Nginx 使用 location 指令来实现 URL 匹配和请求转发，可以根据 URL 的不同，将请求分发到不同的服务器上处理。

下面是一个简单的动静分离的配置示例：

```
http {
    # 静态资源缓存时间设置
    expires 1h;

    # 静态资源请求处理
    location /static/ {
        alias /data/static/;
        index index.html;
    }

    # 动态资源请求处理
    location / {
        proxy_pass http://backend_server;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

上述配置中，静态资源请求的 URL 以/static/开头，使用 alias 指令将请求转发到/data/static/目录下的静态资源文件，同时设置了 expires 指令，将静态资源的缓存时间设置为 1 小时。动态资源请求的 URL 不是以/static/开头的，使用 proxy_pass 指令将请求转发到后端服务器处理。同时，使用 proxy_set_header 指令设置请求头，用于向后端服务器传递一些关键信息，如 Host、X-Real-IP、X-Forwarded-For 等。

通过这样的配置，Nginx 可以将静态资源和动态资源请求分别处理，从而实现了动静分离。

#### 什么是 CDN 服务？

CDN（Content Delivery Network，内容分发网络）服务是一种分布式网络架构，通过在全球各地部署服务器节点，将静态和动态资源缓存到离用户最近的服务器上，从而提高用户访问网站的速度和可靠性的服务。

CDN 服务的优点如下：

1. **提高网站性能**：CDN 服务将静态资源缓存在离用户最近的服务器上，从而提高了访问速度和性能，减少了网络延迟和带宽占用，提高了用户体验和满意度。
1. **减轻源站压力**：CDN 服务可以将用户请求的流量分担到多个服务器节点上，从而减轻了源站的压力，降低了源站宕机和故障的风险，提高了网站的稳定性和可靠性。
1. **节约成本**：CDN 服务可以帮助企业节省带宽和服务器资源成本，降低了运维成本，同时提高了用户访问的效率和体验。
1. **支持安全加速**：CDN 服务可以支持安全加速，通过加密传输、防御 DDoS 攻击等技术手段，提高了网站的安全性和可靠性。
1. **支持全球覆盖**：CDN 服务可以在全球范围内部署节点，支持全球覆盖，可以满足企业全球化业务的需求。

综上所述，CDN 服务可以帮助企业提高网站性能、减轻源站压力、节约成本、提高安全性和支持全球化业务等方面带来诸多优势。

#### Nginx 负载均衡的算法怎么实现的？策略有哪些？

Nginx 提供了多种负载均衡算法，可以根据具体的场景和需求选择适合的算法。

下面是 Nginx 常见的负载均衡算法及其实现方式：

1. **轮询算法**（Round Robin）：将请求轮流分配给每个后端服务器处理。
   实现方式：使用 upstream 模块的 ip_hash 指令。

2. **IP 哈希算法**（IP Hash）：根据请求的 IP 地址计算出哈希值，并将请求分配给对应的后端服务器处理。
   实现方式：使用 upstream 模块的 ip_hash 指令。

3. **最少连接数算法**（Least Connections）：将请求分配给当前连接数最少的后端服务器处理。
   实现方式：使用 upstream 模块的 least_conn 指令。

4. **加权轮询算法**（Weighted Round Robin）：根据每个后端服务器的权重，将请求分配给不同权重的后端服务器处理。
   实现方式：使用 upstream 模块的 weight 指令。

5. **加权最少连接数算法**（Weighted Least Connections）：将请求分配给连接数最少且权重最高的后端服务器处理。
   实现方式：结合 least_conn 和 weight 指令。

通过以上负载均衡算法的实现，Nginx 可以有效地分配请求并将流量均衡地分配到多个后端服务器上，提高了应用的可用性和性能。根据不同的应用场景和需求，可以选择不同的负载均衡算法。

#### 如何用 Nginx 解决前端跨域问题？

Nginx 可以通过配置来解决前端跨域问题。以下是一种常见的跨域解决方案：

在 Nginx 配置文件中添加以下配置：

```
server {
    listen 80;
    server_name your-domain.com;

    location / {
        # 允许跨域请求的域名
        add_header 'Access-Control-Allow-Origin' '*';

        # 允许的请求方法
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';

        # 允许的请求头
        add_header 'Access-Control-Allow-Headers' 'X-Requested-With, Content-Type';

        # 跨域请求时是否发送Cookie
        add_header 'Access-Control-Allow-Credentials' 'true';

        # 预检请求的有效时间
        add_header 'Access-Control-Max-Age' 1728000;

        # 跨域请求时允许发送的Header列表
        add_header 'Access-Control-Allow-Headers' 'Authorization, Origin, X-Requested-With, Content-Type, Accept';

        # 处理预检请求
        if ($request_method = 'OPTIONS') {
            return 204;
        }

        # 处理实际请求
        proxy_pass http://backend_server;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

在前端代码中添加以下请求头：

```
xhrFields: {
    withCredentials: true
}
```

通过以上配置，Nginx 可以将允许跨域请求的相关配置添加到响应头中，从而解决前端跨域问题。需要注意的是，在处理跨域请求时，需要在请求头中添加 withCredentials: true，以便将 Cookie 等信息发送到服务器端。

#### Nginx 虚拟主机怎么配置？

在 Nginx 中配置虚拟主机（Virtual Host）可以实现在同一台服务器上运行多个网站，并使它们能够使用不同的域名或 IP 地址进行访问。以下是一个简单的 Nginx 虚拟主机配置示例：

编辑 Nginx 配置文件（一般是/etc/nginx/nginx.conf）：

```
http {
    # ... 其他配置 ...

    # 定义虚拟主机1
    server {
        listen 80;
        server_name www.example1.com;

        root /var/www/example1;
        index index.html;
    }

    # 定义虚拟主机2
    server {
        listen 80;
        server_name www.example2.com;

        root /var/www/example2;
        index index.html;
    }
}
```

在上面的配置中，定义了两个虚拟主机，分别使用不同的域名进行访问，指定了虚拟主机的根目录和默认文件。

重启 Nginx 服务器，使配置生效：

```
sudo service nginx restart
```

这样就完成了 Nginx 虚拟主机的配置。当访问www.example1.com时，Nginx会将请求转发到/var/www/example1目录下，并返回index.html文件；当访问www.example2.com时，Nginx会将请求转发到/var/www/example2目录下，并返回index.html文件。

#### Nginx 配置文件中 location 的作用是什么？

在 Nginx 配置文件中，location 指令用于匹配客户端请求的 URL，并定义对该请求进行处理的规则。location 指令可以出现在 http、server 和 location 级别的 Nginx 配置块中。

在 http 级别中，location 指令用于定义全局的 URL 匹配规则；在 server 级别中，location 指令用于定义特定服务器（虚拟主机）的 URL 匹配规则；在 location 级别中，location 指令用于定义更具体的 URL 匹配规则，以及针对特定 URL 进行的处理操作，例如代理到另一个服务器、重定向、设置缓存等。

例如，以下是一个简单的 Nginx 配置，其中定义了一个 location 指令：

```
server {
    listen 80;
    server_name example.com;

    root /var/www/example.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

在上面的配置中，location /指令表示对所有请求的 URL 进行匹配，如果匹配成功，则执行 try_files 指令，尝试查找请求的文件（$uri）或目录（$uri/），如果找不到，则返回 index.html 文件。

可以使用正则表达式进行更高级的 URL 匹配，例如：

```
location ~* \.(gif|jpg|jpeg|png)$ {
    expires 30d;
}
```

在上面的配置中，使用了正则表达式进行 URL 匹配，该规则匹配以.gif、.jpg、.jpeg 或.png 结尾的所有 URL，并为这些 URL 设置缓存时间为 30 天。

因此，location 指令是 Nginx 中非常重要的一个指令，用于定义 URL 匹配规则和对匹配请求的处理操作。

#### Nginx 限流怎么做的？

Nginx 限流可以通过限制客户端请求的速率来防止服务器过载和恶意攻击。Nginx 提供了多种限流模块和算法，可以根据实际情况选择合适的方法进行限流。

以下是一些 Nginx 限流的方法：

1. **ngx_http_limit_req_module**：该模块用于限制客户端请求的速率，可以根据客户端的 IP 地址、请求 URL 等信息进行限流。例如，可以设置每秒钟只允许一个 IP 地址访问某个 URL。
1. **ngx_http_limit_conn_module**：该模块用于限制客户端的并发连接数，可以防止恶意攻击和 DDoS 攻击。例如，可以设置每个 IP 地址最多只允许同时建立 10 个连接。
1. **ngx_http_reqstat_module**：该模块用于统计客户端请求的数量和速率，可以帮助管理员监控服务器的负载和流量。例如，可以统计每个 URL 的请求量和响应时间，并将统计结果存储到日志文件中。
1. **ngx_http_limit_req_zone_module**：该模块用于将限流规则存储在共享内存中，可以在多个 Nginx worker 进程之间共享限流状态。例如，可以将限流规则存储在共享内存中，然后在多个服务器之间共享限流状态。
1. **使用第三方限流模块**：除了 Nginx 自带的限流模块之外，还可以使用一些第三方限流模块，例如 lua-resty-limit-traffic、lua-resty-limit-conn 等。这些模块可以根据需要进行自定义配置，并提供更灵活的限流算法和策略。

总之，Nginx 限流是非常重要的服务器性能优化手段，可以帮助管理员保护服务器安全和稳定运行。

#### 漏桶流算法和令牌桶算法是什么？有什么区别？

漏桶算法和令牌桶算法是两种流量控制算法，可以用于实现限流功能，防止服务过载。

1. **漏桶算法**：

漏桶算法是一种固定容量的队列，用于控制数据的输出速率。可以将漏桶看作是一个水桶，数据像水一样从管道中流入到水桶中，如果水桶中的水量超过一定限制，则多余的水被溢出丢弃，从而控制了输出数据的速率。

具体来说，漏桶算法可以通过以下步骤实现：

1. 定义一个固定容量的队列（漏桶），并设置一个输出速率（比如每秒钟输出 10 个请求）。
1. 将所有的请求按照时间顺序加入到队列中。
1. 当队列满时，新加入的请求将被丢弃。
1. 每秒钟从队列中输出固定数量的请求，直到队列为空。

漏桶算法的优点是可以稳定地限制输出速率，避免服务器过载。但是缺点是在短时间内可能会出现瞬间高峰，导致请求被丢弃。

1. **令牌桶算法**：

令牌桶算法也是一种固定容量的队列，用于控制数据的输入速率。可以将令牌桶看作是一个桶，每个请求需要消耗一个令牌才能被处理，如果桶中没有令牌，则请求会被阻塞。

具体来说，令牌桶算法可以通过以下步骤实现：

1. 定义一个固定容量的桶，每秒钟向桶中添加固定数量的令牌（比如每秒钟添加 10 个令牌）。
1. 每个请求需要消耗一个令牌才能被处理，如果桶中没有令牌，则请求会被阻塞。
1. 如果桶中的令牌数超过了最大容量，则多余的令牌会被丢弃。

令牌桶算法的优点是可以稳定地控制输入速率，避免服务器过载。缺点是在短时间内可能会出现请求被阻塞的情况。

总的来说，漏桶算法和令牌桶算法都可以用于实现流量控制和限流功能，根据实际情况选择合适的算法和参数可以达到最佳的效果。

#### Nginx 配置高可用性怎么配置？

Nginx 配置高可用性通常有两种方式：

1. **负载均衡器高可用性**
   当使用 Nginx 作为负载均衡器时，可以使用高可用性技术确保负载均衡器的可用性。通常的做法是使用主备模式，即配置两台服务器，其中一台作为主服务器，另一台作为备服务器。当主服务器发生故障时，备服务器自动接管服务，保证服务的可用性。
2. **应用服务器高可用性**
   除了负载均衡器的高可用性外，还需要考虑应用服务器的高可用性。通常的做法是将应用服务器部署在多台服务器上，通过 Nginx 的负载均衡来分发请求，从而实现应用服务器的高可用性。在实现高可用性时，需要考虑以下几个方面：

- **数据同步**：应用服务器之间需要进行数据同步，确保数据的一致性。
- **状态共享**：在多台应用服务器之间共享状态，确保状态的一致性。
- **心跳检测**：通过心跳检测技术，监控应用服务器的状态，当发现故障时，自动切换到备用服务器。

总之，通过使用 Nginx 的负载均衡技术以及高可用性技术，可以实现高可用性的服务，提高系统的稳定性和可靠性。

#### Nginx 怎么判断别 IP 不可访问？

可以通过 Nginx 的访问控制模块来限制特定 IP 地址的访问。

常用的方法有：

1. **使用 allow/deny**：在 Nginx 配置文件中，可以使用 allow/deny 指令来限制 IP 地址的访问。例如，可以在 http、server 或 location 块中添加以下指令：

```
location / {
    deny 192.168.1.1;
    allow all;
}
```

上述配置将拒绝 IP 地址为 192.168.1.1 的客户端访问该 location，允许其他客户端访问。

2. **使用 geo 模块**：可以使用 Nginx 的 geo 模块来定义 IP 地址的组，进而对这些 IP 地址进行访问控制。例如：

```
http {
    geo $bad_ip {
        default 0;
        include /path/to/bad_ips.txt;
    }

    server {
        location / {
            if ($bad_ip) {
                return 403;
            }

            # 其他配置
        }
    }
}
```

上述配置将读取 /path/to/bad_ips.txt 文件中的 IP 地址列表，如果客户端的 IP 地址在该列表中，则返回 403 状态码，否则继续处理其他请求。

需要注意的是，使用 Nginx 的访问控制模块时，应该根据具体的需求选择合适的方法来限制 IP 地址的访问，同时还应该注意防止误操作，避免限制了正常的客户端访问。

#### 在 Nginx 中，如何使用未定义的服务器名称来阻止处理请求？

在 Nginx 中，可以使用默认服务器来阻止处理请求，当请求中的服务器名称没有在任何服务器块中定义时，Nginx 将会使用默认服务器来处理该请求。

可以在 Nginx 配置文件的 server 块中，使用 listen 指令指定一个默认服务器，例如：

```
server {
    listen      80 default_server;
    server_name _;
    return      444;
}
```

上述配置中，listen 指令的参数中指定了 default_server，表示这是一个默认服务器。server_name 指令的参数使用了下划线字符，表示接受所有未定义的服务器名称。

return 指令的参数为 444，表示返回一个特定的状态码，即 Nginx 自定义的“无响应”状态码。这样，当请求中的服务器名称未定义时，Nginx 将会使用该默认服务器来处理请求，并返回 444 状态码，从而实现了阻止处理请求的效果。

#### 怎么限制浏览器访问？

可以通过 Nginx 的限制访问模块来限制浏览器的访问。该模块提供了多种限制访问的方法，包括基于 IP 地址的限制、基于 HTTP Referer 的限制、基于 User-Agent 的限制等等。

以下是基于 User-Agent 的限制示例，用于禁止所有的 IE 浏览器访问：

```
http {
    ...
    map $http_user_agent $bad_browser {
        default 0;
        "~MSIE" 1;
    }

    server {
        ...
        if ($bad_browser) {
            return 403;
        }
        ...
    }
}
```

上述配置中，使用 map 指令将 $http_user_agent 变量映射到 $bad_browser 变量，如果 $http_user_agent 包含“MSIE”字符串，则 $bad_browser 变量的值为 1，否则为 0。然后，在 server 块中使用 if 指令判断 $bad_browser 的值，如果为 1，则返回 403 状态码，禁止访问。注意，if 指令的使用应该尽可能避免，因为它可能会导致性能问题。

类似地，可以使用其他限制访问模块，如 ngx_http_access_module、ngx_http_referer_module 等等，来实现不同的访问限制策略。

#### Rewrite 全局变量是什么？

在 Nginx 中，rewrite 全局变量是指一组预定义的变量，用于存储 rewrite 模块的相关信息。这些变量在 Nginx 的处理过程中会被赋值，并且可以在 rewrite 规则和配置中使用。

以下是一些常用的 rewrite 全局变量：

1. **$uri**：请求的 URI（不包括参数部分）。
1. **$args**：请求的参数部分。
1. **$request_uri**：请求的 URI（包括参数部分）。
1. **$request_method**：请求的 HTTP 方法（如 GET、POST 等）。
1. **$remote_addr**：客户端的 IP 地址。
1. **$server_name**：当前请求的主机名。
1. **$query_string**：请求的查询字符串。

这些变量可以在 rewrite 规则中使用，以实现重定向、重写 URL 等功能。例如，可以使用 $uri 变量来实现基于 URI 的重定向：

```
if ($uri = /old/path) {
    return 301 /new/path;
}
```

在上述配置中，如果请求的 URI 是 /old/path，则使用 return 指令将响应码设置为 301，同时将重定向地址设置为 /new/path。

需要注意的是，虽然 rewrite 全局变量非常方便，但过多的变量会导致内存消耗和 CPU 负载增加，因此应该根据需要选择合适的变量。

#### Nginx 如何实现后端服务的健康检查？

Nginx 默认自带的 ngx_http_proxy_module 模块和 ngx_http_upstream_module 模块中有相关指令可用来完成健康检查，当后端节点出现故障时，自动切换到健康节点来提供访问。这个方法虽然可以实现健康检查，但是不够严格，因为它会把请求转发给故障服务器，然后再转发给别的服务器，这样就需要多一次转发。

Nginx 提供了一个 nginx_upstream_check_module 模块，可以用来实现健康检查，并且可以检查后端服务的 HTTP 响应码和响应时间等指标，从而更加准确地判断后端服务是否健康。

另外，Nginx 也提供了一个 TCP 层默认检查方案，可以定时与后端服务建立一条 TCP 连接，如果连接建立成功，则认为服务节点是健康的。

下面是一个使用 nginx_upstream_check_module 模块实现后端服务健康检查的例子：

```
http {
    upstream backend {
        server backend1.example.com;
        server backend2.example.com;
        check interval=3000 rise=2 fall=5 timeout=1000 type=http;
        check_http_send "GET /health HTTP/1.0\r\n\r\n";
        check_http_expect_alive http_2xx http_3xx;
    }

    server {
        location / {
            proxy_pass http://backend;
        }
    }
}
```

在这个例子中，upstream 指令用来定义后端服务，check 指令用来定义健康检查的参数，包括检查间隔、成功多少次后认为服务节点是健康的、失败多少次后认为服务节点是不健康的、超时时间以及检查类型等。check_http_send 指令用来定义发送到后端服务的 HTTP 请求，check_http_expect_alive 指令用来定义响应码的范围，这里是 http_2xx 和 http_3xx，表示只有在收到 2xx 或 3xx 的响应码时才认为服务节点是健康的。

需要注意的是，nginx_upstream_check_module 模块需要单独编译安装，因为它不是 Nginx 默认自带的模块。另外，健康检查会对后端服务产生额外的负担，因此需要根据实际情况来配置检查参数，以免对后端服务造成过大的压力。

#### Nginx 如何开启压缩？

Nginx 可以通过开启 Gzip 压缩来减小响应体的大小，提高网站的性能。以下是在 Nginx 中开启 Gzip 压缩的步骤：

1. 编辑 Nginx 配置文件

在 Nginx 配置文件中找到 http 部分，添加以下代码：

```
gzip on;
gzip_disable "msie6";
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
```

2. 保存并重启 Nginx

保存修改后的配置文件并重启 Nginx 以使修改生效。

```
sudo systemctl restart nginx
```

开启 Gzip 压缩后，Nginx 将自动压缩支持的 MIME 类型的响应体，并在响应头中添加 Content-Encoding: gzip 字段，告知客户端使用 Gzip 解压缩。

#### Nginx 是否支持将请求压缩到上游？

是的，Nginx 支持将请求压缩到上游。这可以通过在 Nginx 配置中使用 gzip 指令来实现。

默认情况下，gzip 指令只压缩响应，但是您可以使用 gzip_request 指令将请求体压缩到上游。下面是一个示例 Nginx 配置文件，其中请求体被压缩到上游：

```
http {
    # 开启 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;

    server {
        listen 80;
        server_name example.com;

        location / {
            # 将请求体压缩到上游
            gzip_request on;

            # 指定代理服务器
            proxy_pass http://backend;

            # 传递一些请求头
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Host $host;
        }
    }

    upstream backend {
        server 127.0.0.1:8080;
    }
}
```

在上面的示例中，我们使用 gzip_request 指令将请求体压缩到上游。此外，我们还开启了 gzip 压缩并配置了压缩选项，包括 MIME 类型、压缩等级和缓冲区大小。在 location 块中，我们将请求代理到 backend 上游服务器，并传递一些请求头。

需要注意的是，压缩请求体会增加 CPU 开销，因此如果您的服务器 CPU 资源受限，建议仅压缩响应体。

#### 如何在 Nginx 服务器上添加模块？

要在 Nginx 服务器上添加模块，您需要在编译 Nginx 时包含所需的模块。下面是在 Ubuntu Linux 上编译 Nginx 并添加模块的步骤：

1. 安装编译工具和依赖项：在 Ubuntu Linux 上，您需要安装编译工具和 Nginx 所需的依赖项。您可以使用以下命令安装它们：

```
sudo apt-get update
sudo apt-get install build-essential libpcre3 libpcre3-dev zlib1g zlib1g-dev openssl libssl-dev
```

2. 下载和解压 Nginx 源代码：您需要下载并解压 Nginx 源代码。您可以从 Nginx 的官方网站下载源代码，也可以使用以下命令从 GitHub 下载：

```
wget https://github.com/nginx/nginx/archive/refs/tags/release-1.20.1.tar.gz
tar -xvf release-1.20.1.tar.gz
```

3. 下载并解压您需要的模块源代码：您需要下载并解压要添加到 Nginx 的模块的源代码。您可以从该模块的官方网站或 GitHub 上下载源代码。假设您要添加 ngx_http_geoip2_module 模块，您可以使用以下命令从 GitHub 下载：

```
wget https://github.com/leev/ngx_http_geoip2_module/archive/refs/tags/3.3.tar.gz
tar -xvf 3.3.tar.gz
```

4. 编译 Nginx 并添加模块：现在，您可以使用以下命令编译 Nginx 并将模块添加到 Nginx 中：

```
cd nginx-release-1.20.1
./configure --prefix=/usr/local/nginx --add-module=/path/to/ngx_http_geoip2_module
make
sudo make install
```

在上面的命令中，--prefix 指定将安装 Nginx 的目录，--add-module 指定要添加的模块的路径。请注意，您需要将 /path/to/ngx_http_geoip2_module 替换为您实际下载和解压 ngx_http_geoip2_module 模块的路径。

5. 启动 Nginx：编译和安装完成后，您可以使用以下命令启动 Nginx：

```
sudo /usr/local/nginx/sbin/nginx
```

现在，您已经成功地将模块添加到 Nginx 服务器上。

#### Nginx 状态码有哪些？

以下是常见的 Nginx 状态码及其含义：

1. 1xx（信息性状态码）：

- **100 - Continue**：客户端应该继续发送请求体（只有在使用 Expect: 100-continue 时才会出现）。
- **101 - Switching Protocols**：服务器正在切换到新的协议（如 WebSockets）。

2. 2xx（成功状态码）：

- **200 - OK**：请求已成功处理。
- **201 - Created**：请求已经被成功处理，并且创建了新的资源。
- **202 - Accepted**：请求已被接受，但是尚未被处理。
- **204 - No Content**：请求已成功处理，但是响应中没有返回任何内容。

3. 3xx（重定向状态码）：

- **301 - Moved Permanently**：请求的资源已永久移动到新的 URL。
- **302 - Found**：请求的资源已临时移动到新的 URL。
- **304 - Not Modified**：请求的资源未被修改，可以直接使用缓存。
- **307 - Temporary Redirect**：请求的资源已临时移动到新的 URL，但是应该继续使用原始 URL。

4. 4xx（客户端错误状态码）：

- **400 - Bad Request**：请求无效或无法被服务器理解。
- **401 - Unauthorized**：需要用户身份验证。
- **403 - Forbidden**：服务器拒绝请求。
- **404 - Not Found**：请求的资源不存在。
- **405 - Method Not Allowed**：请求使用的方法不被允许。
- **408 - Request Timeout**：请求超时。
- **413 - Payload Too Large**：请求体过大，超出了服务器可以处理的范围。
- **414 - URI Too Long**：请求的 URI 过长，超出了服务器可以处理的范围。
- **429 - Too Many Requests**：客户端发送过多请求，服务器无法处理。

5. 5xx（服务器错误状态码）：

- **500 - Internal Server Error**：服务器内部错误。
- **501 - Not Implemented**：请求的功能还未被实现。
- **502 - Bad Gateway**：上游服务器无法响应请求。
- **503 - Service Unavailable**：服务器暂时无法处理请求。
- **504 - Gateway Timeout**：上游服务器响应超时。
- **507 - Insufficient Storage**：服务器无法完成请求，因为存储空间已满。

需要注意的是，Nginx 可能会返回其他非标准状态码（如 418 - I'm a teapot）作为特殊响应。

#### 生产中如何设置 worker 进程的数量呢？

在生产环境中，设置 Nginx worker 进程的数量通常需要根据服务器硬件配置和实际应用负载情况来进行调整。

worker 进程数量的设置可以通过 Nginx 配置文件中的 worker_processes 指令来实现。该指令通常位于 http 段中，可以设置 worker 进程的数量。例如：

```
worker_processes 4;
```

在上述例子中，将开启 4 个 worker 进程处理请求。可以根据服务器的 CPU 核心数和内存大小来调整该值。

同时，还可以使用 worker_cpu_affinity 指令来将 worker 进程绑定到特定的 CPU 核心上，以提高性能。例如：

```
worker_cpu_affinity 0001 0010 0100 1000;
```

上述例子中，将 worker 进程分别绑定到 CPU 核心 0、1、2、3 上，以提高处理能力。

需要注意的是，过多的 worker 进程数量可能会导致 CPU 使用率过高，因此应该根据实际情况进行调整。另外，如果使用 Nginx 的多进程模式，还需要注意共享内存区的大小，以确保每个 worker 进程可以访问到足够的共享内存空间。

#### Nginx 是如何实现高并发的？

Nginx 之所以能够实现高并发，主要是由于其具备以下特点：

1. **异步非阻塞 IO 模型**：Nginx 使用异步非阻塞 IO 模型，可以同时处理多个客户端请求，从而提高系统并发处理能力。
1. **多进程/多线程模式**：Nginx 可以通过开启多个 worker 进程/线程来处理请求，从而提高系统处理能力。同时，Nginx 采用 Master-Worker 模式，Master 进程主要负责监控和管理 Worker 进程，从而保证系统的稳定性。
1. **事件驱动模型**：Nginx 使用事件驱动模型，可以及时地处理客户端请求和其他事件，从而避免了不必要的等待时间和资源浪费。
1. **高效的内存管理**：Nginx 采用了内存池技术，可以提高内存的使用效率和系统的响应速度。同时，Nginx 还支持共享内存和文件映射等技术，可以方便地实现多进程/多线程间的数据共享和通信。
1. **动态模块化结构**：Nginx 的模块化结构非常灵活，可以根据需要添加或移除模块，从而提高系统的可定制性和扩展性。

综上所述，Nginx 在实现高并发方面具有很多优势，可以通过合理的配置和优化来进一步提高系统的性能和稳定性。

#### Nginx 常见的优化配置有哪些？

以下是 Nginx 常见的优化配置：

1. **调整 worker 进程数**：适当调整 worker 进程数，可以提高系统的并发处理能力。一般建议设置为 CPU 核心数的倍数。
1. **启用 sendfile**：使用 sendfile 可以在发送文件时减少内核空间和用户空间之间的数据拷贝，从而提高文件传输的速度。
1. **启用 TCP_NODELAY**：TCP_NODELAY 可以禁用 Nagle 算法，从而减少小数据包的延迟，提高数据传输的效率。
1. **启用 TCP_DEFER_ACCEPT**：TCP_DEFER_ACCEPT 可以在建立连接时延迟应用程序的处理，直到客户端发送数据，从而减少不必要的等待时间。
1. **启用 keepalive**：启用 keepalive 可以在一段时间内保持 TCP 连接的开启状态，从而避免频繁地建立和关闭连接，提高系统性能。
1. **调整缓冲区大小**：适当调整缓冲区大小，可以减少网络传输过程中的数据拷贝次数，从而提高数据传输的效率。
1. **启用 Gzip 压缩**：启用 Gzip 压缩可以在传输过程中减少数据的传输量，从而提高数据传输的速度。
1. **启用 SSL 加速**：启用 SSL 加速可以减少加密解密的计算量，从而提高系统的性能。
1. **调整日志级别**：适当调整日志级别，可以减少日志记录的数据量，从而提高系统的性能。
1. **启用缓存**：启用缓存可以在减少磁盘 I/O 的同时，提高数据的访问速度，从而提高系统的性能。

需要根据实际应用场景进行选择和调整，从而进一步提高系统的性能和稳定性。
