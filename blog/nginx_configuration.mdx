---
title: Nginx安装配置
author: 夏阳
author_title: 一名兴趣使然的程序员
author_url: https://github.com/standout-jjc
author_image_url: https://avatars.githubusercontent.com/standout-jjc
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

### Nginx安装

<Tabs
  groupId="linux-operating-systems"
  defaultValue="Redhat"
  values={[
    { label: "Rehat系列", value: "Redhat" },
    { label: "Debian系列", value: "Debian" },
    { label: "Arch系列", value: "Arch" },
    { label: "手动编译", value: "Compile" }
  ]}
>
<TabItem value="Redhat">

添加nginx存储库

```shell
> sudo vim /etc/yum.repos.d/nginx.repo
```

```vim title="vim /etc/yum.repos.d/nginx.repo"
[nginx]
name=nginx repo
baseurl=https://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

安装启动nginx
```shell
sudo yum install nginx
sudo systemctl start nginx.service 
sudo systemctl enable nginx.service #设置开机启动
```

</TabItem>
<TabItem value="Debian">

```shell
sudo apt install nginx
```

</TabItem>
<TabItem value="Arch">

```shell
sudo pacman -Syu nginx
```

</TabItem>
<TabItem value="Compile">

暂无

</TabItem>
</Tabs>

### Nginx配置

> nginx的配置文件在`/etc/nginx`目录。我们为了方便维护，将通用的配置拆分到`common`目录，将服务拆分至`site-available`目录，这样开启服务的时候，只需要将服务的配置文件链接到`sites-enabled`目录，就可以启用服务。关闭服务也很简单，删除软链接即可。

全局配置
```vim title="/etc/nginx/nginx.config"
user                 www-data;
pid                  /run/nginx.pid;
worker_processes     auto;
worker_rlimit_nofile 65535;

# Load modules
include              /etc/nginx/modules-enabled/*.conf;

events {
    multi_accept       on;
    worker_connections 65535;
}

http {
    charset                utf-8;
    sendfile               on;
    tcp_nopush             on;
    tcp_nodelay            on;
    server_tokens          off;
    log_not_found          off;
    types_hash_max_size    2048;
    types_hash_bucket_size 64;
    client_max_body_size   16M;

    # MIME
    include                mime.types;
    default_type           application/octet-stream;

    # Logging
    access_log             /var/log/nginx/access.log;
    error_log              /var/log/nginx/error.log warn;

    # SSL
    ssl_session_timeout    1d;
    ssl_session_cache      shared:SSL:10m;
    ssl_session_tickets    off;

    # Diffie-Hellman parameter for DHE ciphersuites
    ssl_dhparam            /etc/nginx/dhparam.pem;

    # Mozilla Intermediate configuration
    ssl_protocols          TLSv1.2 TLSv1.3;
    ssl_ciphers            ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;

    # OCSP Stapling
    ssl_stapling           on;
    ssl_stapling_verify    on;
    resolver               1.1.1.1 1.0.0.1 8.8.8.8 8.8.4.4 208.67.222.222 208.67.220.220 valid=60s;
    resolver_timeout       2s;

    # Load configs
    include                /etc/nginx/conf.d/*.conf;
    include                /etc/nginx/sites-enabled/*;
}
```

通用配置
```vim title="/etc/nginx/common/general.conf"
# favicon.ico
location = /favicon.ico {
    log_not_found off;
    access_log    off;
}

# robots.txt
location = /robots.txt {
    log_not_found off;
    access_log    off;
}

# assets, media
location ~* \.(?:css(\.map)?|js(\.map)?|jpe?g|png|gif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {
    expires    7d;
    access_log off;
}

# svg, fonts
location ~* \.(?:svgz?|ttf|ttc|otf|eot|woff2?)$ {
    add_header Access-Control-Allow-Origin "*";
    expires    7d;
    access_log off;
}

# gzip
gzip            on;
gzip_vary       on;
gzip_proxied    any;
gzip_comp_level 6;
gzip_types      text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;
```

安全相关配置
```vim title="/etc/nginx/common/security.conf"
# security headers
add_header X-Frame-Options           "SAMEORIGIN" always;
add_header X-XSS-Protection          "1; mode=block" always;
add_header X-Content-Type-Options    "nosniff" always;
add_header Referrer-Policy           "no-referrer-when-downgrade" always;
add_header Content-Security-Policy   "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

# . files
location ~ /\.(?!well-known) {
    deny all;
}
```

PHP相关配置
```vim title="/etc/nginx/common/php_fastcgi.conf"
# 404
try_files                     $fastcgi_script_name =404;

# default fastcgi_params
include                       fastcgi_params;

# fastcgi settings
fastcgi_index                 index.php;
fastcgi_buffers               8 16k;
fastcgi_buffer_size           32k;

# fastcgi params
fastcgi_param DOCUMENT_ROOT   $realpath_root;
fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
fastcgi_param PHP_ADMIN_VALUE "open_basedir=$base/:/usr/lib/php/:/tmp/";
```

export const Contain = () => ('test')

> 服务配置示例

```vim

```

### Nginx卸载

