const LiquidFilter = () => (
    <svg className="hidden">
        <defs>
            <filter id="liquid-refract">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />

                <feDisplacementMap in="SourceGraphic" in2="gooey" scale="20" xChannelSelector="R" yChannelSelector="G" />
            </filter>
        </defs>
    </svg>
);

export default LiquidFilter;