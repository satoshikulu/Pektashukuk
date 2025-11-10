# 🚀 Deployment Rehberi

Bu rehber, web sitenizi canlıya almak için farklı platformlardaki adımları içerir.

## 📋 Deployment Öncesi Kontrol Listesi

- [ ] Production build başarıyla oluşturuluyor (`npm run build`)
- [ ] Tüm linkler çalışıyor
- [ ] İletişim bilgileri doğru
- [ ] Google Maps koordinatları güncel
- [ ] Meta taglar ve SEO bilgileri güncel
- [ ] Favicon eklendi (public/ klasörüne)

## 🌟 Önerilen Platform: Vercel (En Kolay)

### Avantajlar
- ✅ Ücretsiz
- ✅ Otomatik SSL sertifikası
- ✅ Global CDN
- ✅ Otomatik deployment (Git push ile)
- ✅ Çok hızlı

### Adımlar

1. **Vercel Hesabı Oluştur**
   - [vercel.com](https://vercel.com) adresine git
   - GitHub/GitLab/Bitbucket ile giriş yap

2. **Projeyi Git'e Yükle**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Vercel'de Import Et**
   - "New Project" butonuna tıkla
   - Repository'yi seç
   - Framework Preset: Vite
   - Deploy butonuna tıkla

4. **Domain Bağla (Opsiyonel)**
   - Project Settings > Domains
   - Custom domain ekle
   - DNS ayarlarını güncelle

### Vercel CLI ile Deployment

```bash
# Vercel CLI'yi yükle
npm i -g vercel

# Login ol
vercel login

# Deploy et
vercel

# Production'a deploy et
vercel --prod
```

## 🔷 Netlify

### Adımlar

1. **Netlify Hesabı Oluştur**
   - [netlify.com](https://netlify.com) adresine git

2. **Drag & Drop Deployment**
   ```bash
   # Build oluştur
   npm run build
   
   # dist/ klasörünü Netlify'a sürükle-bırak
   ```

3. **Git ile Otomatik Deployment**
   - "New site from Git" seçeneğini seç
   - Repository'yi bağla
   - Build command: `npm run build`
   - Publish directory: `dist`

### Netlify CLI

```bash
# Netlify CLI'yi yükle
npm install -g netlify-cli

# Login ol
netlify login

# Deploy et
netlify deploy

# Production'a deploy et
netlify deploy --prod
```

## 🔥 Firebase Hosting

### Adımlar

1. **Firebase Projesi Oluştur**
   - [console.firebase.google.com](https://console.firebase.google.com)
   - Yeni proje oluştur

2. **Firebase CLI Kur**
   ```bash
   npm install -g firebase-tools
   ```

3. **Login ve Init**
   ```bash
   firebase login
   firebase init hosting
   ```

4. **Konfigürasyon**
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub Actions: `No` (şimdilik)

5. **Build ve Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 📦 GitHub Pages

### Adımlar

1. **vite.config.js Güncelle**
   ```javascript
   export default defineConfig({
     base: '/repo-name/', // Repository adınız
     // ... diğer ayarlar
   })
   ```

2. **Build Script Ekle**
   ```bash
   npm run build
   ```

3. **gh-pages Paketi Kur**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **package.json'a Script Ekle**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

5. **Deploy Et**
   ```bash
   npm run deploy
   ```

## ☁️ AWS S3 + CloudFront

### Adımlar

1. **S3 Bucket Oluştur**
   - AWS Console > S3
   - Bucket oluştur
   - Static website hosting aktif et

2. **Build Yükle**
   ```bash
   npm run build
   aws s3 sync dist/ s3://bucket-name
   ```

3. **CloudFront Distribution Oluştur**
   - Origin: S3 bucket
   - SSL sertifikası ekle
   - Custom domain bağla

## 🐳 Docker

### Dockerfile

```dockerfile
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build ve Run

```bash
# Image oluştur
docker build -t avukat-sitesi .

# Container çalıştır
docker run -p 80:80 avukat-sitesi
```

## 🔧 Environment Variables

Eğer environment variable'lar kullanıyorsanız:

### .env.production

```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key
VITE_SITE_URL=https://halilpektashukuk.com
```

### Vercel'de

- Project Settings > Environment Variables
- Variable ekle

### Netlify'de

- Site settings > Build & deploy > Environment
- Variable ekle

## 📊 Analytics Ekleme

### Google Analytics

1. **Google Analytics Hesabı Oluştur**
   - [analytics.google.com](https://analytics.google.com)

2. **Tracking ID Al**
   - Property oluştur
   - Tracking ID'yi kopyala

3. **index.html'e Ekle**
   ```html
   <head>
     <!-- Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     </script>
   </head>
   ```

## 🔒 SSL Sertifikası

Önerilen platformlar (Vercel, Netlify, Firebase) otomatik SSL sağlar.

Manuel kurulum için:
- Let's Encrypt (Ücretsiz)
- Cloudflare (Ücretsiz)

## 🌐 Custom Domain Bağlama

### DNS Ayarları

**A Record:**
```
Type: A
Name: @
Value: [Platform IP]
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: [Platform domain]
```

### Platform Ayarları

1. **Vercel**: Settings > Domains > Add
2. **Netlify**: Domain settings > Add custom domain
3. **Firebase**: Hosting > Add custom domain

## 🔄 Otomatik Deployment (CI/CD)

### GitHub Actions (Vercel)

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
```

## 📈 Performance Monitoring

### Lighthouse CI

```bash
npm install -g @lhci/cli

# Audit çalıştır
lhci autorun
```

### Web Vitals

```bash
npm install web-vitals

# src/main.jsx'e ekle
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🐛 Deployment Sorunları

### Build Hatası

```bash
# Cache temizle
rm -rf node_modules dist
npm install
npm run build
```

### 404 Hatası (SPA)

Platform'da SPA redirect ayarı yapın:
- Vercel: Otomatik
- Netlify: `_redirects` dosyası
- Firebase: `firebase.json` konfigürasyonu

### Yavaş Yükleme

- CDN kullanın
- Image optimization yapın
- Code splitting aktif edin
- Gzip compression aktif edin

## 📞 Destek

Deployment sırasında sorun yaşarsanız:
- Platform dokümantasyonlarını kontrol edin
- Community forumlarına bakın
- Support ekiplerine ulaşın

## 🎉 Başarılar!

Siteniz artık canlıda! 🚀
