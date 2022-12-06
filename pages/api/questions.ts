import { Request, Response, ErrorRequestHandler } from 'express';
import clientPromise from '../../lib/mongodb';

const questions = async (req: Request, res: Response) => {
  if(req.method === 'GET') {
    const topic = Object.values(req.query)[0];
    const client = await clientPromise;
    const db = client.db('LeetGrind');
    const query = {};
    // @ts-ignore
    query[topic] = { $exists : true };
    const qList = await db.collection('Questions').find(query).toArray();
    // console.log(qList);
    res.status(200).json(qList);
  };
}

export default questions;
