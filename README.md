# 🐍 Snakes — Myanmar Snake Information Guide

**Snakes** is a Myanmar-language educational website that helps users learn about different snake species through pictures, species names, and detailed descriptions. It provides information about snake characteristics, venom status, and potential danger to help users become more aware of snakes they may encounter.

🌐 **Live Demo:** https://snakes-delta.vercel.app/

📂 **GitHub Repository:** https://github.com/felixkai34/Snakes

## 📖 About the Project

Snakes play important roles in nature, but identifying them can be difficult without reliable information.

This project organizes information about different snake species into a simple, easy-to-navigate website. Users can browse a collection of snakes, view their Myanmar and English names, and open individual detail pages to learn more about their characteristics and potential risks.

The website is built with React and uses a local JSON dataset to manage snake information.

## ✨ Features

* **Snake Species Catalog** — Browse a collection of snake species in one place.
* **Image-Based Browsing** — View images associated with each snake entry.
* **Bilingual Species Names** — Read snake names in Myanmar and English or scientific nomenclature.
* **Detailed Information Pages** — Explore descriptions and information about individual species.
* **Venom Status** — View the recorded venom status of each species.
* **Danger Classification** — View the website's recorded danger classification for each species.
* **Responsive Grid Layout** — Browse the catalog using a layout that adapts to different screen sizes.
* **Simple Navigation** — Move between the species listing and individual detail pages.
* **Centralized Data Management** — Maintain species information in a JSON file.

## 🛠️ Technologies Used

| Technology              | Purpose                                     |
| ----------------------- | ------------------------------------------- |
| React 18                | Building reusable user interface components |
| Vite 5                  | Development server and production build     |
| React Router DOM        | Navigation and dynamic detail pages         |
| Tailwind CSS            | Styling and responsive layouts              |
| JavaScript (ES Modules) | Application logic                           |
| JSON                    | Storing snake information                   |
| Vercel                  | Hosting and deployment                      |

## 📁 Project Structure

```text
Snakes/
├── public/
│   └── imgs/                     # Snake images
├── src/
│   ├── assets/
│   │   ├── Pages/
│   │   │   ├── Posts.jsx         # Snake species listing
│   │   │   └── SnakesDetail.jsx  # Individual species details
│   │   └── Data.json             # Snake information dataset
│   ├── App.jsx                   # Application routes
│   ├── App.css                   # Application styles
│   └── main.jsx                  # React entry point
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .eslintrc.cjs
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project on your computer.

### Prerequisites

Install the following tools before starting:

* [Node.js](https://nodejs.org/)
* npm
* [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/felixkai34/Snakes.git
```

### 2. Open the project directory

```bash
cd Snakes
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

Vite generates the production-ready files in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

### 6. Check code quality

Run ESLint with:

```bash
npm run lint
```

## 🗂️ Managing Snake Information

The snake dataset is stored in:

```text
src/assets/Data.json
```

Each snake entry uses the following fields:

| Field      | Description                                   |
| ---------- | --------------------------------------------- |
| `Id`       | Unique identifier for the snake entry         |
| `MMName`   | Myanmar name                                  |
| `EngName`  | English or scientific name                    |
| `Detail`   | Description and information about the species |
| `IsPoison` | Recorded venom status (`Yes` or `No`)         |
| `IsDanger` | Recorded danger status (`Yes` or `No`)        |
| `Img`      | Path to the snake image                       |

### Adding a new snake

1. Add a new object to `Data.json`.
2. Assign a unique `Id`.
3. Enter the Myanmar and English names.
4. Add the species description and classification fields.
5. Place the corresponding image in `public/imgs/`.
6. Set the `Img` field to the correct path, such as `imgs/10.jpg`.

Example data entry:

```json
{
  "Id": 10,
  "MMName": "Example Myanmar Name",
  "EngName": "Example Snake Species",
  "Detail": "Add a verified description of this species.",
  "IsPoison": "No",
  "IsDanger": "No",
  "Img": "imgs/10.jpg"
}
```

**Important:** This is an example for demonstrating the data structure, not a real species record. Verify all biological information before adding it to the website.

## 🧭 Application Routes

| Route  | Description                                       |
| ------ | ------------------------------------------------- |
| `/`    | Displays the snake species catalog                |
| `/:Id` | Displays the details for the selected snake entry |

For example, visiting `/1` opens the detail page associated with the dataset entry whose ID is `1`.

## 🌐 Deployment

The website is deployed on Vercel.

**Live Website:** https://snakes-delta.vercel.app/

To deploy your own version:

1. Push the project to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com/).
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy the application.

If refreshing a detail page produces a 404 error, configure the hosting platform to serve `index.html` for client-side routes.

## ⚠️ Safety Disclaimer

This project is intended for educational purposes only. Snake identification from images or descriptions may be inaccurate, and venom or danger classifications should not be treated as definitive medical or safety advice.

* Never handle or approach an unfamiliar snake.
* Do not rely solely on this website to determine whether a snake is dangerous.
* If someone is bitten, seek emergency medical care immediately.
* Do not attempt to capture or kill the snake to identify it.

Species information should be reviewed against reliable scientific and local wildlife sources.

## 👨‍💻 Developer

**GitHub:** [@felixkai34](https://github.com/felixkai34)

**Project:** [Snakes — Myanmar Snake Information Guide](https://github.com/felixkai34/Snakes)

## 📄 License

No license is currently specified in the repository. Please contact the project owner for permission before redistributing the source code, content, or images.

---

**Learn about snakes. Understand the risks. Respect wildlife.** 🐍
