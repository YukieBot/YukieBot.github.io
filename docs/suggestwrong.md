---
sidebar_position: 5
---

# 推分小助手常见报错

1. ***index 0 is out of bounds for axis 0 with size 0***

版本更新前后最容易出现的一类报错，原因：

- 数据库未刷新而查询了数据库中没有的信息

- B20未填满或太少

2. ***index X is out of bounds for axis Y with size Z***

原因：乱改RatingCode导致的，这种人就应该狠狠地被打击（拳）

3. ***Main Thread is not in main loop***

原因：服务器内存不足，一般不会发生

4. ***The passed figure is not mangaged by pyplot***

一般伴随着第三条报错，原因同上

5. ***FileNotFoundError: [Errno 2] No such file or directory: './素材/Sora.ttf'***

解决方法：等雪绘重启就好了

原因：Python的BUG

6. ***现在雪绘忙不过来啦！请稍后再试！***

解决方法：等待一分钟后再尝试

原因：生成的人数太多了导致服务器繁忙

7. ***'gbk' codec can't encode character 'xxxx' in position 4: illegal multibyte sequence***

解决方法：请不要在名字中使用用特殊字符

原因：gbk编码中没有一些特殊的字符