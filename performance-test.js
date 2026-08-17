const { performance } = require('node:perf_hooks');

function simulateBookingDataLoad(items = 1000) {
  return Array.from({ length: items }, (_, index) => ({
    id: `LSA-${index + 1}`,
    available: index % 3 !== 0,
  })).filter((item) => item.available);
}

const start = performance.now();
const results = simulateBookingDataLoad();
const elapsedMs = performance.now() - start;

console.log('Performance profiling demo');
console.log(`Records processed: ${results.length}`);
console.log(`Processing time: ${elapsedMs.toFixed(2)} ms`);
console.log('\nFor the real mobile build, measure:');
console.log('- Cold and warm app launch time');
console.log('- Screen render/responsiveness');
console.log('- API response time');
console.log('- CPU and memory usage');
console.log('- Network behaviour under slow/intermittent conditions');
console.log('- Crash-free behaviour during repeated booking attempts');
