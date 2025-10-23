import type { Affirmation } from '../types'

export const FALLBACKS: Affirmation[] = [
    { id: 'local_001', text: 'You are worthy of good things.', tags: ['self-worth'], lang: 'en' },
    { id: 'local_002', text: 'Small steps still move you forward.', tags: ['growth'], lang: 'en' },
    { id: 'local_003', text: 'You are allowed to take up space.', tags: ['self-worth'], lang: 'en' },
    { id: 'local_004', text: 'Your pace is the right pace.', tags: ['compassion'], lang: 'en' },
    { id: 'local_005', text: 'Progress, not perfection.', tags: ['growth'], lang: 'en' },
    { id: 'local_006', text: 'You can do hard things.', tags: ['resilience'], lang: 'en' },
    { id: 'local_007', text: 'Rest is productive.', tags: ['rest'], lang: 'en' },
    { id: 'local_008', text: 'Your feelings are valid.', tags: ['validation'], lang: 'en' },
    { id: 'local_009', text: 'You are enough, as you are.', tags: ['self-worth'], lang: 'en' },
    { id: 'local_010', text: 'You’re learning. That counts.', tags: ['growth'], lang: 'en' },
    { id: 'local_011', text: 'Ask for help when you need it.', tags: ['support'], lang: 'en' },
    { id: 'local_012', text: 'You can start again right now.', tags: ['renewal'], lang: 'en' },
    { id: 'local_013', text: 'Breathe. You’re safe in this moment.', tags: ['calm'], lang: 'en' },
    { id: 'local_014', text: 'Your voice matters.', tags: ['self-worth'], lang: 'en' },
    { id: 'local_015', text: 'It’s okay to set boundaries.', tags: ['boundaries'], lang: 'en' },
]

export function randomFallback(): Affirmation {
    const i = Math.floor(Math.random() * FALLBACKS.length)
    return FALLBACKS[i]
}
