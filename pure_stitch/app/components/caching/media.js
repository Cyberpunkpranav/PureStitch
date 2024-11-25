import { useQuery } from '@tanstack/react-query';

const fetchMediaFile = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch media file');
  }
  const blob = await response.blob(); // Get the binary data as a Blob
  const objectURL = URL.createObjectURL(blob); // Create a URL for the Blob
  return objectURL;
};

export const useMediaFile = (url) => {
  return useQuery({
    queryKey: ['mediaFile', url], // Use the "Object" form
    queryFn: () => fetchMediaFile(url),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

};

