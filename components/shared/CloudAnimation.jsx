const CloudAnimation = () =>
{
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'relative' }}
            >
                <defs>
                    <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#b3e5fc', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#81d4fa', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                <g>
                    <circle cx="10" cy="7.5" r="5" fill="url(#cloudGradient)" />
                    <circle cx="16.25" cy="8.75" r="6.25" fill="url(#cloudGradient)" />
                    <circle cx="21.25" cy="7.5" r="3.75" fill="url(#cloudGradient)" />
                </g>
                {[...Array(15)].map((_, i) => (
                    <rect
                        key={i}
                        x={2.5 + i * 1.25}
                        y="13.75"
                        width="0.5"
                        height="1.25"
                        fill="#000000"
                        style={{
                            animation: `fall ${0.5 + Math.random()}s linear ${Math.random()}s infinite`,
                            transformOrigin: 'center',
                            opacity: '1',
                        }}
                    >
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0 0; 0 6.25"
                            dur={`${0.5 + Math.random()}s`}
                            repeatCount="indefinite"
                            begin={`${Math.random()}s`}
                        />
                        <animate
                            attributeName="opacity"
                            values="1; 0"
                            dur={`${0.5 + Math.random()}s`}
                            repeatCount="indefinite"
                            begin={`${Math.random()}s`}
                        />
                    </rect>
                ))}
            </svg>
        </div>
    );
};

export default CloudAnimation;


