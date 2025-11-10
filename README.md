# Av. Halil Pektaş Hukuk Bürosu Web Sitesi

Modern, responsive ve kullanıcı dostu hukuk bürosu web sitesi.

## 🎯 Özellikler

- ✨ Modern Dark & Gold tema
- 📱 Tam responsive tasarım (mobil, tablet, desktop)
- 🎭 Glassmorphism efektleri
- ⚡ Smooth scroll animasyonları
- 🎨 Framer Motion ve AOS animasyonları
- 🔍 SEO optimize edilmiş
- ♿ Accessibility uyumlu
- 🚀 Hızlı yükleme süreleri

## 🛠️ Teknolojiler

- **React 18** - UI framework
- **Vite** - Build tool ve dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animasyon kütüphanesi
- **AOS** - Scroll animasyonları
- **Lucide React** - Modern icon library
- **React Scroll** - Smooth scrolling

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Production build'i önizle
npm run preview
```

## 🚀 Kullanım

Development sunucusu başlatıldıktan sonra tarayıcınızda şu adresi açın:

```
http://localhost:5173
```

## 📂 Proje Yapısı

```
avukat-sitesi/
├── public/              # Static dosyalar
├── src/
│   ├── App.jsx         # Ana component
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite konfigürasyonu
└── tailwind.config.js  # Tailwind konfigürasyonu
```

## 🎨 Renk Paleti

- **Dark**: #0a0a0a (Arka plan)
- **Gold**: #d4af37 (Vurgu rengi)
- **White**: #ffffff (Ana metin)
- **Gray**: Çeşitli tonlar (İkincil metin)

## 📱 Bölümler

1. **Hero Section** - Etkileyici giriş ve CTA butonları
2. **Hakkımızda** - Büro tanıtımı ve misyon-vizyon
3. **Hizmetler** - 6 hukuk hizmeti kategorisi
4. **Referanslar** - Müvekkil yorumları
5. **İletişim** - İletişim bilgileri ve Google Maps
6. **Footer** - Telif hakkı bilgisi

## 🔧 Özelleştirme

### Renkleri Değiştirme

`tailwind.config.js` dosyasında renk paletini özelleştirebilirsiniz:

```javascript
colors: {
  gold: {
    DEFAULT: '#d4af37',
    light: '#f0d98d',
    dark: '#b8941f'
  }
}
```

### İçerik Güncelleme

`src/App.jsx` dosyasında data array'lerini güncelleyerek içeriği değiştirebilirsiniz:
- `services` - Hizmetler
- `testimonials` - Müvekkil yorumları
- `contactInfo` - İletişim bilgileri

## 📄 Lisans

© 2025 Av. Halil Pektaş Hukuk Bürosu - Tüm Hakları Saklıdır

## 📞 İletişim

- **Adres**: Camikebir Mah. Atatürk Cad. Anıt Meydanı Kulusite İş Merkezi Kat:1 No:112, 42770 Kulu/Konya
- **Telefon**: (0332) 641 41 47
- **E-posta**: info@halilpektashukuk.com
