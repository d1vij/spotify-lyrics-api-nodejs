export type ISecretKey = {
  version: string;
  secret: string;
}

export type IServerTimeParams = {
  reason: string;
  productType: string;
  totp: string;
  totpVer: number | string;
  ts: string;
}

export type IAccessToken = {
  clientId: string;
  accessToken: string;
  accessTokenExpirationTimestampMs: string;
  isAnonymous: boolean;
  _notes: string | "Usage of this endpoint is not permitted under the Spotify Developer Terms and Developer Policy, and applicable law";
}

export type LyricsLine = {
  startTimeMs: string;
  words: string;
  syllables: any[];
  endTimeMs: string;
  transliteratedWords: string;
}

export type Lyrics = {
  syncType: string;
  lines: LyricsLine[];
  provider: string;
  providerLyricsId: string;
  providerDisplayName: string;
  syncLyricsUri: string;
  isDenseTypeface: boolean;
  alternatives: any[];
  language: string;
  isRtlLanguage: boolean;
  capStatus: string;
  previewLines: LyricsLine[];
}

export type Colors = {
  background: number;
  text: number;
  highlightText: number;
}

export type SongLyricsData = {
  lyrics: Lyrics;
  colors: Colors;
  hasVocalRemoval: boolean;
}


