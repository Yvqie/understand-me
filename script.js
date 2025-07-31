// 问题数组，确保无嵌套问题
const questions = [
  {
    question: "我最怕你做下面哪个动作？",
    options: [
      { text: "忽视我", correct: true, response: "对，我装得很酷，其实你不理我我会崩掉😭" },
      { text: "突然夸我", correct: false, response: "这倒不会，就是会害羞脸红😊" },
      { text: "对我讲冷笑话", correct: false, response: "emmmm...有点冷但我忍得住❄️😂" },
      { text: "偷偷看我手机", correct: false, response: "这才让我紧张呢！🙈" }
    ]
  },
  {
    question: "你觉得我看到你发自拍第一反应是？",
    options: [
      { text: "秒点赞", correct: true, response: "我不这么轻易暴露👌" },
      { text: "偷存下来", correct: true, response: "说中了…你是不是偷偷查我手机了？👀" },
      { text: "装作没看到", correct: false, response: "没这么能忍，我又不是机器人🤖" },
      { text: "发一堆表情包", correct: false, response: "夸张了，害我脸红脸红😳" }
    ]
  },
  {
    question: "如果我突然消失一天，你猜我会做啥？",
    options: [
      { text: "躲你手机背后偷窥", correct: true, response: "哈哈，被你发现了，我就这么鬼鬼祟祟！👀" },
      { text: "去爬山大喊释放压力", correct: false, response: "爬山还不错，但没你重要😜" },
      { text: "躺沙发刷剧一整天", correct: false, response: "剧比你还吸引人吗？别开玩笑了🤣" },
      { text: "写一堆秘密日记", correct: false, response: "秘密多得写不完，我都忘了内容了📓" }
    ]
  },
  {
    question: "我最容易被你哪句话打动？",
    options: [
      { text: "‘你真特别’", correct: true, response: "听到这话我心里乐开花🌸" },
      { text: "‘我喜欢你’", correct: false, response: "直接告白太猛，我还没准备好😳" },
      { text: "‘谢谢你’", correct: false, response: "感激的心情总让人暖暖的😊" },
      { text: "‘别忘了吃饭’", correct: true, response: "实用派，暖心又贴心🍲" }
    ]
  },
  {
    question: "看到你发消息我最想干啥？",
    options: [
      { text: "秒回咋回事", correct: true, response: "没错，看到你我秒变高效回复机⚡️" },
      { text: "偷偷看三遍再回", correct: false, response: "偷看三遍就够了，别太紧张😂" },
      { text: "转发给好友炫耀", correct: false, response: "哈哈，炫耀我知道你有多喜欢我😉" },
      { text: "发一堆表情包反应", correct: false, response: "表情包是我的第二语言😝" }
    ]
  },
  {
    question: "当我生气时，最不希望你做什么？",
    options: [
      { text: "说‘别来烦我’", correct: true, response: "别刺激我，我会爆炸💥😭" },
      { text: "给我买零食", correct: false, response: "零食治标不治本，别用糖掩盖问题🍬" },
      { text: "沉默不语", correct: false, response: "沉默有时候比说话更恐怖😱" },
      { text: "装作没事", correct: false, response: "我觉得你太假了，假装没看到不行🙅‍♀️" }
    ]
  },
  {
    question: "我平时最喜欢的聊天方式是？",
    options: [
      { text: "语音电话", correct: false, response: "听到你声音，我一天都开心📞😊" },
      { text: "发表情包", correct: false, response: "虽然可爱，但我更想听你说话🗣️" },
      { text: "发长篇消息", correct: false, response: "看着有点累，但也甜甜的❤️" },
      { text: "沉默聊天", correct: true, response: "沉默也算聊天？这我有点懵😶" }
    ]
  },
  {
    question: "我最令人讨厌的是哪种行为？",
    options: [
      { text: "磨蹭拖延不回应", correct: true, response: "拖延症犯了，我真的很急😖" },
      { text: "突然安静不说话", correct: false, response: "安静有时候是思考，不是故意冷落🙃" },
      { text: "无缘无故生气", correct: true, response: "我也是人，偶尔小情绪🥲" },
      { text: "发奇怪表情包", correct: false, response: "奇怪表情包才有趣，不是吗？😜" }
    ]
  },
  {
    question: "如果我突然变成超能力者，最想有什么能力？",
    options: [
      { text: "瞬间出现在你身边", correct: true, response: "这样随时陪你，不离不弃💫" },
      { text: "读心术听心声", correct: false, response: "读心可怕，还是多听你说话安全😳" },
      { text: "隐身去踢舍友屁股", correct: false, response: "偷偷吃零食才有乐趣，嘘🤫" },
      { text: "飞天遁地逃避尴尬", correct: false, response: "尴尬时能飞走简直完美😅" }
    ]
  },
  {
    question: "你觉得我最迷人的地方是？",
    options: [
      { text: "真诚待人", correct: true, response: "真心实意最吸引人❤️" },
      { text: "幽默感", correct: false, response: "笑点多，多亏我逗你😂" },
      { text: "从容", correct: false, response: "笑一笑，十年少😊" },
      { text: "努力上进", correct: false, response: "有目标更有魅力💪" }
    ]
  },
  {
    question: "如果我送你礼物，最可能是什么？",
    options: [
      { text: "花束", correct: true, response: "我最喜欢表达心意的方式💌" },
      { text: "名牌包包", correct: false, response: "不实用，也不够走心🎒" },
      { text: "吃吃吃", correct: true, response: "就知道吃，吃货我可不是，别用食物收买我😋" },
      { text: "屁", correct: false, response: "虽然浪漫，但我更喜欢实在的东西🌹" }
    ]
  },
  {
    question: "我最想跟你做什么活动？",
    options: [
      { text: "一起聊天", correct: true, response: "聊聊聊一直能聊🍳❤️" },
      { text: "去看电影", correct: false, response: "也喜欢，但没那么特别🎥" },
      { text: "户外运动", correct: false, response: "我运动细胞很差，怕累😅" },
      { text: "逛街购物", correct: false, response: "这个更适合你吧？🛍️" }
    ]
  },
  {
    question: "和我聊天时你最喜欢聊什么？",
    options: [
      { text: "八卦趣事", correct: true, response: "八卦中透露我们的默契，爱了💬" },
      { text: "天气美食", correct: true, response: "聊聊吃的永远不过时🍣" },
      { text: "电影游戏", correct: false, response: "说说最新剧情，一起打游戏🎮" },
      { text: "沉默陪伴", correct: true, response: "陪伴也能很有感觉，懂你😊" }
    ]
  },
  {
    question: "如果我给你发了‘...’我心里想的可能是？",
    options: [
      { text: "我不知道说啥", correct: true, response: "有时候就是不知道怎么开口🤐" },
      { text: "生气了你没理我", correct: false, response: "这点小事我不计较啦😊" },
      { text: "在想你呢", correct: false, response: "偷偷想你，没说出口🙈" },
      { text: "手机没电了", correct: false, response: "真心话还是手机故障？🔋" }
    ]
  },
  {
    question: "你觉得我对你最体贴的表现是？",
    options: [
      { text: "记得你喜欢的东西", correct: true, response: "细节决定一切，我很认真哦🍰" },
      { text: "给你准备惊喜", correct: false, response: "惊喜是平淡的调味料🎉" },
      { text: "陪你发呆聊天", correct: false, response: "安静相处最治愈☁️" },
      { text: "帮你解决烦恼", correct: false, response: "当你的超级助攻🦸" }
    ]
  }
];

let currentIndex = 0;
let score = 0;

// 获取 DOM 元素并检查是否存在
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const responseEl = document.getElementById("response");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const thanksMsg = document.getElementById("thanks-msg");

// 检查 DOM 元素是否存在
if (!questionEl || !optionsEl || !responseEl || !nextBtn || !quizBox || !resultBox || !resultMessage || !restartBtn || !messageForm || !messageInput || !thanksMsg) {
  console.error("某些 DOM 元素未找到，请检查 HTML 结构");
}

// 显示问题
function showQuestion() {
  if (!questionEl || !optionsEl || !responseEl || !nextBtn) {
    console.error("无法显示问题：缺少必要的 DOM 元素");
    return;
  }

  const q = questions[currentIndex];
  console.log("当前问题:", q); // 调试日志
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  responseEl.innerText = "";

  q.options.forEach((opt, i) => {
    console.log("生成选项:", opt.text); // 调试日志
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt.text;
    btn.onclick = () => {
      responseEl.innerText = opt.response;
      if (opt.correct) score++;
      Array.from(document.querySelectorAll(".option-btn")).forEach(b => b.disabled = true);
      nextBtn.disabled = false;
    };
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

// 下一题
function nextQuestion() {
  if (nextBtn.disabled) {
    alert("请先选择一个答案！");
    return;
  }
  currentIndex++;
  if (currentIndex >= questions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

// 显示结果
function showResult() {
  if (!quizBox || !resultBox || !resultMessage) {
    console.error("无法显示结果：缺少必要的 DOM 元素");
    return;
  }

  quizBox.style.display = "none";
  resultBox.style.display = "block";

  let msg = "";
  if (score >= questions.length * 0.8) {
    msg = "🎉 你太懂我了，我是不是藏得不够好？🥹";
  } else if (score >= questions.length * 0.7) {
    msg = "你懂得挺多的，继续努力！😉";
  } else if (score >= questions.length * 0.4) {
    msg = "你了解我一点点，但还有很多未知。";
  } else {
    msg = "你对我一无所知！不过可以从今天开始了解我 ❤️";
  }
  resultMessage.innerText = msg;
  localStorage.setItem("passed", score === questions.length ? "yes" : "no");
}

// 重新开始
function restartGame() {
  score = 0;
  currentIndex = 0;
  if (quizBox && resultBox) {
    quizBox.style.display = "block";
    resultBox.style.display = "none";
  }
  nextBtn.disabled = true;
  showQuestion();
}

// 绑定事件
if (nextBtn) {
  nextBtn.addEventListener("click", nextQuestion);
}
if (restartBtn) {
  restartBtn.addEventListener("click", restartGame);
}

// 留言功能
if (messageForm && messageInput && thanksMsg) {
  messageForm.addEventListener("submit", e => {
    e.preventDefault();
    const val = messageInput.value.trim();
    if (val.length === 0) return;
    localStorage.setItem("message", val);
    messageInput.value = "";
    thanksMsg.style.display = "block";
  });
}

// 页面初始化
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("passed") === "yes") {
    if (quizBox && resultBox && resultMessage && document.getElementById("message-box")) {
      quizBox.style.display = "none";
      resultBox.style.display = "block";
      resultMessage.innerText = "🎉 你之前已经通关啦！欢迎留言～";
      document.getElementById("message-box").style.display = "block";
    } else {
      console.error("初始化失败：缺少 message-box 或其他 DOM 元素");
    }
  } else {
    showQuestion();
  }
});
