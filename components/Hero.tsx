import React, { ReactNode } from 'react';

export const Hero = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
			{children}
		</div>
	);
};
