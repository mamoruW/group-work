# 2016/05/25 第6回JS勉強会

## Vagrant基本的な使い方

### Boxを取得
公式
http://www.vagrantbox.es/  
https://github.com/tommy-muehle/puppet-vagrant-boxes/releases/download/1.1.0/centos-7.0-x86_64.box  

Boxインストール  
~~~
$ vagrant box add centos https://github.com/tommy-muehle/puppet-vagrant-boxes/releases/download/1.1.0/centos-7.0-x86_64.box  
~~~

Boxを確認  
~~~
$ vagrant box list  
~~~

Box削除  
~~~
$ vagrant box remove  
~~~

Boxの場所  
~~~
$ cd ./.vagrant.d/boxes  
~~~

### 仮想マシンを初期化
~~~
$ mkdir test/
$ cd test
$ vagrant init centos
~~~

### 仮想マシンを操作
~~~
起動／$ vagrant up
停止／$ vagrant halt
ステータス／$ vagrant status
サスペンド／$ vagrant suspend
リジューム／$ vagrant resume
再起動／$ vagrant reload
削除／$ vagrant destroy
~~~

### 接続する
~~~
$ vagrant ssh
$ sudo yum -y install httpd
~~~

webサーバー起動
~~~
$ sudo systemctl start httpd
~~~

再起動でwebサーバーを立ち上げる
~~~
$ sudo chkconfig httpd on
~~~

ファイヤーウォールoff
~~~
$ sudo systemctl stop firewalld
~~~

### ブラウザで確認
~~~
$ cd /var/www/html
$ sudo vi index.html
$ ls
$ exit
~~~

Macから仮想OSの中身を見る方法
~~~
$ vi Vagrantfile
config.vm.network "private_network", ip: "192.168.33.10"
$ vagrant reload
~~~

▼192.168.33.10でページがみれないとき  
VagrantでCentOS7を立てたが、httpアクセスが繋がらない時にやったこと  
http://qiita.com/takuhou/items/1bdd8403a15be7411e20
~~~
$ vagrant ssh
$ sudo systemctl stop firewalld
~~~

## Vagrantのメリット・デメリット

-複数人で全く同じ環境を構築できる
-環境を簡単に破棄できる（Boxは壊れない）
-環境構築はMAMP,ZAMPとくらべて環境構築が複雑


## Vagrant使うと作業環境どう変わる

-HTMLとJSしか使わない製作者には恩恵がすくない
-たとえば本番環境しかない案件だったら、その案件用のBOXを作っておいて簡単に構築できるようにしておくと便利？

