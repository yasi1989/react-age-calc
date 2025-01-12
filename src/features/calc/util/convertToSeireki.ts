const eraOffset: Record<string, number> = {
    "meiji": 1867,
    "taisho": 1911,
    "showa": 1925,
    "heisei": 1988,
    "reiwa": 2018
  };
  
export const convertToSeireki = (year: number, era: string): number => {
    const offset = eraOffset[era];
    return offset ? year + offset : year;
  };