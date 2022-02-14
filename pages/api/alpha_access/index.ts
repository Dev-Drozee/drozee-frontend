import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from 'utils/mongoDB';

type Data = {
	name?: string;
	email?: string;
	institution?: string;
	error?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === 'POST') {
		const name = req.body.name;
		const email = req.body.email;
		const institution = req.body.institution;

		if (name && email < 6 && institution) {
			res.status(400).json({ error: 'input fields empty' });
		}
		// connect to the database
		let { db } = await connectToDatabase();
		// add the user to the alpha access collection
		await db
			.collection('alpha_access')
			.insertOne({ name: name, email: email, institution: institution })
			.then((result: any) => {
				return res
					.status(200)
					.json({ name: name, email: email, institution: institution });
			})
			.catch((err: any) => {
				return res.status(400).json({ error: err });
			});
	} else {
		// return method not allowed
		res.status(400).json({ error: 'Method not allowed' });
	}
}
