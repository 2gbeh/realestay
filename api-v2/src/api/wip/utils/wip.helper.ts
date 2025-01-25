import { hash } from 'bcryptjs';

export class WipHelper {
  static async main() {
    const hashedPassword = await hash('secret', 10);
    
    console.log("🚀 ~ WipHelper ~ main ~ hashedPassword:", hashedPassword)
  }
}
