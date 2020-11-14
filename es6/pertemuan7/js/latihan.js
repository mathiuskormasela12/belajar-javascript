class User
{
	constructor()
	{
		if(this.constructor.name.endsWith('Abstract'))
		{
			throw new Error('Cannot Intance Abstract Class');
			alert('hello')
		}
	}
}

let user = new User();