import Navbar from './components/navbar/Navbar';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import FullScreenMessage from './components/fullScreenMsg/FullScreenMessage';
import fajr from './assets/images/fajr.png';
import dhuhr from './assets/images/dhuhr.png';
import asr from './assets/images/asr.png';
import maghrib from './assets/images/maghrib.png';
import isha from './assets/images/isha.png';
import Prayer from './components/Prayer';
import QuranContainer from './components/quranSec/quranContainer';
import Footer from './components/footer/Footer';

function App() {
  const [ayah, setAyah] = useState('');
  const [audio, setAudio] = useState(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [azkar, setAzkar] = useState(null);
  const [azkarType, setAzkarType] = useState(null);
  const [selectedAzkarCategory, setSelectedAzkarCategory] = useState(null);
  const [currentAzkarIndex, setCurrentAzkarIndex] = useState(0);

  const handleAyahPlay = () => {
    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(!isPlaying);
  }

  // Fetch Ayah and Audio - only once on component mount
  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/ayah/262/ar.alafasy')
      .then(res => res.json())
      .then(data => {
        setAyah(data.data.text);
        setAudio(data.data.audio);
      })
      .catch(err => {
        console.error('Error fetching ayah:', err);
        setError('Failed to load Quran verse');
      });
  }, []); // Empty dependency array to run only once

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLatitude(lat);
          setLongitude(lng);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Failed to get location. Please enable location services.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  // Fetch prayer times when location is available
  useEffect(() => {
    if (latitude && longitude) {
      const today = new Date();
      const date = today.toISOString().split('T')[0]; // YYYY-MM-DD format
      const formattedDate = date.split('-').reverse().join('-'); // DD-MM-YYYY format




      fetch(`https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${latitude}&longitude=${longitude}&method=5`)
        .then(res => res.json())
        .then(data => {
          setPrayerTimes(data.data.timings);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching prayer times:', err);
          setError('Failed to load prayer times');
          setLoading(false);
        });
    }
  }, [latitude, longitude]); // Run when coordinates are available


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/nawafalqari/ayah/main/src/data/adkar.json')
      .then(res => res.json())
      .then(data => {
        setAzkar(data);
      })
      .catch(err => {
        console.error('Error fetching azkar:', err);
        setError('Failed to load azkar');
      });
  }, []);


  const handleAzkarType = (type) => {
    setAzkarType(azkar[type]);
    setSelectedAzkarCategory(type);
    setCurrentAzkarIndex(0); // Reset to first item when changing category
  };

  const handlePreviousAzkar = () => {
    if (azkarType && currentAzkarIndex > 0) {
      setCurrentAzkarIndex(currentAzkarIndex - 1);
    }
  };

  const handleNextAzkar = () => {
    if (azkarType && currentAzkarIndex < azkarType.length - 1) {
      setCurrentAzkarIndex(currentAzkarIndex + 1);
    }
  };

  // Memoize FullScreenMessage to prevent unnecessary re-renders
  // const fullScreenMessage = useMemo(() => (
  //   <FullScreenMessage
  //     message="هذا التطبيق تم تطويره للشاشات الكبيرة. للحصول على أفضل تجربة، يُرجى استخدام جهاز بشاشة أكبر."
  //     clickable={true}
  //   />
  // ), []); // Empty dependency array means it only renders once

  return (
    <div className="app-container" dir='rtl'>
      {/* {fullScreenMessage} */}
      <div className="hero" id='hero' >
        <Navbar />
        <h1>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</h1>
        {ayah && <p className='ayah'>{ayah}</p>}
        <span className='ayah-play-button'>
          <audio id="audio" ref={audioRef} controls autoPlay src={audio} style={{ display: 'none' }} />
          <button onClick={handleAyahPlay} style={{
            backgroundColor: 'var(--background-color)', color: 'var(--text-color)', border: 'none',
            cursor: 'pointer', borderRadius: '50%', padding: '0.5rem', width: '50px', height: '50px'
          }}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </span>
      </div>
      <main>
        {loading && <p>Loading prayer times...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className='prayers' id='prayers'>
          <Prayer name='الفجر' image={fajr} time={prayerTimes?.Fajr} />
          <Prayer name='الظهر' image={dhuhr} time={prayerTimes?.Dhuhr} />
          <Prayer name='العصر' image={asr} time={prayerTimes?.Asr} />
          <Prayer name='المغرب' image={maghrib} time={prayerTimes?.Maghrib} />
          <Prayer name='العشاء' image={isha} time={prayerTimes?.Isha} />
        </div>
        <div className='azkar'>
          <div className='azkar-header'>
            <h2>الأذكار</h2>
          </div>
          <div className='azkar-switch'>
            <button
              className={selectedAzkarCategory === "أذكار الاستيقاظ" ? 'active' : ''}
              onClick={() => handleAzkarType("أذكار الاستيقاظ")}
            >
              اذكار الاستيقاظ
            </button>
            <button
              className={selectedAzkarCategory === "أذكار الصباح" ? 'active' : ''}
              onClick={() => handleAzkarType("أذكار الصباح")}
            >
              أذكار الصباح
            </button>
            <button
              className={selectedAzkarCategory === "أذكار  بعد الصلاة" ? 'active' : ''}
              onClick={() => handleAzkarType("أذكار بعد السلام من الصلاة المفروضة")}
            >
              أذكار  بعد الصلاة
            </button>
            <button
              className={selectedAzkarCategory === "أذكار المساء" ? 'active' : ''}
              onClick={() => handleAzkarType("أذكار المساء")}
            >
              أذكار المساء
            </button>
            <button
              className={selectedAzkarCategory === "أذكار النوم" ? 'active' : ''}
              onClick={() => handleAzkarType("أذكار النوم")}
            >
              أذكار النوم
            </button>
          </div>


          <div className='azkar-content' id='azkar'>
            <div className='azkar-slider'>
              <div className='azkar-card-container'>
                {azkarType ? (
                  <div
                    className='azkar-cards'
                    style={{
                      transform: `translateX(${currentAzkarIndex * 100}%)`,
                      transition: 'transform 0.5s ease-in-out'
                    }}
                  >
                    {azkarType.map((element, index) => (
                      <div key={index} className='azkar-card'>
                        <div className='azkar-card-content'>
                          <h3>{element.category}</h3>
                          <p className='azkar-text'>{element.content}</p>
                          {element.count && (
                            <div className='azkar-count'>
                              <span>عدد المرات: {element.count}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='azkar-card'>
                    <div className='azkar-card-content'>
                      <h3>اضغط على أحد الأذكار للعرض</h3>
                    </div>
                  </div>
                )}
              </div>

              {azkarType && azkarType.length > 0 && (
                <div className='azkar-navigation'>
                  <button
                    className='nav-btn prev-btn'
                    onClick={handlePreviousAzkar}
                    disabled={currentAzkarIndex === 0}
                  >
                    <ChevronRight />
                  </button>

                  <div className='azkar-indicator'>
                    <span>{currentAzkarIndex + 1} من {azkarType.length}</span>
                  </div>

                  <button
                    className='nav-btn next-btn'
                    onClick={handleNextAzkar}
                    disabled={currentAzkarIndex === azkarType.length - 1}
                  >
                    <ChevronLeft />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='azkar-header' style={{ marginTop: '4rem' }}>
          <h2>القرآن الكريم</h2>
        </div>
        <QuranContainer></QuranContainer>


      </main>

      <Footer />


    </div>
  )
}

export default App
