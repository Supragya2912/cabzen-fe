export async function registerUser(userData) {
    try {

        console.log(userData);
        const response = await fetch('http://localhost:8080/cabzen/registerUser', {
            // mode:"cors",
            method: 'POST',
            credentials:"include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        console.log(response);

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

export async function loginUser(userData) {

    try {

        const response = await fetch('http://localhost:8080/cabzen/login', {
             mode:"cors",
            method: 'POST',
            credentials:"include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        return await response.json();
       
    
    }catch (err) {
        console.error('Error logging in user:', err);
        throw err;
    }
}




