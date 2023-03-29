export type Data = {
  location: Location;
  current: Current;
};

type Current = {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_kph: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
  uv: number;
  gust_kph: number;
  vis_km: number;
};

type Location = {
  name: string;
  region: string;
  country: string;
  localtime: string;
};
