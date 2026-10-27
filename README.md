# 📊 LegalOps Real-Time Workload & Productivity Dashboard (React 18)

## 🎯 Business Problem
Corporate legal departments often struggle to measure real-time team workload and separate high-value strategic legal work from repetitive administrative tasks. Without dynamic KPIs, justifying headcount or prioritizing automation (RPA) becomes guesswork.

## 💡 Technical Solution (Full-Stack Serverless Architecture)
A zero-cost, serverless Full-Stack Web Application built natively within the Google Workspace ecosystem, combining a **Google Apps Script (V8)** backend with a modern **React 18 + Tailwind CSS** frontend.

> **Architectural Note:** To bypass Google Apps Script's `HtmlService` bundler limitations while maintaining zero external hosting costs and strict corporate data privacy (LGPD/GDPR), the React 18 frontend is engineered as a Single-File Component architecture delivered via CDN within an isolated IFRAME sandbox.

### 🛠️ Tech Stack & Engineering Highlights
* **Frontend:** React 18 (Hooks: `useState`, `useEffect`, `useRef`), Tailwind CSS (Glassmorphism UI, Dark Mode, responsive design).
* **Backend & Serverless API:** Google Apps Script (`doGet` Web App deployment, `HtmlService` IFRAME sandbox, native modal dialog integration).
* **Real-Time ETL Pipeline:** Automated memory scans (`getDataRange`), Brazilian decimal/currency normalization (`parseFloat`), and asynchronous client-server communication via `google.script.run` with 10-second live sync polling.

## 📂 Repository Structure
* `Index.html` — Complete React 18 + Tailwind CSS frontend application with executive KPI cards, specialist workload breakdown, and multi-column dynamic filtering.
* `Code.gs` — Serverless backend controller handling Google Sheets ETL data extraction, JSON serialization, and Web App routing.

## 📈 Key Results & Impact
* **100% Workload Visibility:** Real-time tracking of **1,500+ monthly operational hours** across **178 mapped routines**.
* **Bottleneck Identification:** Uncovered that **33% of mapped tasks were non-legal** and **76.6% of hours were spent on repetitive routines** (Daily/Weekly), providing data-driven justification for RPA prioritization and headcount allocation.
* **Zero Infrastructure Cost:** 100% hosted on existing corporate cloud infrastructure, eliminating external server costs or paid BI licenses.
