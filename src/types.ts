export type Affirmation = {
    id: string
    text: string
    author?: string | null
    tags?: string[]
    lang?: string
}

export type ApiError = {
    message: string
    status?: number
}
