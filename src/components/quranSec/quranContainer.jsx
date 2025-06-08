import { useEffect, useState } from 'react';
import styles from './QuranSec.module.css'

const QuranContainer = () => {
    const [surahs, setSurahs] = useState(null)
    const [selectedSurah, setSelectedSurah] = useState()
    const [audio, setAudio] = useState(null)


    const handleAyahPlay = (audio) => {
        setAudio(audio)
    }


    useEffect(() => {
        fetch('https://api.alquran.cloud/v1/quran/ar.alafasy')
            .then(res => res.json())
            .then(data => { setSurahs(data.data.surahs) })

    }, [])


    if (surahs == null)
        return <p>loading....</p>
    return (
        <div id='quran' className={styles.container} style={{ paddingBottom: '4rem' }}>
            <ul className={styles.surahs}>
                {surahs.map(surah => {
                    return (
                        <li key={surah.number}
                            className={`${styles.surah}  ${selectedSurah?.name === surah.name ? 'active' : ''}`}
                            onClick={() => setSelectedSurah(surah)}>
                            {surah.name}
                        </li>
                    )
                })
                }
            </ul>
            <div className={styles.content}>
                {selectedSurah ? selectedSurah.ayahs.map(ayah => {
                    return <div key={ayah.number} style={{ display: 'inline' }}>
                        <span className={styles.ayah} onClick={() => handleAyahPlay(ayah.audio)}>{`${ayah.text}`}</span>
                        <span className={styles.ayahNum}>{`${ayah.numberInSurah} `}</span>
                    </div>
                }) : <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--main-color)' }}>اضغط على أحد السور للعرض</p>}
            </div>
            {selectedSurah && <audio id='audio' style={{ display: 'none' }} src={audio} autoPlay />}
            <p id='audio-text' className={styles.audio}>اضغط على الآيات لأستماع لها</p>


        </div>
    );
}

export default QuranContainer;
