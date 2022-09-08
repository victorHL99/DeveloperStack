import { prisma } from './../config/database';
import { QuestionData } from '../types/questionTypes';

async function createQuestion({ question, askedBy }: QuestionData) {
  return await prisma.questions.create({
    data: {
      question,
      askedBy
    }
  })
}
const questionRepository = {
  createQuestion
}

export default questionRepository;