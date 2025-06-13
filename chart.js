class VChart {
    constructor(className, config = {}) {
        this.container = document.querySelector(className);
        this.chart = this.container.children[0];
        this.data = [...this.chart.querySelectorAll('ChartItem')].map((el) => {
            return {
                name: el.dataset.name,
                value: el.dataset.value,
                color: el.dataset.color,
                textColor: el.dataset.textcolor,
                replaceText: el.dataset.replacetext,
            };
        });
        this.dataset = this.chart.dataset;
        this.duration = config.duration || 3000;
        this.config = config;
        window.addEventListener('resize', this.onResize.bind(this));
    }

    init() {
        this.container.innerHTML = '';
        const canvas = document.createElement('canvas');
        this.container.append(canvas);
        const dpr = 2;

        const { width, height } = this.container.getBoundingClientRect();

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        this.width = width;
        this.height = height;

        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        this.ctx = ctx;
    }

    render(currentTime) {
        const { ctx, width, height } = this;
        const reqId = requestAnimationFrame(this.render.bind(this));

        if (!this.startTime) this.startTime = currentTime;
        const elapsed = currentTime - this.startTime;

        this.progress = easeInOutSine(Math.min(elapsed / this.duration, 1));
        if (this.progress >= 1) cancelAnimationFrame(reqId);

        ctx.clearRect(0, 0, width, height);

        this.drawEmpty();
    }

    onResize() {
        this.init();
        this.render(performance.now());
    }

    play() {
        this.startTime = null;
        requestAnimationFrame(this.render.bind(this));
    }
}

class DoughnutChart extends VChart {
    constructor(...props) {
        super(...props);
        this.init();
    }

    init() {
        super.init();

        this.drawEmpty();
    }

    drawEmpty() {
        const { ctx, width, height } = this;

        ctx.save();

        this.ctx.strokeStyle = 'rgba(255, 255, 255 ,0.1)';
        ctx.lineWidth = width * this.config.lineWidthRatio;
        const chartCenter = [width / 2, height / 2];
        const chartWidth = (width * this.config.chartWidthRatio - ctx.lineWidth) / 2;

        ctx.beginPath();
        ctx.arc(...chartCenter, chartWidth, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    render(currentTime) {
        const { ctx, width, height, progress } = this;
        super.render(currentTime);

        ctx.lineWidth = width * this.config.lineWidthRatio;
        const chartCenter = [width / 2, height / 2];
        const chartWidth = (width * this.config.chartWidthRatio - ctx.lineWidth) / 2;

        this.data.reduce((acc, cur) => {
            const chartStart = (acc * Math.PI) / 180;
            const chartEnd = chartStart + ((cur.value * 3.6 * Math.PI) / 180) * progress;

            ctx.save();
            ctx.strokeStyle = cur.color;
            ctx.beginPath();
            ctx.arc(...chartCenter, chartWidth, chartStart, chartEnd);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

            const middleAngle = (chartStart + chartEnd) / 2;

            const textRadius = chartWidth;
            const textX = chartCenter[0] + Math.cos(middleAngle) * textRadius;
            const textY = chartCenter[1] + Math.sin(middleAngle) * textRadius;

            ctx.save();
            ctx.fillStyle = cur.textColor;
            ctx.font = `${width * this.config.fontSizeRatio}px ${(this.config.fontFamily || []).map((ff) => `"${ff}"`).join(', ')}, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${cur.replaceText ? cur.replaceText : `${cur.value}%`}`, textX, textY);
            ctx.restore();

            return (chartEnd / Math.PI) * 180;
        }, -90);
    }
}

class LineChart extends VChart {
    constructor(...props) {
        super(...props);
        this.init();
    }

    init() {
        super.init();

        this.drawEmpty();
    }

    drawEmpty() {
        const { ctx, width, height, dataset } = this;

        ctx.save();
        ctx.strokeStyle = '#3A3A3A';
        ctx.lineWidth = 1;

        ctx.beginPath();

        ctx.moveTo(width * 0.1, height * 0.9);
        ctx.lineTo(width * 0.9, height * 0.9);
        ctx.stroke();

        ctx.closePath();

        ctx.fillStyle = '#888';
        ctx.font = `10px ${(this.config.fontFamily || []).map((ff) => `"${ff}"`).join(', ')}, sans-serif`;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${dataset.min}`, width * 0.085, height * 0.9);

        ctx.restore();

        ctx.save();
        ctx.strokeStyle = '#3A3A3A';
        ctx.setLineDash([3, 3]);

        const lineCount = (dataset.max - dataset.min) / dataset.gap;

        ctx.beginPath();
        for (let i = 0; i < lineCount; i++) {
            ctx.fillStyle = '#888';
            ctx.font = `10px ${(this.config.fontFamily || []).map((ff) => `"${ff}"`).join(', ')}, sans-serif`;
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${dataset.max - dataset.gap * i}`, width * 0.085, ((height * 0.8) / lineCount) * i + height * 0.1);

            ctx.moveTo(width * 0.1, ((height * 0.8) / lineCount) * i + height * 0.1);
            ctx.lineTo(width * 0.9, ((height * 0.8) / lineCount) * i + height * 0.1);
        }
        ctx.stroke();
        ctx.closePath();

        ctx.restore();

        ctx.save();
        for (let i = 0; i < this.data.length; i++) {
            ctx.fillStyle = '#fff';
            ctx.font = `12px ${(this.config.fontFamily || []).map((ff) => `"${ff}"`).join(', ')}, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                `${this.data[i].name}`,
                ((width * 0.8) / this.data.length) * i + width * 0.1 + (width * 0.8) / this.data.length / 2,
                height * 0.95
            );
        }
        ctx.restore();
    }

    render(currentTime) {
        const { ctx, width, height, progress } = this;
        super.render(currentTime);

        ctx.save();

        for (let i = 0; i < this.data.length; i++) {
            ctx.beginPath();
            const barMaxHeight = height * 0.8;
            const barMinHeight = height * 0.1;
            const barHeight = 1 - this.data[i].value / (this.dataset.max - this.dataset.min);

            const areaWidth = width * 0.8;
            const barAreaWidth = areaWidth / this.data.length;
            const barWidth = barAreaWidth * 0.5;
            const barTop = barMinHeight + barMaxHeight * barHeight;
            const barBottom = barMaxHeight - barMaxHeight * barHeight - barMinHeight;
            const barLeft = barAreaWidth * i + width * 0.1;
            const barRight = barLeft;
            const barCenter = (barRight - barLeft) / 2 + barRight;

            ctx.fillStyle = '#3a3a3a';
            if (i === this.data.length - 1) {
                const gradient = ctx.createLinearGradient(barLeft, barTop + 20, barRight, barBottom + 20);
                gradient.addColorStop(0, '#4F46E4');
                gradient.addColorStop(1, '#2D2881');

                // fillStyle에 그라데이션 적용
                ctx.fillStyle = gradient;
            }

            ctx.rect(barLeft, barTop + 20, barRight, barBottom + 20);
            ctx.fill();
            ctx.closePath();

            if (progress >= 0.99) {
                ctx.save();
                ctx.fillStyle = '#4F46E5';
                ctx.strokeStyle = '#4F46E5';
                ctx.beginPath();
                ctx.arc(
                    ((width * 0.8) / this.data.length) * i + width * 0.1 + (width * 0.8) / this.data.length / 2,
                    height * 0.1 + barMaxHeight * barHeight,
                    3,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
                ctx.closePath();

                if (i + 1 >= this.data.length) break;
                const barHeightNext = 1 - this.data[i + 1].value / (this.dataset.max - this.dataset.min);
                const barMaxHeightNext = height * 0.8;

                ctx.beginPath();
                ctx.moveTo(
                    ((width * 0.8) / this.data.length) * i + width * 0.1 + (width * 0.8) / this.data.length / 2,
                    height * 0.1 + barMaxHeight * barHeight
                );
                ctx.lineTo(
                    ((width * 0.8) / this.data.length) * (i + 1) + width * 0.1 + (width * 0.8) / this.data.length / 2,
                    height * 0.1 + barMaxHeightNext * barHeightNext
                );
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            }
        }

        ctx.restore();
    }
}

function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}
