export const withCache = async (apiFn, key) => {
  const cacheKey = key || apiFn.name || undefined;

  const getOrAdd = cacheKey => {
    const cacheValue = window.localStorage.getItem(cacheKey);
    const getAndCache = async () => {
      const result = await apiFn();
      const serializedData = JSON.stringify(result);
      window.localStorage.setItem(cacheKey, serializedData);
      return result;
    }

    return cacheValue ? JSON.parse(cacheValue) : getAndCache();
  }
  return !cacheKey ? await apiFn() : getOrAdd(cacheKey);
}
