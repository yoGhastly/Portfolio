import useSWR, { BareFetcher } from 'swr';

import { fetcher } from '../utils/fetcher';
import { TopTracks } from '../lib/types/types';
import { Track } from './Track';

export const Tracks = () => {
	const { data } = useSWR<TopTracks>(
		'/api/top-tracks',
		fetcher as BareFetcher<TopTracks>
	);

	if (!data) {
		return null;
	}
	console.log(data);

	return (
		<>
			{data.tracks.map((track, index) => (
				<Track ranking={index + 1} key={track.songUrl} {...track} />
			))}
		</>
	);
};
