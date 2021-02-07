import Router from 'express';
import userController from '../controllers/usersController';

const router = Router();

router.get('/', userController.findAll);
router.post('/', userController.create);
router.get('/:id', userController.findById);
router.delete('/:id', userController.remove);
router.put('/:id', userController.edit);
router.post('/email', userController.findByEmail);

export default router;
