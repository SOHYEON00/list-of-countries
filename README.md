# Listing Counties
API로 JSON을 받아 목록을 LISTING 해줍니다.

***

## How to Run
```
// 해당 폴더 위치로 이동

npm install

npm run dev //새로운 크롬 창이 오픈될 것입니다.
```
## 구현 기능

* Row 추가
나라 정보를 입력해 테이블에 추가할 수 있습니다. (테이블 맨 마지막에 추가됩니다.)

* Row 삭제
각 row의 'Del' 버튼을 이용해 해당 row 삭제가 가능합니다.

* 모든 나라 정보 출력
상태로 저장된 모든 country를 읽어와 출력합니다.

* 검색 기능
통합 검색이 가능하며, debounce를 사용해 타이핑 시 바로 검색이 가능합니다.

* 정렬 기능
각 필드의 ASCE(오름차순), DESC(내림차순) 버튼을 사용해 정렬이 가능합니다.
 

### 언어 및 라이브러리
* React
* Javascript
* CSS

### 사용한 모듈
* react-redux
* react-final-form
* react-dom
* redux-thunk
* webpack
* babel


