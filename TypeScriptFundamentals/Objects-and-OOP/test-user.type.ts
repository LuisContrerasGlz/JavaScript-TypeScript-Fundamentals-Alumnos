export type TestUser = {
  username: string;
  password: string;
  environment: "QA" | "STAGE" | "PROD";
};