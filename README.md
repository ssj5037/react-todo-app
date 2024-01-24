# [✅ My Todo](https://illustrious-sopapillas-3197f0.netlify.app/)
[![Video Label](http://img.youtube.com/vi/gLUNE5Qa1XQ/0.jpg)](https://youtu.be/gLUNE5Qa1XQ)
<h3>간편하게 할 일을 관리할 수 있는 <a href='https://illustrious-sopapillas-3197f0.netlify.app/'>✅My Todo</a> 입니다.</h3>
<ul>
  <li>배포 : https://illustrious-sopapillas-3197f0.netlify.app/</li>
</ul>

## 프로젝트 소개
### 제작 이유
- React.js를 공부를 하는 도중 역량 개발을 위해 제작하였습니다.
- 수강 강의 : [드림코딩 - 리액트](https://academy.dream-coding.com/courses/react)

### 기능 목록
- Todo List CRUD
- 전체/완료/미완료 필터링
- 다크모드
- 반응형 UI 적용

### 사용 기술
<p>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/postcss-DD3A0A?style=flat&logo=postcss&logoColor=white"/>
</p>

### 배운 점
- 다크모드는 프로젝트 전체에 영향을 주기 때문에, context로 분리하여 적용하는 것이 좋다. [커밋 기록](https://github.com/ssj5037/react-todo-app/pull/7/commits/632c4e6db361a2510f2b255a0e87d8f15ae2f1b6)
- useState의 parameter로 콜백 함수를 전달해줄 수 있는데, 이 때 함수의 레퍼런스만 전달해주는 형식으로 던지는 것이 좋다.
  -  ❌ : useState(함수()); -> 컴포넌트가 렌더링 될 때 마다 초기값 함수 매번 실행
  -  ⭕ : useState(함수);
