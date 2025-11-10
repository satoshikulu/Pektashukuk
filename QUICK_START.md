# 🚀 Hızlı Başlangıç Rehberi

Bu rehber, projeyi hızlıca çalıştırmanız için gereken adımları içerir.

## ⚡ 3 Adımda Başla

### 1. Bağımlılıkları Yükle

```bash
npm install
```

### 2. Development Sunucusunu Başlat

```bash
npm run dev
```

### 3. Tarayıcıda Aç

```
http://localhost:5173
```

## 📋 Temel Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm install` | Bağımlılıkları yükler |
| `npm run dev` | Development sunucusunu başlatır |
| `npm run build` | Production build oluşturur |
| `npm run preview` | Production build'i önizler |

## 🏗️ Proje Yapısı

```
avukat-sitesi/
├── src/
│   ├── App.jsx          # Ana component (tüm sections burada)
│   ├── main.jsx         # React entry point + AOS init
│   └── index.css        # Global styles + Tailwind
├── public/              # Static files
├── index.html           # HTML template + SEO meta tags
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind + custom colors
```

## 🎨 Hızlı Özelleştirme

### İçerik Değiştirme

`src/App.jsx` dosyasını açın ve data array'lerini güncelleyin:

```javascript
// Hizmetleri güncelle
const services = [
  {
    id: 1,
    title: "Yeni Hizmet",
    description: "Açıklama",
    icon: IconName
  }
]

// Testimonials güncelle
const testimonials = [
  {
    id: 1,
    name: "İsim",
    rating: 5,
    comment: "Yorum",
    service: "Hizmet"
  }
]

// İletişim bilgilerini güncelle
const contactInfo = {
  address: { ... },
  phone: { ... },
  email: "...",
  mapEmbedUrl: "..."
}
```

### Renkleri Değiştirme

`tailwind.config.js` dosyasını açın:

```javascript
colors: {
  gold: {
    DEFAULT: '#d4af37',  // Ana gold rengi
    light: '#f0d98d',    // Açık ton
    dark: '#b8941f'      // Koyu ton
  }
}
```

### Logo/Başlık Değiştirme

`src/App.jsx` içinde navigation bar'ı bulun:

```javascript
<div className="text-2xl font-bold text-gold">
  Av. Halil Pektaş  {/* Burası değiştir */}
</div>
```

## 🔧 Sık Kullanılan Değişiklikler

### Google Maps Koordinatlarını Güncelleme

1. [Google Maps](https://www.google.com/maps) adresine git
2. Konumunuzu bul
3. "Paylaş" > "Harita yerleştir" > Kodu kopyala
4. `src/App.jsx` içinde `contactInfo.mapEmbedUrl` değerini güncelle

### Yeni Section Ekleme

```javascript
<section id="yeni-section" className="py-16 md:py-24 bg-dark">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-white mb-12">
      Başlık
    </h2>
    {/* İçerik */}
  </div>
</section>
```

Navigation'a link ekle:

```javascript
<Link to="yeni-section" smooth={true} duration={500}>
  Yeni Section
</Link>
```

## 🐛 Sorun Giderme

### Port zaten kullanımda

```bash
# Farklı port kullan
npm run dev -- --port 3000
```

### Build hatası

```bash
# node_modules ve package-lock.json'u sil
rm -rf node_modules package-lock.json

# Yeniden yükle
npm install
```

### Tailwind stilleri yüklenmiyor

```bash
# Tailwind'i yeniden derle
npm run dev
```

## 📚 Daha Fazla Bilgi

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment rehberi
- [CURSOR_PROMPTS.md](./CURSOR_PROMPTS.md) - AI prompt örnekleri
- [README.md](./README.md) - Detaylı dokümantasyon

## 💡 İpuçları

- Development sırasında tarayıcı otomatik yenilenir (Hot Module Replacement)
- Tailwind class'ları değiştirdiğinizde anında güncellenir
- Console'da hata varsa tarayıcı developer tools'u açın (F12)
- Responsive tasarımı test etmek için tarayıcı developer tools'da device toolbar'ı kullanın

## 🎉 Başarılar!

Artık projeyi çalıştırdınız ve özelleştirebilirsiniz. İyi çalışmalar!
