## 其实这个技巧很简单,但是可以帮你至少节省半分钟时间

**那就是使用在本地编辑markdown的时候使用相对路径**

如果还是不清楚的话你可以继续看下去.我想对于有经验者一句话足矣.

因为突然发现markdown中插入图片很困难,需要从
1. 上传(push)图片到文件夹中
2. 获取图片路径
3. 粘贴到文档中

>如果你知道GitHub中图片路径组成的话将会简单许多
例如: 
当你push本地 mygitHub/img/cs.jpg 到GitHub仓库中时
GitHub会按照如下规则生产路径
```JavaScript
https://github.com/你的名字/你的仓库/raw/master/你的图片文件夹/图片名.jpg
```
记住这个模板,好了我承认其实你不用记,如果你知道相对路径就好办了 GitHub其实是支持相对路径的
例如在本地文件如下

![image](./img/hint/relativePath.jpg)

而你的 文件.md 是在图片文件夹外面的 就可以使用
```JavaScript 
![](./img/我的图片.jpg)
 ```
 这样就行了,不用记上面一长串.
> ./  表示当前文件夹 
> ../ 表示上级目录

而这个步骤就变成了
1. 在本地存放图片
2. 在本地编辑md中使用相对位置引入./img/我的图片.jpg即可

总结: 我是怎么发现这个技巧的
1. 我认为这么牛逼的GitHub应该有快捷键之类的,结果没找到
2. 搜索到别人的教程,都是粘贴url,应该也支持相对路径(提出假设),然后(验证)真的支持


```JavaScript
![image](./img/nodejs/nvm01.png)

https://github.com/macheng2017/study/raw/master/img/nodejs/nvm01.png
https://github.com/macheng2017/study/blob/master/img/nodejs/nvm01.jpg?raw=true
```

