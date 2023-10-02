export default function LoadingScreen() {
    return (
        <div id='globalLoader'
            style={{
                position: 'fixed',
                zIndex: 1700,
                top: 0,  // Starts from top
                left: 0,  // Starts from left
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#121212',
                transition: 'all 1s'
            }}> 
        <div id="logo"
                style={{
                transform: 'scale(2.0)'
            }}>
            
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="42"
            fill="none"
            viewBox="0 0 48 42">
            
            <g fill="#fff" clipPath="url(#clip0_602_2)">
                <rect
                width="6.959"
                height="40.643"
                x="15.541"
                y="0.547"
                rx="3.48"
                transform="rotate(22.482 15.541 .547)"
                ></rect>
                <rect
                width="6.959"
                height="40.643"
                x="41.569"
                y="0.825"
                rx="3.48"
                transform="rotate(22.482 41.57 .825)"
                ></rect>
                <rect
                width="6.959"
                height="6.959"
                x="13.779"
                y="29.776"
                rx="3.48"
                transform="rotate(-90 13.78 29.776)"
                ></rect>
                <rect
                width="6.959"
                height="40.853"
                x="13.362"
                y="3.068"
                rx="3.48"
                transform="rotate(-21.238 13.362 3.068)"
                ></rect>
            </g>
            <defs>
                <clipPath id="clip0_602_2">
                <path fill="#fff" d="M0 0.547H48V41.145999999999994H0z"></path>
                </clipPath>
            </defs>
            </svg>

        </div>
    </div>
    );
}