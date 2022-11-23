/* Formatting: (itemId, imageUrl, color=invisible|dark|colored) */

import type { Hexagon } from "../models/Hexagon";

const iconography_hexagons: Hexagon[] = [
  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "dark"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],

  ["null", "", "dark"],
  ["blaze_icon", "thumbnails/blaze.png", ""],
  ["null", "", "dark"],
  ["range_icon", "thumbnails/range.png", ""],
  ["null", "", "invisible"],
  ["aperture_icon", "thumbnails/aperture.png", ""],
  ["null", "", "dark"],
  ["null", "", "colored"],
  ["null", "", "invisible"],

  ["null", "", "dark"],
  ["null", "", "colored"],
  ["gem_icon", "thumbnails/gem.png", ""],
  ["berry_icon", "thumbnails/berry.png", ""],
  ["null", "", "colored"],
  ["pin_icon", "thumbnails/pin.png", ""],
  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],

  ["null", "", "invisible"],
  ["croissant_icon", "thumbnails/croissant.png", ""],
  ["null", "", "colored"],
  ["null", "", "invisible"],
  ["null", "", "dark"],
  ["null", "", "invisible"],
  ["fox_icon", "thumbnails/fox.png", ""],
  ["null", "", "invisible"],
  ["null", "", "invisible"],

  ["target_icon", "thumbnails/target.png", ""],
  ["null", "", "dark"],
  ["null", "", "colored"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "colored"],
  ["null", "", "dark"],
  ["null", "", "invisible"],
  ["null", "", "colored"],

  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "colored"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],
  ["null", "", "dark"],
  ["cubes_icon", "thumbnails/cubes.png", ""],
  ["null", "", "invisible"],
];

const project_hexagons = [
  ["slate_project", "", "light"],
  ["naai_project", "", "light"],
  ["", "", "colored"],
  ["sentiment_analysis_project", "", "light"],
  ["byrdle_project", "", "light"],

  ["", "", "dark"],
  ["lyftable_project", "", "light"],
  ["personal_site_project", "", "light"],
  ["", "", "dark"],
  ["", "", "invisible"],

  ["niqbot_project", "", "light"],
  ["meet_project", "", "light"],
  ["", "", "dark"],
  ["numc_project", "", "light"],
  ["", "", "light"],

  ["", "", "light"],
  ["", "", "colored"],
  ["crypto_mining_project", "", "light"],
  ["", "", "colored"],
  ["", "", "dark"],
];

const contact_hexagons: Hexagon[] = [
  ["null", "", "invisible"],
  ["linkedin", "icons/linkedin-logo.png", "colored"],
  ["instagram", "icons/instagram-logo.png", "colored"],
  ["handshake", "icons/handshake-logo.png", "colored"],
  ["null", "", "invisible"],

  ["null", "", "dark"],
  ["null", "images/profile-photo.jpg", "dark"],
  ["email", "icons/mail-icon.png", "colored"],
  ["null", "", "invisible"],
  ["null", "", "dark"],

  ["null", "", "invisible"],
  ["null", "", "dark"],
  ["null", "", "colored"],
  ["null", "", "dark"],
  ["null", "", "colored"],
];

export { iconography_hexagons, project_hexagons, contact_hexagons };
