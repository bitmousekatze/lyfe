# 🌍 LYFE — Prototype

> *"It's just life."*

A location-based life simulation prototype. Walk your real neighborhood, meet AI-driven Sim characters, build relationships, walk together, and earn SimTokens to buy gifts.

## 🎮 How to Play

- **Move** with arrow keys (desktop) or the D-pad (mobile)
- **Walk near** a glowing house marker to meet a Sim (within ~40m)
- **Chat** with them to build your relationship
- **Walk Together** to earn SimTokens while you move around
- **Gift** your Sims using tokens to boost your relationship

## 📱 Mobile

Works as a web app on your phone. If you grant location access, the map centers on your real location and Sims spawn nearby. You can physically walk to interact with them!

If GPS is unavailable, the game defaults to Cologne city center.

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repo
2. Push these three files: `index.html`, `style.css`, `game.js`
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Your game will be live at `https://yourusername.github.io/your-repo-name`

## 📁 Files

```
index.html   — Structure and panels
style.css    — Dark gold aesthetic
game.js      — Game engine, Sims, movement, tokens, gifts
```

## 🗺️ Tech Stack

- [Leaflet.js](https://leafletjs.com/) — Map rendering
- [OpenStreetMap](https://openstreetmap.org/) — Free map tiles
- Vanilla JS — No build step needed, works as static HTML

## 🧪 Current Sims

| Name   | Trait             |
|--------|-------------------|
| Marcus | The Optimist      |
| Nadia  | The Dreamer       |
| Theo   | The Caretaker     |
| Zara   | The Social Butterfly |
| Emil   | The Cynic         |

## 💡 Prototype Roadmap

- [ ] Connect to Claude API for real AI conversations
- [ ] Add generational system (Sims age over time)
- [ ] Relationship decay over time
- [ ] More Sims spawning as you explore
- [ ] Persistent storage (localStorage → server)
- [ ] Real Sim schedules tied to time of day
