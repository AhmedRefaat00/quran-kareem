import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Apply theme to document
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsAnimating(true);

        // Start animation and change theme after a short delay
        setTimeout(() => {
            setIsDark(!isDark);
        }, 500);

        // Stop animation after completion
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '2rem',
        color: 'var(--text-color)',
        transition: 'color var(--transition-normal)',
        animation: 'spin 2s linear infinite',
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        background: isDark
            ? 'radial-gradient(circle at top left, #000000 0%, transparent 70%)'
            : 'radial-gradient(circle at top left, #ffffff 0%, transparent 70%)',
        opacity: isAnimating ? 1 : 0,
        transform: isAnimating ? 'scale(3)' : 'scale(0)',
        transformOrigin: 'top left',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };

    return (
        <>
            {/* Screen transition overlay */}
            <div style={overlayStyle}></div>

            <button
                style={buttonStyle}
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
                {isDark ? '☀️' : '🌙'}
            </button>
        </>
    );
};

export default ThemeToggle; 