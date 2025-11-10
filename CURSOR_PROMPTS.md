# 🤖 Cursor AI Prompt Örnekleri

Bu dosya, Cursor AI ile projeyi geliştirirken kullanabileceğiniz hazır prompt örneklerini içerir.

## 📚 İçindekiler

- [Styling & Design](#styling--design)
- [Functionality](#functionality)
- [Content Updates](#content-updates)
- [Performance](#performance)
- [SEO & Accessibility](#seo--accessibility)
- [Bug Fixes](#bug-fixes)

---

## 🎨 Styling & Design

### 1. Renk Değiştirme

```
Gold rengini #d4af37 yerine #c9a227 yap. Tüm gold class'larını ve tailwind config'i güncelle.
```

### 2. Yeni Glassmorphism Efekti

```
Services section'daki kartlara daha belirgin glassmorphism efekti ekle. backdrop-blur değerini artır ve border opacity'sini yükselt.
```

### 3. Hover Animasyonları

```
Testimonial kartlarına hover efekti ekle. Hover'da hafif yukarı kalk ve shadow ekle.
```

### 4. Gradient Arka Plan

```
Hero section'ın gradient'ini daha dramatik yap. Siyahtan koyu griye geçişi daha belirgin hale getir.
```

### 5. Custom Scrollbar Rengi

```
Scrollbar thumb rengini gold yerine açık gold (#f0d98d) yap.
```

---

## ⚙️ Functionality

### 6. İletişim Formu Ekleme

```
Contact section'a EmailJS kullanarak çalışan bir iletişim formu ekle. Ad, email, telefon ve mesaj alanları olsun. Validation ve success/error mesajları ekle.
```

### 7. WhatsApp Floating Button

```
Sayfanın sağ alt köşesine WhatsApp floating button ekle. Tıklandığında +903326414147 numarasına WhatsApp'ta mesaj açsın.
```

### 8. Hamburger Menu Animasyonu

```
Mobil menü butonuna (hamburger) animasyon ekle. Açıldığında X'e dönüşsün, smooth transition olsun.
```

### 9. Scroll Progress Bar

```
Sayfanın en üstüne scroll progress bar ekle. Kullanıcı aşağı kaydırdıkça gold renkte dolsun.
```

### 10. Back to Top Button

```
Sayfanın sağ alt köşesine "yukarı çık" butonu ekle. Sadece kullanıcı biraz aşağı kaydırdığında görünsün. Smooth scroll ile en üste çıksın.
```

---

## 📝 Content Updates

### 11. Yeni Hizmet Ekleme

```
Services array'ine "Miras Hukuku" ekle. Icon olarak Lucide'dan uygun bir icon seç. Açıklama: "Miras paylaşımı, vasiyet ve miras hukuku uyuşmazlıklarında danışmanlık"
```

### 12. Testimonial Güncelleme

```
İlk testimonial'ın yorumunu şu şekilde değiştir: "Velayet davamda gösterdiği profesyonel yaklaşım ve empatik tutumu için çok teşekkür ederim."
```

### 13. Çalışma Saatleri Değiştirme

```
Çalışma saatlerini güncelle: Pazartesi-Cuma 09:00-17:30, Cumartesi kapalı
```

### 14. Hero Section Metni

```
Hero section'daki ana başlığı "Adaletin Yanında, Haklarınızın Güvencesi" olarak değiştir.
```

### 15. Footer'a Link Ekleme

```
Footer'a sosyal medya linkleri ekle. LinkedIn ve Instagram iconları ekle, hover'da gold olsunlar.
```

---

## 🚀 Performance

### 16. Image Lazy Loading

```
Eğer gelecekte görseller eklenirse, tüm img taglarına loading="lazy" attribute'u ekle.
```

### 17. Code Splitting

```
React.lazy() kullanarak About, Services, Testimonials ve Contact section'larını lazy load et.
```

### 18. Bundle Size Analizi

```
rollup-plugin-visualizer ekle ve bundle size'ı analiz et. En büyük paketleri göster.
```

### 19. Preload Critical Resources

```
index.html'e critical CSS ve font'lar için preload linkleri ekle.
```

### 20. Service Worker

```
Offline çalışma için basit bir service worker ekle. Static asset'leri cache'le.
```

---

## 🔍 SEO & Accessibility

### 21. Structured Data

```
index.html'e JSON-LD formatında LegalService schema markup ekle. Adres, telefon, email bilgilerini içersin.
```

### 22. Alt Text Ekleme

```
Tüm icon'lara ve gelecekte eklenecek görsellere anlamlı alt text ekle.
```

### 23. ARIA Labels

```
Navigation linklerine ve butonlara uygun aria-label attribute'ları ekle.
```

### 24. Meta Tags Genişletme

```
Twitter Card meta tagları ekle. og:image için bir placeholder image ekle.
```

### 25. Sitemap Oluşturma

```
public/ klasörüne sitemap.xml dosyası oluştur. Tüm section'ları içersin.
```

---

## 🐛 Bug Fixes

### 26. Mobil Menü Kapatma

```
Mobil menüde bir linke tıklandığında menü otomatik kapansın ama smooth scroll tamamlansın.
```

### 27. Scroll Offset

```
Navigation linklerine tıklandığında section başlıkları navbar'ın altında kalmasın. Offset ekle.
```

### 28. AOS Animasyon Tekrarı

```
AOS animasyonlarını sadece bir kez çalıştır. once: true ayarını kontrol et.
```

### 29. Responsive Grid Gap

```
Services grid'inde mobilde gap çok büyük. Mobilde gap-4, desktop'ta gap-8 yap.
```

### 30. Z-Index Sorunu

```
Mobil menü açıkken diğer elementlerin üstünde kalmasını sağla. Z-index değerlerini kontrol et.
```

---

## 🎯 Advanced Features

### 31. Dark/Light Mode Toggle

```
Sayfaya dark/light mode toggle ekle. Şu anki dark tema default olsun. Light mode'da arka plan beyaz, text siyah olsun.
```

### 32. Multi-language Support

```
i18next kullanarak Türkçe/İngilizce dil desteği ekle. Navigation'a dil değiştirme butonu ekle.
```

### 33. Blog Section

```
Yeni bir blog section ekle. Blog post'ları için data array oluştur. Her post'ta başlık, özet, tarih ve okuma süresi olsun.
```

### 34. FAQ Accordion

```
Services section'dan sonra FAQ (Sık Sorulan Sorular) accordion'u ekle. En az 5 soru-cevap olsun.
```

### 35. Testimonials Slider

```
Testimonials'ı slider/carousel yap. Swiper.js kullan. Otomatik geçiş ve navigation okları ekle.
```

---

## 💡 UI/UX Improvements

### 36. Loading Skeleton

```
Sayfa yüklenirken content yerine skeleton loader göster. Framer Motion kullan.
```

### 37. Smooth Page Transitions

```
Section'lar arası geçişlerde parallax efekti ekle. Scroll hızına göre elementler farklı hızda hareket etsin.
```

### 38. Micro Interactions

```
Butonlara tıklandığında ripple efekti ekle. Framer Motion kullan.
```

### 39. Toast Notifications

```
İletişim formu gönderildiğinde toast notification göster. react-hot-toast kullan.
```

### 40. Animated Counter

```
About section'a başarı istatistikleri ekle. Sayılar animasyonlu olarak artsın (örn: 500+ Dava, 15+ Yıl Deneyim).
```

---

## 🔧 Development Tools

### 41. ESLint Konfigürasyonu

```
Daha strict ESLint kuralları ekle. Unused variables, console.log'ları uyar.
```

### 42. Prettier Setup

```
Prettier ekle ve konfigüre et. Format on save aktif olsun.
```

### 43. Husky Pre-commit Hook

```
Husky ekle. Commit öncesi lint ve format kontrolü yapsın.
```

### 44. Environment Variables

```
.env dosyası oluştur. Google Maps API key'i environment variable olarak kullan.
```

### 45. TypeScript Migration

```
Projeyi TypeScript'e migrate et. Önce App.jsx'i App.tsx yap, type'ları ekle.
```

---

## 📱 Mobile Optimizations

### 46. Touch Gestures

```
Testimonials section'a swipe gesture desteği ekle. Sağa-sola kaydırarak geçiş yapılabilsin.
```

### 47. Mobile Menu Animation

```
Mobil menü açılırken slide-in animasyonu ekle. Framer Motion kullan.
```

### 48. Tap Highlight

```
Mobilde butonlara ve linklere tap highlight efekti ekle. Active state'te hafif scale yapsın.
```

### 49. Viewport Height Fix

```
iOS Safari'de viewport height sorunu varsa düzelt. 100vh yerine 100dvh kullan.
```

### 50. Mobile Performance

```
Mobil cihazlarda animasyonları optimize et. prefers-reduced-motion media query ekle.
```

---

## 💬 Nasıl Kullanılır?

1. **Cursor AI'ı Aç**: `Cmd/Ctrl + K` veya `Cmd/Ctrl + L`
2. **Prompt'u Kopyala**: Yukarıdaki prompt'lardan birini kopyala
3. **Yapıştır ve Enter**: Cursor AI prompt'u işleyecek ve kodu güncelleyecek
4. **Sonucu Kontrol Et**: Değişiklikleri gözden geçir ve onayla

## 🎨 Custom Prompt Yazma İpuçları

- **Spesifik ol**: "Butonu güzelleştir" yerine "Butona hover'da scale-105 ve shadow-lg ekle"
- **Context ver**: Hangi dosya, hangi component, hangi section
- **Örnek göster**: İstediğin sonuca benzer bir örnek ver
- **Adım adım**: Karmaşık değişiklikler için adım adım ilerle

## 🚀 Başarılar!

Bu prompt'lar ile projenizi kolayca geliştirebilirsiniz. Kendi prompt'larınızı da ekleyebilirsiniz!
