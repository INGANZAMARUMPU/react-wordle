const DEVELOPMENT_URL = 'http://localhost:3001/api/v1'
const PRODUCTION_URL = 'https://burundiarxiv-api.herokuapp.com/api/v1'
const ROOT_URL =
  process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEVELOPMENT_URL

export const MISSING_WORDS_ENDPOINT = `${ROOT_URL}/missing_words`
export const GAMES_ENDPOINT = `${ROOT_URL}/games`
