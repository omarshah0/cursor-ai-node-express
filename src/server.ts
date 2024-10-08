import express from 'express';

import routes from '@/routes';

import dotenv from 'dotenv';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
