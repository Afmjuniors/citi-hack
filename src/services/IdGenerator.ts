import { v4 } from 'uuid'

export class IdGenerator {
    public generate = (): string => {
        return v4()
    }
    public generateUniqueId(): string {
        const timestamp: string = Date.now().toString();
        const randomPartLength: number = 25 - timestamp.length;
        const randomPart: string = Array.from({ length: randomPartLength }, () =>
          Math.random().toString(36).charAt(2)
        ).join('');
      
        const uniqueId: string = timestamp + randomPart;
        return uniqueId;
      }
}