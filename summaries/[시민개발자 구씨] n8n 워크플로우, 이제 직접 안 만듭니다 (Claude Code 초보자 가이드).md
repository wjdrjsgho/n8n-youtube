# ![Thumbail](https://i.ytimg.com/vi/UsGaUZAtJpk/sddefault.jpg)
## **n8n 업무 자동화의 도전과 Claude Code 활용**

- n8n으로 업무 자동화 워크플로우를 처음부터 만드는 데 막막함을 느끼는 경우가 존재함.

- n8n 클라우드 버전의 워크플로우 빌더는 다음과 같은 한계가 있음.

- 직접 커스텀이 불가능함.

- 사용량에 한도가 있어 모든 워크플로우 작업을 요청하기에는 현실적인 제약이 있음.

- 따라서 Claude Code를 활용하여 n8n 워크플로우를 제작하는 방법이 있음.

- 업무 자동화에 관심이 있으나 n8n이나 Claude Code를 어렵게 느끼는 사용자에게 유용한 정보임.

## **Claude Code와 n8n 조합의 필요성**

- 자동화 워크플로우를 Claude Code 단독으로 구현하는 것에 대한 의문이 들 수 있음.

- Claude Code는 강력한 노코드 코딩 툴로, 웹사이트, 대시보드, 웹 애플리케이션, 자동화 시스템을 직접 구축할 수 있음.

- 다만, Claude Code가 만드는 자동화 시스템은 비개발자 입장에서 <strong>블랙박스</strong>처럼 느껴질 수 있음.

- 전문 셰프를 고용하여 요리를 요청하는 것에 비유할 수 있음.

- 요리에 어떤 재료가 들어갔는지 정확히 알 수 없음.

- 맛이 아쉬워도 어떤 식으로 수정해야 할지 조언하기 어려움.

- 셰프의 제작 프로세스를 모르기에 퀄리티 컨트롤이 어려움.

- 반면, n8n은 <strong>프랜차이즈 매뉴얼</strong>과 유사함.

- 요리를 잘 몰라도 매뉴얼대로 따라 하면 동일한 퀄리티의 요리를 만들 수 있음.

- 코딩에 익숙하지 않아도 업무 프로세스별로 노드를 매핑하여 단계별 업무 진행을 시각적으로 쉽게 확인 가능함.

- 업무 자동화 시스템 제작뿐만 아니라 유지보수도 용이함.

- 예시: 세 번째 노드에서 에러 발생 시, 어떤 프로세스에서 에러가 발생했는지 손쉽게 확인하고 수정할 수 있음.

- 비개발자라면 Claude Code와 n8n 중 하나를 선택하기보다, 둘 다 어느 정도 학습하여 각자 장점을 발휘할 수 있는 영역에서 활용하는 것이 좋음.

- Claude Code로 n8n 워크플로우를 만드는 방식은 두 툴의 장점을 모두 얻는 것임.

- <strong>Claude Code</strong>의 빠른 제작 능력과 <strong>n8n</strong>의 시각적인 워크플로우 관리 및 유지보수 장점을 결합할 수 있음.

## **Claude Code 설치 및 설정**

- Claude Code가 생성하는 파일을 손쉽게 확인하기 위해 <strong>VS Code</strong> 설치가 권장됨.

- 코드 파일들을 한눈에 확인할 수 있는 유용한 개발 툴임.

- 코드.비주얼스튜디오.com(code.visualstudio.com)에서 운영체제에 맞는 버전 다운로드 및 실행함.

- Claude Code는 자바스크립트 기반으로 실행되므로 <strong>Node.js</strong> 설치가 필수적임.

- 노드JS.org(nodejs.org)에서 다운로드 섹션으로 이동하여 운영체제에 맞는 설치 프로그램을 다운로드 및 실행함.

- 맥 사용자는 터미널에서 제공되는 코드를 복사하여 VS Code 터미널(상단 메뉴: 터미널 > 런 터미널)에 붙여넣기 하여 설치함.

- 설치 확인: 터미널에서 <code>node -v</code> 명령어로 버전 넘버를 확인 가능함.

- VS Code에서 Claude Code를 활용하는 방법은 두 가지가 있음.

- <strong>쉬운 버전: 익스텐션(확장 프로그램) 설치</strong>

- VS Code 왼쪽 탭의 네 번째 아이콘(익스텐션) 클릭.

- 'Claude' 검색 후 'Claude Code for VS Code' 설치 및 계정 인증.

- 좌측 Claude 아이콘 클릭 시 Claude Code 채팅창 활성화.

- <strong>터미널 버전 (권장)</strong>

- 익스텐션에서 제공하지 않는 기능들이 터미널에서 가능함.

- 익스텐션은 터미널 작업을 보기 좋게 정리한 추가 레이어에 불과하므로, 터미널 사용에 익숙해지는 것이 업무 효율에 도움 됨.

- 터미널 버전 설치: 코드.클로드.com(code.claude.com)의 퀵스타트(Quickstart)에서 운영체제에 맞는 설치 코드 복사.

- VS Code 터미널에 붙여넣기 후 실행하여 Claude Code CLI 설치.

- Claude Code 실행 및 로그인.

- 프로젝트를 실행할 폴더를 VS Code에서 '오픈 폴더(Open Folder)'로 열어줌.

- 터미널에서 <code>claude</code> 명령어 입력 시 Claude Code 실행.

- 처음 실행 시 폴더 권한 승인 및 Claude 계정 로그인 필요.

- 로그인이 바로 뜨지 않는 경우, 터미널에서 <code>/help</code> 명령어로 가능한 슬래시 커맨드를 확인하고 <code>/login</code> 명령어로 로그인 진행.

- 유료 구독(Pro, Max, Team, Enterprise) 또는 API 키 연동(무료 테스트용, 사용량 지불) 방식이 있음.

- Claude Code 에디트 모드 설정.

- 터미널 하단의 '아마트 에디스(Smart Edit)' 모드 설정 가능 (Shift+Tab으로 변경).

- <strong>아무것도 없는 모드 (기본)</strong>: 모든 작업 시 권한 요청을 줌.

- <strong>에디스(Edit) 모드</strong>: 일반적인 파일 읽기, 생성 작업 등을 한 번에 승인하여 실행.

- <strong>플랜(Plan) 모드</strong>: 작업을 실행하기 전에 상세한 계획을 먼저 수립해줌.

- 모든 권한 승인을 매번 하지 않고 빠르게 작업하고 싶을 때.

- Claude Code 종료 (<code>/exit</code> 명령어).

- 터미널 클리어 (<code>clear</code> 명령어).

- <code>claude --skip-permissions</code> 명령어로 실행 시, 모든 권한을 자동 승인하는 '바이패스 퍼미션 온(bypass permission on)' 모드 활성화됨.

## **n8n 전문가 역량 부여 (MCP & Skills)**

- Claude Code는 범용적인 코딩 툴이므로, n8n 워크플로우 제작 요청 시 제대로 된 결과물을 못 만들어줄 가능성이 높음.

- Claude Code에 n8n 전문가 역량을 장착시켜야 함.

- 이를 돕는 것이 <strong>MCP (Modular Code Protocol)</strong>와 <strong>Skills (스킬)</strong>임.

- <strong>MCP</strong>: Claude Code가 외부 앱(여기서는 n8n)과 손쉽게 소통할 수 있게 돕는 프로토콜임.

- <strong>Skills</strong>: 특정 작업을 전문가처럼 잘 수행할 수 있도록 돕는 정보가 담긴 스킬임.

- n8n 워크플로우를 잘 만드는 방법과 관련된 정보가 담긴 스킬을 설치함.

- n8n MCP 및 n8n Skills 설치.

- 가이드 문서(영상 설명란)에 링크된 GitHub 페이지에서 미리 생성된 MCP와 Skills를 가져옴.

- 설치 방법은 GitHub에 상세히 안내되어 있으나, Claude Code를 통해 설치를 요청할 수도 있음.

- 프롬프트 예시: "n8n MCP와 n8n 스킬스를 이 프로젝트에서 활용할 수 있게 프로젝트 단으로 설치해 줘"와 함께 GitHub 링크를 참고 자료로 제공함.

- Claude Code가 GitHub 저장소에서 설치 방법을 확인하고 MCP 및 Skills 설정을 진행함.

- 설치 후 환경 변수 설정.

- n8n API URL과 n8n API 키 환경 변수를 추가해야 함. (보안상 직접 입력 권장)

- <strong>n8n API URL</strong>: 사용 중인 n8n 인스턴스의 URL 앞부분을 입력함 (클라우드 버전 또는 로컬호스트).

- <strong>n8n API 키</strong>: n8n 설정(Settings) > n8n API 메뉴에서 API 키를 생성하여 복사, 입력함.

- 설정 활성화를 위한 재부팅.

- Claude Code 종료 (<code>/exit</code> 명령어) 후 터미널 클리어.

- <code>claude --skip-permissions</code> 명령어로 다시 실행.

- <code>/mcp</code> 명령어로 n8n MCP 활성화 확인.

- <code>/skills</code> 명령어로 n8n Skills 활성화 확인.

## **워크플로우 제작 전 준비 (SOP & claude.md)**

- 워크플로우 제작 요청 전, <strong>SOP (Standard Operating Procedure)</strong> 파일을 먼저 만드는 것이 좋음.

- SOP는 업무 매뉴얼로, 어떤 순서와 작업으로 진행되어야 하는지 명확히 함.

- Claude Code에게 의도를 명확하게 전달할 수 있음.

- 나중에 수정 요청 시 기준 문서로 활용 가능하며, 다른 워크플로우 제작 시 템플릿으로 활용 가능함.

- SOP 문서 생성 요청.

- SOP 문서 생성 시 플랜 모드를 활용하여 먼저 계획을 수립하도록 요청할 수 있음.

- 예시 프롬프트: "SOP.md 파일을 만들어 줘. 고객 문의 자동 응대 시스템 워크플로우의 업무 프로세스 문서 생성. 목적, 트리거, 처리 로직, 로깅, 에러 처리, 사용 서비스 등을 정리해 줘."

- Claude Code는 문서 생성 계획을 먼저 수립하여 제시하며, 사용자는 이를 확인하고 수정 요청하거나 바로 생성할 수 있음.

- 생성된 SOP 문서는 목적, 적용 범위, 용어 정의, 시스템 구성도, 사용 서비스, 데이터 스키마, 상세 절차, 예외 처리, 운영 가이드 등을 상세하게 정리함.

- 예시: 고객 문의 자동 응대 시스템 워크플로우의 구체적인 프로세스.

- <strong>트리거</strong>: Google Form으로 고객 문의 접수.

- <strong>데이터 저장</strong>: Google Sheet에 문의 정보 추가.

- <strong>AI 분류</strong>: Gemini AI가 문의 분류 (제품/배송/환불/기타, 단순/확인 필요).

- <strong>단순 문의 처리</strong>: Gemini AI가 답변 생성 후 Gmail로 즉시 발송.

- <strong>확인 필요 문의 처리</strong>: Gemini AI가 답변 초안 생성 후 Slack으로 알림, 사람이 확인 후 Gmail 발송.

- <strong>로깅</strong>: 실행 로그를 Google Sheet에 기록.

- <strong>claude.md</strong> 파일 생성 요청.

- Claude Code는 작업 시 이 <code>claude.md</code> 문서를 항상 참조하여 가이드를 따르도록 되어 있음.

- 수동으로 생성할 수도 있지만, Claude Code에 직접 작성을 요청할 수 있음.

- 예시 프롬프트: "이 프로젝트는 n8n 워크플로우 제작 프로젝트이며, 반드시 <code>sop.md</code> 파일을 참고해서 제작해 줘." (<code>@sop.md</code> 형태로 참조할 문서 지정)

- Claude Code는 제공된 정보와 <code>sop.md</code> 문서를 참고하여 <code>claude.md</code> 파일을 생성함.

- 생성된 <code>claude.md</code> 파일은 제작 프로세스, MCP 도구 사용 규칙, n8n 스킬스 활용법 등을 포함함.

- <code>claude.md</code> 파일 내에 <code>sop.md</code> 파일을 다시 참조(<code>@sop.md</code>)하도록 설정하여, 비즈니스 로직을 항상 따르도록 함.

## **n8n 워크플로우 제작 및 수정**

- 워크플로우 제작 요청 전, Claude Code의 <strong>컨텍스트 윈도우</strong>를 관리하는 것이 좋음.

- <code>/context</code> 명령어로 현재 컨텍스트 사용량(토큰) 확인 가능.

- 이전 작업들이 컨텍스트를 많이 차지하는 경우, <code>/clear</code> 명령어로 컨텍스트를 리셋하여 효율적인 작업 환경을 조성함.

- n8n 워크플로우 제작 요청.

- 예시 프롬프트: "<code>sop.md</code>에 정의된 고객 문의 자동 응대 시스템 워크플로우를 n8n에 생성해 줘. 각 단계별로 n8n 스킬을 적극적으로 활용하고, 생성된 워크플로우의 링크를 제공해 줘."

- Claude Code는 MCP를 통해 노드 정보 확인 및 n8n 스킬을 활용하여 워크플로우를 생성함.

- 생성 완료 후, 설정 내용 설명과 함께 워크플로우 아이디 및 접속 링크를 제공함.

- 워크플로우의 JSON 파일 형태도 별도로 생성해줌.

- 생성된 워크플로우 확인 및 수정.

- 제공된 링크로 n8n에 접속하여 생성된 워크플로우를 직접 확인해야 함.

- <strong>예시 확인 사항</strong>:

- Google Sheets 트리거 노드의 '시트 아이디' 설정이 목록 선택 방식이 아닌 직접 입력 방식으로 되어 있는 오류 발견.

- Gemini AI 노드의 모델 설정, 프롬프트, 시스템 메시지 옵션 등은 적절히 설정됨.

- 문의 분류 후 단순 문의 처리 로직(답변 생성 및 이메일 발송)은 잘 구현됨.

- 확인 필요 문의 처리 로직에서, 슬랙 알림만 생성하고 Gmail 초안 생성이 누락된 오류 발견.

- Claude Code가 항상 완벽한 워크플로우를 생성하지는 못하므로, 이터레이션(반복 작업)을 통한 수정이 필요함.

- 오류 수정 요청 (스크린샷 활용).

- 오류 부분을 스크린샷 한 후, Claude Code 채팅창에 첨부하고 구체적인 수정 요청 프롬프트를 입력함.

- 예시 프롬프트: "첨부된 스크린샷을 참고해서, '확인 필요 문의' 로직에서 슬랙 알림 외에 Gmail 초안 생성 노드를 추가해 줘."

- Claude Code는 스크린샷을 분석하여 누락된 노드를 판단하고, 수정 계획(예: Gmail 초안 생성 노드 추가)을 제시함.

- 수정된 워크플로우를 다시 생성하며, 변경 사항이 반영된 접속 링크를 제공함.

- 수정된 워크플로우에서 Gmail 초안 노드가 제대로 추가되고, 관련 설정(예: 무늬 답변을 드래프트로 생성)이 반영된 것을 확인 가능함.

- AI 노드에 페일 시 재시도 설정(예: 3번 트라이) 같은 세부 설정도 문서 요청대로 반영될 수 있음.

- 워크플로우 빌더 고도화 및 버전 관리.

- 워크플로우 제작 중 Claude Code가 제대로 작동하지 않는 부분이 있다면 스크린샷 후 수정 요청 가능함.

- 수정된 내용을 <code>claude.md</code> 문서에 지속적으로 업데이트하여 Claude Code의 n8n 워크플로우 제작 역량을 업그레이드할 수 있음.

- 자주 사용하는 n8n 템플릿 패턴이 있다면, 이를 문서화하여 <code>claude.md</code>에 추가하고 Claude Code가 항상 참조하도록 설정하여 고도화 가능함.

- <strong>버전 관리</strong>:

- 가장 간단한 방법은 워크플로우 제작 요청 시, JSON 파일 형태로 저장하고 버전 넘버를 추가하여 개별 파일을 생성하도록 요청하는 것임 (예: <code>workflow_v1.json</code>, <code>workflow_v2.json</code>).

- 또는 GitHub와 같은 버전 관리 시스템과 연동하여 커밋(commit)을 통해 체계적으로 관리할 수 있음.

## **결론 및 활용 전략**

- Claude Code로 n8n 워크플로우를 만드는 핵심 과정은 다음과 같음.

- Claude Code에 <strong>MCP</strong>와 <strong>Skills</strong>를 연동하여 n8n 전문가 역량을 부여함.

- 업무 프로세스를 정리한 <strong>SOP 문서</strong>를 작성함.

- SOP 문서를 참고하여 Claude Code가 따를 가이드인 <strong>claude.md 문서</strong>를 만듦.

- 이를 바탕으로 워크플로우 제작을 요청함.

- 한 번에 완벽한 워크플로우 생성이 어렵기에, 이터레이션(반복 수정)이 필수적임.

- 생성된 워크플로우를 n8n에서 직접 확인하여 오류를 파악함.

- 간단한 수정은 직접 진행하고, 어려운 부분은 스크린샷 첨부 후 Claude Code에 수정 요청을 함.

- Claude Code의 작업 미흡 부분을 파악하고, <code>claude.md</code> 문서를 지속적으로 업데이트하여 빌더를 고도화하는 것이 좋음.

- Claude Code를 활용하면 n8n 워크플로우의 기본적인 골격을 빠르게 만들고, 수정 작업도 Claude Code를 통해 진행하여 업무 자동화 시스템 구축이 훨씬 수월해짐.

- 미래에 Claude Code와 같은 툴이 AGI급으로 발전하면 n8n조차 필요 없게 될 수도 있지만, 아직은 각 툴의 용도에 맞게 활용하는 것이 좋음.

- <strong>n8n</strong>: 비개발자 입장에서 100% 이해하고 안정적으로 운영하고 싶은 자동화 시스템 구축에 적합함.

- <strong>Claude Code</strong>: n8n으로 제작하기 어렵거나, 시각화된 대시보드, 웹사이트, 웹 애플리케이션 등 웹 개발 분야의 자동화 시스템 제작에 활용하는 것이 좋음.

- Claude Code로 어떤 워크플로우를 제작해 보고 싶은지에 대한 의견을 댓글로 남길 수 있음.

- 생산성 시스템 구축 방법에 관심 있는 경우, 구독과 좋아요, 알림 설정을 할 수 있음.

#ClaudeCode #n8n #업무자동화 #노코드 #로우코드 #AI코딩 #워크플로우 #자동화시스템 #VSCode #NodeJS #MCP #Skills #SOP #claudeMD #구글폼 #구글시트 #GeminiAI #Gmail #Slack #생산성