export const useCheckbox = () => {
    const checkbox = () => {
        const checkbox = document.getElementById("checkbox");
        const password = document.getElementById("password");
        if (checkbox.checked){
            password.type = "text";
        }
        else{
            password.type = "password";
        }
    }

    return{
        checkbox
    };
}