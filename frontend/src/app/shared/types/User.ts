export interface User {
    id: string;
    email: string;
    username: string;
    profileImg: string;
    firstName: string;
    lastName: string;
    
    age?: number;
    bio?: string;
    gender?: string;
    birthDate?: string;
    education?: string;
    interests: string[];

    city: string;
    state: string;
    address: string;
    occupation?: string;
    phoneNumber?: string;
    languages?: string[];
    genderOfInterest: string;
    usersLiked: User[]
    usersDisliked: User[]
}

export const defaultUser: User = {
    id: "",
    email: "",
    username: "",
    lastName: "",
    interests: [],
    birthDate: "01/01/1900",
    firstName: "",
    profileImg: "",
    occupation: "",
    age: 18, bio: "",
    
    city: "UNKNOWN",
    state: "UNKNOWN",
    address: "UNKNOWN",
    gender: "MALE",
    genderOfInterest: "FEMALE",
    education: "ensinoFundamental",
    usersLiked: [],
    usersDisliked: [],

}
