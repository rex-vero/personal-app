export const initSnowParticles = (canvas, numParticles) => {
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 1 + 0.5,
            drift: (Math.random() - 0.5) * 0.5,
        });
    }
    return particles;
};

export const updateSnowParticles = (particles, canvas) => {
    particles.forEach(p => {
        p.y += p.speed;
        p.x += Math.sin(p.y * 0.01) * p.drift;
        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    });
};

export const initColorfulParticles = (canvas, numParticles) => {
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
        });
    }
    return particles;
};

export const updateColorfulParticles = (particles, canvas) => {
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
};

const digits = '01';
export const initNumberParticles = (canvas, numParticles) => {
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            value: digits[Math.floor(Math.random() * digits.length)],
            size: Math.random() * 24 + 12,
            angle: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.02,
        });
    }
    return particles;
};

export const updateNumberParticles = (particles, canvas) => {
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.rotationSpeed;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
};

export const initLinkedParticles = (canvas, numParticles) => {
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            radius: Math.random() * 2 + 1,
        });
    }
    return particles;
};

export const updateLinkedParticles = (particles, canvas) => {
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
};

export const drawLinks = (ctx, particles, maxDistance, color) => {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = color;
                ctx.globalAlpha = 1 - dist / maxDistance;
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    }
};

export const initBubbleParticles = (canvas, numParticles) => {
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            size: Math.random() * 30 + 40,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.01,
        });
    }
    return particles;
};

export const updateBubbleParticles = (particles, canvas) => {
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        if (p.x < -p.size || p.x > canvas.width + p.size) p.vx *= -1;
        if (p.y < -p.size || p.y > canvas.height + p.size) p.vy *= -1;
    });
};