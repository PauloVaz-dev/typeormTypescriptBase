import { getCustomRepository, getRepository } from 'typeorm';
import { Request, Response } from 'express';
import Users from '../../models/Users';
import UsersRepository from '../../repositories/UserRepository';

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const userRepo = getRepository(Users);
    const user = await userRepo.delete(id);

    if (user.affected !== 0) {
      return res.status(201).send();
    }
    return res.status(201).send({
      message: 'user not found',
    });
  } catch (err) {
    console.log('sssssss');
  }
};

const edit = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const userRepo = getRepository(Users);
    const user = await userRepo.findOne(id);

    if (user) {
      await userRepo.save({
        ...user,
        name,
      });
      return res.status(201).send();
    }
    return res.status(201).send({
      message: 'user not found',
    });
  } catch (err) {
    console.log(err.message);
  }
};

const findById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const userRepo = getRepository(Users);
    const user = await userRepo.findOne(id);
    res.status(201).send({
      user,
    });
  } catch (err) {
    console.log('sssssss');
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const userRepo = getRepository(Users);
    const user = userRepo.create({
      name,
      email,
      is_active: true,
    });

    await userRepo.save(user);

    res.status(201).send({
      message: 'ok',
    });
  } catch (err) {
    console.log(err.message);
  }
};

const findAll = async (req: Request, res: Response) => {
  const userRepo = getRepository(Users);

  try {
    const users = await userRepo.find();
    res.status(201).send({
      users,
    });
  } catch (err) {
    console.log(err.message);
    res.status(401).send();
  }
};

const findByEmail = async (req: Request, res: Response) => {
  const userRepo = getCustomRepository(UsersRepository);
  const { email } = req.body;

  try {
    const userEmail = await userRepo.findByEmail(email);

    if (userEmail) {
      return res.status(401).send({
        message: 'email not found',
      });
    }
    return res.status(201).send({
      userEmail,
    });
  } catch (err) {
    console.log(err.message);
    res.status(401).send();
  }
};

export default {
  remove,
  edit,
  findById,
  create,
  findAll,
  findByEmail,
};
