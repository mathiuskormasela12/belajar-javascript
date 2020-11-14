export default class UserAbstract
{
	constructor(username, password, role)
	{
		this.username = username;
		this.password = password;
		this.role = role;
		
		if (this.constructor === UserAbstract){
        throw new TypeError("Parent class is abstract - cant be instance");
    }

	}

	getUsername()
	{
		alert(`Username anda adalah ${this.username}`);
	}

	getRole()
	{
		alert(`Password anda adalah ${this.password}`);
	}
}