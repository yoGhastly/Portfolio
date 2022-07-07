export type Song = {
	songUrl: string;
	artist: string;
	title: string;
	ranking: number;
};

export type TopTracks = {
	tracks: Song[];
};
