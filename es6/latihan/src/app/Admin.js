import UserAbstract from './UserAbstract';

export class Admin extends UserAbstract
{
	setUsername(username)
	{
		this.username = username;
	}

	setPassword(pw)
	{
		this.password = pw;
	}
}