import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import clientPromise from '../../../lib/mongodb';
const session = require('express-session');

const handler = nextConnect({})
  // .use(
  //   session({
  //     secret: process.env.GITHUB_SECRET,
  //   }))
  .get(
    async (req: NextApiRequest & { user: any }, res: NextApiResponse) => {
      console.log('anything')
      const client = await clientPromise;
      const db = client.db("LeetGrind");
      console.log({res, req})
      return res.status(201).send('pog')
  }
);

export default handler;
