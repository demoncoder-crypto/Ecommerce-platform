// Utility function to get image URL with fallback
export function getImageUrl(path: string): string {
  // Check if path is valid and add a fallback
  if (!path || typeof path !== 'string') {
    return '/images/placeholders/default.jpg';
  }
  
  // Add a timestamp to prevent caching issues
  return `${path}?t=${Date.now()}`;
}

// Utility function to handle a list of image URLs (comma-separated string)
export function getFirstImageFromList(imageList: string): string {
  if (!imageList) return '/images/placeholders/default.jpg';
  
  // If it's a comma-separated list, get the first one
  const images = imageList.split(',');
  return getImageUrl(images[0]);
} 