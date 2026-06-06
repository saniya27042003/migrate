export class DbUserConfig {
    public host: string;
    public port: number;
    public user: string;
    public password: string;
    public service: string;
    public sid: string;

    constructor(
        host: string,
        port: number,
        user: string,
        password: string,
        // service: string,
        sid: string
    ) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        // this.service = service;
        this.sid = sid;
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

    // public getService(): string {
    //     return this.service;
    // }

    // setService(service: string): void {
    //     this.service = service;
    // }

    public getSid(): string {
        return this.sid;
    }

    setSid(sid: string): void {
        this.sid = sid;
    }
}