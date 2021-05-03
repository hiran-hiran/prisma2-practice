const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const { user } = new PrismaClient();

router.get('/', async (req, res) => {
	const users = await user.findMany({
		select: {
			username: true,
			posts: true,
		},
  });
  
  res.json(users)
});
module.exports = router;
