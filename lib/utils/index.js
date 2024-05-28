// In lib/utils/index.js
export function formatDate(date) {
  if (!date || isNaN(new Date(date).getTime())) {
    // Handle invalid date
    return "Invalid date"; // or return a default value like an empty string
  }
  // Proceed with formatting the valid date
  const options = { /* ... your options ... */ };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}
