# Frontend Repository

### 📌 프로젝트 개요

- **프로젝트명:** MONDAY
- **설명:** 중학생을 위한 AI기반 경제 뉴스 학습 플랫폼
- **기술 스택:** Next.js, React, tailwindCSS
- **배포 환경:** AWS S3, CloudFront

### **💻 시작하기**

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000/)

### 📂 프로젝트 구조

```tsx
frontend/
├── src/
│   ├── app/                       # Next.js 13+ App Router
│   │   ├── (landing)/             # 랜딩 페이지 그룹
│   │   │   ├── landing/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── (main)/                # 인증이 필요한 영역
│   │   │   ├── dashboard/
│   │   │   ├── mon-news/
│   │   │   ├── mon-word/
│   │   │   ├── ...
│   │   │   ├── student/           # 학생
│   │   │   │   └── [id]/
│   │   │   ├── parent/            # 부모
│   │   │   │   └── [id]/
│   │   │   ├── layout.tsx         # 메인 레이아웃
│   │   │   ├── error.tsx          # 에러 처리
│   │   │   └── loading.tsx        # 로딩 UI
│   │   │   └──
│   │   └── (auth)/                # 인증 레이아웃
│   │       └── layout.tsx
│   │
│   ├── components/                # 공통 컴포넌트
│   │   ├── auth/                      # 인증 플로우 전용
│   │   ├── ui/                        # UI 요소(버튼, 카드 등)
│   │   └── shared/                    # 공통 재사용 컴포넌트(헤더, 푸터 등)
│   │
│   ├── hooks/                     # 커스텀 훅
│   │
│   ├── styles/                    # 스타일 관련
│   │   ├── globals.css                # 전역 스타일
│   │   └── theme/                     # 디자인 시스템
│   │
│   ├── types/                     # 타입 정의
│   │   └── index.ts                   # 프로젝트 전체 타입
│   │
│   └── utils/                     # 유틸리티 함수
│       ├── auth.ts                    # 인증 관련
│       └── api.ts                     # API 통신
│
├── public/                        # 정적 자원
│   ├── images/
│   └── icons/
│
├── middleware.ts                  # 인증 미들웨어
├── tsconfig.json                  # TS 설정
└── package.json

+ 계층 구조 최대 3-depth
```

### 🔥 Git Branch 전략

- **main**: 배포 가능한 안정적인 코드만 포함
- **dev**: 개발 브랜치, 모든 기능이 병합되는 브랜치
- **feat**: 새로운 기능 개발 브랜치 (예: `feat/#이슈넘버/login-api`)
- **fix**: 긴급 수정 사항 반영 (예: `fix/#이슈넘버/critical-login-bug`)

> 브랜치 네이밍 예시: feat/#이슈넘버/{기능명} fix/#이슈넘버/{기능명}

### 📌 Commit Message Convention

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

### ⭐ PR & Code Review

- **PR** 상대방이 approve 후 merge
- PR은 400줄을 넘지 않게, 작은 크기로 자주 하기

### 🛠️ 코드 스타일 가이드

- **Airbnb JavaScript Style Guide**
  - [Airbnb Jabascript Style Guide](https://github.com/airbnb/javascript)
  - [Airbnb Jabascript Style Guide - 한글 번역](https://github.com/tipjs/javascript-style-guide)
