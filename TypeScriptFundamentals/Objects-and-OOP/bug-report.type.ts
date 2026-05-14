export type BugReport = {
  id: number;
  title: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  assignee?: string;           // puede no estar asignado aún
  screenshot?: string | null;  // opcional Y puede ser null
};