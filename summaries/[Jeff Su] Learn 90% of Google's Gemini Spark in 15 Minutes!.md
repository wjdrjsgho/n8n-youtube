# ![Thumbail](https://i.ytimg.com/vi/7GkIWPPC9i0/maxresdefault.jpg)
## **Lumni Spark 소개**

- Lumni Spark(Gemini Spark)는 <strong>초보자에게 가장 친숙한 AI 에이전트</strong>로 알려짐.

- Cloud Co-Work, Codeex, OpenClaw 같은 도구가 어렵게 느껴졌다면, Spark는 쉬운 대안이 됨.

- 이 요약에서는 Gemini Spark의 <strong>핵심 기능 네 가지</strong>를 실제 사용 사례와 함께 자세히 다룸.

## **Gemini Chat과 Gemini Spark의 차이점**

- <strong>파일 관리 기능</strong>

- Gemini Chat: Google Drive에서 파일을 찾고 요약하는 데 능하지만, 파일 이름 변경이나 올바른 폴더로 이동시키는 등의 기본 작업에는 어려움을 겪음.

- Gemini Spark: 새 파일이 폴더에 업로드될 때마다 이를 감지하고, 내용에 따라 파일 이름을 변경하며, 올바른 위치로 이동시킬 수 있음. 이는 사실상 Google Drive를 스스로 정리하는 것과 같음.

- <strong>보고서 생성 기능</strong>

- Gemini Chat: Google Docs에서 잘 작성된 보고서를 쉽게 만들 수 있으나, 매번 요청해야 하는 번거로움이 있음.

- Gemini Spark: 동일한 보고서를 매일 또는 매주 <strong>자율적으로 구축</strong>할 수 있음.

- <strong>이메일 분류(Triage) 기능</strong>

- Gemini Chat: @gmail 명령어를 사용하여 받은 편지함을 분류하고 이메일을 요약하며 답장을 준비할 수 있지만, 매번 형식이 다르고 이메일 보관이나 라벨 적용 같은 기본 조치를 취할 수 없음.

- Gemini Spark: <strong>자체적으로 실행되는 분류 워크플로우</strong>를 제공하며, 요약을 원하는 형식(하향식)으로 일관되게 포맷하고, 추가할 라벨을 제안하며, 관련 없는 이메일을 자동으로 보관처리할 수 있음.

- <strong>간단 요약</strong>

- Gemini Chat: 요청이 있을 때 응답하는 <strong>반응적인(reactive)</strong> AI임.

- Gemini Spark: 실제로 작업을 수행하는 <strong>선제적인(proactive)</strong> AI임.

## **Spark 사용을 위한 초기 설정**

- <strong>Gemini 설정</strong>

- 개인 Google 계정: Gemini 설정 > 개인 정보(Personal intelligence)로 이동하여 <strong>'메모리(memory)'를 켜야 함</strong>. 이를 통해 Spark가 사용자 선호도를 기억하고 작업 방식을 학습함.

- 연결된 앱(Connected apps)에서 Google Workspace 및 검색 서비스(Search Services) 토글이 <strong>활성화되어 있는지 확인</strong>해야 함.

- 기업 버전: 개인 정보(Personal intelligence) 옵션은 보이지 않으며, 연결된 앱(Connected apps) 탭에서 Google Workspace 토글만 활성화하면 됨. 이는 Spark에 Gmail, Google Calendar, Google Drive에 대한 직접 액세스 권한을 부여함.

- <strong>Google Drive 설정</strong>

- Google Drive의 '내 드라이브(MyRive)' 루트에 <strong>'Spark OS'라는 폴더를 생성</strong>해야 함. 이 폴더는 나중에 활용될 예정임.

## **첫 번째 기능: 정보 연결하기 (Connect the Dots)**

- <strong>핵심 개념</strong>

- Google Drive, Google Calendar, Gmail, Google Search의 검색 바가 하나의 '옴니 박스(omni box)'로 합쳐진 후, 그 뒤에 사용자를 대신하여 조치를 취할 수 있는 가상 비서가 있는 것과 같음.

- 다양한 Google 앱 간의 <strong>네이티브 통합</strong>이 강점임.

- <strong>사용 사례 1: 축구(월드컵) 관련 예시</strong>

- 지시: "올해 월드컵의 모든 경기를 날짜와 양 팀을 포함한 스프레드시트로 만들고, Elon Husky와 Satcha Nutella와의 최근 회의록을 가져와 예상 우승팀을 스프레드시트에 추가해줘."

- Spark의 처리 과정

- Google Drive에 Google Sheet를 생성하라는 지시를 인식함.

- '올해 월드컵'을 통해 웹 검색으로 전체 일정을 찾아야 함을 파악함.

- '최근 회의록을 가져와'를 통해 캘린더를 검색하고 회의록을 가져와야 함을 인식함.

- 사용자가 어떤 앱도 열지 않고 이 모든 정보를 하나의 스프레드시트로 통합함.

- <strong>사용 사례 2: 업무 관련 예시</strong>

- 지시: "Austin과의 최신 이메일 스레드를 검토하고, 10월 1일 마지막 회의와 동일한 시간대에 빠른 만남을 위한 캘린더 초대를 만들어줘. 제목과 설명을 검토해 줄게."

- Spark의 영리한 처리 과정

- Austin의 전체 이름을 언급하지 않았지만, Spark는 Gmail을 검색하여 올바른 Austin을 찾음.

- 이메일 스레드를 읽어 맥락을 파악함.

- 캘린더를 확인하여 마지막 회의의 시간대를 재사용함.

- 승인을 위해 전체 초대장을 작성함.

- Spark는 사용자의 작업 공간 전반에서 올바른 맥락을 가져와 사용자를 대신하여 조치를 취하는 것을 보여줌.

- <strong>Pro Tip: 음성-텍스트 도구 활용</strong>

- Whisper Flow와 같은 음성-텍스트 도구를 사용하면 AI에 훨씬 더 많은 세부 정보를 자연스럽게 제공할 수 있으며, 이는 AI 출력을 크게 개선시킴.

- 실제로 사용자가 말을 더듬거나 실수를 해도, Whisper Flow는 이를 정리하고 서식을 지정해 주는 기능을 갖춤.

- AI 프롬프트 작성 시 가장 중요한 입력은 '맥락(context)'이므로, 자세한 맥락을 제공하는 것이 중요함.

## **두 번째 기능: 템플릿 따르기 (Follow Your Templates)**

- <strong>개념</strong>

- 반복되는 작업을 위해 템플릿을 한 번 만들고 Spark에 템플릿을 지정하면, 항상 일관된 결과물을 생성함.

- <strong>설정 과정</strong>

- 앞서 생성한 'Spark OS' 폴더 안에 <strong>'Spark templates'라는 새 폴더를 생성</strong>해야 함.

- 빈 Google Doc을 만들고 미리 준비된 주간 보고서 템플릿을 붙여넣은 후, 이름을 'weekly report template'으로 지정함. (템플릿 링크는 나중에 제공됨)

- <strong>사용 사례</strong>

- 영업팀이 길고 정리되지 않은 업데이트를 추가한 입력 문서(intake document)를 첨부함.

- 지시: "이번 주 영업팀의 업데이트를 받았어. Spark templates 폴더에 있는 주간 보고서 템플릿에 따라 리더십 브리핑으로 만들어줘."

- Spark의 처리 과정

- Spark는 입력 문서의 원본 업데이트를 모두 가져와서 핵심 세부 정보를 추출한 후, 깔끔한 리더십 브리핑으로 정리함.

- <strong>핵심 요점</strong>

- 반복적으로 수행하는 작업을 찾아 템플릿을 한 번 구축하고, Spark에 템플릿을 지정하기만 하면, 매번 동일한 결과물을 일관성 있게 생성함. 사용자가 모든 것을 다시 설명할 필요가 없음.

## **세 번째 기능: 반복 플레이북 생성 (Skills Feature)**

- <strong>개념</strong>

- 템플릿을 사용하여 정리되지 않은 메모를 구조화된 브리핑으로 변환하는 것을 넘어, 이를 <strong>재사용 가능한 '기술(skill)'</strong>로 만들 수 있음.

- '기술'은 동일한 종류의 입력을 동일한 종류의 출력으로 변환하는 고정된 지침 세트이며, 내용만 변경됨.

- <strong>설정 과정</strong>

- 'Spark OS' 폴더 안에 <strong>'99_Temp'라는 새 폴더를 생성</strong>해야 함.

- <strong>기술 생성 예시</strong>

- 보고서를 생성했던 동일한 채팅에서 지시: "내 주간 보고서 입력 문서에서 최신 데이터 항목을 찾고, Spark templates 폴더에 있는 주간 보고서 템플릿과 일치하도록 다시 작성하는 '주간 보고서 기술'을 만들어줘. 출력물은 항상 99_Temp 폴더에 저장하고, 기술을 저장하기 전에 내 목표를 다시 진술하고 단계를 보여줘서 내가 먼저 승인할 수 있도록 해줘."

- Spark의 처리 과정

- Spark는 먼저 사용자의 목표에 대한 이해를 다시 진술하고, 검토할 계획을 제안함.

- 사용자가 승인하면, Spark는 왼쪽 '기술(Skills)' 탭 아래에 '주간 보고서 기술'을 생성함.

- <strong>기술 사용 예시</strong>

- 다음번에 영업팀이 입력 문서를 업데이트하면, 새 채팅을 열고 슬래시(/)를 입력한 후 해당 기술을 선택하기만 하면 됨.

- 이렇게 하면 모든 단계를 다시 설명할 필요 없이 동일한 구조를 따르는 새 보고서가 생성됨.

- <strong>비유</strong>

- 와플 기계에 어떤 반죽을 붓든(일반 또는 초콜릿), 동일한 와플이 나오는 것과 같음. 입력은 반죽, 기술은 와플 기계, 출력은 와플임.

- <strong>기술 편집</strong>

- 지시: "주간 보고서 생성 기술을 편집해서 핵심 내용을 채팅에 표시해 내가 검토할 수 있도록 해줘."

- Spark는 직접 기술을 업데이트함.

- <strong>기술 공유 및 가져오기 (Importing Skills)</strong>

- 다른 사용자가 만든 기술(.md 파일)을 다운로드하여 Gemini Spark의 '기술(Skills)' > '기술 업로드(Upload skill)'를 통해 가져올 수 있음.

- 기존 기술을 자신의 워크플로우에 맞게 수정하며 배우는 것이 가장 빠른 방법임.

- Pro Tip: 자신이 만든 기술을 팀원과 공유하려면, 해당 기술의 점 세 개 메뉴에서 '다운로드(download)'를 클릭하여 .md 파일을 제공하고, 팀원은 동일한 방식으로 업로드하면 됨.

## **네 번째 기능: 루틴 자동화 (Scheduled Tasks)**

- <strong>개념</strong>

- '기술(skill)'은 사용자가 명시적으로 실행해야 하는 반면, '예약된 작업(scheduled task)'은 <strong>스스로 실행</strong>됨.

- 이는 <strong>시간 기반 트리거(time-based trigger)</strong> 또는 <strong>이벤트 기반 트리거(event-based trigger)</strong> 방식으로 작동함.

- <strong>시간 기반 예시: 주간 보고서 워크플로우</strong>

- 영업팀이 매주 금요일 오후까지 항상 입력 문서를 업데이트하므로, 이에 맞춰 예약 작업을 만드는 것이 합리적임.

- 지시: "매주 월요일 오전 9시 30분에 주간 보고서 기술을 실행하는 예약 작업을 만들어줘."

- Spark의 처리 과정

- Spark가 주간 작업 생성을 확인하면, 왼쪽 '예약(Schedules)' 탭에서 이를 확인할 수 있음. 이는 매주 월요일 오전 9시 30분에 주간 보고서 기술을 실행하는 시간 기반 예약 작업임.

- 점 세 개 메뉴를 클릭하고 '실행(run)'을 눌러 즉시 테스트할 수도 있음.

- <strong>이벤트 기반 예시: 회의록 자동 분석</strong>

- 사용자가 메모 작성에 Gemini를 사용하므로, 모든 회의 후 `geminotes@google.com`으로부터 자동 생성된 회의록 이메일을 받음.

- 지시: "geminotes@google.com으로부터 이메일을 받을 때마다 회의록 전체를 분석하고, 핵심 내용 요약(bottomline upfront) 형식으로 브리핑하며, 필요하다면 참석자들에게 요약 이메일을 작성해줘."

- Spark의 처리 과정

- Spark는 이벤트 트리거 예약 작업을 구축함.

- 이후 Spark는 회의록 이메일을 조용히 감시하고 있다가, 이메일이 도착하는 즉시 메모를 읽고 결정 사항 및 조치 항목에 대해 브리핑하며, 요약 이메일을 작성함.

- <strong>Pro Tip: 이벤트 트리거 생성</strong>

- 이벤트 트리거는 Gemini와 직접 대화하여 생성해야 하며, 현재는 시간 기반 예약만 지원하는 수동 예약 빌더를 통해서는 만들 수 없음.

## **Gemini Spark와 다른 AI 에이전트 비교**

- <strong>Gemini Spark</strong>

- <strong>장점:</strong>

- <strong>가장 초보자 친화적</strong>: Gmail, Google Calendar, Google Drive 등 이미 사용하는 도구에 내장되어 있어 설정이 가장 적게 필요함.

- <strong>완벽한 클라우드 기반 실행</strong>: 노트북이 꺼져 있을 때도 예약 작업 등 모든 작업이 실행될 수 있음. 이는 Cloud Co-work, Cloud Code, Codeex에서는 불가능한 <strong>매우 큰 장점</strong>임.

- <strong>단점:</strong>

- <strong>제한적인 외부 도구 통합</strong>: 연결할 수 있는 외부 도구가 아직 많지 않음. 에이전트의 주요 역할이 사용하는 도구에서 조치를 취하는 것임을 고려할 때, 이는 약점임. (예: Claude와 비교 시 옵션 부족)

- <strong>일관성 없는 출력</strong>: Spark가 사용하는 모델을 선택할 수 없기 때문에 출력이 때때로 일관적이지 않음. (모델 선택 기능 추가는 비교적 쉬운 해결책으로 예상됨)

- <strong>블랙박스 메모리</strong>: Spark가 사용자에게 대해 어떤 정보를 알고 있는지 명확히 확인할 수 없음. 사용자는 Spark가 올바른 정보를 기억하고 있다고 믿어야 함.

- <strong>Claude Co-Work</strong>

- 기술적이지 않은 사용자에게도 친숙하면서도 많은 제어권을 제공하는 <strong>중간 옵션</strong>임.

- `memory.md` 문서 등을 통해 Co-work이 사용자에 대해 아는 것을 <strong>명시적으로 제어</strong>할 수 있음 (예: "사무실 관리자의 보조" 대신 "보조 사무실 관리자" 역할을 정의).

- <strong>Claude Code 및 Codeex</strong>

- 가장 강력한 도구이지만, 최대한 활용하려면 <strong>기술/코딩 배경</strong>이 필요함.

- <strong>모든 에이전트의 공통점</strong>

- 이 모든 에이전트의 성능은 <strong>사용자의 작업 공간 아키텍처(파일 및 폴더 구성 방식)에 크게 좌우</strong>됨.

- 예: Co-work 시스템 전체를 하나의 폴더에, 삶의 다양한 영역별로 정리하면 관련 맥락을 빠르게 로드할 수 있어 더 나은 답변을 얻고 토큰 사용량을 줄일 수 있음.

## **Spark로 시스템 구축하기 (고급 선호도 설정)**

- <strong>개념</strong>

- Spark의 블랙박스 메모리에 의존하지 않으려면, 사용자가 <strong>제어하는 파일(예: `Spark.mmd`)을 지정하여 Spark가 항상 사용자 선호도를 따르도록 강제</strong>할 수 있음. 이는 Cloud Co-work, Cloud Code, Codeex의 작동 방식과 유사함.

- <strong>설정 과정</strong>

- 새 채팅에서 지시: "내 Spark OS 폴더에 내 Spark 작업 공간 규칙을 저장할 'Spark.mmd'라는 Google Doc을 만들어줘. 일단 두 가지 규칙을 추가해줘. 하나는 항상 핵심 내용 요약(bottom line up front)으로 시작하고 이어서 세부 사항을 설명하는 커뮤니케이션 규칙이고, 다른 하나는 생성하는 모든 파일을 기본적으로 내 99 폴더에 저장하는 파일 규칙이야."

- 잠시 후, 해당 규칙이 작성된 문서가 'Spark OS' 폴더에 생성됨.

- <strong>사용 예시</strong>

- 지시: "Google의 AI 전략과 Microsoft의 AI 전략을 비교하고, 응답하기 전에 Spark.mmd를 읽어줘."

- Spark는 `Spark.mmd` 문서의 규칙에 따라 '핵심 내용 요약(bottom line up front)' 방식으로 답변함.

- <strong>미래 전망</strong>

- 아직 Spark가 `Spark.md` 문서를 자동으로 읽도록 강제할 수는 없지만, Google의 Gemini 책임자인 Josh Woodward와의 인터뷰에 따르면 <strong>이 기능이 곧 추가될 것으로 예상</strong>됨.

- 파워 유저를 위한 제어 주입 옵션, 즉 더 전통적인 MD 방식과 기술(skills) 측면 모두에서 사용자 정의가 가능해질 것으로 보임.

## **마무리 및 추가 리소스**

- 이 정보가 유용했다면, AI 플레이리스트를 확인해 보거나, 매주 1%씩 Google Workspace 생산성을 높이는 팁을 제공하는 주간 뉴스레터를 구독할 수 있음.

<br>
#GeminiSpark #AIAgent #GoogleWorkspace #생산성향상 #AI자동화 #스킬 #예약된작업 #템플릿활용 #파일관리 #이메일분류 #보고서작성 #클라우드AI #WhisperFlow