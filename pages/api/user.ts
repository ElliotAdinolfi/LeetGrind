
import { Request, Response, ErrorRequestHandler } from 'express';
import clientPromise from '../../lib/mongodb';

const createUser = async (req: Request, res: Response) => {
  if(req.method === 'POST') {
    const client = await clientPromise;
    const db = client.db('LeetGrind');
    const { user } = req.body;
    const found = await db.collection('Users').findOne({ user: user });
    
    if(!found) {
      const qList = await db.collection('Questions').find({}).toArray();
      const newUser: any = {
        user: user,
        topics: {},
        totalReps: 0,
        completeSections: 0
      }
      for(let i = 0; i < qList.length; i++) {
        const topic = Object.keys(qList[i])[1];
        const qArray = Object.keys(qList[i][topic]);
        const initQVals: any = {
          complete: 0
        };
        for(let j = 0; j < qArray.length; j++) {
          const current = qArray[j];
          initQVals[current] = 0;
        };
        newUser.topics[topic] = initQVals;
      };
      await db.collection('Users').insertOne(newUser);
      console.log('new user created')
    } else {
      console.log('found user')
    }
    return res.status(200).redirect('/');
  };

  if(req.method === 'GET') {
    const client = await clientPromise;
    const { username } = req.query;
    console.log(req)
    const db = client.db('LeetGrind');
    const user = await db.collection('Users').find({ user: username }).toArray();
    console.log(user)
    res.status(200).json(user);
  }

};

export default createUser;