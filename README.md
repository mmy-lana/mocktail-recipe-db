# 🍸 Velvet & Gold — Mocktail Recipe Database

A luxury non-alcoholic mixology database built with a trendy dark gold lounge aesthetic. Designed using **React 19**, **TypeScript**, and **Tailwind CSS**, strictly curated for 100% Halal-compliant non-alcoholic recipes.

🌐 **Live Demo:** [mocktail-recipe-db.vercel.app](https://mocktail-recipe-db.vercel.app)

---

## ✨ Features

- **100% Halal Guaranteed:** Zero alcohol, zero-proof botanical extracts, natural fruit reductions, and halal-certified syrups only.
- **Dark Gold Lounge Aesthetic:** Custom high-contrast theme engineered for a premium bar atmosphere.
- **Atomic & Domain-Driven Design:** Clear separation between global UI primitives (Atoms, Molecules, Organisms) and feature domains (`recipes`, `ingredients`).
- **Debounced Search:** Instant client-side search across recipe titles, botanical ingredients, and flavor profiles using `useDebounce`.
- **Category Filters:** Seamless category navigation across *Signature*, *Sparkling*, *Herbal & Botanical*, and *Smoked & Spiced* collections.
- **Detailed Recipe Modal:** Step-by-step mixology steps, specific glassware specs, preparation times, and detailed ingredient breakdowns.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18+ and npm installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/mmy-lana/mocktail-recipe-db.git

# Navigate to project directory
cd mocktail-recipe-db

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📂 Project Structure

```text
src/
├── components/          # Atomic components (Atoms, Molecules, Organisms)
│   ├── atoms/           # Button, Input, Badge
│   ├── molecules/       # Card, SearchBar
│   └── organisms/       # Header, Footer
├── features/            # Domain-driven features
│   ├── ingredients/     # Types and IngredientList UI
│   └── recipes/         # Types, Mock API, Hooks (useRecipes), RecipeCard & RecipeGrid
├── hooks/               # Custom hooks (useDebounce)
├── layouts/             # Page layouts (RootLayout)
├── pages/               # Views (HomePage, RecipeDetailPage modal)
├── styles/              # Global styles & Tailwind entrypoint
├── utils/               # Formatting functions
└── main.tsx             # Application entrypoint
```

---

## 📄 License

Distributed under the MIT License.
