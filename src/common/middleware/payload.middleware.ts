
export async function payload(req: any, res: any, next: () => void) {
  await next();
}
