import { IStudent } from './IStudent';

export interface IStudentRepository extends IStudent {
    getStudents(page: Number, limit: Number, filter: String): Array<IStudent>;
}