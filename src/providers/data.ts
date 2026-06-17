import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";
import {Subject} from "@/types";

const subjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "An introductory course covering programming fundamentals, algorithms, and problem-solving techniques.",
    createdAt: "2026-01-15",
  },
  {
    id: 2,
    code: "BUS204",
    name: "Principles of Marketing",
    department: "Business Administration",
    description: "A study of core marketing concepts, consumer behavior, market research, and campaign planning.",
    createdAt: "2026-01-18",
  },
  {
    id: 3,
    code: "MATH220",
    name: "Linear Algebra",
    department: "Mathematics",
    description: "Covers vector spaces, matrices, linear transformations, eigenvalues, and applications in science and engineering.",
    createdAt: "2026-01-22",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>( {resource} :
   GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') {
      return { data: [] as TData[], total: 0};
    }

    return {
      data: subjects as unknown as TData[],
      total: subjects.length,
    };
  },

  getOne: async () => {
    throw  new Error("This function is not present in mock.");
  },
  create: async () => {
    throw  new Error("This function is not present in mock.");
  },
  update: async () => {
    throw  new Error("This function is not present in mock.");
  },
  deleteOne: async () => {
    throw  new Error("This function is not present in mock.");
  },

  getApiUrl: () => ''
}
