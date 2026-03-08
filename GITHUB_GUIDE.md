# 🚀 GitHub 发布指南

---

## 第 1 步：创建 GitHub 仓库

**1. 登录 GitHub**
- 网址：https://github.com
- 登录你的账号

**2. 创建新仓库**
- 点击右上角 "+" → "New repository"
- 仓库名：`ecommerce-admin-template`
- 描述：`🛒 电商后台管理系统模板 | React + TypeScript + Ant Design | 开箱即用`
- 可见性：Public（公开）
- **不要** 勾选 "Initialize this repository with a README"（我们已经有代码了）
- 点击 "Create repository"

**3. 推送代码**

在终端执行：
```bash
cd /Users/cfwang/.openclaw/workspace/ecommerce-admin-template
git remote add origin https://github.com/你的用户名/ecommerce-admin-template.git
git branch -M main
git push -u origin main
```

**替换 `你的用户名` 为你的 GitHub 用户名！**

---

## 第 2 步：完善 GitHub 仓库

**1. 添加 Topics（标签）**
在仓库页面右侧 "About" 区域，添加：
```
react typescript antd admin-template ecommerce dashboard vite
```

**2. 固定 README**
确保 README.md 显示在仓库首页（默认就会显示）

**3. 添加许可证**
- 点击 "Add file" → "Create new file"
- 文件名：`LICENSE`
- 内容：选择 MIT License
- Commit

**4. 添加截图**
- 在本地截几张图（登录页、仪表盘、商品列表、订单列表）
- 放到 `screenshots/` 文件夹
- 推送到 GitHub

---

## 第 3 步：更新 README 中的链接

编辑 `README.md`，替换以下内容：

```markdown
## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/你的用户名/ecommerce-admin-template.git
cd ecommerce-admin-template
```
```

---

## 第 4 步：发布 Release

**1. 创建 Release**
- 仓库页面 → "Releases" → "Draft a new release"
- Tag version: `v1.0.0`
- Release title: `v1.0.0 - 初始版本`
- 描述：
```
## 功能
- ✅ 登录页面
- ✅ 仪表盘
- ✅ 商品管理
- ✅ 订单管理
- ✅ 用户管理
- ✅ 系统设置

## 技术栈
- React 18 + TypeScript
- Ant Design 5.x
- Vite 5.x

## 购买商用授权
微信：18792990976
```
- 上传源码包：`ecommerce-admin-template-v1.0.0.zip`（在 `/Users/cfwang/.openclaw/workspace/` 目录）
- 点击 "Publish release"

---

## 第 5 步：GitHub Pages 部署（可选）

**1. 启用 GitHub Pages**
- 仓库 → Settings → Pages
- Source: Deploy from branch
- Branch: main
- Folder: / (root)
- 点击 Save

**2. 访问地址**
```
https://你的用户名.github.io/ecommerce-admin-template/
```

---

## ✅ 完成后检查清单

- [ ] 仓库创建成功
- [ ] 代码推送成功
- [ ] README 显示正常
- [ ] Topics 已添加
- [ ] LICENSE 已添加
- [ ] Release 已创建
- [ ] 源码包已上传

---

## 📞 遇到问题？

**常见问题：**

**Q: push 失败，提示权限错误？**
```bash
# 使用 HTTPS 方式
git remote set-url origin https://github.com/你的用户名/ecommerce-admin-template.git
git push -u origin main

# 或使用 SSH 方式
git remote set-url origin git@github.com:你的用户名/ecommerce-admin-template.git
git push -u origin main
```

**Q: 忘了配置 Git 用户信息？**
```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

---

**完成后告诉我，我帮你写掘金文章！** 🦞
