import { test, expect } from '@playwright/test';

test('portfolio loads without errors, filters work and resume is downloadable', async ({ page, request }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('#hero-title')).toContainText('Shrivastav');
  await expect(page.locator('.project-card:visible')).toHaveCount(15);
  await expect(page.locator('.project-card').first()).toHaveAttribute('data-reveal-direction','left');
  await expect(page.locator('.project-card').nth(1)).toHaveAttribute('data-reveal-direction','right');
  const revealAnimations = await page.locator('.project-card').evaluateAll(cards => cards.slice(0, 2).map(card => {
    card.classList.add('motion-in');
    return getComputedStyle(card.querySelector('.project-open')).animationName;
  }));
  expect(revealAnimations).toEqual(['project-uncover', 'project-uncover-reverse']);
  await expect(page.locator('.project-card:visible').first()).toContainText('01 / DESIGN CONCEPT');
  await expect(page.locator('.project-card:visible').first()).toContainText('Logo Folio');
  await expect(page.locator('.project-card:visible').nth(1)).toContainText('Morrow Coffee');
  await page.getByRole('button', {name:'UI/UX design'}).click();
  await expect(page.locator('.project-card:visible')).toHaveCount(3);
  await page.getByRole('button', {name:'Brand identity'}).click();
  await expect(page.locator('.project-card:visible')).toHaveCount(6);
  await expect(page.locator('.project-card:visible').first()).toContainText('Logo Folio');
  await expect(page.locator('.project-card:visible').nth(1)).toContainText('Morrow Coffee');
  await expect(page.locator('.project-card:visible').nth(2)).toContainText('Stillform');
  await expect(page.locator('.project-card:visible').nth(3)).toContainText('Fieldnote');
  await page.getByRole('button', {name:'Social media'}).click();
  await expect(page.locator('.project-card:visible')).toHaveCount(3);
  await expect(page.locator('.project-card:visible')).toContainText(['The Good Hour', 'After Hours', 'Fresh Cut']);
  await expect(page.locator('.project-card:visible').first()).toHaveAttribute('data-reveal-direction','left');
  await expect(page.locator('.project-card:visible').nth(1)).toHaveAttribute('data-reveal-direction','right');
  await page.getByRole('button', {name:'Packaging'}).click();
  await expect(page.locator('.project-card:visible')).toHaveCount(1);
  await expect(page.locator('.project-card:visible').first()).toContainText('No Cheat Progelato');
  await page.getByRole('button', {name:'Graphic design'}).click();
  await expect(page.locator('.project-card:visible')).toHaveCount(2);
  await expect(page.locator('.project-card:visible').first()).toContainText('ProPeri Campaign');
  await page.getByRole('button', {name:'All work'}).click();
  await expect(page.locator('.project-card:visible')).toHaveCount(15);
  const cv = await request.get('/Ishika_Shrivastav_CV.pdf');
  expect(cv.ok()).toBeTruthy();
  expect(cv.headers()['content-type']).toContain('application/pdf');
  for(const img of await page.locator('img').all()) {
    await img.evaluate(el => {el.loading = 'eager';});
    await expect.poll(() => img.evaluate(el=>el.complete && el.naturalWidth>0)).toBeTruthy();
  }
  expect(errors).toEqual([]);
});

test('Roam supports filtering, destination details, saved places and keyboard close', async ({ page }) => {
  await page.goto('/');
  const opener=page.getByRole('button',{name:'View Roam case study'});
  await opener.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button',{name:'Culture',exact:true}).click();
  await expect(page.locator('.destination-card')).toHaveCount(1);
  await expect(page.locator('.destination-card')).toContainText('Jaipur');
  await page.getByText('Explore itinerary',{exact:true}).click();
  await expect(page.getByText('Explore the old city & its craft markets')).toBeVisible();
  await page.getByRole('button',{name:'Save Jaipur',exact:true}).click();
  await page.locator('#show-saved').click();
  await expect(page.locator('.destination-card')).toHaveCount(1);
  await expect(page.locator('#saved-count')).toHaveText('1');
  await page.getByRole('button',{name:'Unsave Jaipur',exact:true}).click();
  await expect(page.locator('.empty-state')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(opener).toBeFocused();
  expect(await page.locator('body').evaluate(el=>getComputedStyle(el).overflow)).not.toBe('hidden');
});

test('Folio updates progress, moves completed books and resets the demo', async ({page}) => {
  await page.goto('/#project/folio');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button',{name:'Read 12 more pages +',exact:true}).click();
  await expect(page.locator('#reading-progress')).toHaveAttribute('value','96');
  await page.getByRole('button',{name:'To read',exact:true}).click();
  await expect(page.locator('[data-book]:visible')).toHaveCount(2);
  await page.getByRole('button',{name:'Reading',exact:true}).click();
  await expect(page.locator('[data-book]:visible')).toHaveCount(1);
  for(let i=0;i<12;i++) await page.locator('#log-reading').click();
  await expect(page.locator('#log-reading')).toBeDisabled();
  await expect(page.locator('[data-book]:visible')).toHaveCount(0);
  await page.getByRole('button',{name:'Finished',exact:true}).click();
  await expect(page.locator('[data-book]:visible')).toHaveCount(2);
  await page.getByRole('button',{name:'Reset demo'}).click();
  await expect(page.locator('#reading-progress')).toHaveAttribute('value','84');
  await expect(page.locator('[data-book]:visible')).toHaveCount(1);
  await page.getByRole('button',{name:'NEXT CONCEPT Rang'}).click();
  await expect(page.locator('#case-title')).toContainText('Rang');
  await page.getByRole('button',{name:'Close case study'}).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
});

test('mobile navigation, all case studies and page fit the viewport', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await page.goto('/');
  await page.getByRole('button',{name:'Open menu'}).click();
  await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'About',exact:true}).click();
  await expect(page.getByRole('navigation',{name:'Mobile navigation'})).not.toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
  for(const name of ['CareConnect','No Cheat Progelato','Eunoia Designtech','ProPeri Campaign','Roam','Aara','Folio','Rang','Logo Folio','Morrow Coffee','Stillform','Fieldnote','The Good Hour','After Hours','Fresh Cut']){
    await page.getByRole('button',{name:`View ${name} case study`}).click();
    await expect(page.locator('#case-title')).toContainText(name);
    expect(await page.locator('dialog').evaluate(el=>el.scrollWidth<=el.clientWidth)).toBeTruthy();
    await page.getByRole('button',{name:'Close case study'}).click();
  }
});

test('sheet character animates, changes expression and respects reduced motion', async ({page}) => {
  await page.setViewportSize({width:1440,height:900});
  await page.goto('/');
  await expect(page.locator('.hero-character')).toBeVisible();
  await expect.poll(() => page.locator('.anime-character-image').evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy();
  expect(await page.locator('.anime-character-image').evaluate(el => getComputedStyle(el).animationName)).toContain('character-bob');
  await page.getByRole('button',{name:'Change character expression; currently happy'}).click();
  await expect(page.locator('.anime-mood')).toHaveAttribute('data-expression','thoughtful');
  await expect(page.locator('.hero-composition')).toHaveAttribute('data-expression','thoughtful');
  await expect(page.locator('.anime-emotion')).toHaveText('what if... ✳');
  await expect(page.locator('.about-character-cameo')).toHaveCount(1);
  await expect(page.locator('.contact-character-cameo')).toHaveCount(1);
  await expect(page.getByRole('button',{name:'Change character expression; currently thoughtful'})).toBeVisible();
  await page.emulateMedia({reducedMotion:'reduce'});
  expect(await page.locator('.anime-character-image').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
  await expect(page.locator('#hero-title')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
});

test('supplied artwork galleries show every prepared project image', async ({page}) => {
  await page.goto('/');
  for (const [name, count] of [['CareConnect', 10], ['No Cheat Progelato', 7], ['Eunoia Designtech', 5], ['ProPeri Campaign', 4]]) {
    await page.getByRole('button', {name:`View ${name} case study`}).click();
    await expect(page.locator('.project-gallery figure')).toHaveCount(count);
    const images = page.locator('.project-gallery img');
    for (let index = 0; index < count; index++) {
      await images.nth(index).scrollIntoViewIfNeeded();
      await expect.poll(() => images.nth(index).evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy();
    }
    if (name === 'CareConnect') {
      const styleGuide = page.locator('.case-style-guide img');
      await styleGuide.scrollIntoViewIfNeeded();
      await expect.poll(() => styleGuide.evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy();
      await expect(page.getByRole('link', {name:'Open CareConnect mobile style guide at full size'})).toHaveAttribute('href', '/assets/projects/careconnect-mobile-style-guide.png');
      await expect(page.getByRole('link', {name:'Explore the interactive prototype'})).toHaveAttribute('href', '/assets/projects/careconnect-prototype.html');
    }
    await page.getByRole('button',{name:'Close case study'}).click();
  }
});

test('screenshots of desktop and mobile layouts', async ({page})=>{
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('/');
  await page.evaluate(()=>document.fonts.ready);
  await page.locator('.project-card img').evaluateAll(images => images.forEach(img => { img.loading = 'eager'; }));
  await expect.poll(() => page.locator('.project-card img').evaluateAll(images => images.every(img => img.complete && img.naturalWidth > 0))).toBeTruthy();
  await page.screenshot({path:'artifacts/desktop.png',fullPage:true});
  await page.screenshot({path:'artifacts/hero-desktop.png'});
  await page.locator('#about').scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  await page.locator('#about').screenshot({path:'artifacts/about-desktop.png'});
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  await page.locator('#contact').screenshot({path:'artifacts/contact-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.anime-character-image').evaluate(img => img.decode());
  await page.locator('.hero-character').evaluate(el => Promise.all(el.getAnimations().map(animation => animation.finished)));
  await page.locator('.hero-composition h1').evaluate(el => Promise.all(el.getAnimations().map(animation => animation.finished)));
  await page.screenshot({path:'artifacts/hero-mobile.png'});
  await page.screenshot({path:'artifacts/mobile.png',fullPage:true});
});
