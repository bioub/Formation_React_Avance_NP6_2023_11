export function hello(name: string) {

  if (name === '') {
    throw new Error('Must not be empty')
  }

  return `Hello ${name}`;
}
