export const formatDateTime = (date) =>
  new Intl.DateTimeFormat("pl-PL", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(date);
export const formatMonth = (date) =>
  new Intl.DateTimeFormat("pl-PL", {
    month: "long",
  }).format(date);
