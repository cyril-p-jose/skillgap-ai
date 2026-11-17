# 🎯 SkillGap AI

SkillGap AI is a free web app that helps college students find their placement skill gaps in just 2 minutes.

## 📌 Problem

College students in Kerala often have no clear idea of what skills they are missing before campus placements. Companies test different skills, and students waste time preparing randomly without knowing their real weak areas.

## 💡 Solution

SkillGap AI gives students a quick skill check based on their branch and target company. In 2 minutes, they get a readiness score, a list of their strengths and weaknesses, a company match percentage, a company-specific tip, and a simple 7 day study plan.

## ✨ Features

- Quick 5 question skill test (Yes / No / Learning)
- Branch selection: CSE, ECE, EEE, Mechanical, Civil
- Target company selection: UST Kochi, IBS Software, TCS, Infosys, and more
- Skill and target role selection (Frontend, Backend, Data Analyst, etc.)
- AI style readiness score with circular progress
- Strengths and weaknesses report
- Company match percentage
- Company-specific preparation tips
- 7 day improvement roadmap
- Confetti celebration when score is above 80
- Fully responsive — works on mobile, tablet, and desktop

## 🛠 Tech Stack

| Technology    | Purpose                        |
| ------------- | ------------------------------ |
| React         | User interface                 |
| TypeScript    | Type safety                    |
| Vite          | Build tool and dev server      |
| Tailwind CSS  | Styling and responsive design  |
| Lucide React  | Icons                          |
| Inter         | Font                           |

## 🌐 Live Demo

> Coming soon. Add your deployed app link here.

**Live URL:** [Add your link here]

## 🖥 How to Run Locally

```bash
# 1. Clone the project
git clone https://github.com/cyril-p-jose/skillgap-ai.git

# 2. Go into the project folder
cd skillgap-ai

# 3. Install dependencies
npm install

# 4. Start the app
npm run dev
```

Then open the app in your browser.

## 📁 Project Structure

```
skillgap-ai/
├── src/
│   ├── components/
│   │   ├── Confetti.tsx        # Confetti animation for high scores
│   │   ├── Header.tsx          # Dark blue app header
│   │   ├── HomePage.tsx        # Landing page
│   │   ├── LoadingScreen.tsx   # "AI is thinking" screen
│   │   ├── ReportPage.tsx      # Score, strengths, weaknesses, roadmap
│   │   ├── SelectPage.tsx      # Branch and company selection
│   │   ├── SkillsPage.tsx      # Skills and target role selection
│   │   └── TestPage.tsx        # 5 question skill test
│   ├── lib/
│   │   ├── aiEngine.ts         # AI report logic and 7 day roadmap
│   │   └── gemini.ts           # Gemini API placeholder (optional)
│   ├── data.ts                 # Questions, branches, companies
│   ├── App.tsx                 # Page flow
│   └── main.tsx                # App entry point
└── index.html
```

## 🔮 Future Scope

- Login for students to save reports
- Real AI questions using the Gemini API
- More companies and roles
- Detailed topic-wise practice links
- Leaderboard for college students
- Downloadable PDF report

## 📞 Contact

Built by **Cyril P Jose**

- GitHub: [github.com/cyril-p-jose](https://github.com/cyril-p-jose)
- LinkedIn: [Add your LinkedIn profile link here]
