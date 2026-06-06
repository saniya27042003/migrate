export class DynamicConnectionDto {
  type: 'postgres' | 'oracle';
  host: string;
  port: number;
  username: string;
  password?: string;
  database: string; // Used for Postgres database name OR Oracle SID
}

export class OracleDynamicConnectionDto {
        host: string;
        port: number;
        username: string;
        password: string;
        service? : string;
        database?: string ;
       
}



export class PgDynamicConnectionDto {
        type: string;
  host: string;
  port: number;
  username: string;
  password?: string;
  database: string;
       
}