// ─────────────────────────────────────────────────────────────────────────
//  ตั้งค่า Firebase — วาง config ของโปรเจกต์คุณตรงนี้ (แก้แค่ไฟล์นี้ไฟล์เดียว)
//
//  ⚠️ ไฟล์นี้โหลดแบบ classic script — ต้องเป็น window.FIREBASE_CONFIG = {...}
//     ห้ามใส่ import / getAnalytics / initializeApp (สไนป์เป็ตจากหน้า Firebase)
//     เพราะจะพังทันที — ก๊อปมาแค่ "ค่าใน firebaseConfig" อย่างเดียวพอ
//
//  หาได้จาก:  Firebase Console → ⚙️ Project settings → General
//             → "Your apps" → Web app (</>) → SDK setup → "Config"
//
//  อย่าลืมเปิด 2 อย่างใน Console ด้วย (ดูขั้นตอนใน README.md):
//    1) Authentication → Sign-in method → เปิด "Anonymous"
//    2) Firestore Database → Create database  (แล้วตั้ง Security Rules ตาม README)
// ─────────────────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBMu75VzoOhjDbfat3kVSeeHetHDE6sLnk",
  authDomain: "product-pricing-7392b.firebaseapp.com",
  databaseURL: "https://product-pricing-7392b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "product-pricing-7392b",
  storageBucket: "product-pricing-7392b.firebasestorage.app",
  messagingSenderId: "667761331624",
  appId: "1:667761331624:web:493e44e971305c6473219d",
  measurementId: "G-G6H2QB9WHP"
};
