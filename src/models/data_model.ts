export interface Result {
  id: number;
  ChallengeCodeList: string[];
  title_fa: string;
  title_en: string;
  body_fa: string;
  body_en: string;
  example: string;
  image: string;
  ChallengeCode: string;
  slug: string;
  created: Date;
  price: number;
  language: string;
  publish: boolean;
}

export interface RootObject {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}
