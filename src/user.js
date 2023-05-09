async function load(page=1){
    try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const result_1 = await response.json();
        return result_1;
    } catch (error) {
        console.log(error);
    }
}

export default load;