//We define prisma and exported, so that we will refer to this where every I want

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = prisma


