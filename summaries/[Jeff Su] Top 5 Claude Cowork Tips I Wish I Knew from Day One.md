# ![Thumbail](https://i.ytimg.com/vi/4wvLHFgnQZQ/sddefault.jpg)
## **Co-work 최적화를 위한 5가지 핵심 팁**

- Co-work는 매우 강력하지만, 작업 공간 설정에 대한 표준이 없어 잘못된 기반은 피할 수 없는 문제로 이어지는 상황임.

- 5개월간 Co-work를 매일 사용하며 토큰 비용을 감당하고 얻은, 첫날부터 제대로 설정해야 할 5가지 필수 사항을 공유함.

## **팁 1: 마크다운 번역기 (Obsidian 활용)**

- 
<strong>문제점: Co-work의 지침과 메모리가 있는 `.md` 마크다운 파일을 읽고 편집하기 불편함.</strong>

- 파일을 직접 여는 것은 토큰 비용 발생 (농담).

- 읽기 어렵고 편집하기 번거로운 형식임.

- 
<strong>해결책: Obsidian 앱 설치 및 활용.</strong>

- 무료 앱인 Obsidian을 설치함.

- Co-work 작업 공간 폴더를 Obsidian의 'vault'로 열면, 모든 `.md` 파일이 적절한 제목, 굵은 글씨, 글머리 기호 등으로 훨씬 읽기 쉬운 형식으로 즉시 렌더링됨.

- Obsidian에서 `.md` 파일을 수정하면 Co-work에도 즉시 반영됨.

- 
<strong>Obsidian 활용 팁:</strong>

- Obsidian 학습이나 다른 기능 사용이 필요 없고, `.md` 파일을 읽고 편집하는 렌즈 역할만 함.

- Command/Control + 를 눌러 확대/축소 가능함.

- 읽기 모드 아이콘을 클릭하여 Obsidian 페이지를 잠가 실수로 편집하는 것을 방지할 수 있음.

- Obsidian 설정에서 'Files and Links' 섹션의 'Show all file types' 토글을 켜면 사이드바에서 스프레드시트, PDF, 이미지 등 비 `.md` 파일도 볼 수 있음.

## **팁 2: 300줄 규칙 (root claw.md 최적화)**

- 
<strong>문제점: `root claw.md` 파일은 모든 세션 시작 시 로드되므로, 비대해진 파일은 많은 토큰을 낭비함.</strong>

- 화자의 경우, `claw.md` 파일을 600줄 이상에서 250줄 정도로 줄였을 때 토큰 사용량이 약 25% 감소했음.

- 
<strong>해결책: 파일 길이 최적화를 위한 세 가지 전술 사용함.</strong>

- 
<strong>전술 1: 핵심 내용만 포함함.</strong>

- `claw.md` 템플릿은 6가지 섹션으로 구성됨.

- <strong>메모리 시스템 (Memory system):</strong> Co-work에게 세션 시작 시 항상 `memory.md`를 읽어 이전 작업 내용을 알리도록 지시함.

- <strong>환경설정 (Preferences):</strong> Co-work가 소통하는 방식(어조, 길이, 형식 등)을 정의함.

- <strong>규칙 (Rules):</strong> 행동 지침을 나타냄. 복잡한 작업 시작 전 질문하기, 변경 사항을 알리지 않고 파일 편집하지 않기 등 Co-work가 '항상' 또는 '절대' 해야 할 일을 명시함.

- <strong>라우팅 맵 (Routing map):</strong> Co-work가 작업에 따라 어떤 워크스테이션을 로드할지 결정하는 테이블을 포함함. (예: 이메일 작성 시 이메일 HQ, 중국 프로젝트 시 China Desk, 브레인스토밍 시 Clarity Partner 등).

- <strong>참조 (References):</strong> Co-work가 필요할 때 로드하는 파일에 대한 한 줄 포인터를 포함함. (예: `voice principles.md`는 콘텐츠 작성 시에만 로드됨).

- <strong>새 워크스테이션 생성 (Creating new workstations):</strong> Co-work에게 작업 공간에 새 워크스테이션을 생성하는 방법을 알려줌.

- 일반적으로 `claw.md` 파일은 200~250줄을 유지하고, 최대 300줄을 넘지 않도록 하는 것이 원칙임.

- 무료 Co-work 툴킷에서 `claw.md` 및 `memory.md` 템플릿을 얻을 수 있음.

- 
<strong>전술 2: 필수적이지 않은 규칙을 재배치하도록 Co-work에 요청함.</strong>

- 규칙이 모든 세션에 필요한지, 특정 작업이 발생할 때만 필요한지 판단함.

- <strong>예시:</strong>

- `governance mei principle`처럼 작업 공간의 모든 규칙 조직 방식을 지배하는 내용은 `root claw.md`에 유지해야 함.

- 새 파일을 만들 때만 적용되는 '파일 생성 규칙'은 모든 세션에 필요한 것이 아니므로, 22개 규칙을 모두 `root claw.md`에 두는 대신 '워크스페이스에서 새 파일 생성 전 이것을 읽어라'와 같은 한 줄 포인터로 대체함.

- <strong>적용 예시:</strong>

- `creating new workstation` 섹션은 매 세션마다 새 워크스테이션을 생성하지 않으므로, 이 섹션을 `root claw.md`에서 새 참조 파일로 이동하고, 참조 테이블에 한 줄 포인터로 대체하도록 Co-work에게 지시할 수 있음.

- Co-work는 이를 통해 `root claw.md`를 간결하게 유지하면서도 필요할 때 템플릿을 로드할 수 있다고 안내함.

- 실제로 `creating new workstation` 섹션은 `00 resources` 폴더 아래 `workstation template.md`로 이동하고, `claw.md`에는 해당 파일에 대한 포인터만 남게 됨.

- 특정 작업에만 사용되는 섹션을 찾아 Co-work에게 재배치하도록 요청함으로써 `claw.md`를 최적화할 수 있음.

- 
<strong>전술 3: 파일을 올바른 위치에 작성함.</strong>

- 대부분의 Co-work 사용자는 `claw.md`와 `memory.md`의 내용을 서로 바꿔 넣어 출력 품질을 저하시키는 문제가 있음.

- `claw.md`의 메모리 시스템 섹션에 규칙을 추가하여 이 문제를 해결함.

- <strong>테스트 1:</strong> 내용이 규범적이고 '항상', '절대'와 같은 단어를 포함하면 `claw.md`에 속함. (예: 새 이메일 초안 작성 전 관련 스레드 존재 여부 확인).

- <strong>테스트 2:</strong> 변경될 수 있는 사실을 설명하는 내용이면 `memory.md`에 속함. (예: 회사에서 Microsoft Copilot을 사용한다는 사실).

- <strong>실행 가능한 조치:</strong>

- Co-work에게 `root claw.md` 및 `memory.md`를 검토하도록 지시할 수 있음.

- `claw.md` 파일에서 주로 행동을 규정하기보다는 사실이나 상태를 기록하는 항목을 표시하고, `memory.md` 파일에서 주로 사실을 기록하기보다는 행동을 규정하는 항목을 표시하도록 요청함.

- 각 표시된 항목이 어디로 이동해야 하는지 추천하도록 지시할 수 있음.

- Co-work가 제공한 목록을 확인하고, 필요한 경우 변경 사항을 진행하도록 지시할 수 있음.

- 
<strong>HubSpot 후원:</strong>

- HubSpot이 Co-work 최적화된 프롬프트 12개가 포함된 무료 리소스인 'Cloud Co-work Stack'을 제공함.

- Batch document generator, research synthesis 등 유용한 프롬프트가 포함됨.

- 가장 유용한 프롬프트는 파일 관리 프롬프트이며, 이 프롬프트에 Thiago Forte의 PAR(Projects, Areas, Resources, Archive) 방법론을 적용하여 파일이 실행 가능성 기준으로 분류되도록 조정하는 것을 추천함.

- 이 프롬프트에서 영감을 받아 매일 아침 iCloud 수신함 폴더를 처리하는 스케줄 작업을 Co-work에 생성하여 영수증, PDF, 임의의 다운로드 파일 등을 자동으로 올바른 폴더로 분류함.

- Cloud Co-work Stack은 무료로 다운로드 가능함.

## **팁 3: 메모리 다이어트 (root memory.md 최적화)**

- 
<strong>문제점: `root memory.md` 파일도 모든 세션 시작 시 로드되므로, 지저분한 파일은 토큰을 낭비하고 Co-work의 출력 품질을 저하시킴.</strong>

- 
<strong>해결책: 세 가지 전술을 사용함.</strong>

- 
<strong>전술 1: `memory.md`에 명확한 구조를 부여함.</strong>

- 화자의 `root memory.md`는 세 가지 섹션으로 구성됨.

- <strong>활성 프로젝트 및 작업 (Active projects and work):</strong> 현재 진행 중인 모든 작업 목록과 각 작업의 짧은 상태를 포함하여 Co-work가 즉시 무엇을 처리해야 하는지 알 수 있게 함.

- <strong>스케줄 작업 (Schedule task):</strong> 모든 자동화된 반복 작업을 추적하여 Co-work가 실수로 중복을 생성하거나 기존 작업을 놓치지 않도록 함.

- <strong>핵심 메모리 (Core memory):</strong> 풀타임 유튜버가 되기 전 경력, LinkedIn URL, 사업장 주소 및 사용법 등 자주 참조해야 하는 개인에 대한 영구적인 사실을 저장함.

- 
<strong>전술 2: 엄격한 상한선을 설정함.</strong>

- `root claw.md`의 메모리 시스템 섹션에는 메모리 시스템 규칙 전체 세트에 대한 포인터가 있음. 이 파일에는 두 가지 중요한 규칙이 있음.

- <strong>항목 형식 (Entry format) 규칙:</strong> 모든 메모리 항목을 최대 1~2문장으로 제한하여 Co-work가 처음부터 간결한 항목을 작성하도록 유도하고, `memory.md` 파일을 비대하게 만들고 토큰을 낭비하는 긴 단락을 방지함.

- <strong>크기 상한선 (Size ceiling) 섹션 규칙:</strong> `root memory.md`에 150줄 상한선을 설정함. 상한선을 초과하면 항상 압축 및 아카이빙을 통해 해결하며, 상한선을 올리는 것은 아님.

- 이는 `memory.md` 파일이 150줄에 도달하면 Co-work가 자동으로 2~3개월 전의 정보와 같이 더 이상 현재 상태가 아닌 정보를 아카이브 처리한다는 것을 의미함.

- 
<strong>전술 3: `archive.md`를 생성함.</strong>

- `memory.md`는 활성 프로젝트와 매일 참조해야 하는 핵심 사실을 담는 화이트보드와 같음.

- `archive.md`는 수행한 모든 작업의 완전한 기록을 담는 서류 캐비닛과 같음.

- <strong>핵심 통찰:</strong> Co-work는 모든 세션에서 `archive.md`를 읽지 않음. 3개월 전의 특정 리스트에 무슨 일이 있었는지 묻는 것처럼 요청할 때만 `archive.md` 파일을 확인하여 답을 찾음.

- `archive.md`는 세션 시작 시 로드되지 않으므로 크기 상한선이 필요 없고, 토큰 비용 없이 원하는 모든 것을 보존할 수 있음.

- `archive.md` 설정에 도움이 되는 프롬프트를 Co-work에 붙여넣을 수 있음. 이 프롬프트는 먼저 `archive.md` 파일을 생성하고, `claw.md`에 메모리 규칙을 추가하며, `memory.md`에 어떤 항목을 유지하고 어떤 항목을 아카이브할지 Co-work에게 가르침.

- <strong>프로 팁:</strong> 토큰 사용량을 줄이기 위해 각 워크스테이션과 각 프로젝트 내부에 별도의 `memory.md` 파일을 생성하는 것이 좋음. (예: 이메일 캠페인 관련 질문 시 Co-work는 `root memory.md`에서 프로젝트 존재 여부를 확인한 후, 프로젝트별 `memory.md`로 이동하여 세부 정보를 읽음).

- 이러한 계층적 설정 덕분에 화자의 `root memory.md`는 몇 달간 적극적으로 매일 사용했음에도 불구하고 100줄을 넘어본 적이 없음.

## **팁 4: 프로젝트 이식 (Claude 프로젝트를 Co-work로 마이그레이션)**

- 
<strong>문제점: Claude 프로젝트의 제한 사항으로 인해 Co-work로 마이그레이션하는 것이 좋음.</strong>

- Claude 프로젝트는 다음과 같은 문제가 있음.

- 프로젝트 지침 개선 시 수동으로 클릭하여 입력하거나 붙여넣어야 함.

- 프로젝트 메모리는 AI가 생성한 단락으로, 직접 구조화하거나 편집하기 어려움.

- Google 문서와 같은 지식 파일을 연결할 수 있지만, Claude는 이 문서에 직접 쓸 수 없어 사용자가 문서를 열어 직접 붙여넣어야 함.

- 
<strong>해결책: Claude 프로젝트를 Co-work로 마이그레이션하면 이 모든 문제가 해결됨.</strong>

- <strong>마이그레이션 과정은 간단함.</strong>

- Claude 프로젝트 지침은 워크스테이션의 `claw.md` 파일이 됨.

- 프로젝트 메모리는 `memory.md` 파일이 됨.

- 지식 파일은 프로젝트 리소스 폴더에 추가됨.

- <strong>실제 마이그레이션 단계:</strong>

- 빈 텍스트 문서를 열어 Claude 프로젝트 지침을 복사하여 붙여넣고, 두 번 엔터키를 누름.

- 프로젝트 메모리를 복사하고 'Project Memory' 헤더를 추가한 후 이 문서에 붙여넣음. 이 파일을 `Project info.md`로 저장함.

- 전체 Google 문서를 마크다운 파일로 다운로드함.

- Co-work에 간단한 마이그레이션 프롬프트를 붙여넣고, 다운로드한 `Project info.md`와 Google Doc `.md` 파일을 Co-work에 공유하면 Claude 프로젝트가 Co-work로 마이그레이션됨.

- <strong>Co-work가 수행한 작업 예시:</strong>

- `newsletter workstation` 폴더를 생성함.

- 원본 프로젝트 지침과 동일한 워크플로우를 포함하는 `workstation claw.md` 파일을 생성함.

- 편집 가능한 레이블 구조를 가진 `memory.md` 파일을 생성함.

- 'Audience and positioning', 'Recent newsletters', 'Style patterns' 등 세 개의 리소스 파일을 포함하는 리소스 폴더를 생성함.

- `root claw.md`의 라우팅 맵에 새로 생성된 뉴스레터 워크스테이션으로 매핑되는 새 항목을 추가함.

- <strong>마이그레이션 후의 장점:</strong>

- 파일 변경이 필요할 때 Co-work에게 직접 지시할 수 있음. (예: 뉴스레터 워크스테이션에 규칙 추가, 최신 뉴스레터 발행물 추가 등).

- Co-work는 해당 `claw.md` 파일이나 리소스 파일에 직접 변경 사항을 적용함.

- 이는 일반 챗봇과 비교할 수 없을 정도로 큰 변화를 가져옴. 모든 개선 사항과 변경 사항이 미래의 출력 품질을 향상시킴.

- <strong>Co-work 아카데미 코스:</strong> 처음부터 구축하는 시행착오를 건너뛸 수 있도록 사전 구축된 워크스테이션 템플릿과 단계별 설명을 포함한 Co-work 아카데미 코스를 준비 중이며, 대기자 명단에 등록할 수 있음.

## **팁 5: 스킬 점검 (워크스테이션 vs. 스킬)**

- 
<strong>워크스테이션과 스킬의 차이점:</strong>

- <strong>워크스테이션 (Workstation):</strong> '내가 일하는 곳'임.

- 지속적인 작업 영역으로, 자체적인 어조와 축적된 맥락을 가짐.

- 사람이 의사 결정과 판단을 내려야 하는 단계가 포함됨.

- <strong>예시:</strong> 뉴스레터 작성. Co-work가 뉴스레터 워크스테이션을 로드하고 워크플로우를 제시하지만, '주제가 정해졌는가?', '이번 주에는 어떤 Google 애플리케이션을 다룰 것인가?'와 같은 결정은 인간이 해야 함. 이는 자동 조종으로 실행할 수 없음.

- <strong>스킬 (Skill):</strong> '내가 하는 일'임.

- 반복 가능한 프로세스로, 매번 동일한 방식으로 완료되기를 원함.

- 자동 조종으로 실행할 수 있는 체크리스트와 같음.

- <strong>예시:</strong>

- <strong>뉴스레터 제목 생성 스킬:</strong> 최종 초안을 받아 스킬의 지침을 적용하여 5가지 점수화된 제목 옵션을 제공함. 내용은 바뀌어도 결과는 항상 동일함.

- <strong>워크스테이션 감사 스킬:</strong> 특정 워크스테이션 폴더 내에서 잘못된 규칙, 비대화, 누락된 부분을 확인하여 워크스테이션을 최적화하고 간결하게 유지함. 출력은 경영 요약과 함께 구체적인 발견 사항 및 권장 사항이 담긴 보고서임.

- <strong>워크스테이션과 스킬을 생성하는 기준은 간단함.</strong> '이것이 내가 일하는 곳인가, 아니면 내가 하는 일인가?'로 판단함.

#CoWork #AI워크스페이스 #작업공간최적화 #Claude프로젝트 #Obsidian #마크다운 #토큰최적화 #clawmd #memorymd #archivemd #AI생산성 #HubSpot #PAR방법론 #워크스테이션 #AI스킬