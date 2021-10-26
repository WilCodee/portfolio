export const updateLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)
  localStorage.setItem(`${key}`, `${Number(item) + 1}`)
}
