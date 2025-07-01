body, html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  height: 100vh;
  overflow: hidden;
  background: black;
  color: #fff;
}

#bg-video {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -2;
  filter: brightness(0.3);
}

.glass {
  max-width: 800px;
  margin: auto;
  margin-top: 40px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  animation: fadeIn 1.5s ease;
}

.glow {
  font-size: 3em;
  text-align: center;
  color: #00ffe1;
  text-shadow: 0 0 12px #00ffe1;
}

.subtitle {
  text-align: center;
  font-style: italic;
  margin-top: -10px;
  margin-bottom: 30px;
  color: #d0f9ff;
}

.tab-buttons {
  text-align: center;
  margin-bottom: 20px;
}

.tab-buttons button {
  margin: 0 10px;
  padding: 12px 24px;
  border: 2px solid #00ffe1;
  border-radius: 10px;
  background: transparent;
  color: #00ffe1;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-buttons button:hover {
  background: #00ffe1;
  color: black;
}

.tab {
  display: none;
}

.tab.active {
  display: block;
  animation: fadeIn 1s ease;
}

textarea, input {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  outline: none;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background: #00ffe1;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

img {
  margin-top: 20px;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 20px #00ffe1;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
