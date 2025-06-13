class CrideSystem01 {
    constructor(id, config) {
      
      const canvas = document.querySelector(id);
      
      const { width, height } = canvas.getBoundingClientRect();
      const cWidth = width;
      const cHeight = height;

        const ctx = canvas.getContext('2d');
        const dpr = 2;

        this.mouseOver = false;
        this.cWidth = cWidth;
        this.cHeight = cHeight;

        canvas.style.width = cWidth + 'px';
        canvas.style.height = cHeight + 'px';

        canvas.width = cWidth * dpr;
        canvas.height = cHeight * dpr;

        ctx.scale(dpr, dpr);
        ctx.lineWidth = 1;

        canvas.closest(config.hoverContainer || 'canvas').addEventListener('mouseover', () => {
            this.mouseOver = true;
        });

        canvas.closest(config.hoverContainer || 'canvas').addEventListener('mouseleave', () => {
            this.mouseOver = false;
            time = 0;
        });

        const duration = config.duration || 5000;
        const space = config.space || 0.1;
        this.vLineCount = config.lineCount || 5;

        let lastTime = performance.now();
        let time = 0;

        const hLine = (time = 0, start = 0) => {
            const offset = start * duration;
            time += offset;
            let progress = time / duration;

            const ease = (p) => p * p * p;

            try {
                if (progress < 0.1 || progress > 1.2) return;

                ctx.save();

                const lineOpacity = this.mouseOver ? 0.5 : 0.3;
                ctx.strokeStyle = `rgba(255, 255, 255, ${ease(progress) + 0.15 > lineOpacity ? lineOpacity : ease(progress) + 0.15})`;

                ctx.beginPath();
                ctx.moveTo(0, ease(progress) * (221.62 - 14.19) + 14.19);
                ctx.lineTo(cWidth - 0, ease(progress) * (221.62 - 14.19) + 14.19);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();

                ctx.save();
                const path = new Path2D();
                path.rect(0, 0, cWidth, cHeight);
                path.moveTo(cWidth / 2, 8);
                path.lineTo(cWidth, cHeight - 8);
                path.lineTo(0, cHeight - 8);
                path.closePath();

                ctx.clip(path, 'evenodd');

                ctx.globalCompositeOperation = 'destination-out';
                ctx.fillStyle = 'rgba(0, 0, 0, 1)';
                ctx.fillRect(0, 0, cWidth, cHeight);
                ctx.globalCompositeOperation = 'source-over';
                ctx.restore();
            } catch (err) {}
        };

        const render = (currentTime) => {
            requestAnimationFrame(render);
            const diff = currentTime - lastTime;
            ctx.clearRect(0, 0, cWidth, cHeight);

            this.line(ctx);

            for (let i = -1; i < 0.9; i += space) hLine(time, i);

            this.drawVignette(ctx);

            lastTime = currentTime;
            if (!this.mouseOver) return;

            if (time < duration) time += diff;
            else time = 0;
        };

        requestAnimationFrame(render);
    }

    drawVignette(ctx) {
        const { cWidth, cHeight } = this;

        ctx.save();

        const grad = ctx.createLinearGradient(cWidth / 2, cHeight / 2, cWidth / 2, cHeight * 0.8);
        grad.addColorStop(0, '#09090900');
        grad.addColorStop(1, '#090909ff');
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = grad;
        ctx.fillRect(0, cHeight / 2, cWidth, cHeight / 2);
        ctx.globalCompositeOperation = 'source-over';

        ctx.restore();
    }

    line(ctx) {
        const { cWidth, cHeight } = this;

        ctx.save();

        ctx.strokeStyle = `rgba(255, 255, 255, ${this.mouseOver ? 0.75 : 0.3})`;

        for (let i = 0; i <= this.vLineCount; i++) {
            ctx.moveTo(cWidth / 2, 8);
            ctx.lineTo(cWidth * (i / this.vLineCount), cHeight - 8);
        }
        ctx.stroke();

        ctx.restore();
    }
}

class CrideSystem02 {
    constructor(id, config) {
        const cWidth = 336;
        const cHeight = 250;

        const canvas = document.querySelector(id);
        const ctx = canvas.getContext('2d');
        const dpr = 2;

        this.mouseOver = false;
        this.cWidth = cWidth;
        this.cHeight = cHeight;

        canvas.style.width = cWidth + 'px';
        canvas.style.height = cHeight + 'px';

        canvas.width = cWidth * dpr;
        canvas.height = cHeight * dpr;

        ctx.scale(dpr, dpr);
        ctx.lineWidth = 1;

        canvas.closest(config.hoverContainer || 'canvas').addEventListener('mouseover', () => {
            this.mouseOver = true;
        });

        canvas.closest(config.hoverContainer || 'canvas').addEventListener('mouseleave', () => {
            this.mouseOver = false;
            time = 0;
        });

        const duration = config.duration || 5000;
        const space = config.space || 0.1;

        let lastTime = performance.now();
        let time = 0;

        const render = (currentTime) => {
            requestAnimationFrame(render);
            const diff = currentTime - lastTime;
            ctx.clearRect(0, 0, cWidth, cHeight);

            this.line(ctx);

            for (let i = -1; i < 0.9; i += space) circle(time, i);

            this.drawVignette(ctx);

            lastTime = currentTime;
            if (!this.mouseOver) return;

            if (time < duration) {
                time += diff;
            } else {
                time = 0;
            }
        };

        const circle = (time = 0, start = 0) => {
            const offset = start * duration;
            time += offset;
            let progress = time / duration;

            const ease = (p) => {
                return p * p;
            };

            const width = (ease(progress) * 50.52) / 2 + 30.07 / 2;
            const height = (ease(progress) * 139.04) / 2 + 57.96 / 2;

            const x = ease(progress) * (cWidth - 60) + 40;
            const y = cHeight / 2;

            try {
                if (progress < 0.2 || progress > 1.2) return;

                ctx.save();

                const lineOpacity = this.mouseOver ? 0.75 : 0.5;
                ctx.strokeStyle = `rgba(255, 255, 255, ${ease(progress) + 0.15 > lineOpacity ? lineOpacity : ease(progress) + 0.15})`;

                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath();
                ctx.ellipse(x, y, height, width, (Math.PI / 180) * 90, Math.PI / 180, Math.PI);
                ctx.fill();
                ctx.closePath();
                ctx.globalCompositeOperation = 'source-over';

                ctx.beginPath();
                ctx.ellipse(x, y, width, height, 0, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();

                ctx.restore();
            } catch (err) {}
        };
        requestAnimationFrame(render);
    }

    line(ctx) {
        const { cWidth, cHeight } = this;

        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.mouseOver ? 0.75 : 0.5})`;
        ctx.beginPath();
        ctx.moveTo(20, cHeight / 2 - 0.5);
        ctx.lineTo(cWidth - 20, cHeight / 2 - 0.75);
        ctx.lineTo(cWidth - 20, cHeight / 2 + 0.75);
        ctx.lineTo(20, cHeight / 2 + 0.5);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

    drawVignette(ctx) {
        const { cWidth, cHeight } = this;

        ctx.save();

        let grad = ctx.createLinearGradient(cWidth / 2, cHeight / 2, cWidth / 2, cHeight * 0.8);
        grad.addColorStop(0, '#09090900');
        grad.addColorStop(0.5625, '#0909098F');
        grad.addColorStop(1, '#090909ff');
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = grad;
        ctx.fillRect(0, cHeight / 2, cWidth, cHeight / 2);
        ctx.globalCompositeOperation = 'source-over';

        grad = ctx.createLinearGradient(cWidth * 0.8, cHeight / 2, cWidth, cHeight / 2);
        grad.addColorStop(0, '#90909000');
        grad.addColorStop(0.5625, '#9090908F');
        grad.addColorStop(1, '#909090ff');
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = grad;
        ctx.fillRect(cWidth * 0.8, 0, cWidth, cHeight);
        ctx.globalCompositeOperation = 'source-over';

        grad = ctx.createLinearGradient(cWidth * 0.2, cHeight / 2, 0, cHeight / 2);
        grad.addColorStop(0, '#90909000');
        grad.addColorStop(0.5625, '#9090908F');
        grad.addColorStop(1, '#909090ff');
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, cWidth * 0.2, cHeight);
        ctx.globalCompositeOperation = 'source-over';

        ctx.restore();
    }
}

class CrideSystem03 {
    constructor(id, config) {
        const cWidth = 336;
        const cHeight = 250;

        const canvas = document.querySelector(id);
        const ctx = canvas.getContext('2d');
        const dpr = 2;

        this.mouseOver = false;
        this.cWidth = cWidth;
        this.cHeight = cHeight;

        canvas.style.width = cWidth + 'px';
        canvas.style.height = cHeight + 'px';

        canvas.width = cWidth * dpr;
        canvas.height = cHeight * dpr;

        ctx.scale(dpr, dpr);
        ctx.lineWidth = 1;

        canvas.closest(config.hoverContainer || 'canvas').addEventListener('mouseover', () => {
            this.mouseOver = true;
        });

        canvas.closest(config.hoverContainer || 'canvas').addEventListener('mouseleave', () => {
            this.mouseOver = false;
            time = 0;
        });

        const duration = config.duration || 5000;
        const space = config.space || 0.1;

        let lastTime = performance.now();
        let time = 0;

        const hLine = (time = 0, start = 0) => {
            const offset = start * duration;
            time += offset;
            let progress = time / duration;

            const ease = (p) => 1 - Math.pow(1 - p, 3);

            try {
                if (progress < 0.1 || progress > 0.9) return;

                ctx.save();

                const lineOpacity = this.mouseOver ? 0.75 : 0.3;
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 / (1 - ease(progress)) + 0.15 > lineOpacity ? lineOpacity : 1 / (1 - ease(progress)) + 0.15})`;

                ctx.beginPath();
                ctx.moveTo(58.1, (1 - ease(progress)) * (221.62 - 14.19) + 14.19);
                ctx.lineTo(cWidth - 58.1, (1 - ease(progress)) * (221.62 - 14.19) + 14.19);
                ctx.stroke();
                ctx.closePath();

                ctx.restore();
            } catch (err) {}
        };

        const render = (currentTime) => {
            requestAnimationFrame(render);
            const diff = currentTime - lastTime;
            ctx.clearRect(0, 0, cWidth, cHeight);

            this.line(ctx);

            for (let i = -1; i < 0.9; i += space) hLine(time, i);

            this.drawVignette(ctx);

            lastTime = currentTime;
            if (!this.mouseOver) return;

            if (time < duration) time += diff;
            else time = 0;
        };

        requestAnimationFrame(render);
    }

    drawVignette(ctx) {
        const { cWidth, cHeight } = this;

        ctx.save();

        const grad = ctx.createLinearGradient(cWidth / 2, cHeight / 2, cWidth / 2, cHeight * 0.8);
        grad.addColorStop(0, '#09090900');
        grad.addColorStop(1, '#090909ff');
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = grad;
        ctx.fillRect(0, cHeight / 2, cWidth, cHeight / 2);
        ctx.globalCompositeOperation = 'source-over';

        ctx.restore();
    }

    line(ctx) {
        const { cWidth, cHeight } = this;
        ctx;
        ctx.save();

        ctx.strokeStyle = `rgba(255, 255, 255, ${this.mouseOver ? 0.75 : 0.3})`;

        ctx.beginPath();
        ctx.lineWidth = 1;
        for (let i = 0; i <= 10; i++) {
            ctx.moveTo(cWidth / 2, -250);
            ctx.lineTo(cWidth * 1.25 * (i / 10), cHeight);
        }
        ctx.stroke();

        ctx.save();

        ctx.beginPath();
        ctx.rect(0, 0, cWidth, cHeight);

        ctx.rect(57.1, 14.19, cWidth - 57.1 * 2, cHeight - 14.19 * 2);
        ctx.clip('evenodd');

        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, cWidth, cHeight);

        ctx.restore();
        ctx.globalCompositeOperation = 'source-over';

        ctx.beginPath();
        ctx.rect(57.1, 14.19, cWidth - 57.1 * 2, cHeight - 14.19 * 2);
        ctx.stroke();
        ctx.closePath();

        ctx.clearRect(57.1 - 1, 14.19 - 1, 15, 15);
        ctx.fillRect(cWidth - 57.1 - 14, 14.19 - 1, 15, 15);

        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(57.1 + 13, 14.19);
        ctx.lineTo(57.1, 14.19);
        ctx.lineTo(57.1, 27.19);

        ctx.moveTo(cWidth - 57.1 - 13, 14.19);
        ctx.lineTo(cWidth - 57.1, 14.19);
        ctx.lineTo(cWidth - 57.1, 27.19);
        ctx.stroke();

        ctx.closePath();

        ctx.restore();
    }
}
