const riddles = [
    { question: "What has keys but can't open locks?", answer: "A piano" },
    { question: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "A candle" },
    { question: "What gets wetter as it dries?", answer: "A towel" },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "A penny" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "Footsteps" },
    { question: "What can travel around the world while staying in a corner?", answer: "A stamp" },
    { question: "What has a neck but no head?", answer: "A bottle" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter 'm'" },
    { question: "What has cities but no houses, forests but no trees, and rivers but no water?", answer: "A map" },
    { question: "What belongs to you, but other people use it more than you?", answer: "Your name" },
    { question: "What is full of holes but still holds water?", answer: "A sponge" },
    { question: "What has a heart that doesn't beat?", answer: "An artichoke" },
    { question: "What can you catch but not throw?", answer: "A cold" },
    { question: "What has keys but can't open locks?", answer: "A keyboard" },
    { question: "What can you break, even if you never pick it up or touch it?", answer: "A promise" },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "A coin" },
    { question: "What is always in front of you but can't be seen?", answer: "The future" }
  ];
  
  const generateRiddle = () => {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    const riddleElement = document.getElementById('riddle-text');
    const answerElement = document.getElementById('answer');
    const answerBtn = document.getElementById('answer-btn');
  
    riddleElement.textContent = riddles[randomIndex].question;
    answerElement.textContent = `Answer: ${riddles[randomIndex].answer}`;
    answerElement.classList.add('hidden');
    answerBtn.classList.remove('hidden');
  };
  
  const toggleAnswer = () => {
    const answerElement = document.getElementById('answer');
    answerElement.classList.toggle('hidden');
  };
  
  document.getElementById('generate-btn').addEventListener('click', generateRiddle);
  document.getElementById('answer-btn').addEventListener('click', toggleAnswer);
  
  // Initial riddle generation
  generateRiddle();