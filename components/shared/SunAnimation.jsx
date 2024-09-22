const SunAnimation = ({ isDark }) =>
{
    return (
        <div className="relative w-6 h-6">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className={`absolute transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}
            >
                <circle cx="32" cy="32" r="10" className="fill-yellow-400" />
                {Array.from({ length: 12 }).map((_, index) =>
                {
                    const angle = (index * 30 * Math.PI) / 180;
                    const x1 = 32 + 16 * Math.cos(angle);
                    const y1 = 32 + 16 * Math.sin(angle);
                    const x2 = 32 + 30 * Math.cos(angle);
                    const y2 = 32 + 30 * Math.sin(angle);
                    return (
                        <line
                            key={index}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            className="stroke-yellow-400"
                            strokeWidth="2"
                        >
                            <animate
                                attributeName="stroke-opacity"
                                values="0;1;0"
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${index * 0.1}s`}
                            />
                        </line>
                    );
                })}
            </svg>
        </div>
    );
};

export default SunAnimation;
