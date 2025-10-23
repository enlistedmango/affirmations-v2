import type { Affirmation } from './types'

let DATA: Affirmation[] = [
    { id: 'a_001', text: "You’re allowed to take up space.", tags: ['self-worth'], lang: 'en' },
    { id: 'a_002', text: "Progress over perfection.", tags: ['growth'], lang: 'en' },
    { id: 'a_003', text: "You can do hard things.", tags: ['resilience'], lang: 'en' },
    { id: 'a_004', text: "Today, kindness to self first.", tags: ['self-care'], lang: 'en' },
    { id: 'a_005', text: "Your voice matters.", tags: ['confidence'], lang: 'en' },
    { id: 'a_006', text: "Small steps still move you forward.", tags: ['growth'], lang: 'en' },
    { id: 'a_007', text: "You are enough as you are.", tags: ['self-worth'], lang: 'en' },
    { id: 'a_008', text: "Done is better than perfect.", tags: ['productivity', 'growth'], lang: 'en' },
    { id: 'a_009', text: "Your effort compounds.", tags: ['growth', 'motivation'], lang: 'en' },
    { id: 'a_010', text: "Breathe in calm, breathe out doubt.", tags: ['calm', 'mindfulness'], lang: 'en' },
    { id: 'a_011', text: "I choose progress today.", tags: ['growth', 'focus'], lang: 'en' },
    { id: 'a_012', text: "Rest is productive.", tags: ['self-care', 'balance'], lang: 'en' },
    { id: 'a_013', text: "I release what I can’t control.", tags: ['calm', 'mindfulness'], lang: 'en' },
    { id: 'a_014', text: "I learn quickly and adapt easily.", tags: ['growth', 'resilience'], lang: 'en' },
    { id: 'a_015', text: "I speak to myself with respect.", tags: ['self-talk', 'self-care'], lang: 'en' },
    { id: 'a_016', text: "I am safe to be seen.", tags: ['confidence', 'self-worth'], lang: 'en' },
    { id: 'a_017', text: "Gratitude turns enough into plenty.", tags: ['gratitude', 'mindset'], lang: 'en' },
    { id: 'a_018', text: "I can figure this out.", tags: ['confidence', 'resilience'], lang: 'en' },
    { id: 'a_019', text: "I focus on what moves the needle.", tags: ['focus', 'productivity'], lang: 'en' },
    { id: 'a_020', text: "I give myself permission to start.", tags: ['motivation', 'growth'], lang: 'en' },
    { id: 'a_021', text: "My pace is perfect for me.", tags: ['self-acceptance', 'balance'], lang: 'en' },
    { id: 'a_022', text: "Every day offers a fresh page.", tags: ['mindset', 'growth'], lang: 'en' },
    { id: 'a_023', text: "Clarity grows with action.", tags: ['focus', 'productivity'], lang: 'en' },
    { id: 'a_024', text: "I am resilient and resourceful.", tags: ['resilience', 'confidence'], lang: 'en' },
    { id: 'a_025', text: "I honor my boundaries.", tags: ['self-care', 'self-respect'], lang: 'en' },
    { id: 'a_026', text: "I show up even when it’s hard.", tags: ['discipline', 'resilience'], lang: 'en' },
    { id: 'a_027', text: "I choose thoughts that support me.", tags: ['mindset', 'self-talk'], lang: 'en' },
    { id: 'a_028', text: "I’m allowed to take breaks.", tags: ['self-care', 'balance'], lang: 'en' },
    { id: 'a_029', text: "I trust myself to make good decisions.", tags: ['confidence', 'self-trust'], lang: 'en' },
    { id: 'a_030', text: "What I practice, I become.", tags: ['growth', 'discipline'], lang: 'en' },
    { id: 'a_031', text: "I turn setbacks into setups.", tags: ['resilience', 'mindset'], lang: 'en' },
    { id: 'a_032', text: "I am worthy of my own time.", tags: ['self-worth', 'self-care'], lang: 'en' },
    { id: 'a_033', text: "I celebrate tiny wins.", tags: ['gratitude', 'motivation'], lang: 'en' },
    { id: 'a_034', text: "I can learn anything I need.", tags: ['growth', 'confidence'], lang: 'en' },
    { id: 'a_035', text: "I am present for this moment.", tags: ['mindfulness', 'calm'], lang: 'en' },
    { id: 'a_036', text: "I choose courage over comfort.", tags: ['confidence', 'growth'], lang: 'en' },
    { id: 'a_037', text: "I have everything I need to begin.", tags: ['motivation', 'confidence'], lang: 'en' },
    { id: 'a_038', text: "My future self thanks me for today’s choices.", tags: ['growth', 'discipline'], lang: 'en' },
    { id: 'a_039', text: "I show myself compassion.", tags: ['self-care', 'self-talk'], lang: 'en' },
    { id: 'a_040', text: "My energy is precious; I spend it wisely.", tags: ['boundaries', 'focus'], lang: 'en' },
    { id: 'a_041', text: "I can pause without quitting.", tags: ['resilience', 'balance'], lang: 'en' },
    { id: 'a_042', text: "I am building a life I love.", tags: ['mindset', 'growth'], lang: 'en' },
    { id: 'a_043', text: "I replace worry with curiosity.", tags: ['mindfulness', 'calm'], lang: 'en' },
    { id: 'a_044', text: "I take up space with kindness.", tags: ['self-worth', 'confidence'], lang: 'en' },
    { id: 'a_045', text: "I am consistent and capable.", tags: ['discipline', 'confidence'], lang: 'en' },
    { id: 'a_046', text: "I respect my needs without apology.", tags: ['boundaries', 'self-care'], lang: 'en' },
    { id: 'a_047', text: "I choose to be where my feet are.", tags: ['mindfulness', 'focus'], lang: 'en' },
    { id: 'a_048', text: "I am allowed to ask for help.", tags: ['self-care', 'support'], lang: 'en' },
    { id: 'a_049', text: "My work grows better with practice.", tags: ['growth', 'creativity'], lang: 'en' },
    { id: 'a_050', text: "I notice what’s working and do more of it.", tags: ['focus', 'productivity'], lang: 'en' },
    { id: 'a_051', text: "I am gentle with my pace and fierce with my goals.", tags: ['balance', 'motivation'], lang: 'en' },
    { id: 'a_052', text: "I can hold both gratitude and ambition.", tags: ['gratitude', 'mindset'], lang: 'en' },
    { id: 'a_053', text: "I let today be easier than yesterday.", tags: ['calm', 'self-care'], lang: 'en' },
    { id: 'a_054', text: "I am learning to trust the process.", tags: ['growth', 'resilience'], lang: 'en' },
    { id: 'a_055', text: "I focus on what I can influence.", tags: ['focus', 'mindset'], lang: 'en' },
    { id: 'a_056', text: "I’m allowed to start small.", tags: ['growth', 'motivation'], lang: 'en' },
    { id: 'a_057', text: "I create before I critique.", tags: ['creativity', 'mindset'], lang: 'en' },
    { id: 'a_058', text: "I honor my body with rest and movement.", tags: ['health', 'self-care'], lang: 'en' },
    { id: 'a_059', text: "I let go of comparison and choose my lane.", tags: ['self-worth', 'mindset'], lang: 'en' },
    { id: 'a_060', text: "I stack small wins into big momentum.", tags: ['motivation', 'growth'], lang: 'en' }
]

export function filter(list: Affirmation[], tag?: string, lang?: string): Affirmation[] {
    let out = list
    if (tag) out = out.filter(a => a.tags?.includes(tag))
    if (lang) out = out.filter(a => (a.lang || 'en') === lang)
    return out.length ? out : list // v1 behavior: fallback to full dataset
}

export function sampleOne(list: Affirmation[]): Affirmation {
    const i = Math.floor(Math.random() * list.length)
    return list[i]
}

export function sampleMany(list: Affirmation[], limit: number): Affirmation[] {
    const arr = [...list]
    // Fisher–Yates shuffle (partial)
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.slice(0, limit)
}

export function setData(list: Affirmation[]) {
    if (Array.isArray(list) && list.every(x => x && typeof x.id === 'string' && typeof x.text === 'string')) {
        DATA = list
    }
}

export function getData(): Affirmation[] {
    return DATA
}
