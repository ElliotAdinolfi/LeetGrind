
import { Request, Response, ErrorRequestHandler } from 'express';
import clientPromise from '../../lib/mongodb';

const createUser = async (req: Request, res: Response) => {
  if(req.method === 'POST') {
    const client = await clientPromise;
    const db = client.db('LeetGrind');
    const { user } = req.body;
    const found = await db.collection('Users').findOne({ user: user });
    if(!found) {
      console.log('new user created')
      await db.collection('Users').insertOne({ user: user });
    } else {
      console.log('found user')
    }
    return res.status(200).redirect('/');
  };
};

export default createUser;