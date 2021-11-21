export const cleanTextContent = (rawText: string): string => {
  const temp = document.createElement('div');
  temp.innerHTML = rawText;
  return temp.textContent as string;
};
