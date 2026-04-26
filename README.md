# 🛒 GreenCart - 簡約購物清單系統

![Theme Color](https://img.shields.io/badge/Theme%20Color-%233AA94A-brightgreen)
![Version](https://img.shields.io/badge/Version-1.2.0-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

**GreenCart** 是一款追求極簡美學與直覺操作的購物清單應用程式。採用單檔案架構設計，無需安裝任何開發環境，開啟瀏覽器即可享有高品質的購物管理體驗。

---

## ✨ 核心特色

### 🎨 美學與視覺
- **品牌主題色**: 嚴選 `#3AA94A` 綠色，營造清新且健康的購物氛圍。
- **深淺色切換**: 支援動態深色模式，保護眼睛並提供絕佳的低光源操作體驗。
- **響應式設計**: 完美適配手機、平板與桌上型電腦。

### 🌍 國際化支援 (I18N)
內建五國語言切換，包含：
- 繁體中文、簡體中文 (針對字體渲染深度優化)、English、日本語、Deutsch。

### 🛠️ 實用功能
- **智慧排序**: 未完成項目自動置頂，已完成項目沉底顯示。
- **進度追蹤**: 即時視覺化進度條，掌握購物達成率。
- **數據持久化**: 100% 本地儲存 (LocalStorage)，無需註冊帳號，保護隱私且資料不丟失。
- **匯出與列印**: 支援匯出為 `.txt` 檔案，或使用專用列印樣式印製實體清單。

---

## 🚀 快速上手

### 本地執行
1. 下載 `index.html` 檔案。
2. 使用任何現代瀏覽器（Chrome, Edge, Firefox, Safari）直接雙擊開啟。
3. *注意：初次執行需要網路連線以載入 React 引擎元件。*

### 雲端部署 (Azure Static Web Apps)
1. 將 `index.html` 上傳至您的 GitHub 儲存庫。
2. 登入 [Azure Portal](https://portal.azure.com/)。
3. 建立 **Static Web App** 並連結您的 GitHub 儲存庫。
4. 部署設定選擇「Custom」，並將 App 位置設為 `/`。
5. 完成後即可獲得一個 24 小時在線的專屬網址。

---

## 💻 技術規格

- **框架**: React 18 (UMD Version)
- **編譯**: Babel Standalone
- **樣式**: CSS Variables & Flexbox/Grid
- **儲存**: Browser LocalStorage API
- **架構**: Single-File Architecture (SFA)

---

## 📁 檔案結構
```text
.
├── index.html      # 核心應用程式 (包含所有邏輯與樣式)
├── gemini.md       # 詳細開發開發紀錄與規範
└── README.md       # 本專案說明文件
```

---

## 📄 授權說明
本專案採用 MIT 授權條款。您可以自由地使用、修改及散佈。

---

**讓購物變得更輕鬆、更優雅。** 
© 2026 GreenCart Team.
