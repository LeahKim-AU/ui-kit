# UI Kit (React + TypeScript + Storybook)

React + TypeScript + Vite 기반의 UI 컴포넌트 라이브러리입니다.  
Storybook을 사용해 컴포넌트를 문서화하고, GitHub Pages를 통해 배포했습니다.

## 📖 Live Demo
👉 [Storybook 데모 보러가기](https://LeahKim-AU.github.io/ui-kit/)

## ✨ Features
- **Button**: variant/size/loading 상태 지원
- **Input**: label, helperText, error 상태, 접근성(aria) 적용
- **Modal**: ESC/Backdrop 닫기, 포커스 관리, 접근성 준수
- **Table**: 정렬, 로딩, Empty state 처리

## ⚙️ Tech Stack
- React 18
- TypeScript
- Vite
- Storybook
- Emotion (CSS-in-JS)
- GitHub Actions (자동 배포)

## 📂 Project Structure
```
src/
└─ stories/
├─ Button.tsx / Button.stories.tsx
├─ Input.tsx / Input.stories.tsx
├─ Modal.tsx / Modal.stories.tsx
└─ Table.tsx / Table.stories.tsx
```

## 🚀 Getting Started
```bash
git clone https://github.com/LeahKim-AU/ui-kit.git
cd ui-kit
yarn install
yarn storybook
```
