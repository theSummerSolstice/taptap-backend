# 🗂 taptap
- [taptap link](https://www.tap-tap.site)
![Taptap](/readme-assets/taptap-thumbnail.png)

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

## 🗂 taptap
  #포스트잇 #브레인스토밍 #협업 #카테고라이징


taptap은 브레인스토밍부터 프로젝트 회고까지 포스트잇을 활용하여 쉽게 아이디어를 내고 정리할 수 있는 협업 툴입니다.

2년 전에 '외롭지 않은 기획자 학교'에서 기획 수업을 듣고, 최종적으로 기획한 프로젝트를 발표하고 회고를 할 기회가 있었습니다. 프로젝트와 관련한 아이디어, 감정, 개선 방향 등을 생각나는대로 포스트잇에 적어 붙인 후, 카테고리 별로 정리하는 방식으로 진행되었는데 단순한 포스트잇 여러 장으로 하나의 회고 노트를 만들 수 있었습니다. 이때의 경험을 토대로 회사에서도 프로젝트가 종료되면 개인적으로 포스트잇으로 회고를 진행하고 문서로 정리했는데, 당시 정리해둔 문서들이 실제로 일할 때도 많은 도움이 되었습니다.

위와 같은 경험을 토대로 온라인에서도 포스트잇 워크샵을 할 방법을 고민하게 되었고, 포스트잇을 붙이는 것부터 카테고라이징까지 한 번에 할 수 있는 협업툴인 taptap 프로젝트를 시작하게 되었습니다.

## 📌 Feature
1. 더블클릭 한 번으로 쉽게 포스트잇을 만들고, 자유롭게 위치를 옮기면서 생각을 정리할 수 있습니다. (React-draggable)
2. 혼자서, 또는 동료들과 다같이 브레인스토밍 또는 회고를 진행할 수 있습니다. (Socket.io)
3. Snapshot을 찍어서 버전을 관리하고, 언제든지 이전의 상태로 돌아갈 수 있습니다.

## 📹 Simulation
-  Youtube link: [https://youtu.be/1t4xfKtMdNY](https://youtu.be/1t4xfKtMdNY)
-  프로젝트 발표 영상(2:06:33 부터): [https://youtu.be/jMw5MIxLY3o?t=7570](https://youtu.be/jMw5MIxLY3o?t=7570)

<img src='https://drive.google.com/uc?id=1aWXuQTVVDVEtGEo1EY3YD3hXZeOZEag6' alt='gif image'>

## 🎯 How to use
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

## 🏃‍♀️ How to run
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

## 🗓 Schedule
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

## 💻 Tech Stack
- **Frontend**
    - ES2015+
    - React
    - React-router-dom
    - Redux (Reduxjs/toolkit)
    - Redux-saga
- **Backend**
    - Express
    - MongoDB Atlas
    - NodeJS
- **Third party stack**
    - Git
    - JSON Web Token
    - Socket.io
    - Nodemailer
    - ESLint
    - SCSS
    - Jest, enzyme for unit-test

## 🎨 Task Tools
- **Figma**
  - Mockup 디자인 툴
  - [Figma Link](https://www.figma.com/file/9pRdnseACnUCasda0rxzRu/taptap?node-id=0%3A1)
- **Lucid Chart**
  - Database Schema 제작 툴
  - [Lucid Chart Link](https://lucid.app/lucidchart/invitations/accept/78fea081-4fc4-4af0-bdca-8d287d57bcb0)
- **Notion**
  - 프로젝트 Task 및 이슈 관리
  - [Notion Link](https://www.notion.so/1ff95b7e4400490e96ada7813ea2366a?v=6e4840fa58d141e590a08349836987cc)

## 🖨 Deploy
- **Client**
  - Netlify를 이용한 Client 배포
  - [https://www.tap-tap.site](https://www.tap-tap.site)
- **Server**
  - AWS Elastic Beanstalk를 이용한 Server 배포
  - AWS Code Pipeline을 통한 Server 배포 자동화

## 🤔 Daily retrospective
- **12월 4일 수요일:** 나름대로 기능을 많이 넣었다고 생각했는데, 의견 피드백에서 기능이 다소 빈약한 것 같다는 말을 듣고 많이 좌절했던 날입니다. 아이디어 자체를 바꿀까? 라는 생각도 했지만 제가 정말 구현해보고 싶었던 애플리케이션이라 한참을 고민했습니다. 다행히도 옆자리의 동기가 'Time Travel'을 넣는 것은 어떻냐는 의견을 주었고, 저도 처음에는 혼자서 하는 툴로 기획했으나 Socket을 통한 협업 툴로 한 단계 업그레이드를 시켰습니다. 혼자서 하는 만큼 다 끝낼 수 있을지는 모르겠지만 밤을 새워서라도 최대한 기능을 완성하는 것을 목표로 시작했습니다.
- **12월 8일 화요일:** Redux Saga의 Event Channel을 이용해서 Socket을 연결했습니다. 인터넷에 예제가 생각보다 많지 않아서 적용하는데 꽤 오랜 시간이 걸렸고, Socket event를 on하는 것은 쉽게 적용했으나 emit 이벤트를 어떻게 channel과 연결해야 할지 감이 잡히지 않았습니다. 우선 별도의 객체를 생성하여 emit 이벤트를 생성했는데 추후 Action을 Dispatch하는 방법 등으로 channel 자체에서 처리할 방법을 고민해보고자 합니다.
- **12월 10일 목요일:** 권한 설정의 늪...😢 현재 taptap 프로젝트는 프로젝트 생성 시, 누구나 접근 가능한 public, 그리고 생성자와 초대받은 사람만 접근 가능한 private 권한이 있습니다. 또한 유저에 따라서도 편집이 가능한 유저, 읽기만 가능한 유저, 그리고 접근 자체가 불가한 유저 총 3가지 권한이 있습니다. 처음에는 권한은 금방 설정하겠지 싶었는데 프로젝트 자체의 권한과 유저에 따른 권한이 섞이면서 권한 설정에 어려움을 겪었습니다. 다행히 무조건 로그인을 시키고 권한 설정을 시작하니 조금씩 정리가 되었고, Auth라는 user의 권한 상태를 추가해서 조금 더 분기처리가 용이하게 상태 구조를 변경했습니다. (Auth는 페이지 접근 시마다 변경) 권한에 관한 내용을 더 세세하게 기획했다면 개발할 때 훨씬 편했을 것 같다는 생각이 들었습니다.
- **12월 13일 일요일:** Human Error...😢 포스트잇을 한쪽에서 옮기면 참여하고 있는 다른 사람들에게도 움직임이 보여야 하는데 자꾸 보이지 않는 이슈가 생겼습니다. 업데이트 방식을 포스트잇을 이동 → 이동된 좌표를 Socket 이벤트로 전달 → Socket 서버에서 다른 참여자들에게 이동된 좌표를 전달했는데, 분명히 좌표도 제대로 들어오고 상태도 정상적으로 변화하는데 렌더링이 되지 않았습니다. 멘토도 하고 여러 동기에게도 물어봤지만 답이 나오지 않아서 라이브러리 자체를 바꿔야 하나 고민했는데, 알고 보니 좌표 설정을 변화하는 값이 아닌 Default 값에 설정하는 치명적인 실수가 있었습니다. 알고 나서 허무하기도 했지만, 그래도 역시 기본부터 제대로 보는 것이 얼마나 중요한지 깨달을 수 있었습니다.

## 🧩 Things to do
1. 마인드맵 등 포스트잇 외 브레인스토밍 툴 추가
2. 초대된 회원 말고 아무나 접속할 수 있는 공유 기능 확장
3. 반응형 Web application 구현
