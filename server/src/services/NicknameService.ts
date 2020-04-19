import Nickname from '../interfaces/Nickname';

class NicknameService {

    private nicknames: Nickname[];

    public constructor() {
        this.nicknames = [];
    }

    public addNickname(nickname: Nickname): void {
        this.nicknames.push(nickname);
    }

    public getNicknames(): Nickname[] {
        return this.nicknames;
    }

    public getNickname(nickname: Nickname): Nickname {
        return this.nicknames.find(nick => nick === nickname);
    }

    public removeNickname(nickname: Nickname): void {
        this.nicknames = this.nicknames.filter(nick => nick !== nickname);
    }

}

export default NicknameService;
