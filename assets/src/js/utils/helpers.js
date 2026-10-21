export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// YYYY-MM-DD (yerli vaxtla)
export const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split('T')[0];
};