function twiceAsOld(dadYearsOld, sonYearsOld) {
  let sonDbl = sonYearsOld * 2;
  if (sonDbl < dadYearsOld) {
    return dadYearsOld - sonDbl;
  } else if (sonDbl > dadYearsOld) {
    return sonDbl - dadYearsOld;
  } else {
    return 0;
  }
}
