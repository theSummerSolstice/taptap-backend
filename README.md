# 🗂 taptap
- [taptap link](https://www.tap-tap.site)
<img src='https://drive.google.com/uc?id=1Y0qAZBgPGgDyWYNBoGlv2LxOK2sgt-Il' alt='thumbnail'>

## Table of contents
1. [taptap](#taptap)
2. [Feature](#feature)
3. [Simulation](#simulation)
4. [How to use](#how-to-use)
5. [How to run](#how-to-run)
6. [Schedule](#schedule)
7. [Tech Stack](#tech-stack)
8. [Task Tools](#tast-tools)
9. [Deploy](#deploy)
10. [Daily Retrospective](#daily-retrospective)
11. [Things to do](#things-to-do)

---

## taptap
  #포스트잇 #브레인스토밍 #협업 #카테고라이징


taptap은 브레인스토밍부터 프로젝트 회고까지 포스트잇을 활용하여 쉽게 아이디어를 내고 정리할 수 있는 협업 툴입니다.

## Feature
- 더블클릭 한 번으로 쉽게 포스트잇을 만들고, 이리저리 옮기면서 생각을 정리할 수 있습니다.
- 혼자서, 그리고 동료들과 함께 동시에 브레인스토밍을 할 수 있습니다. (초대한 유저만 참여 가능)
- Snapshot을 찍어서 버전을 관리하고, 언제든지 이전의 상태로 돌아갈 수 있습니다.

## Simulation
[Youtube URL](http://www.google.com)
<img src='https://drive.google.com/uc?id=1aWXuQTVVDVEtGEo1EY3YD3hXZeOZEag6' alt='gif image'>

## How to use
1. **Board 생성**
  - 구글 소셜 로그인 후, [New taptap] 버튼을 누르세요.
  - 프로젝트명과 공개 여부를 설정하고 [Confirm] 버튼을 누르면, 동료를 초대하는 화면이 나옵니다.
  - 초대할 동료의 이메일 주소를 입력 후 [Invite] 버튼을 누르면 초대 메일이 발송됩니다. (Skip으로 초대 없이 넘어갈 수 있습니다.)
  - [Confirm] 버튼을 누르면 새로운 Board가 생성됩니다.
2. **Board 사용 방법**
  - 화면을 더블클릭하면 포스트잇 입력창이 활성화됩니다.
  - 내용을 입력한 후, [Confirm] 버튼을 누르면 포스트잇이 생성됩니다.
  - 생성된 포스트잇은 캔버스 내에서 자유롭게 이동할 수 있고, 마우스를 위로 올리면 삭제 버튼을 확인할 수 있습니다.
  - 포스트잇을 다 입력하고 나서 [Categorize] 버튼을 누르면, Categorizing 단계로 넘어갑니다.
  - 원하는 Category를 추가해서 포스트잇을 분류할 수 있습니다.
  - Categorizing이 완료된 화면은 상단의 다운로드 버튼을 통해 이미지로 다운로드할 수 있습니다.
3. **Version Control**
  - 작업 과정 과정을 저장하고 싶다면 History Mode를 이용할 수 있습니다.
  - 먼저 저장하고 싶은 상태에서 [Snapshot] 버튼을 눌러 Snapshot을 저장하세요.
  - [History Mode]를 키면 지금까지 저장한 Snapshot을 순서대로 볼 수 있습니다.
  - 혹시 돌아가고 싶은 버전이 있다면, 클릭 후 [Return]을 누르면 해당 상태로 돌아갑니다. 다만, 돌아간 버전 이후의 데이터는 모두 삭제됩니다.

## How to run
- **Installation**
Local 환경에서 실행하기 위해서는 아래 내용을 먼저 확인해주세요.
<!-- env file sample -->
1. [Google Firebase Auth](https://firebase.google.com/)
2. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
3. [NodeMailer](https://nodemailer.com/about/)

- 각 Github Repository에서 코드를 Clone 후, .env.sample 파일의 형식에 맞게 환경 변수를 입력하세요.
> - Frontend github URL: [Frontend](https://github.com/theSummerSolstice/taptap-frontend)
> - Backend github URL: [Backend](https://github.com/theSummerSolstice/taptap-backend)

```
// Frontend
git clone https://github.com/theSummerSolstice/taptap-frontend.git

// Backend
git clone https://github.com/theSummerSolstice/taptap-backend.git

npm install
cd ./frontend && npm run dev
cd ./backend && npm run dev
```
1. 각 Repository를 하나의 폴더에 Clone 합니다.
2. 환경 변수를 .env.sample에 맞게 입력합니다.
3. npm install을 통해 패키지를 설치합니다.
4. 터미널에서 Frontend, Backend 각각 npm run dev로 실행하면 taptap을 확인할 수 있습니다. (Default Server: [http://localhost:3000](http://localhost:3000))

## Schedule
- **총 기간: 2020. 11. 30 ~ 2020. 12. 18**
- **Planning**: 2020. 11. 30 ~ 2020. 12. 02
  - 아이디어 확정 및 브레인스토밍
  - Teck Stack 확정, 프로젝트 Mockup제작, Github Repository 셋팅
  - MongoDB Schema 확정, Task Scheduling
  - Frontend, Backend 기본 환경 셋팅 및 개발 시작
- **Developing**: 2020. 12. 03 ~ 2020. 12. 18
  - 구글 소셜 로그인 및 기본 셋팅
  - Main Page, List Page, New Project Form 페이지 개발
  - [Socket.io](http://socket.io) 연결 (Redux Saga EventChannel 연결)
  - Board Canvas, Version control, Categorizing 개발 진행
  - 테스트 코드 작성 및 배포 완료

## Tech Stack
- **Frontend**
  - React
  - Redux (Redux-saga, @reduxjs/toolkit)

- **Backend**
  - MongoDB Atlas (mongoose(ODM))
  - Express
  - NodeJS

- **Third party stack**
  - Git
  - JSON Web Token
  - Socket.io
  - Jest, React-testing-library, Mocha, Chai, Sinon
  - ESLint
  - SCSS tools

## Task Tools
- **Figma**
  - Mockup 디자인 툴
  - [Figma Link](https://www.figma.com/file/9pRdnseACnUCasda0rxzRu/taptap?node-id=0%3A1)
- **Lucid Chart**
  - Database Schema 제작 툴
  - [Lucid Chart Link](https://lucid.app/lucidchart/invitations/accept/78fea081-4fc4-4af0-bdca-8d287d57bcb0)
- **Notion**
  - 프로젝트 Task 및 이슈 관리
  - [Notion Link](https://www.notion.so/1ff95b7e4400490e96ada7813ea2366a?v=6e4840fa58d141e590a08349836987cc)

## Deploy
- **Client**
  - Netlify를 이용한 Client 배포
  - [https://www.tap-tap.site](https://www.tap-tap.site)
- **Server**
  - AWS Elastic Beanstalk를 이용한 Server 배포
  - AWS Code Pipeline을 통한 Server 배포 자동화

## Daily retrospective
<!-- TIL image -->

## Things to do
1. 마인드맵 등 포스트잇 외 브레인스토밍 툴 추가
2. 초대된 회원 말고 아무나 접속할 수 있는 공유 기능 확장
3. 반응형 Web application 구현
