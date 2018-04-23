export interface HeroesResponse {
  code: number;
  status: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: HeroResult[];
  }
}

export interface HeroResult {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item2 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Url {
  type: string;
  url: string;
}
