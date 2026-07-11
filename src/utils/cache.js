const CACHE_PREFIX = 'ig-'
const DEFAULT_TTL = 10 * 60 * 1000 // 10 minutes

export function getCached(key) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key)
    if (!raw) return null
    const entry = JSON.parse(raw)
    return entry.data
  } catch {
    return null
  }
}

export function setCached(key, data) {
  try {
    const entry = { data, timestamp: Date.now() }
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(entry))
  } catch {
    // quota exceeded or unavailable
  }
}

export function isStale(key, ttl = DEFAULT_TTL) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key)
    if (!raw) return true
    const entry = JSON.parse(raw)
    return Date.now() - entry.timestamp > ttl
  } catch {
    return true
  }
}
