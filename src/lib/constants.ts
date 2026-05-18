export const MAX_SEMESTER = 8;

export const SEMESTERS = Array.from({ length: MAX_SEMESTER }, (_, i) => i + 1);

export const SEMESTERS_STRING = SEMESTERS.map(String);
