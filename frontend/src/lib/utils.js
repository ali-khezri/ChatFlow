export function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
