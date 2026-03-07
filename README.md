# Elvan Akalin — 3D Cinematic Portfolio

Kişisel yazılımcı/tasarımcı portfolio sitesi. Three.js ile 3D arka plan, GSAP ile sinematik scroll animasyonları içerir.

## 🚀 Demo

> [elvanakln.github.io/portfolio-website](https://elvanakln.github.io/portfolio-website) *(GitHub Pages aktif edildikten sonra)*

## ✨ Özellikler

- **3D Particle Sistemi** — 1500 mor/eflatun parlayan nokta, additive blending
- **Wireframe Icosahedron** — Scroll ile büyüyen geometrik 3D obje
- **Mouse Parallax** — Kamera mouse pozisyonunu yavaşça takip eder
- **Sinematik Loader** — 0'dan 100'e sayan giriş ekranı
- **Scroll Animasyonları** — Her section scroll'a girince fade-up ile belirir
- **3D Kart Tilt** — Proje kartlarında mouse'a göre açı değişimi
- **Skill Card Glow** — Mouse'u takip eden radial gradient ışık efekti
- **Responsive** — Mobil, tablet ve masaüstü uyumlu

## 🛠 Kullanılan Teknolojiler

| Teknoloji | Versiyon | Amaç |
|-----------|----------|------|
| [Three.js](https://threejs.org/) | r128 | 3D sahne, particle sistemi |
| [GSAP](https://greensock.com/gsap/) | 3.12.5 | Scroll animasyonları, parallax |
| [ScrollTrigger](https://greensock.com/scrolltrigger/) | 3.12.5 | Scroll-triggered animasyonlar |
| Space Grotesk | — | Body font |
| Syne | — | Başlık font |

## 📁 Dosya Yapısı

```
portfolio/
├── index.html       # Ana HTML
├── css/
│   └── style.css    # Tüm stiller
└── js/
    └── main.js      # Three.js 3D sahne + GSAP animasyonlar
```

## 🎨 Renk Paleti

| Renk | Hex | Kullanım |
|------|-----|----------|
| ![#0a0a0a](https://placehold.co/12x12/0a0a0a/0a0a0a.png) Koyu Siyah | `#0a0a0a` | Ana arka plan |
| ![#6c5ce7](https://placehold.co/12x12/6c5ce7/6c5ce7.png) Mor | `#6c5ce7` | Accent |
| ![#a29bfe](https://placehold.co/12x12/a29bfe/a29bfe.png) Eflatun | `#a29bfe` | Accent açık |
| ![#f5f5f5](https://placehold.co/12x12/f5f5f5/f5f5f5.png) Beyaz | `#f5f5f5` | Yazı |

## 📦 Kurulum

Herhangi bir kurulum gerekmez. Tüm bağımlılıklar CDN üzerinden yüklenir.

```bash
git clone https://github.com/elvanakln/portfolio-website.git
cd portfolio-website
# index.html dosyasını tarayıcıda aç
```

## 📄 Lisans

MIT © [Elvan Akalin](https://github.com/elvanakln)
