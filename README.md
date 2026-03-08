# 电商后台管理系统模板 🛒

一个基于 React + TypeScript + Ant Design 的电商后台管理系统模板，开箱即用！

## 🎯 特点

- ⚡ **快速开发** - Vite 构建，开发体验极佳
- 🎨 **美观界面** - Ant Design 5.x 组件库，专业 UI
- 📱 **响应式** - 支持 PC 和移动端
- 🔐 **完整功能** - 登录、商品、订单、用户管理
- 📊 **数据可视化** - 仪表盘数据统计
- 🆓 **完全免费** - MIT License，免费商用

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **UI 库**: Ant Design 5.x
- **构建工具**: Vite 5.x
- **路由**: React Router 6.x
- **图表**: 预留 ECharts 集成

## 📦 功能模块

### ✅ 已完成
- ✅ **登录页面** - 用户名密码登录、记住密码
- ✅ **仪表盘** - 销售数据、订单统计、最新订单
- ✅ **商品管理** - 商品列表、添加商品、搜索筛选
- ✅ **订单管理** - 订单列表、订单详情、发货
- ✅ **用户管理** - 用户列表、状态管理
- ✅ **系统设置** - 网站配置、开关设置

### ✅ 新增功能
- ✅ **数据导出** - 订单/商品导出 Excel
- ✅ **暗黑模式** - 一键切换主题

### 🚧 待开发
- 商品分类管理
- 退款管理
- 权限管理
- 操作日志

## 🚀 快速开始

```bash
# 克隆项目
git clone <repo-url>
cd ecommerce-admin-template

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
# 默认账号：admin / 123456

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 📁 项目结构

```
ecommerce-admin-template/
├── src/
│   ├── layouts/          # 布局组件
│   │   ├── Sidebar.tsx   # 侧边栏
│   │   ├── Header.tsx    # 顶部导航
│   │   └── MainLayout.tsx # 主布局
│   ├── pages/            # 页面组件
│   │   ├── Login.tsx     # 登录页
│   │   ├── dashboard/    # 仪表盘
│   │   ├── product/      # 商品管理
│   │   ├── order/        # 订单管理
│   │   ├── user/         # 用户管理
│   │   └── settings/     # 系统设置
│   ├── components/       # 通用组件
│   ├── utils/           # 工具函数
│   ├── App.tsx          # 主应用
│   └── main.tsx         # 入口文件
├── package.json
└── README.md
```

## 💰 授权说明

| 版本 | 价格 | 权益 |
|------|------|------|
| **个人版** | ¥99 | 个人学习使用，不含商用授权 |
| **企业版** | ¥299 | 商业项目使用，永久授权，技术支持 |

## 📞 联系方式

- **微信**: 18792990976
- **GitHub**: https://github.com/CoderQuixote/ecommerce-admin-template

## 📸 截图展示

### 登录页面
（待添加截图）

### 仪表盘
- 总销售额统计
- 订单数量统计
- 用户数量统计
- 今日访问统计
- 最新订单列表

### 商品管理
- 商品列表（搜索、筛选）
- 添加商品（表单、图片上传）
- 商品上下架

### 订单管理
- 订单列表
- 订单详情
- 订单状态管理

## 📝 更新日志

### v1.0.0 (2026-03-08)
- ✅ 初始版本发布
- ✅ 登录页面
- ✅ 仪表盘
- ✅ 商品管理（列表、添加）
- ✅ 订单管理（列表）
- ✅ 用户管理
- ✅ 系统设置

### 🚧 下一步
- 数据图表集成（ECharts）
- 订单详情弹窗
- 商品分类管理
- 退款管理
- 移动端适配

## 📄 License

MIT License

---

**GitHub**: https://github.com/CoderQuixote/ecommerce-admin-template
**开发时间**: 1 天（框架）+ 持续完善
**当前版本**: v1.0.0
**最后更新**: 2026-03-08
**维护者**: 凡哥

---

## 💡 使用建议

1. **本地开发**: `npm run dev` 启动热更新
2. **生产部署**: `npm run build` 构建后部署 dist 目录
3. **二次开发**: 根据需求修改 pages 下的组件
4. **主题定制**: 修改 Ant Design 主题配置

---

**觉得不错的话，给个 Star ⭐ 呗！**
