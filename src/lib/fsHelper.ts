import fs from "fs";

/**
 * Reads a text file safely without triggering Webpack dynamic context analysis.
 */
export function readTextFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

/**
 * Reads and parses a JSON file safely without triggering Webpack dynamic context analysis.
 */
export function readJsonFile<T = any>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

/**
 * Checks if a file exists safely.
 */
export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

/**
 * Reads a directory safely.
 */
export function readDir(dirPath: string): string[] {
  return fs.readdirSync(dirPath);
}

/**
 * Checks if a path is a directory.
 */
export function statIsDir(filePath: string): boolean {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch {
    return false;
  }
}
