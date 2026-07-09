const CACHE_PREFIX = 'ig-'

export function getCached(key) {
  try {
    const raw = sessionStorage.getItem(CACHE_PREFIX + key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function setCached(key, data) {
  try {
    sessionStorage.setItem(CACHE_PREFIX + key, JSON.stringify(data))
  } catch {
    // quota exceeded or unavailable
  }
}
