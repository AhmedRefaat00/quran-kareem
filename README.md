# 🕌 Quran Kareem - Islamic Web Application

<div align="center">
  <img src="public/logo.png" alt="Quran Kareem Logo" width="120" height="120">
  
  **A comprehensive Islamic web application built with React**
  
  [![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## 🌟 Overview

Quran Kareem is a modern, responsive Islamic web application that serves the Muslim community with essential daily tools. Built with React and designed with Arabic RTL support, it provides a seamless experience for reading the Quran, checking prayer times, and accessing daily Islamic remembrances (Azkar).

## ✨ Features

### 📖 **Complete Quran Reader**
- Browse all 114 Surahs of the Holy Quran
- Audio recitation with play/pause controls
- Beautiful Arabic typography and RTL layout
- Responsive design for all devices

### 🕐 **Real-time Prayer Times**
- Location-based prayer time calculation
- Displays all five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha)
- Beautiful prayer time cards with custom imagery
- Automatic location detection

### 🤲 **Daily Azkar (Remembrances)**
- **Morning Azkar** (أذكار الصباح)
- **Evening Azkar** (أذكار المساء)
- **Post-Prayer Azkar** (أذكار بعد الصلاة)
- **Sleep Azkar** (أذكار النوم)
- **Wake-up Azkar** (أذكار الاستيقاظ)
- Interactive navigation between different categories
- Slider interface for easy browsing

### 🎨 **Modern UI/UX**
- Dark/Light theme toggle
- Responsive design optimized for desktop and mobile
- Smooth animations and transitions
- Arabic RTL layout support
- Custom CSS with modern styling

### 🔧 **Additional Features**
- Geolocation services for accurate prayer times
- Audio integration for Quranic recitation
- Full-screen optimization message for better experience
- Loading states and error handling
- Cross-browser compatibility

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Icons:** Lucide React
- **Styling:** Modern CSS with CSS Modules
- **APIs:** 
  - [Al Quran API](https://api.alquran.cloud/) - Quranic verses and audio
  - [Aladhan API](https://api.aladhan.com/) - Prayer times
  - [Azkar API](https://github.com/nawafalqari/ayah) - Islamic remembrances
- **Development Tools:** ESLint for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quran-kareem.git
   cd quran-kareem
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The production build will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1440px+): Full 4-column layout with enhanced spacing
- **Tablet** (1024px and below): 2-column grid layout
- **Mobile** (768px and below): Single column stack layout
- **Small Mobile** (480px and below): Optimized spacing and typography

## 🌐 API Integration

### Prayer Times API
- Uses Aladhan API for accurate prayer time calculations
- Automatic location detection via browser geolocation
- Supports multiple calculation methods

### Quran API
- Al Quran API for Arabic text and audio recitation
- High-quality audio from renowned reciters
- Complete Quranic database access

### Azkar API
- Comprehensive collection of Islamic remembrances
- Categorized by time and occasion
- Arabic text with proper formatting

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any API keys or configuration:

```env
VITE_APP_NAME=Quran Kareem
VITE_API_BASE_URL=https://api.alquran.cloud
```

### Theme Customization

The application uses CSS custom properties for easy theme customization. Modify the variables in `src/index.css`:

```css
:root {
  --main-color: #3498db;
  --background-color: #ffffff;
  --text-color: #333333;
  --navbar-color: #f8f9fa;
  /* Add more custom properties */
}
```

## 📁 Project Structure
