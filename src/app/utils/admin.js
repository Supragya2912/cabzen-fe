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