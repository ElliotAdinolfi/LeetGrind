import { Request, Response, ErrorRequestHandler } from 'express';
import clientPromise from '../../lib/mongodb';

const questions = async (req: Request, res: Response) => {
  if(req.method === 'GET') {
    const client = await clientPromise;
    const db = client.db('LeetGrind');
    const qList = await db.collection('Questions').find({}).toArray();
    // console.log(qList)
    res.status(200).json(qList);
  };
}

export default questions;
