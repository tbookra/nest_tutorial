import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private fakeUsers = [{ username: 'tomer', surname: 'becker' },{ username: 'dina', surname: 'becker' }]
    fetchUsers(){
        return this.fakeUsers
}
}