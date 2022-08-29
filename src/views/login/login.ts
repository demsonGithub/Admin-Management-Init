interface ILoginData {
    username: string;
    password: string;
}

export class LoginData implements ILoginData {
    username: string;
    password: string;

    constructor() {
        this.username = '';
        this.password = '';
    }
}

export const rules = {
    username: [{ required: true, message: '请输入账号', trigger: 'change' }],
    password: [{ required: true, message: '请输入密码', trigger: 'change' }]
};
