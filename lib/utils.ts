

export const validateString = (value: unknown, maxLength: number) => {
    //Check if message is NULL or is not a string value.
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }
    return true;
}

export const getErrorMsg = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
        //If error exists, there is a type of object 
    } else if (error && typeof error === 'object' && 'message' in error) {
        //Cast int -> string
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Unknown Error (Something went wrong).";
    }

    return message;
}
