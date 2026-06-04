export class DynamicConnectionDto {
  type: 'postgres' | 'oracle';
  host: string;
  port: number;
  username: string;
  password?: string;
  database: string; // Used for Postgres database name OR Oracle SID
}