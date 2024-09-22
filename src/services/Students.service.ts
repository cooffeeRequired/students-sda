import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";


export class StudentsService {
    async getStudents(): Promise<User[]> {
        const response = await axios.get(url);
        const data: User[]|any[] = response.data;
        return data as User[];

    }
    getStudent = async (id): Promise<User> => {
        const response = await axios.get(url);
        const data: User|any = response.data;
        if (! isUser(data)) {
            throw new Error(`${id} not found`);
        } else {
            return data as User;
        }
    };
}

