import type { ApiResult } from "./api-result.type";
 
export function processResult(result: ApiResult): void {
  console.log(`Result: ${result} (type: ${typeof result})`);
}