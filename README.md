# Frontend Repository

## 📌 프로젝트 개요

- **프로젝트명:** MONDAY
- **설명:** 중학생을 위한 AI기반 경제 뉴스 학습 플랫폼
- **기술 스택:** Next.js, React, tailwindCSS
- **배포 환경:** AWS S3, CloudFront

## **💻 시작하기**

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000/)

## 📂 프로젝트 구조

```tsx
frontend/
├── app/
│  ├── main
│  │   ├── dashboard
│  │   │   └── page.tsx
│  │   ├── monNews
│  │   │   └── page.tsx
│  │   ├── monWord
│  │   │   └── page.tsx
│  │   ├── monSeries
│  │   │   └── page.tsx
│  │   ├── layout.tsx
│  │   └── page.tsx
│  ├── landing
│  │   └── page.tsx
│  ├── login
│  │   └── page.tsx
│  ├── signup
│  │   └── page.tsx
│  ├── student
│  │   └── page.tsx
│  ├── wordHistory
│  │   └── page.tsx
│  ├── newsHistory
│  │   └── page.tsx
│  ├── seriesHistory
│  │   └── page.tsx
│  ├── studentProgress
│  │   └── page.tsx
│  ├── parent
│  │   └── page.tsx
│  ├── parentEdit
│  │   └── page.tsx
│  ├──  components          #공통으로 사용하는 컴포넌트
│  ├──  utils               #공통으로 사용하는 util
│  └──  public              #이미지, 폰트 등 공통 파일
│  │    └── images
│  │    └── icons
└── README.md

```

## 🔥 Git Branch 전략

- **main**: 배포 가능한 안정적인 코드만 포함
- **develop**: 개발 브랜치, 모든 기능이 병합되는 브랜치
- **feature/**: 새로운 기능 개발 브랜치 (예: `feature/#이슈넘버/login-api`)
- **fix/**: 긴급 수정 사항 반영 (예: `fix/#이슈넘버/critical-login-bug`)

> 브랜치 네이밍 예시: feat/#이슈넘버/{기능명}  fix/#이슈넘버/{기능명}
> 

## 📌 Commit Message Convention

**`Feat`**: 새로운 기능 추가

**`Fix`**: 버그 수정

**`Docs`**: 문서 수정

**`Style`**: 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)

**`Design`**: 사용자 UI 디자인 변경 (CSS 등)

**`Test`**: 테스트 코드, 리팩토링 (Test Code)

**`Refactor`**: 리팩토링 (Production Code)

**`Build`**: 빌드 파일 수정

**`Ci`**: CI 설정 파일 수정

**`Perf`**: 성능 개선

**`Chore`**: 자잘한 수정이나 빌드 업데이트, asset 폴더에 이미지 추가

**`Rename`**: 파일 혹은 폴더명을 수정만 한 경우

**`Remove`**: 파일을 삭제만 한 경우

**`Revert`**: 이전 커밋을 되돌리는 경우

**`Init`** : Initial commit

**`Comment`** : 필요한 주석 추가 및 변경

> 커밋 예시: fix/#이슈넘버 : 커밋 내용 설명
> 

## ⭐ PR & Code Review

- **PR** 상대방이 approve 후 merge
- PR은 400줄을 넘지 않게, 작은 크기로 자주 하기

## 🛠️ 코드 스타일 가이드

- **Airbnb JavaScript Style Guide**
    - [Airbnb Jabascript Style Guide](https://github.com/airbnb/javascript)
    - [Airbnb Jabascript Style Guide - 한글 번역](https://github.com/tipjs/javascript-style-guide)
