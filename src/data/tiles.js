// Navigation + content structure derived from Quiet_Armour_Spec.md and
// quiet_armour_help_pack_brief.md. Screens with a `body` array carry real,
// drafted copy from the brief. Screens without one are still placeholder —
// either not yet drafted, or explicitly left open per the brief's §3/§4.
export const tiles = [
  {
    id: 'capacity',
    num: '01',
    dot: 'violet',
    title: 'Capacity For Nonsense',
    subtitle: 'Energy, phases, and tiny actions.',
    screens: [
      {
        slug: 'alterations-in-progress',
        title: 'Alterations in Progress — Three Months',
        subtitle: 'A gentle sketch, not a contract.',
        body: [
          { type: 'p', text: 'Your recovery in three acts. A gentle sketch, not a contract. You and your body get to move the sliders.' },
          { type: 'timeline', phases: [
            {
              range: 'Surgery day – end of Week 2',
              title: 'Act I · The Specimen Is Horizontal',
              summary: 'Surgical recovery is the whole job.',
              bullets: [
                'Pain is present and variable; not dramatic, but real.',
                'Getting dressed, showering and one small outing can count as a full day.',
                'Work brain is offline; messages can wait or be handled by someone else.',
              ],
              capacity: '"Variable, possibly none." A good day is a bonus, not a new standard.',
            },
            {
              range: 'Weeks 3–6',
              title: 'Act II · The Mannequin Has Opinions',
              bullets: [
                'Back "in the room" in a light way — mornings only at first.',
                'Afternoons are for rest, naps, or being decorative; mistakes are more likely when you push.',
                'Calls and meetings need notice and a recovery window afterwards.',
                'Quality is available in short bursts. Heroics are not.',
              ],
              capacity: 'Around 3–4 focused hours a day, with breaks you actually take.',
            },
            {
              range: 'Weeks 7–12',
              title: 'Act III · The Final Fitting',
              bullets: [
                'A genuine return, building week by week rather than flipping a switch.',
                'Strategic thinking and actual opinions are back, but run through a body that is still healing.',
                'Project work resumes at real (not pre-surgery) capacity.',
                'The pace is yours to set, not the spreadsheet\'s.',
              ],
              capacity: '4–5 hours most days, with flex for flare-ups, medical appointments and life.',
            },
          ] },
        ],
      },
      {
        slug: 'reminder',
        title: 'Reminder',
        subtitle: 'A good day is not a recovery.',
        body: [
          { type: 'quote', text: 'A good day is not a recovery.\nIt is a good day.\n\nCalibrate to the arc, not to the performance.' },
        ],
      },
      {
        slug: 'one-small-thing',
        title: 'One Small Thing',
        subtitle: 'Body, mind, connection.',
        body: [
          { type: 'p', text: 'You don\'t need grand self-care days. Small, repeatable moments help your nervous system more than you\'d think.' },
          { type: 'list', items: [
            'Two-minute mood check — use Apple Health "State of Mind" or BCNA\'s My Journey tool to log how you feel right now or how the day felt overall. Naming things can make them feel less huge.',
            'Three-minute breathing pause — box breathing: in for 4, hold for 4, out for 4, hold for 4, repeat a few times. You can do this quietly at your desk, in a bathroom, on a tram.',
            'Two-minute prayer or quiet time — you pray, and that counts here too. You\'re allowed to bring this to God exactly as it is — tired, angry, grateful, numb or all of the above. Two honest sentences like "this is hard" or "please hold me in this" can sit alongside any breathing exercise or journal entry.',
            'Five-minute brain dump — in Notes, Apple\'s Journal app, BCNA My Journey, or by talking to Perplexity, put down whatever\'s there: "Today my body feels…", "Today my brain is saying…", "One small thing that didn\'t suck today was…". The point is to get some static out of your head and into a place that isn\'t your nervous system.',
          ] },
        ],
      },
      {
        slug: 'body-changes-later',
        title: 'What your body might do later',
        subtitle: 'Scars, phantom sensations, lymphoedema.',
        body: [
          { type: 'heading', text: 'Scars do strange things on their own schedule' },
          { type: 'p', text: 'A healed scar isn\'t finished — it keeps changing for a year or more. It can feel tight, then loose, then tight again. It can itch out of nowhere, go numb in patches, or feel oddly sensitive to cold or to fabric for no reason you did anything to cause. Some patches may stay numb permanently; others come back over months. None of this means it\'s healing wrong. Scar tissue is just slower and stranger than skin, and it doesn\'t keep you updated on its plans.' },
          { type: 'p', text: 'Massage and moisturising once your surgeon clears it can help with tightness — but if a scar suddenly changes (new pain, new redness, new lump, new discharge), that\'s a call to your surgical team, not a wait-and-see.' },
          { type: 'heading', text: 'Phantom sensations are real, not "in your head"' },
          { type: 'p', text: 'Some women feel their breast as if it\'s still there — an itch, a pressure, even pain, in tissue that\'s no longer there. This is the same kind of nerve phenomenon as phantom limb sensation, and it\'s a known, documented thing after mastectomy. It can turn up weeks or months after surgery, seemingly out of nowhere, and it can be unsettling precisely because it makes no logical sense.' },
          { type: 'p', text: 'It usually fades with time. It is not a sign anything is wrong, and it is not a sign you haven\'t accepted your body — nerves take a while to update their map.' },
          { type: 'heading', text: 'Lymphoedema — the one to actually watch for' },
          { type: 'p', text: 'If lymph nodes were removed or affected during surgery, there\'s a long-term risk of lymphoedema — swelling in the arm, hand, or chest wall on the affected side, caused by fluid that isn\'t draining the way it used to. This risk doesn\'t end when recovery ends; it\'s a lifelong thing to keep half an eye on, not just a first-weeks concern.' },
          { type: 'p', text: 'Watch for: heaviness, tightness, swelling, or a ring/sleeve fitting differently than it used to, on the affected side. Catching it early makes it far more manageable, so don\'t talk yourself out of a follow-up call because it seems minor.' },
          { type: 'p', text: 'Practical things that help: avoid tight elastic on that arm (watches, sleeves, blood pressure cuffs on that side if avoidable), keep an eye on cuts or insect bites on that arm and treat them promptly, and ask your team early about a referral to a lymphoedema-trained physio if anything starts to feel different. This isn\'t about wrapping yourself in cotton wool — it\'s about noticing early rather than late.' },
          { type: 'quote', text: 'None of this is you doing recovery wrong. Bodies that have been rearranged take a while to send accurate reports back. Trust the strange ones less than you\'d think, and trust your surgical team more than your instinct to just push through.' },
        ],
      },
    ],
  },
  {
    id: 'shirts-bras-feelings',
    num: '02',
    dot: 'sage',
    title: 'Shirts, Bras & Feelings',
    subtitle: 'What goes on your body, and how to not panic about it.',
    screens: [
      { slug: 'being-flat-right-now', title: 'Being flat right now', subtitle: 'Permission for mixed feelings.' },
      { slug: 'soft-puffs-and-gentle-bras', title: 'Soft puffs and gentle bras', subtitle: 'What post-surgery bras need.' },
      { slug: 'what-happens-at-a-fitting', title: 'What happens at a fitting', subtitle: 'Step by step, no surprises.' },
      {
        slug: 'forms-cheat-sheet',
        title: 'Forms cheat sheet',
        subtitle: 'Tools, not obligations.',
        body: [
          { type: 'p', text: 'A working first pass at the options — not yet checked against Amoena\'s current catalogue, so treat names and specifics here as a starting point for a conversation at a fitting, not a final answer.' },
          { type: 'table', headers: ['Type', 'When it\'s useful', 'Possible downside'], rows: [
            ['Textile / Priform', 'Immediately post-op, very tender chest', 'Less shape under some clothes'],
            ['Essential / Natura', 'Everyday office and casual wear', 'Weight and warmth for some women'],
            ['Adapt Air / Xtra Light', 'If shoulders ache or she hates heavy forms', 'May cost more'],
            ['Contact (adhesive)', 'If she wants "fixed" feel under clothes', 'Skin contact might be too much early on'],
            ['Aqua / swim forms', 'Swimming, beach, holidays', 'Extra purchase just for water'],
          ] },
          { type: 'quote', text: 'Some women living flat choose never to use prosthetics, and that is just as valid as choosing them. These are tools, not obligations.' },
        ],
      },
      {
        slug: 'clothes-first-6-8-weeks',
        title: 'Clothes for the first 6–8 weeks',
        subtitle: 'One job: get on and off without a fight.',
        body: [
          { type: 'heading', text: 'The rules, such as they are' },
          { type: 'p', text: 'Nobody is grading this. There is no outfit that proves you\'re coping.' },
          { type: 'p', text: 'For now, clothes have exactly one job: get on and off without a fight. Everything else is optional.' },
          { type: 'heading', text: 'Front-opening, always' },
          { type: 'p', text: 'Anything that goes over your head is now the enemy. Button-front, zip-front, snap-front — doesn\'t matter which, as long as your arms can stay low and your shoulders don\'t have to negotiate.' },
          { type: 'p', text: 'If you only buy one thing from this list, buy a soft button-down a size bigger than usual. You will live in it. It will not ask anything of you.' },
          { type: 'heading', text: 'Fabric over fashion' },
          { type: 'p', text: 'Cotton, bamboo, soft jersey — anything that doesn\'t have an opinion about your scars. Nothing stiff, nothing with a seam that sits right on the incision line, nothing that needs convincing to lie flat.' },
          { type: 'p', text: 'If a fabric would irritate a sunburn, it will irritate this. Same rule, different reason.' },
          { type: 'heading', text: 'If you have drains' },
          { type: 'p', text: 'Loose enough to hide the tubing, with a pocket or a small drain pouch so nothing swings around like festive bunting every time you stand up. A drawstring bag on a long strap, an apron with deep pockets, even a fanny pack worn backwards — whatever keeps your hands free and the tubing still.' },
          { type: 'p', text: 'This is equipment, not an accessory. Treat it like the practical problem it is.' },
          { type: 'heading', text: 'For visitors and appointments' },
          { type: 'p', text: 'A soft scarf or light shawl does more work than people realise — coverage without confrontation, and something to fuss with if a conversation gets to be too much.' },
          { type: 'quote', text: 'Gentle guidelines, not rules. If something on this list doesn\'t work for your body on a given day, the list is wrong, not you.' },
        ],
      },
      {
        slug: 'style-for-the-office',
        title: 'Style ideas for the office',
        subtitle: 'Armoured and still you.',
        body: [
          { type: 'quote', text: 'The question isn\'t "how do I hide this." The question is "how do I feel armoured and still myself, in a room that doesn\'t know yet what\'s changed." Those are different questions, and the second one is the only one worth answering.' },
          { type: 'heading', text: 'Pattern and depth of colour do real work' },
          { type: 'p', text: 'Busy prints and richer, darker tones soften shadow and pull the eye across the whole outfit instead of letting it land on one place. This isn\'t camouflage — it\'s just how prints behave on any body, used on purpose.' },
          { type: 'heading', text: 'Let structure do the talking' },
          { type: 'p', text: 'A blazer, a waterfall cardigan, a tailored jacket over a simple tee — structure on top gives the eye somewhere obvious and interesting to go. Layer a jacket with a scarf, or a cardigan with a strong necklace, and you\'ve built visual complexity that has nothing to do with what\'s underneath it.' },
          { type: 'heading', text: 'Necklines are your actual decision point' },
          { type: 'p', text: 'Ruffles, draped fronts, tie-necks, a halter, a cold shoulder — whatever you\'d reach for anyway, reach for it. Movement and shape at the neckline do more for how an outfit reads than anything happening at chest height.' },
          { type: 'heading', text: 'Spend your statement budget elsewhere' },
          { type: 'p', text: 'A defined waist, trousers that fit properly, good shoes, jewellery with some presence — these are where attention goes when you give it somewhere good to go. Let the rest of the outfit be the interesting part.' },
          { type: 'heading', text: 'The only metric that matters' },
          { type: 'p', text: 'Not "does this look like I haven\'t changed." Just: do you feel like you, dressed for the day you\'re actually having. Some days that\'s armour. Some days it\'s just a soft top and you not explaining yourself to anyone.' },
        ],
      },
      {
        slug: 'closet-call',
        title: 'Going through your closet together',
        subtitle: 'A video call, not an audit.',
        body: [
          { type: 'heading', text: 'The closet call' },
          { type: 'p', text: 'Before you buy anything new, let\'s go through what you already own. Video call, you holding things up to the camera, me telling you the truth about what\'s working — that\'s the whole plan. Half of what\'s in your wardrobe right now will still be exactly right. The other half just needs someone who isn\'t you to look at it for thirty seconds and say "yes" or "not yet."' },
          { type: 'p', text: 'You don\'t need to tidy up first. You don\'t need to pre-sort into piles. Just open the closet and start holding things up.' },
          { type: 'heading', text: 'What we\'re actually looking for' },
          { type: 'p', text: 'Necklines, mostly — that\'s almost the whole game. Anything that already has movement or interest at the collar is probably fine as-is. Anything that depends on a particular chest shape to look right is the thing we put aside, not because it\'s wrong, but because it was built for a body you don\'t currently have, and that\'s a fact about the garment, not about you.' },
          { type: 'heading', text: 'One appointment, not an audit' },
          { type: 'p', text: 'This isn\'t a referendum on your wardrobe. We\'re not deciding what kind of woman you are by what\'s hanging in there. We\'re sorting clothes into "wear this Monday" and "revisit later," and that\'s the entire stakes of the exercise.' },
          { type: 'button', label: 'Book closet call with Michelle', href: '#' },
        ],
      },
      {
        slug: 'alta-app',
        title: 'An app that does some of this thinking — Alta',
        subtitle: 'A stylist for the wardrobe you already have.',
        body: [
          { type: 'p', text: 'Closet calls with me are great, but I\'m not available every time you\'re standing in front of your wardrobe at 7am feeling like nothing makes sense anymore. For those mornings, there\'s an app worth knowing about.' },
          { type: 'heading', text: 'What it actually does' },
          { type: 'p', text: 'Alta is a stylist built around clothes you already own, not clothes you\'re being sold. You photograph what\'s in your closet once — it removes the background, tidies up the photo, and files it — and after that, it suggests outfits from your actual wardrobe based on the day, the weather, and whatever you tell it you\'re doing. It also has a virtual try-on feature: an avatar built from your own photos, so you can see roughly how a combination sits before you put it on your body.' },
          { type: 'heading', text: 'Why this one, specifically, for right now' },
          { type: 'p', text: 'The avatar bit matters more than it sounds like it would. When a flat chest is still new, getting dressed can turn into a small confrontation every single morning — pulling something on, not recognising the line of it, taking it off again, starting over. Seeing the outfit on a screen first, even an approximate AI version of you, takes one layer of surprise out of the morning. It\'s a buffer, not a fix.' },
          { type: 'p', text: 'It also means you don\'t have to rebuild your whole sense of "what works on me" from scratch by trial and error in the mirror every day. The app holds some of that thinking so you don\'t have to do all of it standing there cold.' },
          { type: 'quote', text: 'Anything that asks you to look at yourself from the outside — a photo, an avatar, a video call — takes some getting used to after a body change. That adjustment is normal, and it doesn\'t mean the tool is wrong for you. If it ever feels like too much on a given day, close the app and wear the soft top. The tool is there to help on the hard mornings, not to become one itself.' },
          { type: 'button', label: 'Open Alta', href: 'https://altadaily.com', variant: 'secondary' },
        ],
      },
    ],
  },
  {
    id: 'caregivers-chaos-boundaries',
    num: '03',
    dot: 'sage',
    title: 'Caregivers, Chaos & Boundaries',
    subtitle: 'How to have help without handing over control.',
    screens: [
      { slug: 'mum-coming-to-care-for-you', title: 'Mum coming to care for you', subtitle: 'Comfort, intensity, boundary scripts.' },
      { slug: 'partner', title: 'Partner (Didy)', subtitle: 'Practical help, touch, conversation.' },
      { slug: 'friends', title: 'Friends', subtitle: 'Making "I’m here" usable.' },
      { slug: 'eldest-daughter-reflex', title: 'Eldest-daughter reflex', subtitle: 'A new rule about whose feelings are yours.' },
    ],
  },
  {
    id: 'office-nonsense',
    num: '04',
    dot: 'violet',
    title: 'Office Nonsense',
    subtitle: 'Surviving work while still healing.',
    screens: [
      {
        slug: 'work-scripts',
        title: 'Work scripts',
        subtitle: 'Neutral phrases that disclose nothing.',
        body: [
          { type: 'p', text: 'One line, ready to use with your boss:' },
          { type: 'quote', text: 'I\'ve had major chest surgery and need a phased return: x days per week, remote options, frequent breaks.' },
          { type: 'p', text: 'The wider set — for colleagues, for strangers, for the moment someone asks a question you didn\'t want — is still being written. This stays open rather than filled in with something that just sounds plausible.' },
        ],
      },
      { slug: 'phased-return', title: 'Phased return', subtitle: 'Half-days, task triage, real limits.' },
      {
        slug: 'calm-in-90-seconds',
        title: 'Calm in 90 seconds',
        subtitle: 'Box-breathing for meetings.',
        body: [
          { type: 'p', text: 'Box breathing: in for 4, hold for 4, out for 4, hold for 4. Repeat a few times.' },
          { type: 'p', text: 'You can do this quietly at your desk, in a bathroom, on a tram, or right before a call you\'re dreading.' },
        ],
      },
      { slug: 'strategic-advocacy-basics', title: 'Strategic advocacy basics', subtitle: 'Document, stay factual, escalate well.' },
    ],
  },
  {
    id: 'head-noise-heart-stuff',
    num: '05',
    dot: 'gold',
    title: 'Head Noise & Heart Stuff',
    subtitle: 'Mood, mixed feelings, and when to call in backup.',
    screens: [
      {
        slug: 'normalising-feelings',
        title: 'Normalising feelings',
        subtitle: 'Flat, angry, relieved, scared — all allowed.',
        body: [
          { type: 'heading', text: 'You are not broken' },
          { type: 'p', text: 'Your brain and heart are reacting to something big, not failing at coping. It may not feel like it today, but this is survivable, and you don\'t have to hold it together every minute for things to still turn out okay.' },
          { type: 'heading', text: 'You are allowed to feel how you feel' },
          { type: 'p', text: 'You\'ve spent a long time as the one who copes and holds everything together — eldest daughter, translator, fixer, bridge between worlds. Risk-reducing chest surgery can bring a mix of relief, fear, grief and "do I even belong here?" feelings. Years of everyday sexism, racism and eldest-daughter responsibility make it harder to show vulnerability or ask for help. That locked-door reaction is a survival skill, not a flaw.' },
          { type: 'p', text: 'Your feelings here are allowed. You don\'t have to minimise them because "it was only preventive."' },
          { type: 'heading', text: 'The grief window (when it hits later)' },
          { type: 'p', text: 'At first there can be relief that the surgery is done and the risk is lower. Later — often weeks or even a couple of months in — a heavier sadness can arrive, just when everyone else thinks you\'re "over it."' },
          { type: 'p', text: 'You might notice:' },
          { type: 'list', items: [
            'Feeling unexpectedly teary or flat once the initial crisis is past.',
            'Waves of "what have I done to my body?" even though you still agree with your decision.',
            'Missing how your chest used to look or feel, and then judging yourself for missing it because "it was only preventive."',
          ] },
          { type: 'p', text: 'Nothing has gone wrong. Many people find there is a delayed "grief window" after major breast or chest surgery, when the emotional cost catches up to the physical recovery.' },
          { type: 'p', text: 'You are allowed to treat this as grief, not drama. That might look like talking with someone you trust, praying through messy, unfinished words, or writing a few lines down so they don\'t just rattle in your head. None of that makes your faith weaker — it\'s what honesty inside faith looks like.' },
        ],
      },
      {
        slug: 'tiny-practices',
        title: 'Tiny practices',
        subtitle: 'Mood logging, three-line journalling.',
        body: [
          { type: 'heading', text: 'Apple Journal app' },
          { type: 'p', text: 'If you have an iPhone with iOS 17.2 or later, there\'s a built-in Journal app you can use alongside or instead of Notes.' },
          { type: 'list', items: [
            'Update your phone to iOS 17.2 or later.',
            'Open the Journal app (or download it again from the App Store if you deleted it).',
            'Tap "+" to start an entry, or pick from Apple\'s suggested prompts.',
          ] },
          { type: 'p', text: 'Journal entries are stored privately, and it can offer gentle prompts based on your photos, walks and music, which helps when you\'re too tired to think what to write.' },
          { type: 'heading', text: 'Journalling and talking to Perplexity' },
          { type: 'p', text: 'You can use Notes, a journalling app, BCNA My Journey, or Perplexity as a safe place for messy, unedited thoughts.' },
          { type: 'p', text: 'You might write or say:' },
          { type: 'list', items: [
            'Today my body feels…',
            'Today my brain is telling me…',
            'Something I wish people understood but I\'m not ready to say out loud is…',
          ] },
          { type: 'p', text: 'Nothing has to be polished. The point is simply to let your mind put down some of the weight it\'s carrying.' },
          { type: 'button', label: 'BCNA My Journey', href: 'https://www.bcna.org.au/my-journey/', variant: 'secondary' },
        ],
      },
      {
        slug: 'pain-meds-and-mood',
        title: 'Pain, meds and your mood',
        subtitle: 'They feed each other. That’s not weakness.',
        body: [
          { type: 'p', text: 'You had serious surgery. That meant hours under anaesthetic and days or weeks of pain medication. None of this makes you weak, but it absolutely makes you tired and sometimes low.' },
          { type: 'p', text: 'After big chest surgery, fatigue comes from a few places at once:' },
          { type: 'list', items: [
            'The operation itself — your body diverts energy into healing wounds and calming inflammation.',
            'Anaesthetic "hangover" — it can take days or weeks for your brain and body to fully clear the drugs.',
            'Strong pain relief — opioids and some other medicines can make you drowsy, foggy, nauseous or flatter in mood while they help with pain.',
          ] },
          { type: 'p', text: 'If you feel like your brain is under a heavy blanket, that is a recognised aftermath of surgery plus pain medication, not you failing at recovery.' },
          { type: 'heading', text: 'Pain and mood can feed each other' },
          { type: 'p', text: 'When pain is high, sleep is often worse, which makes your brain more fragile. When mood drops, pain can feel sharper and harder to cope with.' },
          { type: 'p', text: 'You\'re allowed to say things like:' },
          { type: 'list', items: [
            '"When my pain is up, my mood drops fast."',
            '"The meds help with pain, but they also make everything feel heavy. Can we adjust the plan so I\'m not choosing between pain and being able to think?"',
          ] },
          { type: 'p', text: 'If you notice many days in a row where pain and low mood are both loud, or you\'re leaning more and more on strong painkillers just to get through, that\'s a good moment to check in with your GP or surgeon about changing the mix instead of just pushing through.' },
        ],
      },
      {
        slug: 'red-flags',
        title: 'Red flags',
        subtitle: 'When to bring in real backup.',
        body: [
          { type: 'p', text: 'If low mood or anxiety are there most days, if sleep, appetite or concentration are worsening for weeks, or if thoughts like "everyone would be better if I weren\'t here" start creeping in, sharing some of the load is an act of care, not failure.' },
          { type: 'p', text: 'That might be:' },
          { type: 'list', items: [
            'A GP, psychologist or counsellor.',
            'A trusted faith leader or pastor who can help carry some of the weight with you, not just "fix" you.',
          ] },
          { type: 'quote', text: 'Lifeline (Australia) is there 24/7 on 13 11 14 (or text 0477 13 11 14) if thoughts of suicide or self-harm ever come up.' },
        ],
      },
    ],
  },
  {
    id: 'nice-things-just-for-you',
    num: '06',
    dot: 'gold',
    title: 'Nice Things Just For You',
    subtitle: 'Treats and indulgence, without needing to earn them.',
    screens: [
      {
        slug: 'sensible-but-lovely',
        title: 'Sensible-but-lovely',
        subtitle: 'Loungewear, notebooks, a good mug.',
        body: [
          { type: 'list', items: [
            'Papinelle loungewear or robe.',
            'Notebooks and pens you actually like.',
            'A good bottle or mug.',
            'Breast Butter — a gentle moisturiser for post-surgery or sensitive breast/chest skin; only start once scars are closed and your surgeon or breast nurse is happy with you using products on the area.',
          ] },
        ],
      },
      { slug: 'totally-non-essential', title: 'Totally non-essential', subtitle: 'Joy-only, no justification.' },
      {
        slug: 'rules',
        title: 'Rules',
        subtitle: '"Just for me" is a complete sentence.',
        body: [
          { type: 'quote', text: '"Just for me" is a complete sentence. No justification required.' },
        ],
      },
    ],
  },
  {
    id: 'links-lifelines',
    num: '07',
    dot: 'violet',
    title: 'Links & Lifelines',
    subtitle: 'All the links, in one quiet place.',
    isLinks: true,
    linkGroups: [
      {
        title: 'Bras, puffs, forms, fittings',
        links: [
          { label: 'Amoena AU', href: '#' },
          { label: 'Erilan — Post-Surgery Bra Guide', href: '#' },
          { label: 'Silima FAQs', href: '#' },
          { label: "DeBra's Amoena Fitting Guide", href: '#' },
        ],
      },
      {
        title: 'Flat style & body image',
        links: [
          { label: 'Flat Friends — fashion', href: '#' },
          { label: 'LBBC — body image', href: '#' },
          { label: 'Cooper — appearance PDF', href: '#' },
        ],
      },
      {
        title: 'Mood & journalling',
        links: [
          { label: 'Apple Health — State of Mind', href: '#' },
          { label: 'BCNA — My Journey', href: 'https://www.bcna.org.au/my-journey/' },
          { label: 'Breastcancer.org — journalling', href: '#' },
          { label: 'Better Health — mood page', href: '#' },
        ],
      },
      {
        title: 'Recovery & work',
        links: [
          { label: 'Cancer Council NSW — post-surgery expectations', href: '#' },
          { label: 'Leaf — post-surgical fatigue', href: '#' },
          { label: 'Cancer Australia — returning to work', href: '#' },
        ],
      },
      {
        title: 'Wardrobe & style help',
        links: [
          { label: 'Alta — outfit planning from your own closet', href: 'https://altadaily.com' },
        ],
      },
      {
        title: 'Soft extras',
        links: [
          { label: 'Papinelle', href: '#' },
          { label: 'The Iconic — loungewear', href: '#' },
          { label: 'Mecca', href: '#' },
          { label: 'Adore Beauty', href: '#' },
        ],
      },
    ],
  },
];

export function getTile(id) {
  return tiles.find((t) => t.id === id);
}

export function getScreen(tileId, slug) {
  const tile = getTile(tileId);
  if (!tile || !tile.screens) return null;
  return tile.screens.find((s) => s.slug === slug);
}
