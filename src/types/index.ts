export type EventStatus = 'AVAILABLE' | 'FEW_LEFT' | 'SOLD_OUT' | 'COMING_SOON';

export interface TourEvent {
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  date: string;
  displayDay: string;
  displayMonth: string;
  displayYear: string;
  doorsOpen?: string;
  venue: string;
  city: string;
  status: EventStatus;
  ticketUrl: string; // Links directly to https://pandaccess.com.ar/eventos/[slug] or external festival
  isPandaAccess: boolean;
  featured?: boolean;
}

export interface MusicTrack {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Enganchado' | 'Un Poco de Ruido' | 'Remix' | 'Live Set';
  year: string;
  duration?: string;
  views?: string;
  youtubeId: string;
  spotifyUrl?: string;
  coverImage: string;
  featured?: boolean;
}

export interface TechRiderCategory {
  title: string;
  iconName: string;
  description: string;
  specs: {
    name: string;
    detail: string;
    required: boolean;
  }[];
}

export interface PressAsset {
  id: string;
  title: string;
  description: string;
  format: 'PNG' | 'SVG' | 'JPG' | 'PDF' | 'ZIP';
  resolution?: string;
  fileSize: string;
  downloadUrl: string;
  previewUrl?: string;
}
