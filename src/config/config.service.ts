import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    Object.keys(this.envConfig).forEach(key => {
      process.env[key] = this.envConfig[key];
    });
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
