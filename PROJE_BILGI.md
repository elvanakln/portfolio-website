# Elvan Akalin - 3D Sinematik Portfolio Sitesi

## Verilen Prompt
> "Bunun icine ayri bi klasor ac orada farkli bi site olustur o da 3D olsun, sinematik scroll'u olsun. O da benim icin Elvan Akalin icin yazilimci portfolyosu gibi olsun."

## Site Nedir?
Elvan Akalin icin olusturulmus, 3D arka planli ve sinematik scroll animasyonlari iceren kisisel yazilimci/tasarimci portfolio web sitesi.

## Kullanilan Teknolojiler

| Teknoloji | Versiyon | Amac |
|-----------|----------|------|
| **Three.js** | r128 (CDN) | 3D particle sistemi, wireframe objeler, torus |
| **GSAP** | 3.12.5 (CDN) | Scroll-triggered animasyonlar, parallax, tilt |
| **ScrollTrigger** | 3.12.5 (CDN) | Scroll pozisyonuna bagli animasyon tetikleme |
| **Space Grotesk** | Google Fonts | Body font |
| **Syne** | Google Fonts | Baslik font |

## Dosya Yapisi
```
portfolio/
  index.html          - Ana HTML dosyasi
  css/style.css       - Tum stiller
  js/main.js          - Three.js 3D sahne + GSAP animasyonlar + interaktivite
  PROJE_BILGI.md      - Bu dosya
```

## 3D Ozellikleri (Three.js)
- **1500 particle** - Mor/eflatun renkte, additive blending ile parlayan noktalar
- **Wireframe Icosahedron** - Scroll ilerledikce buyuyen geometrik 3D obje
- **Torus (halka)** - Surekli donen ince halka
- **Mouse takibi** - Kamera mouse pozisyonunu yavasca takip eder (parallax hissi)
- **Scroll-reactive** - Scroll ilerledikce particle'lar solar, icosahedron buyur

## Sinematik Scroll Efektleri (GSAP)
- **Loader** - 0'dan 100'e kadar sayan giris ekrani, sonra fade-out
- **Hero giris animasyonu** - Baslik harfleri asagidan yukari kayar (staggered)
- **Hero parallax** - Scroll ile hero icerigi yukari kayar ve solar
- **"DEVELOPER" stroke text** - Arka planda yatay kayan dev yazi
- **Reveal animasyonlari** - Her section elementi scroll'a girince fade-up ile belirir
- **Work item tilt** - Proje kartlarinda mouse pozisyonuna gore 3D aci degisimi
- **Skill card glow** - Yetenek kartlarinda mouse'u takip eden radial gradient isik
- **Marquee hizlanma** - Scroll ile kayan bant hizlanir

## Bolumleri
1. **Loader** - Sayi sayar, progress bar dolar, sonra kayboluyor
2. **Hero** - Buyuk isim, aciklama, scroll indicator
3. **Marquee** - "WEB DEVELOPMENT / UI DESIGN / 3D EXPERIENCE / ..." kayan bant
4. **Hakkimda** - 2 sutunlu layout, sol sticky baslik, sag aciklama + istatistikler
5. **Projeler** - 2x2 grid, resimli proje kartlari (kafe, e-ticaret, kurumsal, blog)
6. **Yetenekler** - 4 kart (Frontend, UI/UX, Backend, Deployment) glow efektli
7. **Iletisim** - E-posta butonu + sosyal medya linkleri
8. **Footer** - Minimal copyright

## Renk Paleti
- `#0a0a0a` - Ana arka plan (koyu siyah)
- `#1a1a1a` - Surface/kart arka plan
- `#6c5ce7` - Accent (mor)
- `#a29bfe` - Accent acik (eflatun)
- `#f5f5f5` - Yazi rengi (beyaz)

## Responsive
- 1024px: Grid'ler tek sutuna dusuyor
- 768px: Hamburger menu, kucuk padding'ler
- 480px: Daha kucuk fontlar, dikey layout
