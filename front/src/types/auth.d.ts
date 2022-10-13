export interface loginDto {
  token: string;
  name: string;
  jti: string;
  role: string[];
  exp: Date;
}