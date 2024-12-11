export function measureTime(func, ...args) {
  const startTime = performance.now();
  const result = func(...args);
  const endTime = performance.now();
  return { result, time: endTime - startTime };
}
