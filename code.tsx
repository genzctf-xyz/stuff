<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CTF Players Intro</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-black text-white pb-20">

  <!-- Hero Section -->
  <div class="relative overflow-hidden bg-gradient-to-br from-purple-500/20 via-black to-pink-500/20">
    <div class="container mx-auto px-4 py-20 text-center relative z-10">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        ELITE CTF PLAYERS
      </h1>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
        Meet the cybersecurity experts who dominate competitive hacking challenges and push the boundaries of digital security.
      </p>
      <div id="tabs" class="flex justify-center space-x-4 mb-12"></div>
    </div>
  </div>

  <!-- Player Profile -->
  <div id="profile" class="container mx-auto px-4 py-12"></div>

  <!-- Team Overview -->
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-12">THE ELITE TRIO</h2>
    <div id="team" class="grid md:grid-cols-3 gap-8"></div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-900 border-t border-gray-700 mt-20 py-12">
    <div class="container mx-auto px-4 text-center">
      <p class="text-gray-400 text-sm font-mono">
        Built with ❤️ for the cybersecurity community • Follow us on CTF platforms
      </p>
    </div>
  </footer>

  <script>
    const players = [
      {
        id: 1,
        name: "Sarah Chen",
        alias: "ZeroDay",
        specialty: "Binary Exploitation & Reverse Engineering",
        achievements: [
          "DEF CON CTF Finalist 2023",
          "Google CTF 1st Place",
          "Pwn2Own Winner 2022"
        ],
        skills: ["Assembly", "C/C++", "GDB", "Fuzzing", "ROP Chains"],
        bio: "Former security researcher at a leading tech firm, specializes in low-level exploitation and vulnerability discovery.",
        img: "https://placeholder-image-service.onrender.com/image/400x500?prompt=Cyberpunk style portrait of a professional female cybersecurity expert with futuristic glowing elements&id=player1-avatar"
      },
      {
        id: 2,
        name: "Marcus Rodriguez",
        alias: "PhantomByte",
        specialty: "Web Application Security & Cryptography",
        achievements: [
          "National Cyber League Champion",
          "HackTheBox Top 10",
          "Bug Bounty Hall of Fame"
        ],
        skills: ["JavaScript", "Python", "Cryptanalysis", "OWASP Top 10", "Web Pentesting"],
        bio: "Web security expert with a passion for breaking encryption schemes and finding novel web vulnerabilities.",
        img: "https://placeholder-image-service.onrender.com/image/400x500?prompt=Cyberpunk style portrait of a male cybersecurity expert with neon hacker vibes&id=player2-avatar"
      },
      {
        id: 3,
        name: "Alex Kim",
        alias: "NullSense",
        specialty: "Forensics & Network Security",
        achievements: [
          "SANS NetWars Champion",
          "Cyber Patriot Gold Medalist",
          "CSI CTF Master"
        ],
        skills: ["Wireshark", "Volatility", "Network Analysis", "Malware Analysis", "Incident Response"],
        bio: "Digital forensics specialist with extensive experience in network traffic analysis and incident response.",
        img: "https://placeholder-image-service.onrender.com/image/400x500?prompt=Cyberpunk style portrait of a korean cybersecurity pro with futuristic vibes&id=player3-avatar"
      }
    ];

    let activePlayer = 1;

    function renderTabs() {
      document.getElementById("tabs").innerHTML = players.map(p => `
        <button onclick="setPlayer(${p.id})" 
          class="px-6 py-3 rounded-md font-mono text-sm border 
          ${activePlayer === p.id ? 'bg-purple-600 text-white' : 'border-purple-500 text-purple-400'}">
          ${p.alias}
        </button>
      `).join("");
    }

    function renderProfile() {
      const player = players.find(p => p.id === activePlayer);
      if (!player) return;
      document.getElementById("profile").innerHTML = `
        <div class="bg-gray-800 rounded-lg p-8 grid md:grid-cols-2 gap-8">
          <div>
            <img src="${player.img}" class="w-full h-96 object-cover rounded-lg shadow-lg">
            <div class="text-center mt-4">
              <h3 class="text-2xl font-bold text-purple-400">${player.name}</h3>
              <p class="text-gray-400 font-mono">@${player.alias}</p>
              <p class="text-sm text-pink-400 mt-2">${player.specialty}</p>
            </div>
          </div>
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-semibold mb-3 text-purple-400">Biography</h4>
              <p class="text-gray-300">${player.bio}</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-3 text-purple-400">Achievements</h4>
              <ul class="text-gray-300 list-disc pl-5">
                ${player.achievements.map(a => `<li>${a}</li>`).join("")}
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-3 text-purple-400">Skills</h4>
              <div class="flex flex-wrap gap-2">
                ${player.skills.map(s => `<span class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-mono">${s}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderTeam() {
      document.getElementById("team").innerHTML = players.map(p => `
        <div class="bg-gray-800 p-6 rounded-lg text-center">
          <img src="https://placeholder-image-service.onrender.com/image/300x300?prompt=Cyberpunk avatar of ${p.alias} hacker&id=avatar-${p.id}" 
            class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500 object-cover">
          <h3 class="text-xl font-bold">${p.alias}</h3>
          <p class="text-sm text-gray-400">/${p.name}</p>
          <p class="text-sm text-gray-300 mt-2">${p.specialty}</p>
          <button onclick="setPlayer(${p.id})" class="mt-4 px-4 py-2 border border-purple-500 text-purple-400 rounded-md font-mono text-xs">
            SELECT PROFILE
          </button>
        </div>
      `).join("");
    }

    function setPlayer(id) {
      activePlayer = id;
      renderTabs();
      renderProfile();
    }

    // Initial render
    renderTabs();
    renderProfile();
    renderTeam();
  </script>
</body>
</html>
