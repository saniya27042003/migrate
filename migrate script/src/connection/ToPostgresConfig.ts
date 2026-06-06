export class ToPostgresConfig {
     public type: string;
    public host: string;
    public port: number;
    public user: string;
    public password: string;
    public database: string;
    

    constructor(
     type: string,
        host: string,
        port: number,
        user: string,
        password: string,
       
           database: string
    ) {
     this.type = type;
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
            this.database = database;
    }

    public getType(): string {
        return this.type;
    }

    setType(type: string): void {
        this.type = type;
    }

    public getHost(): string {
        return this.host;
    }

     setHost(host: string): void {
          this.host = host;
     }

    public getPort(): number {
        return this.port;
    }

    setPort(port: number): void {
        this.port = port;
    }

    public getUser(): string {
        return this.user;
    }

    setUser(user: string): void {
        this.user = user;
    }

    public getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

     public getDatabase(): string {
        return this.database;
    }

    setDatabase(database: string): void {
        this.database = database;
    }

   
}