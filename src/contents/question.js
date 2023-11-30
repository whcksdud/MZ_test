const question = [
  {
    title: "1. 가장 입사 하고 싶은 회사는 어디인가?",
    content: [
      {
        answer: "① 자유롭고 수평적 소통 문화를 가진 기업",
        weight: [1, 0, 0, 1, 1],
      },
      {
        answer: "② 성장 가능성이 높은 기업",
        weight: [1, 0, 0, 0, 0],
      },
      {
        answer: "③ 탄력 근무가 가능한 기업",
        weight: [0, 0, 0, 1, 1],
      },
      {
        answer: "④ 연봉만 높으면 상관없다",
        weight: [0, 1, 0, 0, 0],
      },
    ],
  },
  {
    title: "2. 9시에 회의가 잡혔다면 당신은 언제까지 준비를 하나요?",
    content: [
      {
        answer: "① 시간에 맞춰서",
        weight: [0, 1, 1, 0, 0],
      },
      {
        answer: "② 5분전",
        weight: [0, 0, 0, 1, 1],
      },
      {
        answer: "③ 10분전",
        weight: [1, 0, 0, 0, 0],
      },
      {
        answer: "④ 상사보다 빨리",
        weight: [0, 1, 0, 0, 0],
      },
    ],
  },
  {
    title:
      "3. 다음 빈칸의  들어갈 말로 알맞은 것은? <br> 부서 회식은 OOO 이다.",
    content: [
      {
        answer: "① 업무의 연장선 이다.",
        weight: [0, 1, 1, 0, 0],
      },
      {
        answer: "② 점심때 하고 무조건 비싼 걸로",
        weight: [0, 0, 0, 1, 1],
      },
    ],
  },
  {
    title:
      "4. 후배가 불평하면 '그래도 옛날에 비하면 요즘이 좋아졌<br>지'라는 말을 종종한다?",
    content: [
      {
        answer: "① 네",
        weight: [0, 1, 1, 0, 0],
      },
      {
        answer: "② 아니오",
        weight: [1, 0, 0, 0, 1],
      },
    ],
  },
  {
    title: "5. SNS가 아닌 것은?",
    content: [
      {
        answer: "① 인스타그램",
        weight: [0, 0, 0, 0, 0],
      },
      {
        answer: "② 제페토",
        weight: [0, 0, 0, 0, 0],
      },
      {
        answer: "③ 본디",
        weight: [0, 0, 0, 0, 0],
      },
      {
        answer: "④ 원신",
        weight: [0, 0, 0, 1, 1],
      },
    ],
  },
  {
    title: "6. 후배가 나보다 출근을 늦게한다면?",
    content: [
      {
        answer: "① 눈치준다",
        weight: [0, 0, 1, 0, 0],
      },
      {
        answer: "② 신경은 쓰이지만 그럴수도 있다고 생각한다",
        weight: [1, 0, 0, 0, 0],
      },
      {
        answer: "③ 별 생각없다",
        weight: [0, 0, 0, 1, 0],
      },
      {
        answer: "④ 경고한다",
        weight: [0, 1, 0, 0, 0],
      },
    ],
  },
  {
    title: "7. 회식자리에서 후배가 고기를 굽지도 않고 먹기 바쁘다.<br> 당신은?",
    content: [
      {
        answer: "① 따로 불러서 회식자리 매너에 대한 조언을 한다.",
        weight: [1, 0, 0, 0, 0],
      },
      {
        answer: "② 눈치준다",
        weight: [0, 0, 1, 0, 0],
      },
      {
        answer: "③ 별 생각없다",
        weight: [0, 0, 0, 0, 1],
      },
      {
        answer: "④ 그럴수도 있다",
        weight: [0, 0, 0, 1, 0],
      },
    ],
  },
  {
    title: "8. 다음 중 성격이 다른 하나는?",
    content: [
      {
        answer: "① OMG",
        weight: [0, 0, 0, 0, 0],
      },
      {
        answer: "② Hype boy",
        weight: [0, 0, 0, 0, 0],
      },
      {
        answer: "③ Attention",
        weight: [0, 0, 0, 0, 0],
      },
      {
        answer: "④ Antifragile",
        weight: [0, 0, 0, 1, 1],
      },
    ],
  },
  {
    title:
      "9. 회사 입사 첫날 팀장님이 커피를 사준다고 한다 다음 <br>중 옳은 대답은?",
    content: [
      {
        answer: "① 전 아이스 아메리카노로 마시겠습니다!",
        weight: [0, 0, 0, 0, 1],
      },
      {
        answer: "② 스타벅스로 사주시나요?",
        weight: [0, 0, 0, 1, 0],
      },
      {
        answer: "③ 제가 갔다 오겠습니다",
        weight: [1, 0, 0, 0, 0],
      },
      {
        answer: "④ 팀장님은 뭐 드시나요?",
        weight: [0, 0, 1, 0, 0],
      },
    ],
  },
  {
    title:
      "10. 후배가 타당하지 못한 이유로 회식 참여를 못하게 됐을<br> 때 당신은?",
    content: [
      {
        answer: "① 아무말 안하고 집으로 보낸다",
        weight: [0, 0, 0, 1, 0],
      },
      {
        answer: "② 팀장님께 잘 이야기하겠다고 하고 빠르게 집에 보낸다",
        weight: [1, 0, 0, 0, 0],
      },
      {
        answer: "③ 공과사 구분을 명확히 하게끔 조언한다",
        weight: [0, 1, 0, 0, 0],
      },
      {
        answer: "④ 필참해야 함을 알려준다",
        weight: [0, 0, 1, 0, 0],
      },
    ],
  },
];

export default question;
