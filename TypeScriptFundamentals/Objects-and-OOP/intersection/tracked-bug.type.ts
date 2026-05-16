import type { BugReport } from "../03-optional-props/bug-report.type";
import type { HasTimestamp } from "./timestamp.type";
 
// Intersection: el tipo resultante cumple AMBOS contratos.
export type TrackedBug = BugReport & HasTimestamp;
