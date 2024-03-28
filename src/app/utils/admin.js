export async function getAllUsers () {
    try {
        const response = await fetch('http://localhost:8080/cabzen/getAllUsers', {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function updateUser(userData) {

    try{

        if (!userData.userName){
            throw new Error('Username is required');
            alert('Username is required')
        }

        const response = await fetch('http://localhost:8080/cabzen/updateUser',{
            mode:"cors",
            method: 'POST',
            credentials:"include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })

        if (!response.ok){
            throw new Error('Failed to update user');
        }

        return await response.json();

    }catch (err){
        console.error('Error updating user:', err);
        throw err;
    }
}

