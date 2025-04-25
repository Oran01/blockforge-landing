/**
 * postUtils.ts
 *
 * Utility functions for mapping blog categories and job types to UI theme colors.
 * These colors are used in components like <Tag />, <Card />, etc., to style them consistently.
 */

/**
 * Maps a blog post category to a UI color name.
 *
 * @param {string} category - The blog post category (e.g., "Sustainability", "Innovation").
 * @returns {string} - A Tailwind-compatible color key ("lime", "cyan", "violet", or fallback "fuchsia").
 */
export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case "Sustainability":
      return "lime";
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";
    default:
      return "fuchsia"; // fallback color
  }
};

/**
 * Maps a job type to a UI color.
 *
 * @param {string} type - The position type (e.g., "Full Time", "Part Time", "Contract").
 * @returns {string} - A color used for highlighting job types.
 */
export const getColorFromPositionType = (type: string) => {
  switch (type) {
    case "Full Time":
      return "lime";
    case "Part Time":
      return "cyan";
    case "Contract":
      return "violet";
    default:
      return "fuchsia"; // fallback color
  }
};

/**
 * Maps a job category to a UI color.
 *
 * @param {string} category - The department or field (e.g., "Engineering", "Product", "Marketing").
 * @returns {string} - A color used for styling job listings or tags.
 */
export const getColorFromPositionCategory = (category: string) => {
  switch (category) {
    case "Engineering":
      return "lime";
    case "Product":
      return "cyan";
    case "Marketing":
      return "violet";
    default:
      return "fuchsia"; // fallback color
  }
};
