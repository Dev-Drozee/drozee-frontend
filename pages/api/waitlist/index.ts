import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from 'utils/mongoDB';

type Data = {
	email?: string;
	error?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === 'POST') {
		const email = req.body.email;
		if (email.length < 6) {
			res
				.status(400)
				.json({ error: 'Email must be at least 6 characters long' });
		} else {
		}
		// connect to the database
		let { db } = await connectToDatabase();
		// add email to newsletter collection
		await db
			.collection('waitlist')
			.insertOne({ email: email })
			.then((result: any) => {
				return res.status(200).json({ email: email });
			})
			.catch((err: any) => {
				return res.status(400).json({ error: err });
			});
	} else {
		// return method not allowed
		res.status(400).json({ error: 'Method not allowed' });
	}
}
