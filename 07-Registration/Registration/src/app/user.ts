export class User {
  constructor(
    public id: number = null,
    public firstname: string = '',
    public lastname: string = '',
    public email: string = '',
    public password: string = '',
    public password2: string = '',
    public address: string = '',
    public unit: string = '',
    public city: string = '',
    public state: string = '',
    public lucky: boolean = true,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}
