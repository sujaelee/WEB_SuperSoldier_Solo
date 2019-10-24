<a href="https://osam-satic.herokuapp.com/"><img src="https://img.icons8.com/cotton/2x/olympic-medal-silver.png" title="Logo" alt="Logo"></a>

# SuperSoldier - 군인을 위한 최고의 학습 앱.

> 교범이나 A4를 보면서 외우는 옛날 공부는 그만.  
SuperSoldier를 이용해 군인에게 필요한 자료를 카드와 시험을 보며 과학적으로 학습하고 실력을 확인하세요.


[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) 

프로젝트명 : SuperSoldier  
개발자/팀명 : 상병 이수재  
주요내용 : 군인들에게 필요한 자료들을 모아 각자 공부할 수 있게 하고, 카드를 사용한 간격 반복학습과 시험을 볼 수 있게하는 웹 앱


## 어떤 프로젝트죠? 
군인들에게 필요한 자료들을 모아 공부할 수 있게 하고, 카드를 사용한 간격 반복학습과 시험을 볼 수 있게 하는 프로젝트 입니다.  
Vue를 사용하여 SPA로 만들었습니다.

## 백문이 불여일견 
[데모 사이트](https://osam-satic.herokuapp.com/) 에서 직접 체험해 보기.  (sample ID : a, sample PW : a)

## 프로젝트 소개 문서
example

## 화면 정의서


https://balsamiq.cloud/so53c72/pjd5yvv/rD872

## 주요 기능들 
로그인 기능을 통해 개별 사용자 별 학습이 가능합니다. 
![](http://g.recordit.co/ka3bd6l6jy.gif)

공부하기 메뉴에서 듣고 싶은 자료를 신청하고, 챕터별로 공부할수 있습니다.
![](http://g.recordit.co/OYb4tOedaK.gif)

카드학습 메뉴에서 신청한 자료에 맞는 카드들을 간격 반복 기법으로 공부할 수 있습니다.  
옆 메뉴에서 복습까지 남은 시간을 나타내 줍니다.
![](http://g.recordit.co/eSA0lprxql.gif)

시험보기 메뉴에서 시험을 볼 수 있다. 답안을 입력할 수 있고, 수정할 수 있습니다. 이후 제출하면, 점수가 저장됩니다. 
![](http://g.recordit.co/Suz6nanASX.gif)

프로필 메뉴에서 내가 수강하고 있는 자료들, 카드, 시험 모두 볼 수 있습니다.
![](http://g.recordit.co/Bq1wGMv9sO.gif)

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
- 앱을 설치하기 위해 node.js가 필요합니다.
- 이 웹 앱은 PC 크롬 브라우저를 기본으로 개발되었습니다. 다른 환경에서는 UI가 의도한 바와 다르게 동작할 수 있습니다.

## 설치 안내 (Installation Process)
```
# npm install
을 실행하여 필요한 node module들을 다운로드 받습니다.
# npm run serve
앱을 개발할 때 사용됩니다. 파일들을 컴파일 후 서버에서 실행합니다.
# npm run build
앱을 프로덕션용으로 배포할 때 사용합니다. 컴파일된 파일들은 /dist 폴더로 들어가게 되며 생성된 index.html 파일을 실행하면 앱이 실행됩니다.
```

## 사용법 (Getting Started)
- 위에서의 설치를 완료하여 서버가 파일을 실행하면, 주소에 접속해 사용하면 됩니다.

## 파일 정보 및 목록 (File Manifest)
- __supersoldier__
  - [README.md](supersoldier/README.md)
  - [babel.config.js](supersoldier/babel.config.js)
  - [directoryList.md](supersoldier/directoryList.md)
  - [node_modules](supersoldier/node_modules)
  - [package-lock.json](supersoldier/package-lock.json)
  - [package.json](supersoldier/package.json)
  - __public__
    - [favicon.ico](supersoldier/public/favicon.ico) 
    - [index.html](supersoldier/public/index.html) 
  - __src__
    - [App.vue](supersoldier/src/App.vue)
    - __assets__
      - [correct.png](supersoldier/src/assets/correct.png)
      - [graph.png](supersoldier/src/assets/graph.png)
      - [logo.png](supersoldier/src/assets/logo.png)
      - [note.png](supersoldier/src/assets/note.png)
    - __components__
      - [Card.vue](supersoldier/src/components/Card.vue) 개별 카드들을 학습할때 보여주는 카드 컴포넌트입니다.
      - [Cards.vue](supersoldier/src/components/Cards.vue) 카드 학습 탭에서 카드들을 보여주는 컴포넌트입니다.
      - [CardsWrapper.vue](supersoldier/src/components/CardsWrapper.vue) 카드들에 데이터를 제공하는 컴포넌트 입니다.
      - [Header.vue](supersoldier/src/components/Header.vue) 사이트의 헤더 부분( 네비게이션 메뉴)를 제공하는 컴포넌트 입니다.
      - [Home.vue](supersoldier/src/components/Home.vue) 랜딩 페이지를 제공하는 컴포넌트 입니다.
      - [Login.vue](supersoldier/src/components/Login.vue) 로그인 페이지를 제공하는 컴포넌트 입니다.
      - [Profile.vue](supersoldier/src/components/Profile.vue) 로그인 후 나타나는 프로필을 보여주는 컴포넌트 입니다.
      - [Subject.vue](supersoldier/src/components/Subject.vue) 개별 과목들을 보여주는 컴포넌트 입니다.
      - [Subjects.vue](supersoldier/src/components/Subjects.vue) 과목들을 모아서 보여주는 컴포넌트 입니다.
      - [SubjectsWrapper.vue](supersoldier/src/components/SubjectsWrapper.vue) 과목들에 데이터를 제공하는 컴포넌트 입니다.
      - [Test.vue](supersoldier/src/components/Test.vue) 개별 시험을 보여주는 컴포넌트 입니다.
      - [Tests.vue](supersoldier/src/components/Tests.vue) 시험들을 보여주는 컴포넌트 입니다.
      - [TestsWrapper.vue](supersoldier/src/components/TestsWrapper.vue) 시험들에 데이터를 제공하는 컴포넌트 입니다.
    - [main.js](supersoldier/src/main.js)
    - [routes.js](supersoldier/src/routes.js)
    - __store__
      - [index.js](supersoldier/src/store/index.js) 스토어 폴더 안에 있으면서 vuex를 통해 앱의 데이터를 관리하는 파일입니다.
  - [vue.config.js](supersoldier/vue.config.js)


## 저작권 및 사용권 정보 (Copyright / End User License)
- [mit license](https://mit-license.org/)

## 배포자 및 개발자의 연락처 정보 (Contact Information)
- [이수재](github.com/sujaelee) (sujaelee7940@gmail.com)

## 알려진 버그 (Known Issues)
- 이번 웹 과정 캠프의 목적에 맞게 Vue를 사용해 프론트엔드만 완성한 프로젝트 입니다.
- 앱을 종료하면, 데이터가 저장되지 않습니다.

## 문제 발생에 대한 해결책 (Troubleshooting)
- 완전히 기능하는 프로젝트를 만들기 위해서 서버와 DB를 붙이고자 한다면 백엔드로 API 서버를 만들어 axios와 같은 기능을 이용하여 데이터를 당겨오는 것이 필요합니다

## 크레딧 (Credit)
Shout out to
- [vue](https://github.com/vuejs/vue)
- [element-ui](https://github.com/ElemeFE/element)

## 업데이트 정보 (Change Log)
- ver 0.1 : 기본적 메뉴 탭만 정의
- ver 0.2 : 메뉴마다 기능 작동 완성
- ver 0.3 : 더미 데이터 추가
- ver 0.4(현재) : 로그인 기능 추가
