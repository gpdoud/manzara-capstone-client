import { Requestline } from "../requestline/requestline.class";
import { User } from "../user/user.class";

export class Request {
    constructor(
        public id: number = 0,
        public description: string = '',
        public justification: string = '',
        public rejectionReason: string | null = null,
        public deliveryMode: string = '',
        public status: string = 'NEW',
        public total: number = 0,
        public userId: number = 3,
        public user: User | null = null,
        public requestlines: Requestline[] = []
    ) {}
}
