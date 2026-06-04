# 虞苏平｜AI项目作品集

独立的单页作品集网站，使用 React + Vite + Tailwind CSS 构建。页面不会修改现有小红书洞察工具界面。

## 本地运行

```bash
cd /Users/susu/Documents/舆情/portfolio
npm install
npm run dev
```

启动后打开终端输出的本地地址，通常是 `http://127.0.0.1:5173/`。

## 媒体资源

图片和视频未准备好时，页面会显示正式占位区。资源准备好后放入 `public/`，不需要改代码：

- `public/xhs-demo.mp4`
- `public/xhs-demo.mov`
- `public/ad-prompt.png`
- `public/ad-table.png`
- `public/ad-report-overview.png`
- `public/ad-report-dimensions.png`
- `public/ad-report-content.png`
- `public/ad-report-combo.png`
- `public/ad-report-strategy.png`

当前小红书项目录屏已放入 `public/xhs-demo.mov`。如果后续转成 mp4，放入 `public/xhs-demo.mp4` 后页面会优先使用 mp4。

## 构建验证

```bash
npm run build
npm run preview
```

## 部署到 Vercel

在 Vercel 导入仓库时使用：

- Root Directory: `portfolio`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
