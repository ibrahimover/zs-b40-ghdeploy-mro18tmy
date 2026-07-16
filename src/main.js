import { formatDate } from "./utils/dates.js";

const dateElement = document.getElementById("date");
dateElement.textContent = formatDate(new Date());