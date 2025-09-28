import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '/components/ui/card';
import { Button } from '/components/ui/button';

interface Player {
  id: number;
  name: string;
  alias: string;
  specialty: string;
  achievements: string[];
  skills: string[];
  bio: string;
}

const CTFPlayersIntro = () => {
  const [activePlayer, setActivePlayer] = useState<number>(1);

  const players: Player[] = [
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
      bio: "Former security researcher at a leading tech firm, specializes in low-level exploitation and vulnerability discovery."
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
      bio: "Web security expert with a passion for breaking encryption schemes and finding novel web vulnerabilities."
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
      bio: "Digital forensics specialist with extensive experience in network traffic analysis and incident response."
    }
  ];

  const currentPlayer = players.find(player => player.id === activePlayer);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ELITE CTF PLAYERS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Meet the cybersecurity experts who dominate competitive hacking challenges and push the boundaries of digital security.
          </p>
          
          {/* Navigation Tabs */}
          <div className="flex justify-center space-x-4 mb-12">
            {players.map((player) => (
              <Button
                key={player.id}
                variant={activePlayer === player.id ? "default" : "outline"}
                onClick={() => setActivePlayer(player.id)}
                className="px-6 py-3 font-mono text-sm"
              >
                {player.alias}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Player Profile Section */}
      <div className="container mx-auto px-4 py-12">
        {currentPlayer && (
          <Card className="bg-muted/50 border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Player Image and Basic Info */}
              <div className="space-y-6">
                <div className="relative group">
                  <img
                    src="https://placeholder-image-service.onrender.com/image/400x500?prompt=Cyberpunk style portrait of a professional female cybersecurity expert with futuristic glowing elements&id=player1-avatar"
                    alt="Portrait of cybersecurity expert Sarah Chen with futuristic cyberpunk aesthetic"
                    className="w-full h-96 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-center w-full">
                      <Button variant="secondary" className="font-mono">
                        View Full Profile
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">{currentPlayer.name}</h3>
                  <p className="text-muted-foreground font-mono">@{currentPlayer.alias}</p>
                  <p className="text-sm text-accent mt-2">{currentPlayer.specialty}</p>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Biography</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentPlayer.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Notable Achievements</h4>
                  <ul className="space-y-2">
                    {currentPlayer.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2">■</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPlayer.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Team Overview Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">THE ELITE TRIO</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {players.map((player) => (
            <Card key={player.id} className="bg-muted/30 border-border hover:bg-muted/50 transition-colors">
              <CardHeader className="text-center">
                <img
                  src={`https://placeholder-image-service.onrender.com/image/300x300?prompt=Cyberpunk avatar of ${player.alias} hacker with digital elements&id=avatar-${player.id}`}
                  alt={`Avatar of ${player.alias} cyber security professional`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary"
                />
                <CardTitle className="text-xl">{player.alias}</CardTitle>
                <CardDescription className="font-mono">/{player.name}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">{player.specialty}</p>
                <Button
                  variant="outline"
                  onClick={() => setActivePlayer(player.id)}
                  className="font-mono text-xs"
                >
                  SELECT PROFILE
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Hacker Community Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">JOIN THE COMMUNITY</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-muted/30 border-border text-center p-6">
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="font-semibold mb-2">CTF Competitions</h4>
            <p className="text-sm text-muted-foreground">Regular team practices and competitions</p>
          </Card>
          
          <Card className="bg-muted/30 border-border text-center p-6">
            <div className="text-4xl mb-4">🔐</div>
            <h4 className="font-semibold mb-2">Workshops</h4>
            <p className="text-sm text-muted-foreground">Learn advanced security techniques</p>
          </Card>
          
          <Card className="bg-muted/30 border-border text-center p-6">
            <div className="text-4xl mb-4">💻</div>
            <h4 className="font-semibold mb-2">Labs</h4>
            <p className="text-sm text-muted-foreground">Hands-on vulnerable machine practice</p>
          </Card>
          
          <Card className="bg-muted/30 border-border text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="font-semibold mb-2">Mentorship</h4>
            <p className="text-sm text-muted-foreground">Guidance from experienced players</p>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-20 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm font-mono">
            Built with ❤️ for the cybersecurity community • Follow us on CTF platforms
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="ghost" size="sm" className="font-mono">GitHub</Button>
            <Button variant="ghost" size="sm" className="font-mono">Discord</Button>
            <Button variant="ghost" size="sm" className="font-mono">Twitter</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CTFPlayersIntro;
