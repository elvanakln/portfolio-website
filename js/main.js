/* ==========================================
   THREE.JS - 3D PARTICLE MESH BACKGROUND
   ========================================== */
const canvas = document.getElementById('webgl');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Particles
const particleCount = 1500;
const positions = new Float32Array(particleCount * 3);
const velocities = [];

for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    velocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.003
    });
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
    color: 0x6c5ce7,
    size: 0.03,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Wireframe Icosahedron
const icoGeometry = new THREE.IcosahedronGeometry(3, 1);
const icoMaterial = new THREE.MeshBasicMaterial({
    color: 0x6c5ce7,
    wireframe: true,
    transparent: true,
    opacity: 0.06
});
const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
scene.add(icosahedron);

// Torus
const torusGeometry = new THREE.TorusGeometry(5, 0.02, 16, 100);
const torusMaterial = new THREE.MeshBasicMaterial({
    color: 0xa29bfe,
    transparent: true,
    opacity: 0.08
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.rotation.x = Math.PI / 3;
scene.add(torus);

camera.position.z = 8;

// Mouse tracking
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// Scroll tracking
let scrollProgress = 0;
window.addEventListener('scroll', () => {
    scrollProgress = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
});

// Animate
function animate() {
    requestAnimationFrame(animate);

    particles.rotation.y += 0.0003;
    particles.rotation.x += 0.0001;
    icosahedron.rotation.y += 0.001;
    icosahedron.rotation.x += 0.0005;
    torus.rotation.z += 0.0008;

    // Mouse follow
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.03;
    camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.03;
    camera.lookAt(scene.position);

    // Scroll-based transformations
    icosahedron.scale.setScalar(1 + scrollProgress * 2);
    icosahedron.material.opacity = Math.max(0, 0.06 - scrollProgress * 0.04);
    particles.material.opacity = Math.max(0, 0.6 - scrollProgress * 0.3);

    // Animate particle positions
    const pos = geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;
        if (Math.abs(pos[i * 3]) > 10) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 10) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 10) velocities[i].z *= -1;
    }
    geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ==========================================
   LOADER
   ========================================== */
const loader = document.querySelector('.loader');
const loaderCounter = document.querySelector('.loader-counter');
const loaderProgress = document.querySelector('.loader-progress');
let count = 0;
let loaderDone = false;

function updateLoader() {
    if (loaderDone) return;

    count += Math.floor(Math.random() * 3) + 1;
    if (count >= 100) {
        count = 100;
        loaderDone = true;
    }

    loaderCounter.textContent = count;
    loaderProgress.style.width = count + '%';

    if (!loaderDone) {
        setTimeout(updateLoader, 30);
    } else {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            loader.style.transition = 'opacity 0.8s ease, visibility 0.8s';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
            initAnimations();
        }, 500);
    }
}
updateLoader();

/* ==========================================
   GSAP + SCROLLTRIGGER
   ========================================== */
gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
    // Hero tag
    gsap.to('.hero-tag', {
        opacity: 1, duration: 1, delay: 0.2,
        ease: 'power3.out'
    });

    // Title words slide up
    gsap.to('.title-word', {
        y: 0, duration: 1.2, stagger: 0.15,
        ease: 'power4.out', delay: 0.4
    });

    // Hero description
    gsap.fromTo('.hero-desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power3.out' }
    );

    // Scroll indicator
    gsap.to('.hero-scroll', {
        opacity: 1, duration: 1, delay: 1.4,
        ease: 'power3.out'
    });

    // Hero parallax on scroll
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -150, opacity: 0
    });

    gsap.to('.hero-overlay-text', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        x: -200
    });

    // Refresh ScrollTrigger after animations settle
    setTimeout(() => ScrollTrigger.refresh(), 100);
}

// Scroll reveals
document.querySelectorAll('.reveal-text, .reveal-up').forEach(el => {
    ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('active'),
    });
});

// Work items - cinematic entrance
gsap.utils.toArray('.work-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 88%',
        },
        y: 80, opacity: 0, duration: 1,
        delay: (i % 2) * 0.15,
        ease: 'power3.out'
    });
});

// Skill cards glow follow mouse
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width * 100);
        const y = ((e.clientY - rect.top) / rect.height * 100);
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
    });
});

// Parallax sections
gsap.utils.toArray('[data-speed]').forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: () => (1 - parseFloat(el.dataset.speed)) * -200
    });
});

// Marquee speed up on scroll
gsap.to('.marquee-inner', {
    scrollTrigger: {
        trigger: '.marquee',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    x: -100
});

/* ==========================================
   NAVIGATION
   ========================================== */
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ==========================================
   WORK ITEM TILT
   ========================================== */
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(item, {
            rotateY: x * 8,
            rotateX: -y * 8,
            transformPerspective: 800,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            rotateY: 0, rotateX: 0,
            duration: 0.6, ease: 'power2.out'
        });
    });
});
