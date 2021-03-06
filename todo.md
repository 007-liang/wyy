### 需要完成的问题
1. 配置文件：√
    1. vue-router √
    2. vuex √
    3. eslint √

2. 关联GitHub仓库 √

3. 完成基本布局 √

4. 登录 √
    1. 二维码登录 √
    2. 手机号登录 √
    4. 自动登录 √（关闭网页清除cookie）


### 注意事项
- 先把服务关闭后再安装依赖
- 注意组件库中组件的名称，减少错误
- 如果组件体积增大了，可以划分成小组件
- 制作可拖拽的组件时，应该直接使用css定位的属性而不是tanslate，这样可以减少许多重复的位置计算
- 断网应该做出提示，并且发送的请求拦截
- 需要设置滚动高度不能设置将小于1的值，因为浏览器不会增加滚动高度小于1的值

### 明天需要完成的功能
- 动态
    - 评论 
- 底部播放功能
    - 点击或拖动进度条，调整歌曲的播放时间 √ 
    - 调整音乐的音量条 √
    - 播放或暂停声音渐渐变大或变小 √
    - 最近播放列表 √
    - 上一首/下一首，按照最近播放列表进行切换 √
    - 在列表中随机播放 √
    - 每次播放的时候提示“已开始播放” √
    - 切换下一首时将当前时间和进度置0 √    
- 播放列表
    - 清空列表，将当前播放的歌曲清除掉 √
    - 滚动到底部（提前）加载更多歌曲 √
    - 点击非歌单歌曲时，加载并切换到最近播放列表 √
    - 加载更多歌曲将小列表加载的歌曲同步到大列表中 √
    - 清空列表不影响大列表中的数据 √
- 首页
    - banner √
    - 推荐歌单 √
    - 独家放送 √
    - 最新音乐 √
    - 将每日推荐和推荐歌单分开来存储，并且实现点击播放单曲和列表 √
- 歌单列表页
    - 普通歌单页 √
        - 歌单标签分类 √
        - 歌单 ( 网友精选碟 ) √
    - 精品歌单页 √
        - 精品歌单 API √
- 最新音乐页
    - 列表 新歌速递 API √
    - 需要完成列表播放和切换列表的功能 √
- MV页面
    - 视频播放 √
    - 点赞和收藏需要同步数据 √
- 搜索
    - 搜索页 √
    - 搜索提示 √
    - 热搜榜 √
    - 将搜索到的内容对应上关键字 √
        - 将搜索关键词的特殊字符转换成空字符 √
        - 将关键词用mark标签标记起来在通过v-html渲染上去 √
- 音乐播放详情页
    - 歌词跟随跳动 √
        - 歌词比较快的时候，怎么快速的跟上 √
        - 在其他页面点进来怎么让他直接定位过去 √