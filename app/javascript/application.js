// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import * as bootstrap from "bootstrap";
import "@popperjs/core";

// Use bootstrap to avoid 'declared but its value is never read' error
document.addEventListener("DOMContentLoaded", () => {
  bootstrap.Tooltip && new bootstrap.Tooltip(document.body);
});
