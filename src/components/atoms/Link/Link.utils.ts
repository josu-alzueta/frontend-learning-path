const isExternal = (href: string) => {
  return href.includes("://");
};

export const linkUtils = {
  isExternal,
};
