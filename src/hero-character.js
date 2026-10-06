// The hero cutout and expression thumbnail come from the supplied character sheet.
export const heroCharacter = `
  <div class="hero-character anime-character" aria-hidden="true">
    <span class="anime-character-halo"></span>
    <span class="anime-character-pose"><img class="anime-character-image" src="/assets/anime-character-cutout.png" width="1254" height="1254" alt="" fetchpriority="high" decoding="async"/></span>
    <span class="anime-character-spark anime-character-spark-one">✳</span>
    <span class="anime-character-spark anime-character-spark-two">✦</span>
    <span class="anime-emotion">ready to create ✦</span>
  </div>
  <button type="button" class="anime-mood" data-expression="happy" aria-label="Change character expression; currently happy">
    <span class="anime-mood-face" aria-hidden="true"><img src="/assets/anime-character-sheet.png" width="1491" height="1055" alt="" decoding="async"/></span>
    <span class="anime-mood-copy"><strong>HAPPY</strong><small>TAP TO CHANGE ↗</small></span>
  </button>`;

export const aboutCharacter = `<span class="about-character-cameo" aria-hidden="true"><span class="sheet-face sheet-face-thoughtful"><img src="/assets/anime-character-sheet.png" alt="" width="1491" height="1055" loading="lazy"/></span><span class="cameo-caption">always curious ✳</span></span>`;

export const contactCharacter = `<span class="contact-character-cameo" aria-hidden="true"><span class="sheet-face sheet-face-happy"><img src="/assets/anime-character-sheet.png" alt="" width="1491" height="1055" loading="lazy"/></span><span class="cameo-caption">let's make something!</span></span>`;
