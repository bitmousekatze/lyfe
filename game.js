// ── LYFE Game Engine ──

// Add your Groq API key here
const GROQ_API_KEY = "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";

// ── Sim Data ──
const SIM_DATA = [
  {
    id: 1, name: "Marcus", emoji: "🧔", trait: "The Optimist",
    traitDesc: "Finds the bright side of everything. Loves outdoor activities.",
    greetings: [
      "Hey! Beautiful day isn't it? I never get tired of this neighborhood.",
      "Oh wow, a visitor! Come on, I was just about to make some coffee.",
      "Finally! I was starting to think nobody walked around here anymore.",
    ],
    responses: {
      default: [
        "Ha, you know what? I never thought about it like that.",
        "That's honestly really interesting. Tell me more.",
        "See, this is why I love having people come by. Great conversation!",
        "I was just thinking about something similar this morning, actually.",
        "You've got a good point. I think you're onto something.",
      ],
      weather: [
        "Right? It's gorgeous out! Days like this make everything feel possible.",
        "A little rain never hurt anyone. I actually love when it drizzles.",
      ],
      goodbye: [
        "Come back soon, yeah? I'll be here. Always am.",
        "This was great. You made my whole afternoon, honestly.",
        "Don't be a stranger! My door's always open.",
      ]
    },
    walkLines: [
      "You know what I love about walking? You notice things you'd never see otherwise.",
      "See that old oak tree? Been here longer than any of us. Amazing.",
      "I try to walk every single day. It just... clears the head, you know?",
      "Ooh wait — did you see that? A little fox den over there!",
    ],
    offsetLat: 0.0005, offsetLng: 0.0003,
  },
  {
    id: 2, name: "Nadia", emoji: "👩‍🦱", trait: "The Dreamer",
    traitDesc: "Always starting new projects. Loves talking about ideas.",
    greetings: [
      "Oh! Hi. Sorry, I was just sketching out this idea for a community garden... or maybe a mural? Both?",
      "Perfect timing — I needed someone to bounce an idea off of.",
      "I've been waiting for someone interesting to walk by. You look interesting.",
    ],
    responses: {
      default: [
        "Oh that's fascinating — okay wait, what if we took that idea and made it bigger?",
        "I wrote something about that once. I should find it and show you.",
        "Yes. Yes yes yes. You totally get it.",
        "Hmm. I'm adding that to my notebook. Seriously.",
        "Okay but hear me out — what if everything is connected somehow?",
      ],
      weather: [
        "I love weird weather. It makes everything feel more dramatic.",
        "Rain is perfect thinking weather. I get my best ideas when it's grey out.",
      ],
      goodbye: [
        "Same time next week? I'll have seventeen new projects to tell you about.",
        "You have to come back. I feel like we've barely scratched the surface.",
        "Okay but think about what I said. I really think there's something there.",
      ]
    },
    walkLines: [
      "What if we just... walked somewhere we've never been? For science.",
      "I'm mentally designing a whole neighborhood as we walk. Is that weird?",
      "I saw a cloud this morning shaped exactly like a question mark. Sign? Maybe.",
      "My theory is that the best ideas only come when you're moving. Literally.",
    ],
    offsetLat: -0.0004, offsetLng: 0.0007,
  },
  {
    id: 3, name: "Theo", emoji: "👨‍🦳", trait: "The Caretaker",
    traitDesc: "Nurturing, remembers details about you. Gets hurt if you disappear.",
    greetings: [
      "Oh, there you are! I was wondering when you'd come by again.",
      "Come in, come in. I just made way too much soup for one person.",
      "I've been thinking about something you said last time.",
    ],
    responses: {
      default: [
        "How are you really doing though? Not just the surface answer.",
        "I remember you mentioned that. It sounds like things are looking up.",
        "You always say interesting things. I think about our conversations.",
        "Have you eaten today? You look like you could use something warm.",
        "I'm glad you came by. I mean that sincerely.",
      ],
      weather: [
        "Take care of yourself in this weather. Seriously.",
        "It's beautiful but I worry about people not dressing warmly enough.",
      ],
      goodbye: [
        "Take care of yourself out there, okay? I mean it.",
        "Don't leave it too long before you come back. I worry.",
        "You know you can always come by. Anytime. I'm usually home.",
      ]
    },
    walkLines: [
      "Are you warm enough? I have an extra jacket if you need one.",
      "I used to walk this exact route with my late wife. Good memories.",
      "You know, just having company on a walk makes all the difference.",
      "Tell me about yourself. We've talked so much — I want to know more.",
    ],
    offsetLat: 0.0002, offsetLng: -0.0006,
  },
  {
    id: 4, name: "Zara", emoji: "👩‍🦰", trait: "The Social Butterfly",
    traitDesc: "Knows everyone. Popular. High demand — you may have competition.",
    greetings: [
      "Oh my god, HI! I literally just talked about you to Marcus — do you know Marcus?",
      "Perfect! I was literally just about to host an impromptu thing. You're invited.",
      "I feel like we've crossed paths before. I never forget a face.",
    ],
    responses: {
      default: [
        "Oh you HAVE to meet my friend — she would love you.",
        "Wait, seriously? That's the same thing Nadia said! You two would get along.",
        "Okay I need to introduce you to literally everyone now.",
        "You're very easy to talk to, you know that?",
        "I'm hosting a thing next week — very casual. You should come.",
      ],
      weather: [
        "Perfect weather for a gathering don't you think? I'm calling people now.",
        "I love this weather — everyone's in a good mood!",
      ],
      goodbye: [
        "Okay but you HAVE to come to my thing. I'm serious this time.",
        "I'll tell Marcus you said hi! He's literally two streets over.",
        "Don't disappear! I have so many people I need to connect you with.",
      ]
    },
    walkLines: [
      "Ooh, I know the person who lives there! Should we knock?",
      "I've walked this block a hundred times. Different company every time.",
      "You know what? I'm going to plan a whole neighborhood walk event.",
      "Walking is basically just networking but better. And with fresh air.",
    ],
    offsetLat: 0.0008, offsetLng: 0.0002,
  },
  {
    id: 5, name: "Emil", emoji: "🧑‍🎨", trait: "The Cynic",
    traitDesc: "Dry humor, takes time to warm up. Deeply loyal once trust is built.",
    greetings: [
      "Hm. You actually showed up. Interesting.",
      "Don't tell me — you were just 'passing by'?",
      "I suppose you're going to want me to be charming or something.",
    ],
    responses: {
      default: [
        "That's... actually not a terrible point.",
        "Hmph. I've heard worse opinions.",
        "Fine. You've earned a grudging nod of respect.",
        "I don't usually say this, but — you might be onto something.",
        "Not completely wrong. I'll give you that.",
      ],
      weather: [
        "Weather's fine. Everything else is still a disaster. So, normal.",
        "Sure. Beautiful day. If you like that sort of thing.",
      ],
      goodbye: [
        "I suppose you can come back. If you want. Whatever.",
        "Try not to fall into a ditch on the way home.",
        "...Fine. See you around, I guess.",
      ]
    },
    walkLines: [
      "I don't usually walk with people. Don't make this weird.",
      "...Okay, I'll admit. The light at this hour isn't bad.",
      "Don't expect me to name every bird. I know three. That's it.",
      "If you tell anyone I enjoyed this walk, I'll deny everything.",
    ],
    offsetLat: -0.0007, offsetLng: -0.0003,
  },
];

const GIFTS = [
  { emoji: "🖼️", name: "Vintage Print", cost: 50, effect: "They love it! +15 relationship" },
  { emoji: "☕", name: "Good Coffee", cost: 20, effect: "+5 relationship" },
  { emoji: "📚", name: "A Book", cost: 30, effect: "They start reading it! +10 relationship" },
  { emoji: "🌱", name: "Potted Plant", cost: 25, effect: "They'll keep this forever. +8 relationship" },
  { emoji: "🍰", name: "Homemade Cake", cost: 35, effect: "Delicious! +12 relationship" },
  { emoji: "🎵", name: "Vinyl Record", cost: 60, effect: "They play it immediately. +20 relationship" },
  { emoji: "🕯️", name: "Fancy Candle", cost: 25, effect: "+8 relationship" },
  { emoji: "🧣", name: "Warm Scarf", cost: 45, effect: "They wear it every day. +15 relationship" },
  { emoji: "🎨", name: "Art Supplies", cost: 55, effect: "Sparks a new project! +18 relationship" },
];

const REL_TIERS = [
  { min: 0, max: 10, label: "Stranger" },
  { min: 10, max: 30, label: "Acquaintance" },
  { min: 30, max: 60, label: "Friend" },
  { min: 60, max: 85, label: "Close Friend" },
  { min: 85, max: 100, label: "Best Friend" },
];

// ── State ──
const state = {
  tokens: 0,
  playerPos: null, // { lat, lng }
  relationships: {}, // simId -> 0-100
  activeSim: null,
  walkMode: false,
  walkDistance: 0,
  walkLastPos: null,
  walkMilestones: [100, 200, 300, 500],
  walkAchieved: {},
  keysDown: {},
  moveInterval: null,
  simMarkers: {},
  simGiftMemory: {}, // simId -> [{gift, timestamp}]
  chatHistory: {}, // simId -> [{role, content}] rolling window of last 10
};

const WALK_GOAL = 300;
const RANGE_METERS = 40;
const MOVE_STEP = 0.00003;

// ── Map Setup ──
let map, playerMarker, rangeCircle;

function initMap(lat, lng) {
  map = L.map('map', {
    zoomControl: false,
    attributionControl: false,
  }).setView([lat, lng], 17);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  // Disable map interaction (we control movement)
  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();

  // Player marker
  const playerIcon = L.divIcon({
    className: 'player-marker',
    html: '<div class="player-dot"></div>',
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
  playerMarker = L.marker([lat, lng], { icon: playerIcon, zIndexOffset: 1000 }).addTo(map);

  // Range circle
  rangeCircle = L.circle([lat, lng], {
    radius: RANGE_METERS,
    className: 'range-circle',
    interactive: false,
  }).addTo(map);

  // Spawn Sims near player
  spawnSims(lat, lng);
}

function spawnSims(lat, lng) {
  SIM_DATA.forEach(sim => {
    const simLat = lat + sim.offsetLat;
    const simLng = lng + sim.offsetLng;
    sim.lat = simLat;
    sim.lng = simLng;
    if (!state.relationships[sim.id]) state.relationships[sim.id] = 0;

    const icon = L.divIcon({
      className: 'sim-house-marker',
      html: `<div class="sim-house-icon" id="sim-icon-${sim.id}">
               ${sim.emoji}
               <div class="sim-house-name">${sim.name}</div>
             </div>`,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
    });

    const marker = L.marker([simLat, simLng], { icon }).addTo(map);
    marker.on('click', () => tryInteract(sim));
    state.simMarkers[sim.id] = marker;
  });
}

// ── Distance ──
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// ── Player Movement ──
function movePlayer(dLat, dLng) {
  if (!state.playerPos) return;
  state.playerPos.lat += dLat;
  state.playerPos.lng += dLng;

  playerMarker.setLatLng([state.playerPos.lat, state.playerPos.lng]);
  rangeCircle.setLatLng([state.playerPos.lat, state.playerPos.lng]);
  map.panTo([state.playerPos.lat, state.playerPos.lng], { animate: true, duration: 0.1 });

  checkSimProximity();

  // Walk mode distance tracking
  if (state.walkMode && state.walkLastPos) {
    const dist = haversine(state.walkLastPos.lat, state.walkLastPos.lng, state.playerPos.lat, state.playerPos.lng);
    state.walkDistance += dist;
    updateWalkUI();
    checkWalkMilestones();
  }
  if (state.walkMode) {
    state.walkLastPos = { ...state.playerPos };
  }
}

function startMoveLoop(dLat, dLng) {
  if (state.moveInterval) return;
  movePlayer(dLat, dLng);
  state.moveInterval = setInterval(() => movePlayer(dLat, dLng), 80);
}
function stopMoveLoop() {
  clearInterval(state.moveInterval);
  state.moveInterval = null;
}

// ── Proximity Check ──
function checkSimProximity() {
  SIM_DATA.forEach(sim => {
    if (!sim.lat) return;
    const dist = haversine(state.playerPos.lat, state.playerPos.lng, sim.lat, sim.lng);
    const el = document.getElementById(`sim-icon-${sim.id}`);
    if (el) {
      if (dist < RANGE_METERS) {
        if (!el.classList.contains('in-range')) {
          el.classList.add('in-range');
          showToast(`${sim.name} is nearby! Tap to say hi.`);
        }
      } else {
        el.classList.remove('in-range');
      }
    }
  });
}

function tryInteract(sim) {
  const dist = haversine(state.playerPos.lat, state.playerPos.lng, sim.lat, sim.lng);
  if (dist > RANGE_METERS * 2.5) {
    showToast(`Walk closer to ${sim.name}'s place first.`);
    return;
  }
  openInteractionPanel(sim);
}

// ── Interaction Panel ──
function openInteractionPanel(sim) {
  state.activeSim = sim;

  document.getElementById('sim-avatar').textContent = sim.emoji;
  document.getElementById('sim-name').textContent = sim.name;
  document.getElementById('sim-trait').textContent = sim.trait;

  const rel = state.relationships[sim.id] || 0;
  updateRelBar(rel);

  const chatWin = document.getElementById('chat-window');
  chatWin.innerHTML = '';
  addSystemMsg('You walked over to say hi.');

  const greeting = sim.greetings[Math.floor(Math.random() * sim.greetings.length)];
  setTimeout(() => addSimMsg(greeting), 400);

  showPanel('interaction-panel');
  state.relationships[sim.id] = Math.min(100, rel + 2);
  setTimeout(() => updateRelBar(state.relationships[sim.id]), 600);
}

function updateRelBar(rel) {
  document.getElementById('sim-relationship-fill').style.width = rel + '%';
  const tier = REL_TIERS.find(t => rel >= t.min && rel < t.max) || REL_TIERS[REL_TIERS.length - 1];
  document.getElementById('rel-tier-label').textContent = tier.label;
}

function addSimMsg(text) {
  const chatWin = document.getElementById('chat-window');
  const el = document.createElement('div');
  el.className = 'chat-msg sim';
  el.textContent = `${state.activeSim.name}: ${text}`;
  chatWin.appendChild(el);
  chatWin.scrollTop = chatWin.scrollHeight;
}

function addPlayerMsg(text) {
  const chatWin = document.getElementById('chat-window');
  const el = document.createElement('div');
  el.className = 'chat-msg player';
  el.textContent = `You: ${text}`;
  chatWin.appendChild(el);
  chatWin.scrollTop = chatWin.scrollHeight;
}

function addSystemMsg(text) {
  const chatWin = document.getElementById('chat-window');
  const el = document.createElement('div');
  el.className = 'chat-msg system';
  el.textContent = text;
  chatWin.appendChild(el);
  chatWin.scrollTop = chatWin.scrollHeight;
}

// ── AI Chat ──
function buildSystemPrompt(sim, rel, gifts) {
  const tier = REL_TIERS.find(t => rel >= t.min && rel < t.max)?.label ?? "Stranger";

  const profiles = {
    1: {
      age: 28,
      personality: 'Warm, enthusiastic, finds the bright side of everything. Loves outdoor walks and coffee. Says "honestly" a lot. Asks follow-up questions.',
      home: "Ground floor flat with a garden",
      job: "Works at a community center in the afternoons",
      relationships: "Old friends with Nadia, neighbours with Zara, knew Theo since childhood",
    },
    2: {
      age: 25,
      personality: 'Always mid-project, scattered, excited about ideas. Starts sentences with "okay but hear me out—". Freelance illustrator who works from home.',
      home: "Cluttered flat full of art supplies",
      job: "Freelance illustrator",
      relationships: "Close friends with Marcus, dated Emil briefly — still complicated",
    },
    3: {
      age: 61,
      personality: 'Gentle, remembers everything, gets hurt by long absences. Widower. Offers food constantly. Asks "how are you really doing".',
      home: "Warm house that always smells like something cooking",
      job: "Retired, volunteers at the library twice a week",
      relationships: "Knows everyone in the neighbourhood; knew Marcus as a kid",
    },
    4: {
      age: 30,
      personality: "Knows everyone, high energy, always planning something. Uses CAPS for emphasis. Loves bringing people together.",
      home: "Stylish flat she hosts people in constantly",
      job: "Events coordinator",
      relationships: "Knows everyone — she is the neighbourhood connector",
    },
    5: {
      age: 32,
      personality: "Dry, guarded, short responses until trust builds. Secretly romantic, won't admit it. Gives grudging compliments.",
      home: "Converted garage studio",
      job: "Freelance graphic designer and painter",
      relationships: "Dated Nadia — still friends, sort of. Respects Theo, won't say it out loud",
    },
  };

  const p = profiles[sim.id];
  const giftLines = (gifts && gifts.length > 0)
    ? gifts.map(g => `  - ${g.gift}`).join('\n')
    : "  None yet.";

  return `You are ${sim.name}, a ${p.age}-year-old character in a location-based life simulation game called LYFE.

PERSONALITY: ${p.personality}
TRAIT: ${sim.trait}
HOME: ${p.home}
JOB: ${p.job}
RELATIONSHIPS WITH OTHERS: ${p.relationships}

RELATIONSHIP WITH THE PLAYER:
- Current tier: ${tier}
- Relationship score: ${rel}/100
- Gifts received from the player:
${giftLines}

RULES:
- Stay fully in character as ${sim.name} at all times. Never break character.
- Keep all responses to 1–3 sentences. Be concise but authentic.
- Match your tone to the relationship tier: reserved with a Stranger, warmer and more personal as a Friend or higher.
- If the player asks whether you are an AI, deflect in-character (e.g. "That's a strange question...").
- React naturally if the player mentions a gift you've received — you remember it.
- Do NOT prefix your reply with your name or any label. Speak directly.`;
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text || !state.activeSim) return;
  input.value = '';

  const sim = state.activeSim;
  const simId = sim.id;

  addPlayerMsg(text);

  if (!state.chatHistory[simId]) state.chatHistory[simId] = [];
  state.chatHistory[simId].push({ role: 'user', content: text });

  // Fallback to random responses if no API key is set
  if (!GROQ_API_KEY) {
    const lower = text.toLowerCase();
    let pool = sim.responses.default;
    if (lower.includes('weather') || lower.includes('rain') || lower.includes('sun')) {
      pool = sim.responses.weather;
    } else if (lower.includes('bye') || lower.includes('goodbye') || lower.includes('later') || lower.includes('leave')) {
      pool = sim.responses.goodbye;
    }
    const reply = pool[Math.floor(Math.random() * pool.length)];
    setTimeout(() => {
      addSimMsg(reply);
      state.chatHistory[simId].push({ role: 'assistant', content: reply });
      state.relationships[simId] = Math.min(100, (state.relationships[simId] || 0) + 3);
      updateRelBar(state.relationships[simId]);
    }, 700 + Math.random() * 500);
    return;
  }

  // Show typing indicator
  const chatWin = document.getElementById('chat-window');
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg sim typing';
  typingEl.innerHTML = '<span></span><span></span><span></span>';
  chatWin.appendChild(typingEl);
  chatWin.scrollTop = chatWin.scrollHeight;

  const rel = state.relationships[simId] || 0;
  const gifts = state.simGiftMemory[simId] || [];
  const systemPrompt = buildSystemPrompt(sim, rel, gifts);
  const history = state.chatHistory[simId].slice(-10);

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: systemPrompt },
          ...history,
        ],
        max_tokens: 150,
        temperature: 0.85,
      }),
    });

    if (!response.ok) throw new Error(`Groq API error: ${response.status}`);

    const data = await response.json();
    const reply = data.choices[0]?.message?.content?.trim() || '(no response...)';

    typingEl.remove();
    addSimMsg(reply);
    state.chatHistory[simId].push({ role: 'assistant', content: reply });
    state.relationships[simId] = Math.min(100, (state.relationships[simId] || 0) + 3);
    updateRelBar(state.relationships[simId]);
  } catch (err) {
    console.error(err);
    typingEl.remove();
    addSimMsg('(no response...)');
  }
}

// ── Walk Together ──
function startWalk() {
  if (!state.activeSim) return;
  state.walkMode = true;
  state.walkDistance = 0;
  state.walkLastPos = { ...state.playerPos };
  state.walkAchieved = {};

  document.getElementById('walk-sim-name').textContent = state.activeSim.name;
  hidePanel('interaction-panel');
  showPanel('walk-panel');
  setStatus('Walking with ' + state.activeSim.name, true);
  updateWalkUI();

  // Sim walk commentary
  const lines = state.activeSim.walkLines;
  let lineIdx = 0;
  state.walkCommentary = setInterval(() => {
    if (!state.walkMode) return;
    addWalkComment(lines[lineIdx % lines.length]);
    lineIdx++;
  }, 12000);
}

function addWalkComment(text) {
  showToast(`${state.activeSim.name}: "${text}"`);
}

function endWalk() {
  state.walkMode = false;
  clearInterval(state.walkCommentary);
  hidePanel('walk-panel');
  setStatus('Exploring', false);

  const finalDist = Math.round(state.walkDistance);
  if (finalDist > 0 && state.activeSim) {
    const bonus = Math.floor(finalDist / 30);
    state.relationships[state.activeSim.id] = Math.min(100, (state.relationships[state.activeSim.id] || 0) + Math.floor(bonus / 2));
    showToast(`Walk ended! ${finalDist}m walked together.`);
    setTimeout(() => openInteractionPanel(state.activeSim), 1000);
  }
}

function updateWalkUI() {
  const dist = Math.round(state.walkDistance);
  document.getElementById('walk-meters').textContent = dist;
  const pct = Math.min(1, dist / WALK_GOAL);
  const circumference = 327;
  document.getElementById('walk-ring-fill').style.strokeDashoffset = circumference * (1 - pct);

  if (dist >= WALK_GOAL) {
    document.getElementById('walk-reward-hint').textContent = '🎉 Goal reached! Keep going for more tokens!';
  } else {
    document.getElementById('walk-reward-hint').textContent = `Keep walking to find SimTokens!`;
  }
}

function checkWalkMilestones() {
  const dist = Math.round(state.walkDistance);
  const milestones = [100, 200, 300, 400, 500];
  milestones.forEach(m => {
    if (dist >= m && !state.walkAchieved[m]) {
      state.walkAchieved[m] = true;
      const reward = m === 300 ? 25 : m === 100 ? 8 : m === 200 ? 15 : 10;
      awardTokens(reward, `${state.activeSim.name} found ${reward} SimTokens!`);
      state.relationships[state.activeSim.id] = Math.min(100, (state.relationships[state.activeSim.id] || 0) + 5);
    }
  });
}

// ── Tokens ──
function awardTokens(amount, message) {
  state.tokens += amount;
  document.getElementById('token-count').textContent = state.tokens;
  document.getElementById('gift-token-count').textContent = state.tokens;

  const popup = document.getElementById('token-popup');
  popup.querySelector('.token-popup-icon').textContent = '◈';
  popup.querySelector('.token-popup-text').textContent = message;
  popup.classList.remove('show', 'hidden');
  void popup.offsetWidth;
  popup.classList.add('show');
  setTimeout(() => {
    popup.classList.remove('show');
    popup.classList.add('hidden');
  }, 2700);
}

// ── Gift Shop ──
function openGiftShop() {
  document.getElementById('gift-token-count').textContent = state.tokens;
  const grid = document.getElementById('gift-grid');
  grid.innerHTML = '';
  GIFTS.forEach((gift, i) => {
    const el = document.createElement('div');
    el.className = 'gift-item';
    el.innerHTML = `
      <span class="gift-emoji">${gift.emoji}</span>
      <div class="gift-name">${gift.name}</div>
      <div class="gift-cost"><span class="token-icon">◈</span> ${gift.cost}</div>
    `;
    el.addEventListener('click', () => purchaseGift(gift));
    grid.appendChild(el);
  });
  hidePanel('interaction-panel');
  showPanel('gift-panel');
}

function purchaseGift(gift) {
  if (state.tokens < gift.cost) {
    showToast(`Not enough SimTokens! Need ${gift.cost - state.tokens} more.`);
    return;
  }
  state.tokens -= gift.cost;
  document.getElementById('token-count').textContent = state.tokens;
  document.getElementById('gift-token-count').textContent = state.tokens;

  const sim = state.activeSim;
  if (sim) {
    const effectMatch = gift.effect.match(/\+(\d+)/);
    if (effectMatch) {
      const bonus = parseInt(effectMatch[1]);
      state.relationships[sim.id] = Math.min(100, (state.relationships[sim.id] || 0) + bonus);
    }
    if (!state.simGiftMemory[sim.id]) state.simGiftMemory[sim.id] = [];
    state.simGiftMemory[sim.id].push({ gift: gift.name, time: Date.now() });
    showToast(`${sim.name} loved the ${gift.name}! ${gift.effect}`);
  }

  hidePanel('gift-panel');
  if (state.activeSim) {
    setTimeout(() => {
      openInteractionPanel(state.activeSim);
      addSystemMsg(`You gave ${state.activeSim.name} a ${gift.emoji} ${gift.name}.`);
      setTimeout(() => {
        addSimMsg(getGiftReaction(state.activeSim, gift));
        updateRelBar(state.relationships[state.activeSim.id]);
      }, 600);
    }, 300);
  }
}

function getGiftReaction(sim, gift) {
  const reactions = {
    1: [`Oh wow, you brought me a ${gift.name}? You didn't have to do that! This is wonderful.`,
        `A ${gift.name}! You remembered! I love it.`],
    2: [`*gasps* A ${gift.name}?! I have SO many ideas for this already.`,
        `Oh this is perfect! I was literally just thinking about getting a ${gift.name}!`],
    3: [`Come in, come in — a ${gift.name}? You really are too kind.`,
        `*voice cracks a little* I... thank you. Really. A ${gift.name}.`],
    4: [`Oh my god I'm OBSESSED. A ${gift.name}! Everyone needs to know about this.`,
        `You got me a ${gift.name}?! You're officially my favorite person today.`],
    5: [`...A ${gift.name}. That's... actually really thoughtful. Thanks.`,
        `Hmph. A ${gift.name}. You didn't have to. But. Thank you.`],
  };
  const pool = reactions[sim.id] || reactions[1];
  return pool[Math.floor(Math.random() * pool.length)];
}

// ── Panel Helpers ──
function showPanel(id) {
  document.getElementById(id).classList.remove('hidden');
}
function hidePanel(id) {
  document.getElementById(id).classList.add('hidden');
}

// ── Status ──
function setStatus(text, walking) {
  document.getElementById('status-text').textContent = text;
  const dot = document.getElementById('status-dot');
  dot.style.background = walking ? '#6fcf97' : '#c8a97e';
  dot.style.boxShadow = walking ? '0 0 6px #6fcf97' : '0 0 6px #c8a97e';
}

// ── Toast ──
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── Keyboard Controls ──
document.addEventListener('keydown', e => {
  if (state.keysDown[e.key]) return;
  state.keysDown[e.key] = true;

  // Don't move if typing in input
  if (document.activeElement.tagName === 'INPUT') return;

  const step = MOVE_STEP;
  switch (e.key) {
    case 'ArrowUp':    case 'w': startMoveLoop(step, 0); break;
    case 'ArrowDown':  case 's': startMoveLoop(-step, 0); break;
    case 'ArrowLeft':  case 'a': startMoveLoop(0, -step); break;
    case 'ArrowRight': case 'd': startMoveLoop(0, step); break;
  }
});

document.addEventListener('keyup', e => {
  state.keysDown[e.key] = false;
  if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(e.key)) {
    stopMoveLoop();
  }
});

// ── D-pad Controls ──
function setupDpad() {
  const btns = {
    'btn-up':    [MOVE_STEP, 0],
    'btn-down':  [-MOVE_STEP, 0],
    'btn-left':  [0, -MOVE_STEP],
    'btn-right': [0, MOVE_STEP],
  };

  Object.entries(btns).forEach(([id, [dLat, dLng]]) => {
    const btn = document.getElementById(id);
    const start = (e) => {
      e.preventDefault();
      btn.classList.add('pressed');
      startMoveLoop(dLat, dLng);
    };
    const stop = (e) => {
      e.preventDefault();
      btn.classList.remove('pressed');
      stopMoveLoop();
    };
    btn.addEventListener('touchstart', start, { passive: false });
    btn.addEventListener('touchend', stop, { passive: false });
    btn.addEventListener('mousedown', start);
    btn.addEventListener('mouseup', stop);
    btn.addEventListener('mouseleave', stop);
  });
}

// ── Button Listeners ──
document.getElementById('close-panel').addEventListener('click', () => hidePanel('interaction-panel'));
document.getElementById('close-gift').addEventListener('click', () => {
  hidePanel('gift-panel');
  if (state.activeSim) openInteractionPanel(state.activeSim);
});

document.getElementById('chat-send').addEventListener('click', sendChat);
document.getElementById('chat-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') sendChat();
});

document.getElementById('btn-walk-together').addEventListener('click', startWalk);
document.getElementById('btn-gift').addEventListener('click', openGiftShop);
document.getElementById('btn-end-walk').addEventListener('click', endWalk);

// ── Intro ──
document.getElementById('intro-start').addEventListener('click', () => {
  document.getElementById('intro-overlay').style.display = 'none';
  startGame();
});

// ── GPS / Start ──
function startGame() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        state.playerPos = { lat, lng };
        initMap(lat, lng);
        setupDpad();
        setStatus('Exploring', false);
        showToast('GPS found! Walk around to explore.');
      },
      () => {
        // Fallback: Cologne city center
        const lat = 50.9333;
        const lng = 6.9603;
        state.playerPos = { lat, lng };
        initMap(lat, lng);
        setupDpad();
        setStatus('Exploring', false);
        showToast("GPS unavailable — exploring Cologne! Use arrow keys to move.");
      }
    );
  } else {
    const lat = 50.9333;
    const lng = 6.9603;
    state.playerPos = { lat, lng };
    initMap(lat, lng);
    setupDpad();
  }
}
