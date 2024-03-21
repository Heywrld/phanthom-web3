export function generateAvatarInitials(name: string): string {
  // Check if the name is empty or null
  if (!name) {
    return "";
  }

  // Split the name into words
  const words = name.split(" ");

  // Initialize the result string
  let initials = "";

  // Loop through the words in the name
  for (const word of words) {
    // If the word is not empty, get the first character, capitalize it, and add it to the result
    if (word.trim() !== "") {
      initials += word.charAt(0).toUpperCase();
    }
  }

  // Return the generated initials
  return initials;
}
