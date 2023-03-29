import { API_LINK } from '@/data/api';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import { Data } from '@/components/Weather/types';
import Loading from '../Loading';
import Info from '../Info';

import styles from './Weather.module.scss';

export default function Weather() {
  const [weather, setWeather] = useState<Data | null>(null);
  const [city, setCity] = useState<string>('Saint Petersburg');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_LINK}${city}`);
      const data = await res.json();
      setWeather(data);
    };
    fetchData();
  }, []);

  return weather ? (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>{weather.location.name}</h1>
          <p className={styles.subtitle}>{weather.current.condition.text}</p>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            className={styles.image}
          />
        </div>
        <p className={styles.degree}>{Math.round(weather.current.temp_c)}°</p>
      </div>
      <div className={styles.background}></div>
      <div className={styles.footer}>
        <Info
          icon={'humidity_percentage'}
          name={'Humidity'}
          value={`${weather.current.humidity}%`}
        />
        <Info
          icon={'air'}
          name={'Wind gust'}
          value={`${Math.round(weather.current.gust_kph)} km/h`}
        />
        <Info
          icon={'readiness_score'}
          name={'Pressure'}
          value={`${weather.current.precip_mm} mm`}
        />
        <Info
          icon={'visibility'}
          name={'Visibility'}
          value={`${Math.round(weather.current.vis_km)} km`}
        />
        <Info icon={'sunny'} name={'UV index'} value={`${weather.current.uv} / 100`} />
        <Info icon={'cloudy'} name={'Cloud cover'} value={`${weather.current.cloud}%`} />
      </div>
    </div>
  ) : (
    <Loading />
  );
}
