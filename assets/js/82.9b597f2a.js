(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{561:function(v,_,e){"use strict";e.r(_);var i=e(48),s=Object(i.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[v._v("#")]),v._v(" Redis")]),v._v(" "),e("h2",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[v._v("#")]),v._v(" 参考文档")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.redis.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 中文"),e("OutboundLink")],1)])]),v._v(" "),e("h2",{attrs:{id:"图形化界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图形化界面"}},[v._v("#")]),v._v(" 图形化界面")]),v._v(" "),e("ul",[e("li",[v._v("RESP（已过期），现已更为 RedisInsight")])]),v._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),e("h3",{attrs:{id:"不同点-与其他类型比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同点-与其他类型比较"}},[v._v("#")]),v._v(" 不同点-与其他类型比较")]),v._v(" "),e("ul",[e("li",[v._v("运行在内存中")]),v._v(" "),e("li",[v._v("Redis 支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载到内存使用。")]),v._v(" "),e("li",[v._v("Redis 不仅支持简单的 key-value 类型的数据，同时还提供 list，set，zset，hash 等数据结构的存储。")]),v._v(" "),e("li",[v._v("Redis 支持主从复制，即 master-slave 模式的数据备份。")])]),v._v(" "),e("h3",{attrs:{id:"redis-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-架构"}},[v._v("#")]),v._v(" Redis 架构")]),v._v(" "),e("p",[v._v("Redis 主要由有两个程序组成：")]),v._v(" "),e("ul",[e("li",[v._v("客户端 redis-cli")]),v._v(" "),e("li",[v._v("服务器 redis-server")])]),v._v(" "),e("p",[v._v("客户端、服务器可以位于同一台计算机或两台不同的计算机中。")]),v._v(" "),e("h2",{attrs:{id:"数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[v._v("#")]),v._v(" 数据类型")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("string")]),v._v("，字符串")]),v._v(" "),e("li",[e("code",[v._v("list")]),v._v("，列表，按照插入顺序")]),v._v(" "),e("li",[e("code",[v._v("hash")]),v._v("，哈希，一般用来存对象")]),v._v(" "),e("li",[e("code",[v._v("set")]),v._v("，无序集合，成员唯一")]),v._v(" "),e("li",[e("code",[v._v("zset")]),v._v("，有序集合，成员唯一，有分数，可排序")])]),v._v(" "),e("h2",{attrs:{id:"redis-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-命令"}},[v._v("#")]),v._v(" Redis 命令")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("redis-cli -h host -p port -a password")]),v._v(" "),e("ul",[e("li",[v._v("连接远程的 Redis 服务。")]),v._v(" "),e("li",[v._v("示例： "),e("code",[v._v('redis-cli -h 127.0.0.1 -p 6379 -a "mypass"')])])])])]),v._v(" "),e("h2",{attrs:{id:"redis-key-键命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-key-键命令"}},[v._v("#")]),v._v(" Redis Key 键命令")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("DEL key")]),v._v("，删除 key")]),v._v(" "),e("li",[e("code",[v._v("RENAME")]),v._v("，修改名称")]),v._v(" "),e("li",[e("code",[v._v("EXISTS")]),v._v("，是否存在")]),v._v(" "),e("li",[e("code",[v._v("KEYS [pattern]")]),v._v("，查找所有符合条件的 key")]),v._v(" "),e("li",[e("code",[v._v("TYPE")]),v._v("，返回 key 所存储的值的类型")]),v._v(" "),e("li",[e("code",[v._v("RANDOMKEY")]),v._v("，从当前数据库中随机返回一个 key")]),v._v(" "),e("li",[e("code",[v._v("RENAMENX")]),v._v("，仅当 newKey 不存在时，再进行修改")]),v._v(" "),e("li",[e("code",[v._v("DUMP")]),v._v("，序列化给定的 key")]),v._v(" "),e("li",[e("code",[v._v("EXPIRE")]),v._v("，设置过期时间")]),v._v(" "),e("li",[e("code",[v._v("EXPIREAT")]),v._v("，设置过期的时间戳")]),v._v(" "),e("li",[e("code",[v._v("PEXPIREAT")]),v._v("，设置过期的时间戳，以毫秒计")]),v._v(" "),e("li",[e("code",[v._v("PERSIST")]),v._v("，移除过期时间，key 将永久保持")]),v._v(" "),e("li",[e("code",[v._v("TTL")]),v._v("，以秒为单位，返回 key 的剩余过期时间")]),v._v(" "),e("li",[e("code",[v._v("PTTL")]),v._v("，以毫秒为单位，返回 key 的剩余过期时间")]),v._v(" "),e("li",[e("code",[v._v("MOVE")]),v._v("，将当前数据库中的 key 移动到给定的数据库中")])]),v._v(" "),e("h2",{attrs:{id:"string-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-命令"}},[v._v("#")]),v._v(" String 命令")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("SET k v")]),v._v("，设置值")]),v._v(" "),e("li",[e("code",[v._v("GET k")]),v._v("，获取值")]),v._v(" "),e("li",[e("code",[v._v("SETNX k v")]),v._v("，设置值，当 k 不存在时，NX - if not exists")]),v._v(" "),e("li",[e("code",[v._v("MSET k1 v1 k2 v2")]),v._v("，设置多个键值对")]),v._v(" "),e("li",[e("code",[v._v("MSETNX k1 v1 k2 v2")]),v._v("，获取值，当给定的 key 全部不存在的时候")]),v._v(" "),e("li",[e("code",[v._v("MGET k1 k2")]),v._v("，获取多个 key 的值")]),v._v(" "),e("li",[e("code",[v._v("APPEND k new_v")]),v._v("，将值添加到 key 之前绑定的值后面")]),v._v(" "),e("li",[e("code",[v._v("GETRANGE key start end")]),v._v("，获取 key 对应的值的subString，index 的数值是相对于字符串末尾的偏移量，-1 就是最后一个字符")]),v._v(" "),e("li",[e("code",[v._v("GETSET k v")]),v._v("，将 k 的值设置为 v，并返回 k 的旧值")]),v._v(" "),e("li",[e("code",[v._v("SETEX k time v")]),v._v("，将值设为 v，将过期时间设置为time")]),v._v(" "),e("li",[e("code",[v._v("STRLEN k")]),v._v("，返回 k 对应的字符串的长度")]),v._v(" "),e("li",[e("code",[v._v("INCR k")]),v._v("，将 k 中存储的数字值加 1")]),v._v(" "),e("li",[e("code",[v._v("INCRBY k x")]),v._v("，将 k 中存储的数字值加 x")]),v._v(" "),e("li",[e("code",[v._v("INCRBYFLOAT")]),v._v("，")]),v._v(" "),e("li",[e("code",[v._v("DECR")]),v._v("，减 1")]),v._v(" "),e("li",[e("code",[v._v("DECRBY")]),v._v("，")]),v._v(" "),e("li",[e("code",[v._v("DECRBYFLOAT")]),v._v("，")])]),v._v(" "),e("h2",{attrs:{id:"hash-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hash-命令"}},[v._v("#")]),v._v(" Hash 命令")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("HSET k f v")]),v._v("，设置一个字段")]),v._v(" "),e("li",[e("code",[v._v("HGET k f")]),v._v("，返回 value")]),v._v(" "),e("li",[e("code",[v._v("HMSET k f1 v1 f2 v2")]),v._v("，设置多个字段")]),v._v(" "),e("li",[e("code",[v._v("HMGET k f1 f2")]),v._v("，返回 v1 v2")]),v._v(" "),e("li",[e("code",[v._v("HKEYS k")]),v._v("，获取 key 中的所有字段")]),v._v(" "),e("li",[e("code",[v._v("HLEN k")]),v._v("，获取 key 中字段数量")]),v._v(" "),e("li",[e("code",[v._v("HVALS k")]),v._v("，获取所有 value")]),v._v(" "),e("li",[e("code",[v._v("HGETALL k")]),v._v("，获取所有字段和值")]),v._v(" "),e("li",[e("code",[v._v("HSETNX")]),v._v("，当字段名不存在时设置")]),v._v(" "),e("li",[e("code",[v._v("HSCAN")]),v._v("，")]),v._v(" "),e("li",[e("code",[v._v("HSTRLEN k f")]),v._v("，返回指定 f 的字符串值的长度")]),v._v(" "),e("li",[v._v("``，")])]),v._v(" "),e("h2",{attrs:{id:"list-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-命令"}},[v._v("#")]),v._v(" List 命令")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("LLEN")]),v._v("，列表长度")]),v._v(" "),e("li",[e("code",[v._v("LSET k index v")]),v._v("，")]),v._v(" "),e("li",[e("code",[v._v("LINDEX k index")]),v._v("，获取指定 index 的元素")]),v._v(" "),e("li",[e("code",[v._v("LRANGE k start end")]),v._v("，获取指定范围的元素")]),v._v(" "),e("li",[e("code",[v._v("LREM k count 'string'")]),v._v("，删除 k 中 count 个等于 string 的值")])]),v._v(" "),e("h2",{attrs:{id:"set命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set命令"}},[v._v("#")]),v._v(" Set命令")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("SMEMBERS k")]),v._v("，返回集合中的所有成员")]),v._v(" "),e("li",[e("code",[v._v("SISMEMBER k v")]),v._v("，v 是否在集合 k 中")]),v._v(" "),e("li",[e("code",[v._v("SADD k v1 v2 v3")]),v._v("，向集合添加值")]),v._v(" "),e("li",[e("code",[v._v("SCARD")]),v._v("，获取成员数")]),v._v(" "),e("li",[e("code",[v._v("SDIFF k1 k2 k3")]),v._v("，返回第一个 set 中独有的元素（不包含在后边的集合中的元素）。")]),v._v(" "),e("li",[e("code",[v._v("SDIFFSTORE new_set k1 k2 k3")]),v._v("，将独有的元素放进 new_set 中。")]),v._v(" "),e("li",[e("code",[v._v("SINTER k1 k2 k3")]),v._v("，所有集合的交集")]),v._v(" "),e("li",[e("code",[v._v("SINTERSTORE new_set k1 k2 k3")]),v._v("，所有集合的交集")]),v._v(" "),e("li",[e("code",[v._v("SMOVE s1 d1 v")]),v._v("，将 value 从 sourceSet 移动到 destination")]),v._v(" "),e("li",[e("code",[v._v("SUNION k1 k2 k3")]),v._v("，返回并集")]),v._v(" "),e("li",[e("code",[v._v("SUNION new_set k1 k2 k3")]),v._v("，")]),v._v(" "),e("li",[e("code",[v._v("SSCAN")]),v._v("，示例 "),e("code",[v._v("SSCAN myset1 0 match R* 20")])])]),v._v(" "),e("h2",{attrs:{id:"sortedset-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sortedset-命令"}},[v._v("#")]),v._v(" SortedSet 命令")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("ZADD k score v")]),v._v("，向 k 中添加 value 以及值所对应的分数")]),v._v(" "),e("li",[e("code",[v._v("ZCARD")]),v._v("，返回成员数")]),v._v(" "),e("li",[e("code",[v._v("ZSCORE k v")]),v._v("，返回 v 的分数值")]),v._v(" "),e("li",[e("code",[v._v("ZRANK k v")]),v._v("，返回 v 的排名")]),v._v(" "),e("li",[e("code",[v._v("ZCOUNT k min max")]),v._v("，返回区间内的成员数，包括 min max")]),v._v(" "),e("li",[e("code",[v._v("ZREM k v1 v2")]),v._v("，移除成员")]),v._v(" "),e("li",[e("code",[v._v("ZRANGE")]),v._v("，返回范围内的成员")]),v._v(" "),e("li",[e("code",[v._v("ZRANGEBYLEX")]),v._v("，返回范围内的成员")]),v._v(" "),e("li",[e("code",[v._v("ZRANGEBYSCORE k (1 5")]),v._v("，返回 1 < 分数 <= 5 的成员")])]),v._v(" "),e("h2",{attrs:{id:"redis-事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-事务"}},[v._v("#")]),v._v(" Redis 事务")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("MULTI")]),v._v("，标记一个事务块的开始")]),v._v(" "),e("li",[e("code",[v._v("EXEC")]),v._v("，执行所有事务块内的命令")]),v._v(" "),e("li",[e("code",[v._v("DISCARD")]),v._v("，取消事务，放弃执行事务块内的所有命令")]),v._v(" "),e("li",[e("code",[v._v("WATCH")]),v._v("，监视一些 key，一旦这些 key 在执行前被改变，则取消事务的执行")]),v._v(" "),e("li",[e("code",[v._v("UNWATCH")]),v._v("，取消对所有 key 的监视")])]),v._v(" "),e("h2",{attrs:{id:"redis-连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-连接"}},[v._v("#")]),v._v(" Redis 连接")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("AUTH password")]),v._v("，验证密码是否正确")]),v._v(" "),e("li",[e("code",[v._v("PING")]),v._v("，查看服务是否运行")]),v._v(" "),e("li",[e("code",[v._v("QUIT")]),v._v("，关闭当前连接")]),v._v(" "),e("li",[e("code",[v._v("SELECT index")]),v._v("，切换到指定数据库")]),v._v(" "),e("li",[e("code",[v._v("ECHO string")]),v._v("，打印字符串")])]),v._v(" "),e("h2",{attrs:{id:"redis-内存优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-内存优化"}},[v._v("#")]),v._v(" Redis 内存优化")]),v._v(" "),e("h2",{attrs:{id:"使用-redis-作为-lru-缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-redis-作为-lru-缓存"}},[v._v("#")]),v._v(" 使用 Redis 作为 LRU 缓存")]),v._v(" "),e("h2",{attrs:{id:"redis-分布式锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-分布式锁"}},[v._v("#")]),v._v(" Redis 分布式锁")]),v._v(" "),e("h3",{attrs:{id:"算法最低保证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法最低保证"}},[v._v("#")]),v._v(" 算法最低保证")]),v._v(" "),e("p",[v._v("算法只需具备3个特性就可以实现一个最低保障的分布式锁。")]),v._v(" "),e("ul",[e("li",[v._v("安全属性： 独享（相互排斥）。在任一时刻，只有一个客户端持有锁。")]),v._v(" "),e("li",[v._v("活性 A：无死锁。即便持有锁的客户端崩溃或者网络分裂等，锁依然可以被拿到。")]),v._v(" "),e("li",[v._v("活性 B：容错。只要大部分 Redis 节点活着，客户端就可以获取和释放锁。")])]),v._v(" "),e("p",[e("strong",[v._v("概括：")]),v._v(" 独享、无死锁、容错。")]),v._v(" "),e("h2",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[v._v("#")]),v._v(" 配置文件")]),v._v(" "),e("p",[v._v("Redis 的根目录中有一个配置文件（redis.conf）。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("config get setting_name")]),v._v("，获取配置")]),v._v(" "),e("li",[e("code",[v._v("config set setting_name setting_value")]),v._v("，编辑配置")])]),v._v(" "),e("p",[e("code",[v._v("redis.conf")]),v._v(" 常用配置项。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("port 6379")]),v._v(" "),e("ul",[e("li",[v._v("指定 Redis 监听端口，默认端口为 6379")])])]),v._v(" "),e("li",[e("code",[v._v("bind 127.0.0.1")]),v._v(" "),e("ul",[e("li",[v._v("绑定的主机地址")])])]),v._v(" "),e("li",[e("code",[v._v("timeout 300")]),v._v(" "),e("ul",[e("li",[v._v("当客户端闲置多长时间后关闭连接，如果指定为 0，表示关闭该功能")])])]),v._v(" "),e("li",[e("code",[v._v("databases 16")]),v._v(" "),e("ul",[e("li",[v._v("设置数据库的数量，默认数据库为 0，可以使用 "),e("code",[v._v("SELECT <dbid>")]),v._v(" 命令在连接上指定数据库 id")])])]),v._v(" "),e("li",[e("code",[v._v("save <seconds> <changes>")]),v._v(" "),e("ul",[e("li",[v._v("指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合")]),v._v(" "),e("li",[v._v("Redis 默认配置文件中提供了三个条件：\n"),e("ul",[e("li",[v._v("save 900 1")]),v._v(" "),e("li",[v._v("​save 300 10")]),v._v(" "),e("li",[v._v("save 60 10000")]),v._v(" "),e("li",[v._v("分别表示 900 秒（15 分钟）内有 1 个更改，300 秒（5 分钟）内有 10 个更改以及 60 秒内有 10000 个更改。")])])])])]),v._v(" "),e("li",[e("code",[v._v("loglevel verbose")]),v._v(" "),e("ul",[e("li",[v._v("指定日志记录级别，Redis 总共支持四个级别：debug、verbose、notice、warning，默认为 verbose")])])]),v._v(" "),e("li",[e("code",[v._v("logfile stdout")]),v._v(" "),e("ul",[e("li",[v._v("日志记录方式，默认为标准输出，如果配置 Redis 为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给 /dev/null")])])]),v._v(" "),e("li",[e("code",[v._v("daemonize no")]),v._v(" "),e("ul",[e("li",[v._v("Redis 默认不是以守护进程的方式运行，可以通过该配置项修改，使用 yes 启用守护进程")])])]),v._v(" "),e("li",[e("code",[v._v("pidfile /var/run/redis.pid")]),v._v(" "),e("ul",[e("li",[v._v("当 Redis 以守护进程方式运行时，Redis 默认会把 pid 写入 /var/run/redis.pid 文件，可以通过 pidfile 指定。")])])]),v._v(" "),e("li",[e("code",[v._v("rdbcompression yes")]),v._v(" "),e("ul",[e("li",[v._v("指定存储至本地数据库时是否压缩数据，默认为 yes，Redis 采用 LZF 压缩，如果为了节省 CPU 时间，可以关闭该选项，但会导致数据库文件变的巨大")])])]),v._v(" "),e("li",[e("code",[v._v("slaveof <masterip> <masterport>")]),v._v(" "),e("ul",[e("li",[v._v("设置当本机为 slave 服务时，设置 master 服务的 IP 地址及端口，在 Redis 启动时，它会自动从 master 进行数据同步")])])]),v._v(" "),e("li",[e("code",[v._v("requirepass foobared")]),v._v(" "),e("ul",[e("li",[v._v("设置 Redis 连接密码，如果配置了连接密码，客户端在连接 Redis 时需要通过 "),e("code",[v._v("AUTH <password>")]),v._v(" 命令提供密码，默认关闭")])])]),v._v(" "),e("li",[e("code",[v._v("maxclients 128")]),v._v(" "),e("ul",[e("li",[v._v("设置同一时间最大客户端连接数，默认无限制，Redis 可以同时打开的客户端连接数为 Redis 进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis 会关闭新的连接并向客户端返回 max number of clients reached 错误信息")])])]),v._v(" "),e("li",[e("code",[v._v("maxmemory <bytes>")]),v._v(" "),e("ul",[e("li",[v._v("指定 Redis 最大内存限制，Redis 在启动时会把数据加载到内存中，达到最大内存后，Redis 会先尝试清除已到期或即将到期的 Key，当此方法处理后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis 新的 vm 机制，会把 Key 存放内存，Value 会存放在 swap 区")])])])]),v._v(" "),e("h2",{attrs:{id:"讨论区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讨论区"}},[v._v("#")]),v._v(" 讨论区")]),v._v(" "),e("blockquote",[e("p",[v._v("由于评论过多会影响页面最下方的导航，故将评论区做默认折叠处理。")])]),v._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[v._v("点击查看评论区内容，渴望您的宝贵建议~")]),v._v(" "),e("Vssue",{attrs:{title:v.$title,options:{locale:"zh"}}})],1)])}),[],!1,null,null,null);_.default=s.exports}}]);