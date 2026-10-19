// ตัวช่วยให้ติดตั้งเป็นแอปได้ (Android) - ไม่เก็บข้อมูลน้ำยาไว้ในเครื่อง ข้อมูลจริงอยู่ที่ Google Sheets เสมอ
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
