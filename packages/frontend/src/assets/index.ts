 const images = import.meta.glob('./**/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' });

  export const getImage = (path: string) => {
    return images[`./images/${path}`] as string;
  };