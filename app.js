const words = [
  { word: "cat", picture: "🐱", sound: "Meow, meow!", category: "animals" },
  { word: "dog", picture: "🐶", sound: "Woof, woof!", category: "animals" },
  { word: "duck", picture: "🦆", sound: "Quack, quack!", category: "animals" },
  { word: "cow", picture: "🐮", sound: "Moo, moo!", category: "animals" },
  { word: "sheep", picture: "🐑", sound: "Baa, baa!", category: "animals" },
  { word: "bird", picture: "🐦", sound: "Tweet, tweet!", category: "animals" },
  { word: "frog", picture: "🐸", sound: "Ribbit, ribbit!", category: "animals" },
  { word: "car", picture: "🚗", sound: "Vroom, vroom!", category: "transportation" },
  { word: "ball", picture: "⚽", sound: "Bounce, bounce!", category: "everyday" },
  { word: "apple", picture: "🍎", sound: "Crunch, crunch!", category: "food" },
  { word: "banana", picture: "🍌", sound: "Peel and munch!", category: "food" },
  { word: "sun", picture: "☀️", sound: "Shine, shine!", category: "everyday" },
  { word: "train", picture: "🚂", sound: "Choo-choo!", category: "transportation" },
  { word: "boat", picture: "⛵", sound: "Swish, swish!", category: "transportation" },
  { word: "fish", picture: "🐠", sound: "Blub, blub!", category: "animals" },
  { word: "lion", picture: "🦁", sound: "Roar, roar!", category: "animals" },
  { word: "horse", picture: "🐴", sound: "Neigh, neigh!", category: "animals" },
  { word: "pig", picture: "🐷", sound: "Oink, oink!", category: "animals" },
  { word: "rabbit", picture: "🐰", sound: "Hop, hop!", category: "animals" },
  { word: "bear", picture: "🐻", sound: "Grr, grr!", category: "animals" },
  { word: "turtle", picture: "🐢", sound: "Slow and steady!", category: "animals" },
  { word: "bee", picture: "🐝", sound: "Buzz, buzz!", category: "animals" },
  { word: "chicken", picture: "🐔", sound: "Cluck, cluck!", category: "animals" },
  { word: "monkey", picture: "🐵", sound: "Ooh, ooh, ah, ah!", category: "animals" },
  { word: "book", picture: "📘", sound: "Flip, flip!", category: "everyday" },
  { word: "cup", picture: "🥤", sound: "Sip, sip!", category: "everyday" },
  { word: "shoe", picture: "👟", sound: "Stomp, stomp!", category: "everyday" },
  { word: "hat", picture: "🎩", sound: "On your head!", category: "everyday" },
  { word: "flower", picture: "🌷", sound: "Smell the flower!", category: "everyday" },
  { word: "kite", picture: "🪁", sound: "Whoosh, whoosh!", category: "everyday" },
  { word: "teddy", picture: "🧸", sound: "Hug, hug!", category: "everyday" },
  { word: "spoon", picture: "🥄", sound: "Scoop, scoop!", category: "everyday" },
  { word: "house", picture: "🏠", sound: "Knock, knock!", category: "everyday" },
  { word: "airplane", picture: "✈️", sound: "Zoom, zoom!", category: "transportation" },
  { word: "bus", picture: "🚌", sound: "Beep, beep!", category: "transportation" },
  { word: "bicycle", picture: "🚲", sound: "Ring, ring!", category: "transportation" },
  { word: "truck", picture: "🚚", sound: "Honk, honk!", category: "transportation" },
  { word: "helicopter", picture: "🚁", sound: "Whir, whir!", category: "transportation" },
  { word: "scooter", picture: "🛴", sound: "Roll, roll!", category: "transportation" },
  { word: "taxi", picture: "🚕", sound: "Beep, beep!", category: "transportation" },
  { word: "orange", picture: "🍊", sound: "Peel and eat!", category: "food" },
  { word: "bread", picture: "🍞", sound: "Crunch, crunch!", category: "food" },
  { word: "cheese", picture: "🧀", sound: "Yum, yum!", category: "food" },
  { word: "egg", picture: "🥚", sound: "Tap, tap!", category: "food" },
  { word: "carrot", picture: "🥕", sound: "Crunch, crunch!", category: "food" },
  { word: "strawberry", picture: "🍓", sound: "Sweet, sweet!", category: "food" },
  { word: "cookie", picture: "🍪", sound: "Munch, munch!", category: "food" },
  { word: "milk", picture: "🥛", sound: "Glug, glug!", category: "food" }
];

const categoryNames = {
  animals: "Animals",
  transportation: "Transportation",
  food: "Food",
  everyday: "Everyday things",
  all: "Surprise me!"
};
const sessionSize = 10;
const displayDuration = 9000;
const repeatDelay = 5000;
const elements = {
  welcome: document.querySelector(".welcome-screen"),
  start: document.querySelector(".start-button"),
  categories: document.querySelector(".category-screen"),
  categoryButtons: document.querySelectorAll(".category-button"),
  back: document.querySelector(".back-button"),
  changeCategory: document.querySelector(".change-category-button"),
  gameSession: document.querySelector(".game-session"),
  selectedCategory: document.querySelector(".selected-category"),
  box: document.querySelector(".box-button"),
  discovery: document.querySelector(".discovery"),
  picture: document.querySelector(".object-picture"),
  word: document.querySelector(".word-label"),
  sound: document.querySelector(".sound-label-text"),
  repeat: document.querySelector(".repeat-button"),
  finish: document.querySelector(".finish-screen"),
  again: document.querySelector(".again-button"),
  round: document.querySelector("#round-number"),
  progress: document.querySelector(".progress-track"),
  progressFill: document.querySelector(".progress-fill"),
  soundToggle: document.querySelector(".sound-toggle"),
  soundIcon: document.querySelector(".sound-icon"),
  soundLabel: document.querySelector(".sound-toggle .sound-label"),
  helper: document.querySelector(".helper-text")
};

let sessionWords = [];
let currentWord = null;
let completedWords = 0;
let soundEnabled = true;
let selectedCategory = "all";
let preferredVoice = null;
let repeatTimer;
let nextTimer;

function selectSpeechVoice() {
  if (!("speechSynthesis" in window)) return;

  const voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
  const feminineVoiceNames = /\b(aria|jenny|samantha|zoe|victoria|kendra|joanna|tessa|serena|ava|susan|zira)\b/i;
  preferredVoice =
    englishVoices.find((voice) => feminineVoiceNames.test(voice.name)) ??
    englishVoices.find((voice) => voice.lang.toLowerCase() === "en-us") ??
    englishVoices[0] ??
    null;
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function speakCurrentWord() {
  if (!soundEnabled || !("speechSynthesis" in window) || !currentWord) return;

  window.speechSynthesis.cancel();
  const wordUtterance = new SpeechSynthesisUtterance(currentWord.word);
  wordUtterance.rate = 0.8;
  wordUtterance.pitch = 1.08;
  const soundUtterance = new SpeechSynthesisUtterance(currentWord.sound);
  soundUtterance.rate = 0.8;
  soundUtterance.pitch = 1.12;
  if (preferredVoice) {
    wordUtterance.voice = preferredVoice;
    soundUtterance.voice = preferredVoice;
  }
  wordUtterance.onend = () => {
    if (soundEnabled) window.speechSynthesis.speak(soundUtterance);
  };
  window.speechSynthesis.speak(wordUtterance);
}

function updateProgress() {
  elements.round.textContent = String(Math.min(completedWords + 1, sessionSize));
  elements.progress.setAttribute("aria-valuenow", String(completedWords));
  elements.progressFill.style.width = `${(completedWords / sessionSize) * 100}%`;
}

function showBox() {
  window.clearTimeout(repeatTimer);
  window.clearTimeout(nextTimer);
  if (currentWord) completedWords += 1;
  currentWord = null;

  if (completedWords >= sessionSize) {
    elements.box.hidden = true;
    elements.discovery.hidden = true;
    elements.finish.hidden = false;
    elements.helper.hidden = true;
    elements.progress.setAttribute("aria-valuenow", String(sessionSize));
    elements.progressFill.style.width = "100%";
    return;
  }

  elements.discovery.hidden = true;
  elements.box.hidden = false;
  elements.repeat.hidden = true;
  elements.helper.hidden = false;
  updateProgress();
}

function revealWord() {
  if (elements.box.hidden || completedWords >= sessionSize) return;
  currentWord = sessionWords[completedWords];
  elements.box.hidden = true;
  elements.discovery.hidden = false;
  elements.picture.textContent = currentWord.picture;
  elements.word.textContent = currentWord.word;
  elements.sound.textContent = currentWord.sound;
  elements.repeat.hidden = true;
  elements.helper.hidden = true;
  speakCurrentWord();

  repeatTimer = window.setTimeout(() => {
    elements.repeat.hidden = false;
  }, repeatDelay);
  nextTimer = window.setTimeout(showBox, displayDuration);
}

function showCategories() {
  elements.welcome.hidden = true;
  elements.gameSession.hidden = true;
  elements.categories.hidden = false;
}

function showWelcome() {
  window.clearTimeout(repeatTimer);
  window.clearTimeout(nextTimer);
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  currentWord = null;
  elements.categories.hidden = true;
  elements.gameSession.hidden = true;
  elements.welcome.hidden = false;
}

function startSession(category) {
  window.clearTimeout(repeatTimer);
  window.clearTimeout(nextTimer);
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  selectedCategory = category;
  const categoryWords = category === "all" ? words : words.filter((word) => word.category === category);
  sessionWords = shuffle(categoryWords).slice(0, sessionSize);
  completedWords = 0;
  currentWord = null;
  elements.welcome.hidden = true;
  elements.categories.hidden = true;
  elements.gameSession.hidden = false;
  elements.selectedCategory.textContent = categoryNames[category];
  elements.finish.hidden = true;
  elements.discovery.hidden = true;
  elements.box.hidden = false;
  elements.helper.hidden = false;
  updateProgress();
}

elements.start.addEventListener("click", showCategories);
elements.back.addEventListener("click", showWelcome);
elements.changeCategory.addEventListener("click", showCategories);
elements.categoryButtons.forEach((button) => {
  button.addEventListener("click", () => startSession(button.dataset.category));
});
elements.box.addEventListener("click", revealWord);
elements.repeat.addEventListener("click", () => {
  speakCurrentWord();
  elements.repeat.hidden = true;
  window.clearTimeout(nextTimer);
  nextTimer = window.setTimeout(showBox, displayDuration);
});
elements.again.addEventListener("click", () => startSession(selectedCategory));
elements.soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  elements.soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  elements.soundToggle.setAttribute("aria-label", soundEnabled ? "Turn sound off" : "Turn sound on");
  elements.soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
  elements.soundLabel.textContent = soundEnabled ? "Sound on" : "Sound off";
  if (!soundEnabled && "speechSynthesis" in window) window.speechSynthesis.cancel();
  else if (currentWord) speakCurrentWord();
});

if ("speechSynthesis" in window) {
  selectSpeechVoice();
  window.speechSynthesis.addEventListener("voiceschanged", selectSpeechVoice);
}
