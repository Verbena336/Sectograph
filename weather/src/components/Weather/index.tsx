import { API_LINK } from '@/data/api';

import { useState, useEffect } from 'react';

import { Data } from '@/components/Weather/types';
import Loading from '../Loading';

export default function Weather() {
  const [weather, setWeather] = useState<Data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_LINK}New%20York`);
      const data = await res.json();
      setWeather(data);
    };
    fetchData();
  }, []);
  return weather ? <p>{weather.location.name}</p> : <Loading />;
}
