export function saveSession(sessionData: any) {
  localStorage.setItem('session', JSON.stringify(sessionData))
}

export function getSession() {
  return JSON.parse(localStorage.getItem('session') || '{}')
}
