const LiquidFilter = () => (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="liquid-goo">
            {/* 1. Blur the edges of everything inside the container */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            {/* 2. Increase contrast of the alpha channel to "sharpen" the blur back into a shape */}
            <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  
                0 1 0 0 0  
                0 0 1 0 0  
                0 0 0 18 -7"
                result="goo"
            />
            {/* 3. Ensure the colors stay crisp and don't bleed */}
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
    </svg>
);

export default LiquidFilter;