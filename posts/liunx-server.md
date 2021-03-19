#### linux 系统配置


##### 更新系统
```shell
$ sudo yum update -y
# 升级软件包的同时也会升级软件和系统内核，如若不想升级系统，可使用以下命令
$ sudo yum upgrade -y
```

##### 添加用户

1. 添加用户
   > 注意区分`adduser`和`useradd`命令, `useradd`不会自动指定shell和创建用户   主目录
   ```shell
   $ adduser <username>
   # 或使用以下命令
   $ useradd -m -d /home/<username> -s /bin/bash <username>
   ```

2. 为用户指定设置登陆密码

   ```shell
   $ sudo passwd <username>
   $ sudo passwd -f <username> 强制用户登陆时修改密码
   ```

3. 为用户添加权限
   
   在/etc/sudoers.d文件夹中设置用户权限, 格式为:
   <username | usergroup> host[=(username | usergroup | ALL)] [NOPASSWD:]\<path\>,\<path\>

   ```shell
   # 编辑指定用户的权限文件
   $ visudo -s /etc/sudoers.d/<username> 
   ```
   用例：
   - \<username\> ALL=(root) /usr/bin/su 
   为<username>用户添加切换用户权限, 用法：sudo su root -
   - \<username\> ALL=(docker) NOPASSWD:/usr/bin/docker
   为<username>用户添加docker命令权限, 用法：sudo -u docker docker --version

4. 添加`SSH Key`,设置无密码登陆
   
   使用`ssh-copy-id`命令添加远程主机认证密钥。
   ```shell
   $ ssh-copy-id -i ~/.ssh/id_rsa.pub [username@]<host>
   ```

5. 删除用户
   > 如何删除指定用户
   ```shell
   $ sudo userdel <username>
   $ sudo userdel -r <username> # 同时删除用户主目录
   ```

##### 系统安全设置

1. 修改sshd默认设置
   ```shell
   $ sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup
   $ sudo vim /etc/ssh/sshd_config
   $ sshd -t # 测试sshd的修改
   $ sudo systemctl reload sshd.service
   $ netstat -ano | grep <port>
   ```
   
   > 修改默认端口，注意开启防火墙
   
   Port 2222
   
   > 检查网络协议
   
   Protocol 2
   
   > 禁用 Root 用户连接
   
   PermitRootLogin no
   
   > 禁止用户密码认证登录
   
   PasswordAuthentication no
   PermitEmptyPasswords no

   > 禁止 X11 传输

   X11Forwarding no

   > 关闭空闲会话
   
   ClientAliveInterval 300
   ClientAliveCountMax 2 
   
   > 忽略rhosts认证
   
   IgnoreRhosts yes

   > 登陆限时

   LoginGraceTime 1m 

   > **可选** SSH客户端设置
   
   ```shell
   > vim ~/.ssh/config

   ```

   **更多配置可参考：[sshd_config 文件格式](https://linux.die.net/man/5/sshd_config)**

2. 安装Fail2Ban
   
   `Fail2Ban`可以使你的liunx服务器免遭恶意登陆。

   ```shell
   > sudo yum install fail2ban
   ```
   
   为配置文件创建一个副本，因为默认的conf文件会被更新覆盖，你会丢失所有的设置

   ```shell
   > sudo cp /etc/fail2ban/fail2ban.conf /etc/fail2ban/fail2ban.local
   > sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
   ```

   启用sshd的防护

   ```shell
   > sudo vim /etc/fail2ban/jail.local

   # 启用sshd, 并添加自定义ssh端口
   ......
   [sshd]
   enabled  = true
   enabled = true
   mode   = normal
   port    = ssh
   logpath = /var/log/secure
   ......

   > sudo vim /etc/services
   
   # 修改Linux端口定义
   ......
   ssh             2222/tcp
   ssh             2222/udp
   ......
   ```

   启动Fail2Ban并开机启动。

   ```shell
   > sudo systemctl start fail2ban.service 
   > sudo systemctl enable fail2ban.service
   # 查看运行状态
   > fail2ban-client status sshd
   ```
