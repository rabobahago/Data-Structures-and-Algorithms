class HashMap {
  constructor(initial = 10) {
    this.buckets = new Array(initial);
    this.collisions = 0;
  }
  set(key, value) {
    const index = this.getIndex(key);
    if (this.buckets[index]) {
      this.buckets[index].push({ key, value });
      if (this.buckets[index].length > 1) {
        this.collisions++;
      }
    } else {
      this.buckets[index] = [{ key: key, value: value }];
    }
    return this;
  }
  get(key) {
    const index = this.getIndex(key);
    for (let i = 0; i < this.buckets[index].length; i++) {
      let entry = this.buckets[index][i];
      if (entry.key === key) {
        return entry.value;
      }
    }
  }
  hash(key) {
    let hashValue = 0;
    let stringTypeKey = `${key} ${typeof key}`;
    for (let i = 0; i < stringTypeKey.length; i++) {
      let charCode = stringTypeKey.charCodeAt(i);
      hashValue += charCode << (i * 8);
    }
    return hashValue;
  }
  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}
const hashMap = new HashMap();
hashMap.set("car", 500);
hashMap.set("chair", 40);
hashMap.set("hush", 20);
hashMap.set("tea", 30);
console.log(hashMap.get("car"));
console.log(hashMap.buckets);
