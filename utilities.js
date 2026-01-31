// This module contains utility functions

// Format a number with commas every 3 digits
export function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}