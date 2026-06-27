// Placeholder navigation structure derived from Quiet_Armour_Spec.md.
// Screen titles are real (the spec mandates using these as card titles);
// body copy is placeholder until Quiet_Armour_Noha_Companion.txt is wired in.
export const tiles = [
  {
    id: 'capacity',
    num: '01',
    dot: 'violet',
    title: 'Capacity For Nonsense',
    subtitle: 'Energy, phases, and tiny actions.',
    screens: [
      { slug: 'alterations-in-progress', title: 'Alterations in Progress — Three Months', subtitle: 'Three phases, paced.' },
      { slug: 'reminder', title: 'Reminder', subtitle: 'A good day is not a recovery.' },
      { slug: 'one-small-thing', title: 'One Small Thing', subtitle: 'Body, mind, connection.' },
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
      { slug: 'forms-cheat-sheet', title: 'Forms cheat sheet', subtitle: 'Tools, not obligations.' },
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
      { slug: 'work-scripts', title: 'Work scripts', subtitle: 'Neutral phrases that disclose nothing.' },
      { slug: 'phased-return', title: 'Phased return', subtitle: 'Half-days, task triage, real limits.' },
      { slug: 'calm-in-90-seconds', title: 'Calm in 90 seconds', subtitle: 'Box-breathing for meetings.' },
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
      { slug: 'normalising-feelings', title: 'Normalising feelings', subtitle: 'Flat, angry, relieved, scared — all allowed.' },
      { slug: 'tiny-practices', title: 'Tiny practices', subtitle: 'Mood logging, three-line journalling.' },
      { slug: 'red-flags', title: 'Red flags', subtitle: 'When to bring in real backup.' },
    ],
  },
  {
    id: 'nice-things-just-for-you',
    num: '06',
    dot: 'gold',
    title: 'Nice Things Just For You',
    subtitle: 'Treats and indulgence, without needing to earn them.',
    screens: [
      { slug: 'sensible-but-lovely', title: 'Sensible-but-lovely', subtitle: 'Loungewear, notebooks, a good mug.' },
      { slug: 'totally-non-essential', title: 'Totally non-essential', subtitle: 'Joy-only, no justification.' },
      { slug: 'rules', title: 'Rules', subtitle: '"Just for me" is a complete sentence.' },
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
