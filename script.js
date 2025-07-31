const questions = [
  {
    question: "我最怕你做下面哪个动作？",
    options: [
      { text: "忽视我", correct: true, response: "对，我装得很酷，其实你不理我我会崩掉。" },
      { text: "突然夸我", correct: false, response: "这倒不会，就是会脸红。" },
      { text: "对我讲冷笑话", correct: false, response: "emmmm...有点冷但我忍得住。" },
      { text: "偷偷看我手机", correct: false, response: "这才让我紧张呢！" }
    ]
  },
  {
    question: "你觉得我看到你发自拍第一反应是？",
    options: [
      { text: "秒点赞", correct: false, response: "我不这么轻易暴露。" },
      { text: "偷存下来", correct: true, response: "说中了…你是不是查我手机了？" },
      { text: "装作没看到", correct: false, response: "没这么能忍，我又不是机器人。" },
      { text: "发一堆表情包", correct: false, response: "夸张了，害我脸红。" }
    ]
  },
  {
    question: "我最希望我们第一次见面是什么场景？",
    options: [
      { text: "图书馆偶遇", correct: true, response: "多浪漫，多电影！" },
      { text: "游戏开黑面基", correct: false, response: "也挺酷，但没那种心跳感。" },
      { text: "去网红店打卡", correct: false, response: "你会拍照，我会紧张！" },
      { text: "街头偶遇", correct: false, response: "想象力满分，但有点难实现。" }
    ]
  },
  {
    question: "如果我偷偷喜欢你，我最可能的反应是？",
    options: [
      { text: "故意冷落你", correct: false, response: "不，我更可能被你吸引得不行。" },
      { text: "偷看你朋友圈", correct: true, response: "被你抓住了，我真的会这么做。" },
      { text: "当面表白", correct: false, response: "我太怂了，肯定不会这么直接。" },
      { text: "装作不在意", correct: false, response: "装作不在意其实更难。" }
    ]
  },
  {
    question: "当我生气时，最不希望你做什么？",
    options: [
      { text: "说‘你怎么又生气了’", correct: true, response: "别刺激我，我会爆炸！" },
      { text: "给我买零食", correct: false, response: "零食治标不治本。" },
      { text: "沉默不语", correct: false, response: "沉默有时候比说话更恐怖。" },
      { text: "装作没事", correct: false, response: "我觉得你太假了。" }
    ]
  },
  {
    question: "我平时最喜欢的聊天方式是？",
    options: [
      { text: "语音电话", correct: true, response: "听到你声音，我一天都开心！" },
      { text: "发表情包", correct: false, response: "虽然可爱，但我更想听你说话。" },
      { text: "发长篇消息", correct: false, response: "看着有点累，但也甜。" },
      { text: "沉默聊天", correct: false, response: "沉默也算聊天？" }
    ]
  },
  {
    question: "你觉得我哪天开始喜欢你的？",
    options: [
      { text: "第一次见面", correct: false, response: "这太早了，我还没准备好。" },
      { text: "和你聊天时", correct: true, response: "聊天中慢慢喜欢上你了。" },
      { text: "你帮我做事的时候", correct: false, response: "感激是有的，但还没到喜欢。" },
      { text: "看你笑的时候", correct: false, response: "这只是我喜欢笑。" }
    ]
  },
  {
    question: "如果我送你礼物，最可能是什么？",
    options: [
      { text: "手写情书", correct: true, response: "我最喜欢表达心意的方式。" },
      { text: "名牌包包", correct: false, response: "不实用，也不够心意。" },
      { text: "零食大礼包", correct: false, response: "吃货我可不是。" },
      { text: "花束", correct: false, response: "虽然浪漫，但我更喜欢实在的东西。" }
    ]
  },
  {
    question: "我最想跟你做什么活动？",
    options: [
      { text: "一起做饭", correct: true, response: "做饭一起，感情升温！" },
      { text: "去看电影", correct: false, response: "也喜欢，但没那么特别。" },
      { text: "户外运动", correct: false, response: "我运动细胞很差，怕累。" },
      { text: "逛街购物", correct: false, response: "这个更适合你吧？" }
    ]
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const responseEl = document.getElementById("response");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const q = questions[currentIndex];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  responseEl.innerText = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt.text;
    btn.onclick = () => {
      responseEl.innerText = opt.response;
      if (opt.correct) score++;
      // 禁用所有按钮防止刷分
      Array.from(document.querySelectorAll(".option-btn")).forEach(b => b.disabled = true);
      nextBtn.disabled = false;
    };
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

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

function showResult() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";

  let msg = "";
  if (score === questions.length) {
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
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  nextBtn.disabled = true;
  showQuestion();
}

// 绑定事件
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartGame);

// 留言功能
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const thanksMsg = document.getElementById("thanks-msg");

messageForm.addEventListener("submit", e => {
  e.preventDefault();
  const val = messageInput.value.trim();
  if (val.length === 0) return;
  localStorage.setItem("message", val);
  messageInput.value = "";
  thanksMsg.style.display = "block";
});

// 页面初始化
if (localStorage.getItem("passed") === "yes") {
  // 如果之前通关过，直接显示结果和留言
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  resultMessage.innerText = "🎉 你之前已经通关啦！欢迎留言～";
  document.getElementById("message-box").style.display = "block";
} else {
  showQuestion();
}
