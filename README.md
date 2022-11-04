# front-end
React Native/Typescript 기반 클라이언트(프론트엔드)입니다.

## 커밋규칙

**[ACTIVITY] 커밋메세지**

**ACTIVITY목록**
- int: only for initial commit
- doc: changes document or comment
- ftr: add new feature
- mod: modify existing feature
- fix: fix an error or issue
- rfc: refactor code
- add: add new file or directory
- rmv: remove existing file or directory

**커밋메세지 형식**
- 한글로 작성합니다.
- "~함" 형식으로 작성합니다.
- 메세지 끝에 점을 붙이지 않습니다.

예시)[ftr]로그인 기능을 추가함

## 브랜치 전략 
**Github Flow 채택**
- 최상위 브랜치 : main
- 기능별 브랜치 : feature/기능명(영어, 단어 사이는 '-'로 구분)

예시)
- main
  - feature/sign-in
  - feature/sign-up
  - feature/search

## PR 규칙
- PR의 Reviewer를 자신을 제외한 다른 팀원을 모두 지정합니다.
- Reviewer는 코드 리뷰를 마친 후 Comment/Approve/Request changes 중 한 가지를 선택합니다.
- 반드시 1명 이상의 Reviewer가 Approve해야만 Merge 할 수 있습니다.
- Merge 정책 : Rebase and Merge
