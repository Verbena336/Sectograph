'use client';
import { API_LINK } from '@/data/api';

import { useState, useEffect, FormEvent } from 'react';

import { Data } from '@/components/Weather/types';
import Loading from '../Loading';
import Info from '../Info';

import styles from './Weather.module.scss';

export default function Weather() {
  const [weather, setWeather] = useState<Data | null>(null);
  const [city, setCity] = useState<string>('Saint Petersburg');
  const [isModal, setIsModal] = useState<boolean>(false);

  const fetchData = async (cityToFetch: string) => {
    const res = await fetch(`${API_LINK}${cityToFetch}`);
    const data = await res.json();
    if (data.error) {
      setCity(localStorage.getItem('city') ?? 'Saint Petersburg');
    } else {
      setNewCity(cityToFetch);
      setWeather(data);
    }
  };

  const setNewCity = function (cityToSet: string) {
    const capitalizeCityToFetch = cityToSet
      .split(' ')
      .map((item) => `${item.substring(0, 1).toUpperCase()}${item.slice(1)}`)
      .join(' ');
    localStorage.setItem('city', capitalizeCityToFetch);
    setCity(capitalizeCityToFetch);
  };

  const handleSubmit = function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsModal(false);
    if (!city.length) {
      setCity(localStorage.getItem('city') ?? 'Saint Petersburg');
    } else {
      fetchData(city);
    }
  };

  useEffect(() => {
    fetchData(localStorage.getItem('city') ?? 'Saint Petersburg');
  }, []);

  return weather ? (
    <main className={styles.main}>
      <div className={styles.overlay} style={isModal ? { top: '0' } : { top: '-100vh' }}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            value={city}
            className={styles.input}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
          />
          <button className={styles.button} type="submit">
            <span
              className="material-symbols-outlined"
              style={{ color: 'rgb(22, 62, 85)', fontSize: '5rem' }}
            >
              check_circle
            </span>
          </button>
        </form>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title_wrapper}>
            <h1 className={styles.title} onClick={() => setIsModal(true)}>
              {weather.location.name}
            </h1>
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
    </main>
  ) : (
    <Loading />
  );
}
