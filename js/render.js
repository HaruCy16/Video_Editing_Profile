    const projects = [
      ["showreel", "reels", "Featured cut", "Cyrus Wilson — Showreel", "A compact overview of editing range, pacing, transitions, and visual polish.", "https://drive.google.com/file/d/1NXWpkQQDi-R9P1CzBgU9XMiOddZaZrRW/view?usp=sharing", "CW/"],
      ["ugc-sample", "ugc", "Creator content", "UGC Sample Reel", "UGC samples for creator, product, and social-first content conversations.", "https://drive.google.com/drive/folders/1dhBo4T3uXW3b_rJmwlqRppE9quhI2Vwb", "UGC"],
      ["short-reels", "reels", "Social cutdowns", "Short-Form Reels", "Fast hooks, clear captions, and platform-ready pacing for vertical short-form content.", "https://drive.google.com/drive/folders/1ngROfCK8_-E4uEAnYweU15-p-3-OyxK1", "09:16"],
      ["commercial", "ads", "Promotional edit", "Short-Form Commercial", "Promotional editing with color grading, effects, overlays, and a clear visual hook.", "https://drive.google.com/drive/folders/1ngROfCK8_-E4uEAnYweU15-p-3-OyxK1", "AD"],
      ["long-form-vsl", "longform", "Sales / education", "Long-Form VSL Editing", "Long-form VSL samples built around structure, pacing, clarity, and sustained viewer attention.", "https://drive.google.com/drive/folders/1pMq3Zm3l13d1mBkEVXh9bcBtF-kVAMfw", "VSL"],
      ["short-film", "longform", "Narrative cut", "Short Film — His Art", "A story-led sample with an editorial treatment and visual rhythm.", "https://drive.google.com/drive/folders/1pMq3Zm3l13d1mBkEVXh9bcBtF-kVAMfw", "FILM"]
    ];
    const posterStyles = ["poster-showreel", "poster-ugc", "poster-reels", "poster-ads", "poster-longform", "poster-film"];
    const grid = document.querySelector("#project-grid");
    function render(filter = "all") {
      grid.innerHTML = projects.filter(p => filter === "all" || p[1] === filter).map((p, i) => `
        <a class="project-card ${p[0] === "long-form-vsl" || p[0] === "short-film" ? "lg:col-span-2" : ""}" href="${p[5]}" target="_blank" rel="noopener noreferrer">
          <div class="project-poster ${posterStyles[projects.indexOf(p)]}"><span>${p[6]}</span><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></div>
          <div class="pt-1"><p class="text-xs font-bold uppercase tracking-[0.14em] text-muted">${p[2]}</p><h3 class="mt-1 text-xl font-black tracking-[-0.04em]">${p[3]}</h3><p class="mt-2 text-sm leading-6 text-muted">${p[4]}</p></div>
        </a>`).join("");
    }
    render();
    document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      render(button.dataset.filter);
    }));
    const menuButton = document.querySelector("#menu-button");
    const mobileMenu = document.querySelector("#mobile-menu");
    menuButton.addEventListener("click", () => { const open = menuButton.getAttribute("aria-expanded") === "true"; menuButton.setAttribute("aria-expanded", String(!open)); mobileMenu.classList.toggle("hidden", open); });
    document.querySelectorAll(".mobile-link").forEach(link => link.addEventListener("click", () => { menuButton.setAttribute("aria-expanded", "false"); mobileMenu.classList.add("hidden"); }));
    document.querySelector("#year").textContent = new Date().getFullYear();