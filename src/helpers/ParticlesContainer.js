import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { initColorfulParticles, initNumberParticles, initSnowParticles, updateColorfulParticles, updateNumberParticles, updateSnowParticles, initLinkedParticles, updateLinkedParticles, drawLinks, initBubbleParticles, updateBubbleParticles } from './particles';

const ParticlesContainer = ({ numParticles = 100, particleColor, background = '#080808', animationType }) => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const resizeCanvas = canvas => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    const initParticles = canvas => {
        switch (animationType) {
            case 'snow':
                particles.current = initSnowParticles(canvas, numParticles);
                break;
            case 'color':
                particles.current = initColorfulParticles(canvas, numParticles);
                break;
            case 'number':
                particles.current = initNumberParticles(canvas, numParticles);
                break;
            case 'link':
                particles.current = initLinkedParticles(canvas, numParticles);
                break;
            case 'error':
                particles.current = initBubbleParticles(canvas, numParticles);
                break;
            default:
                particles.current = [];
        }
    };
    const updateParticles = canvas => {
        switch (animationType) {
            case 'snow':
                updateSnowParticles(particles.current, canvas);
                break;
            case 'color':
                updateColorfulParticles(particles.current, canvas);
                break;
            case 'number':
                updateNumberParticles(particles.current, canvas);
                break;
            case 'link':
                updateLinkedParticles(particles.current, canvas);
                break;
            case 'error':
                updateBubbleParticles(particles.current, canvas);
                break;
            default:
                break;
        }
    };
    const drawParticles = (ctx, canvas) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.current.forEach(p => {
            if (p.value !== undefined) {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle || 0);
                ctx.fillStyle = particleColor;
                ctx.font = `${p.size}px digit`;
                ctx.fillText(p.value, 0, 0);
                ctx.restore();
            } else if (animationType === 'error') {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.beginPath();
                const s = p.size;
                ctx.moveTo(0, -s / 2);
                ctx.lineTo(-s / 2, s / 2);
                ctx.lineTo(s / 2, s / 2);
                ctx.closePath();
                ctx.fillStyle = particleColor;
                ctx.fill();
                ctx.restore();
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();
            }
            if (animationType === 'link') drawLinks(ctx, particles.current, 100, particleColor);
        });
    };
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        resizeCanvas(canvas);
        initParticles(canvas);
        const update = () => {
            updateParticles(canvas);
            drawParticles(ctx, canvas);
        };
        gsap.ticker.add(update);
        window.addEventListener('resize', () => {
            resizeCanvas(canvas);
            initParticles(canvas);
        });
        return () => {
            gsap.ticker.remove(update);
            window.removeEventListener('resize', resizeCanvas);
        };
    });
    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%', display: 'block', background }} />
};

export default ParticlesContainer;