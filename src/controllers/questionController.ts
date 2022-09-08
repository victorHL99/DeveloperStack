import { Request, Response } from 'express';

import { QuestionData } from '../types/questionTypes';
import questionService from '../services/questionService';

export async function createQuestion(req: Request, res: Response) {
  // TODO
  const { question, askedBy }: QuestionData = req.body;

  await questionService.createQuestion({ question, askedBy });

  res.status(200).json({ message: 'Question created' });
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
