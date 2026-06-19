// Shared handbook engine. One file drives every variant (retainer, projects, ...).
// To add a new variant: add a branch in buildPages()/buildTocItems(), then create
// a thin index.html that calls initHandbook('yourtype').

function buildPages(type) {
  const isProjects = type === 'projects';

  return [

    // 0 COVER
    `<div class="p cp">
      <div class="cb">${isProjects ? 'project handbook' : 'retainer handbook'}</div>
      <div class="ct">Working</div>
      <div class="ca">With Me</div>
      <div class="cs">The plain-English guide to how we work together. Read it once, keep it for whenever you need it.</div>
      <div class="ch">
        <div class="cht">Quick tour</div>
        <div class="chi">Flip through with the arrows or the dots</div>
        <div class="chi">Jump anywhere from the contents page</div>
        <div class="chi">Save this, you'll want it again</div>
      </div>
    </div>`,

    // 1 TOC
    `<div class="p toc-page">
      <div class="toc-header">
        <div class="toc-eyebrow">Contents</div>
        <div class="toc-title">What's inside</div>
      </div>
      <div class="toc-list"></div>
    </div>`,

    // 2 WELCOME
    `<div class="p">
      <div class="ph"><div class="pn">01</div><div class="pl">Welcome</div></div>
      <h2 class="ptt">Glad you're <em>here</em></h2>
      <p class="intro">You've signed on for a ${isProjects ? 'project' : 'retainer'} with me, and that's honestly the easy part.</p>
      <p class="body-txt">This little handbook covers how we actually work day to day: how to reach me, what to expect back, and the practical stuff around payment.</p>
      <div class="aside">Same handful of working agreements I use with every ${isProjects ? 'project' : 'retainer'} client, just written down so neither of us has to guess.</div>
    </div>`,

    // 3 SCOPE / SESSIONS (variant)
    isProjects ? `<div class="p">
      <div class="ph"><div class="pn">02</div><div class="pl">How we work</div></div>
      <h2 class="ptt">Your <em>project</em></h2>
      <p class="intro">What I'll do and what it costs is set out in your proposal, that's our reference point throughout.</p>
      <div class="hb">
        <div class="hb-l">Beyond the brief</div>
        <div class="hb-t">Anything outside that agreed scope is billed at the rate also set out in your proposal. No surprise invoices, ever.</div>
      </div>
    </div>` : `<div class="p">
      <div class="ph"><div class="pn">02</div><div class="pl">How we work</div></div>
      <h2 class="ptt">Your <em>sessions</em></h2>
      <p class="intro">Your retainer includes 10 hours of tech support each month. Minimum term, 3 months. That's the deal.</p>
      <div class="statrow">
        <div class="statcard"><div class="statn">10 hrs</div><div class="statl">Tech support, per month</div></div>
        <div class="statcard"><div class="statn">3 months</div><div class="statl">Minimum term</div></div>
      </div>
      <p class="body-txt">Anything bigger, a new build, a one-off project, gets quoted separately before I start. No surprise invoices, ever.</p>
    </div>`,

    // 4 COMMUNICATION (shared)
    `<div class="p">
      <div class="ph"><div class="pn">03</div><div class="pl">Communication</div></div>
      <h2 class="ptt">How to <em>reach me</em></h2>
      <p class="intro">Email's the main channel: <strong>nina@nina-mistry.com</strong>. I reply within 3 working days.</p>
      <div class="hb">
        <div class="hb-l">Genuinely urgent?</div>
        <div class="hb-t">You've got my WhatsApp for that: <strong>+44 7537 144979</strong>, save the number. Everyday stuff lives in our shared Google Sheet plus email, so nothing gets lost in a scroll-back.</div>
      </div>
      <div class="gb">
        <div class="gb-l">Call recordings</div>
        <div class="gb-t">I record our calls, not for show, just so we both remember what was actually said and agreed. Keeps things moving and stays completely confidential between us.</div>
      </div>
    </div>`,

    // 5 PAYMENT (variant)
    isProjects ? `<div class="p">
      <div class="ph"><div class="pn">04</div><div class="pl">Payment</div></div>
      <h2 class="ptt">How <em>payment</em> works</h2>
      <p class="intro">Deposits, milestones and the final balance all follow the structure agreed in your proposal.</p>
      <div class="statrow">
        <div class="statcard"><div class="statn">7 days</div><div class="statl">To pay an invoice</div></div>
        <div class="statcard"><div class="statn">GBP</div><div class="statl">Bank transfer only</div></div>
      </div>
      <p class="body-txt">Running properly late might mean a gentle nudge from me, but honestly, neither of us wants to go there. Pay within the week and it's a total non-issue.</p>
    </div>` : `<div class="p">
      <div class="ph"><div class="pn">04</div><div class="pl">Payment</div></div>
      <h2 class="ptt">How <em>payment</em> works</h2>
      <p class="intro">Invoices are due within 7 days, by bank transfer, in GBP.</p>
      <div class="statrow">
        <div class="statcard"><div class="statn">7 days</div><div class="statl">To pay an invoice</div></div>
        <div class="statcard"><div class="statn">GBP</div><div class="statl">Bank transfer only</div></div>
      </div>
      <p class="body-txt">Running properly late might mean a gentle nudge from me, but honestly, neither of us wants to go there. Pay within the week and it's a total non-issue.</p>
    </div>`,

    // 6 ENDING / SCOPE CHANGES (variant)
    isProjects ? `<div class="p">
      <div class="ph"><div class="pn">05</div><div class="pl">If things change</div></div>
      <h2 class="ptt">Changing the <em>scope</em></h2>
      <p class="intro">Need to add or change something partway through? Always fine, it just needs plenty of notice.</p>
      <div class="fl">
        <div class="fr">Anything beyond the agreed scope is billed at the rate set out in your proposal.</div>
      </div>
      <div class="gb">
        <div class="gb-l">Scope changes</div>
        <div class="gb-t">Flag any additions or changes as early as you can. That gives enough time to fit them in properly instead of rushing the rest of the project.</div>
      </div>
    </div>` : `<div class="p">
      <div class="ph"><div class="pn">05</div><div class="pl">If things change</div></div>
      <h2 class="ptt">Changing your <em>mind</em></h2>
      <p class="intro">After the 3 month minimum, either of us can end things with 30 days' written notice. No drama.</p>
      <div class="fl">
        <div class="fr">Anything already paid, deposits, set-up fees, prepaid work, isn't refunded.</div>
        <div class="fr">You're still on the hook for fees across any minimum term already committed to.</div>
      </div>
      <div class="gb">
        <div class="gb-l">New task notice</div>
        <div class="gb-t">New day-to-day requests now need 48 hours' notice, so nothing's rushed and I can plan around it properly. Genuine "tech's on fire" emergencies always jump the queue. Questions, just ask.</div>
      </div>
    </div>`,

    // 7 CONFIDENTIALITY (shared)
    `<div class="p">
      <div class="ph"><div class="pn">06</div><div class="pl">Confidentiality &amp; IP</div></div>
      <h2 class="ptt">What stays <em>between us</em></h2>
      <p class="intro">Anything you share with me stays confidential, during our work together and for a year after it ends.</p>
      <p class="body-txt">I won't pass it to anyone else unless you've agreed to it, it's needed to deliver the work, it's already public, or I'm legally required to. All covered formally in our NDA.</p>
    </div>`,

    // 8 OWNERSHIP (shared)
    `<div class="p">
      <div class="ph"><div class="pn">06</div><div class="pl">Confidentiality &amp; IP</div></div>
      <h2 class="ptt">Who <em>owns</em> what</h2>
      <p class="intro">I retain the intellectual property in anything I build or supply.</p>
      <p class="body-txt">Once you've paid in full, you get a worldwide licence to use it for the purpose we agreed, for as long as we've agreed it for.</p>
      <div class="hb">
        <div class="hb-l">Data protection</div>
        <div class="hb-t">You're the controller of any personal data you give me, I'm the processor. We both stay accountable to UK GDPR for our side of that.</div>
      </div>
    </div>`,

    // 9 BOUNDARIES (shared)
    `<div class="p">
      <div class="ph"><div class="pn">07</div><div class="pl">Boundaries</div></div>
      <h2 class="ptt">My <em>boundaries</em></h2>
      <p class="intro">I won't answer outside my working hours. Simple as that.</p>
      <p class="body-txt">WhatsApp and email both get answered within my normal time frames. If I can't get to something, or there's a delay, you'll be told why, not left wondering.</p>
      <div class="pb">
        <div class="pb-l">Why it matters</div>
        <div class="pb-t">I value my time, the same way I value yours.</div>
      </div>
    </div>`,

    // 10 COMPLAINTS (shared)
    `<div class="p">
      <div class="ph"><div class="pn">07</div><div class="pl">Boundaries</div></div>
      <h2 class="ptt">If something's <em>wrong</em></h2>
      <p class="intro">Tell me directly and early, that's the fastest way to fix it.</p>
      <p class="body-txt">Most things sort themselves out with a quick message. If it ever needs to go further, there's a proper Complaints Policy at nina-mistry.com, but honestly, I'd rather hear it from you first and sort it out like adults, no drama, no silent treatment.</p>
    </div>`,

    // 11 QUICK REFERENCE (variant)
    isProjects ? `<div class="p">
      <div class="ph"><div class="pn">08</div><div class="pl">Quick reference</div></div>
      <h2 class="ptt">The <em>numbers</em>, at a glance</h2>
      <div class="qr">
        <div class="qrr"><span class="qrk">Scope &amp; pricing</span><span class="qrv">Per proposal</span></div>
        <div class="qrr"><span class="qrk">Beyond agreed scope</span><span class="qrv">Proposal rate</span></div>
        <div class="qrr"><span class="qrk">Email response time</span><span class="qrv">3 working days</span></div>
        <div class="qrr"><span class="qrk">Invoice payment due</span><span class="qrv">7 days</span></div>
        <div class="qrr"><span class="qrk">Scope changes</span><span class="qrv">Plenty of notice</span></div>
      </div>
      <div class="aside">Working days = Monday to Thursday, bank holidays excluded. Urgent? WhatsApp beats email.</div>
    </div>` : `<div class="p">
      <div class="ph"><div class="pn">08</div><div class="pl">Quick reference</div></div>
      <h2 class="ptt">The <em>numbers</em>, at a glance</h2>
      <div class="qr">
        <div class="qrr"><span class="qrk">Monthly support hours</span><span class="qrv">10 hrs</span></div>
        <div class="qrr"><span class="qrk">Minimum term</span><span class="qrv">3 months</span></div>
        <div class="qrr"><span class="qrk">Email response time</span><span class="qrv">3 working days</span></div>
        <div class="qrr"><span class="qrk">Invoice payment due</span><span class="qrv">7 days</span></div>
        <div class="qrr"><span class="qrk">Notice to end</span><span class="qrv">30 days</span></div>
      </div>
      <div class="aside">Working days = Monday to Thursday, bank holidays excluded. Urgent? WhatsApp beats email.</div>
    </div>`,

    // 12 CLOSING (shared)
    `<div class="p cp">
      <div class="fc">
        <div class="fct">That's everything</div>
        <div class="fcs">Save this somewhere good. Questions, anything at all, just shout, email or WhatsApp both work.</div>
        <a href="mailto:nina@nina-mistry.com" class="cta-btn">nina@nina-mistry.com</a>
      </div>
      <div class="bf">
        <img class="bf-photo" src="https://nina-mistry.com/photo-about.jpg" alt="Nina Mistry">
        <div class="bfb">Nina Mistry</div>
        <div class="bfs">nina-mistry.com · 07736 278718</div>
        <div class="bfc">${isProjects ? 'Project handbook' : 'Retainer handbook'}</div>
      </div>
    </div>`

  ];
}

function buildTocItems(type) {
  const isProjects = type === 'projects';
  return [
    { num: "01", label: "Welcome", pgIdx: 2 },
    { num: "02", label: isProjects ? "Your Project" : "Your Sessions", pgIdx: 3 },
    { num: "03", label: "How To Reach Me", pgIdx: 4 },
    { num: "04", label: "How Payment Works", pgIdx: 5 },
    { num: "05", label: isProjects ? "Scope Changes" : "If Things Change", pgIdx: 6 },
    { num: "06", label: "Confidentiality", pgIdx: 7 },
    { num: "07", label: "Who Owns What", pgIdx: 8 },
    { num: "08", label: "My Boundaries", pgIdx: 9 },
    { num: "09", label: "If Something's Wrong", pgIdx: 10 },
    { num: "10", label: "Quick Reference", pgIdx: 11 },
  ];
}

function initHandbook(type) {
  let pg = 0;
  const pages = buildPages(type);
  const tocItems = buildTocItems(type);
  const TP = pages.length;

  const bookEl = document.getElementById('book');
  const dotsEl = document.getElementById('dots');
  const btnBack = document.getElementById('btnBack');
  const btnNext = document.getElementById('btnNext');
  const progFill = document.getElementById('progFill');
  const progCount = document.getElementById('progCount');

  function fillTOC(container) {
    const list = container.querySelector('.toc-list');
    if (!list) return;
    list.innerHTML = '';
    tocItems.forEach(item => {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'toc-row';
      row.innerHTML = `<span class="toc-num">${item.num}</span><span class="toc-label">${item.label}</span><span class="toc-fill"></span><span class="toc-pg">${item.pgIdx + 1}</span>`;
      row.addEventListener('click', () => pageFlip.flip(item.pgIdx));
      list.appendChild(row);
    });
  }

  // Build one real page element per page, each carrying its own footer page number
  pages.forEach((html, i) => {
    const pageEl = document.createElement('div');
    pageEl.className = 'page';
    pageEl.innerHTML = html + `<div class="pgn">${i + 1} / ${TP}</div>`;
    bookEl.appendChild(pageEl);
  });
  fillTOC(bookEl.children[1]);

  for (let i = 0; i < TP; i++) {
    const b = document.createElement('button');
    b.className = 'dot';
    b.addEventListener('click', () => pageFlip.flip(i));
    dotsEl.appendChild(b);
  }

  function updateChrome() {
    progCount.textContent = `${pg + 1} / ${TP}`;
    progFill.style.width = `${((pg + 1) / TP) * 100}%`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('on', i === pg));
    btnBack.disabled = pg === 0;
    btnNext.disabled = pg === TP - 1;
    btnNext.textContent = pg === 0 ? 'Open →' : 'Next →';
  }

  // Real page-turn engine: genuinely curls and bends each page like paper
  const pageFlip = new St.PageFlip(bookEl, {
    width: 380,
    height: 560,
    size: 'stretch',
    minWidth: 260,
    maxWidth: 700,
    minHeight: 360,
    maxHeight: 1000,
    maxShadowOpacity: 0.5,
    showCover: false,
    usePortrait: true,
    flippingTime: 650,
    clickEventForward: true
  });

  pageFlip.loadFromHTML(document.querySelectorAll('#book .page'));

  pageFlip.on('flip', (e) => {
    pg = e.data;
    updateChrome();
  });

  pageFlip.on('changeState', (e) => {
    const busy = e.data === 'flipping';
    btnBack.disabled = busy || pg === 0;
    btnNext.disabled = busy || pg === TP - 1;
  });

  btnBack.addEventListener('click', () => pageFlip.flipPrev('bottom'));
  btnNext.addEventListener('click', () => pageFlip.flipNext());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') pageFlip.flipNext();
    if (e.key === 'ArrowLeft') pageFlip.flipPrev('bottom');
  });

  updateChrome();
}
