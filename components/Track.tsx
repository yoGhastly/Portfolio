import { Song } from '../lib/types/types';

export const Track = (track: Song) => {
	return (
		<div className="flex flex-row items-baseline border-b border-gray-400  max-w-3xl w-full mt-8">
			<p className="text-sm font-bold">{track.ranking}</p>
			<div className="flex flex-col pl-3">
				<a
					className="font-medium truncate w-60 sm:w-96 md:w-full"
					href={track.songUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					{track.title}
				</a>
				<p
					className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
					color="gray.500"
				>
					{track.artist}
				</p>
			</div>
		</div>
	);
};
