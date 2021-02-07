import app from './app';
import 'reflect-metadata';

app.listen(process.env.PORT || 3000, () => {
  console.log('🏃 Running Server');
});
