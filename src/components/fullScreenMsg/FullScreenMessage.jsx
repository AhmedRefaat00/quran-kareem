import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './FullScreenMessage.css';
import logo from '../../assets/icons/logo.png';

const FullScreenMessage = ({
    message = "هذا التطبيق تم تطويره للشاشات الكبيرة. للحصول على أفضل تجربة، يُرجى استخدام جهاز بشاشة أكبر.",
    show = true,
    clickable = false,
    onClose = () => { },
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const isSmallScreen = window.innerWidth <= 1024;
            setShouldShow(isSmallScreen && show);
        };

        // Check on mount
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [show]);

    useEffect(() => {
        if (shouldShow) {
            // Small delay for smooth animation
            setTimeout(() => setIsVisible(true), 100);
        } else {
            setIsVisible(false);
        }
    }, [shouldShow]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setShouldShow(false);
            onClose();
        }, 300); // Wait for animation to complete
    };

    if (!shouldShow) return null;

    return (
        <div className={`fullscreen-message-overlay ${isVisible ? 'visible' : ''}`}>
            <div className={`fullscreen-message-content ${isVisible ? 'visible' : ''}`}>
                <div className="fullscreen-message-text">
                    <div className="message-icon">
                        <p style={{ display: 'inline' }}>القرآن</p>
                        <img style={{ display: 'inline' }} src={logo} alt="logo" width={60} height={60} />
                        <p style={{ display: 'inline' }}>الكريم</p>
                    </div>
                    <h2>تنبيه</h2>
                    <p>{message}</p>

                    {clickable && (
                        <button
                            className="continue-button"
                            onClick={handleClose}
                        >
                            متابعة
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FullScreenMessage; 