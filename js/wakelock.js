async function requestWakeLock() {
  try {
    const wakeLock = await navigator.wakeLock.request('screen');
    console.log('Wake Lock is active!');
  } catch (err) {
    console.error('Wake Lock failed: ' + err.message);
  }
}

// Request wake lock when the page becomes visible
document.addEventListener('visibilitychange', async () => {
  if (document.visibilityState === 'visible') {
    await requestWakeLock();
  }
});

// Initial request
requestWakeLock();
