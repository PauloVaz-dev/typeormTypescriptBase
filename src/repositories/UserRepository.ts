import { EntityRepository, Repository } from 'typeorm';
import Users from '../models/Users';

@EntityRepository(Users)
class UsersRepository extends Repository<Users> {
  public async findByEmail(email: string): Promise<Users[]> {
    return this.find({
      where: {
        email,
      },
    });
  }
}

export default UsersRepository;
