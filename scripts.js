tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#6b26d9",
        accent: "#b447eb",
        "muted-foreground": "#6b7280",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
};

const teamMembers = [
  {
    name: "Islem GOUICEM",
    image: "./assets/islem-gouicem.jpg",
    bio: "Short bio about the team member goes here. Describe their experience, skills, and contribution.",
    skills: ["Full Stack", "UI/UX Design", "Data science"],
    profileLink: "./team/islem-gouicem.html",
  },
  {
    name: "Sayah Maroua",
    role: "Team Member",
    image: "./assets/maroua.jpg",
    bio: "AI and Data Science student passionate about machine learning, development, and UI/UX design. Combines analytical insight and creativity to craft innovative, user centered, and efficient solutions.",
    skills: [
      "UI/UX Design",
      "Front-End Development",
      "Machine Learning",
      "Problem Solving",
    ],
    profileLink: "./team/maroua-sayah.html",
  },
  {
        name: "Hamza Faiz Ahmed Fouatih",
        role: "Backend Developer",
        image: "./assets/hamza.png",
        bio: "AI engineering student at the National School of Artificial Intelligence. He has powerful creativity, strong soft skills, and a solid programming background with technical hard skills.",
        skills: ["python", "c++", "dart"],
        profileLink: "./team/hamza.html"
  },
  {
      name: "Carol",
      image: "./assets/member1.jpg",
      bio: "Short bio about the team member goes here. Describe their experience, skills, and contribution.",
      skills: ["Planning", "Communication", "Leadership"],
      profileLink: "./team/firstname-lasname.html"
  },
  {
      name: "REMMACHE Hibaterrahman",
      role: "Team Member",
      image: "./assets/Hiba.jpg",
      bio: "A passionate student in computer science at ENSIA, with a keen interest in design and problem-solving.",
      skills: ["Design", "Problem-Solving", "Front-End Dev"],
      profileLink: "./team/hiba.html"
  },
  {
      name: "Eve",
      image: "./assets/member1.jpg",
      bio: "Short bio about the team member goes here. Describe their experience, skills, and contribution.",
      skills: ["SEO", "Content Strategy", "Social Media"],
      profileLink: "./team/firstname-lasname.html"
  },
];
const container = document.getElementById("team-container");

teamMembers.forEach((member, index) => {
  const card = document.createElement("div");
  card.className = `group perspective w-full max-w-sm mx-auto animate-scale-in`;
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <div class="relative w-full h-[500px] transition-transform duration-700 preserve-3d cursor-pointer" onclick="this.classList.toggle('rotate-y-180')">
    
        <!-- Front of Card -->
        <div class="absolute inset-0 backface-hidden rounded-2xl overflow-hidden glass-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 glow">
            <div class="relative h-full">
                <img src="${member.image}" alt="${
    member.name
  }" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-2xl font-bold text-white mb-2 font-space">${
                  member.name
                }</h3>
                <p class="text-muted-foreground text-md mt-2">Click to learn more</p>
                </div>
            </div>
        </div>

        <!-- Back of Card -->
        <div class="absolute inset-0 backface-hidden rounded-2xl glass-card border-2 border-accent/40 p-6 flex flex-col justify-between rotate-y-180">
        <div>
            <h3 class="text-2xl font-bold mb-2 text-gradient font-space">${
              member.name
            }</h3>
            <p class="text-white/80 mb-6 leading-relaxed">${member.bio}</p>
            <div class="space-y-2">
            <p class="text-sm text-muted-foreground font-semibold">Skills & Expertise:</p>
            <div class="flex flex-wrap gap-2">
                ${member.skills
                  .map(
                    (skill) => `
                <span class="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-medium">${skill}</span>
                `
                  )
                  .join("")}
            </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 mt-4">
            <a href="${
              member.profileLink
            }" class="w-full py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 neon-glow text-center">View Full Profile</a>
        </div>
        </div>

    </div>
    `;

  if (container) {
    container.appendChild(card);
  }
});
