function compareObjects(obj1: any, obj2: any, visited = new Set()): boolean {
  // Check for circular references
  if (visited.has(obj1) || visited.has(obj2)) {
    return obj1 === obj2; // Consider them equal if already visited
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  visited.add(obj1);
  visited.add(obj2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!obj2.hasOwnProperty(key) || !compareObjects(obj1[key], obj2[key], visited)) {
      return false;
    }
  }

  return true;
}