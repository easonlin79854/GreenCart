# GreenCart 購物清單系統開發全紀錄

## 專案概述
GreenCart 是一款專為現代使用者打造的極簡主義購物清單 Web 應用。本專案以使用者體驗為核心，結合了優雅的視覺設計與強大的實用功能，並以指定的品牌色 **GreenCart Green (#3AA94A)** 作為整體設計靈魂。

## 技術規格
- **前端核心**: React 18 (透過 UMD 模式 CDN 載入)
- **伺服器端**: Node.js + Express (負責將靜態網頁派發至 Azure 環境)
- **資料持久化**: 瀏覽器原生 LocalStorage API
- **部署模式**: Node.js Web App (Azure App Service)

## 核心功能詳解
... (略，保持不變)

## 部署與版本控制紀錄

### 1. GitHub 整合
- **儲存庫**: `https://github.com/easonlin79854/GreenCart`
- **工作流**: 使用 Git 同步 `index.html`, `server.js`, `package.json` 等檔案。

### 2. Azure Web App 部署優化 (重大更新)
- **問題描述**: 部署後出現 Azure 預設歡迎頁面，系統未顯示 GreenCart 內容。
- **原因分析**: Azure App Service (Node.js 執行環境) 需要一個活躍的伺服器行程來響應請求。僅上傳 `index.html` 會導致環境因找不到入口點而顯示預設頁面。
- **解決方案**: 
    - **導入 Express 伺服器**: 建立 `server.js` 負責將所有流量導向 `index.html`。
    - **定義 Entry Point**: 建立 `package.json` 並設定 `npm start` 指令。
    - **恢復建置流水線**: 重新啟用 GitHub Actions 中的 `npm install` 步驟，以安裝必要的 `express` 套件。
- **結果**: Azure 成功識別 Node.js 服務並啟動 GreenCart，網頁正式上線。

## 專案文件化規範
- **README.md**: 專案簡介與部署說明。
- **gemini.md**: 紀錄技術決策與除錯歷程。

---
*本文件將隨版本更新持續維護。最近更新日期：2026-04-26*
