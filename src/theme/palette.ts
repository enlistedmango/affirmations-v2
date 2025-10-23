export type CardTheme = {
    name: string
    accent: string
    shadow: string
    bg1: string
    bg2: string
}

// Soft pastels
export const THEMES: CardTheme[] = [
    {
        name: 'lavender',
        accent: '#a78bfa',
        shadow: 'rgba(167,139,250,0.18)',
        bg1: 'rgba(255,255,255,0.98)',
        bg2: 'rgba(250,247,255,0.94)'
    },
    {
        name: 'sky',
        accent: '#7dd3fc',
        shadow: 'rgba(125,211,252,0.18)',
        bg1: 'rgba(255,255,255,0.98)',
        bg2: 'rgba(240,250,255,0.94)'
    },
    {
        name: 'mint',
        accent: '#86efac',
        shadow: 'rgba(134,239,172,0.18)',
        bg1: 'rgba(255,255,255,0.98)',
        bg2: 'rgba(240,255,248,0.94)'
    },
    {
        name: 'peach',
        accent: '#fca5a5',
        shadow: 'rgba(252,165,165,0.18)',
        bg1: 'rgba(255,255,255,0.98)',
        bg2: 'rgba(255,245,245,0.94)'
    },
    {
        name: 'butter',
        accent: '#fde68a',
        shadow: 'rgba(253,230,138,0.18)',
        bg1: 'rgba(255,255,255,0.98)',
        bg2: 'rgba(255,250,235,0.94)'
    },
    {
        name: 'blush',
        accent: '#f9a8d4',
        shadow: 'rgba(249,168,212,0.18)',
        bg1: 'rgba(255,255,255,0.98)',
        bg2: 'rgba(255,245,251,0.94)'
    }
]
